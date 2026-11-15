/*
 * dc-lite: a tiny runtime that renders the BRAVR page template.
 *
 * The page markup lives in <template id="page-tpl"> inside index.html.
 * It uses {{name}} holes, <sc-if value="{{x}}"> and <sc-for list="{{xs}}" as="x">,
 * plus onClick / onChange / ref etc. attributes whose values come from
 * Component.renderVals() in page.js. No framework, no build step.
 */
(function () {
  'use strict';

  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var ONE = /^\{\{\s*([^}]+?)\s*\}\}$/;
  var EVENTS = {
    onclick: 'click', onchange: 'change', onmouseenter: 'mouseenter', onmouseleave: 'mouseleave',
    onmousemove: 'mousemove', onfocus: 'focus', onsubmit: 'submit', onended: 'ended', oninput: 'input'
  };
  var BOOL = { disabled: 1, checked: 1 };

  function lookup(expr, scope) {
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
    var parts = expr.split('.');
    var v;
    for (var s = scope; s; s = s.parent) {
      if (Object.prototype.hasOwnProperty.call(s.vars, parts[0])) { v = s.vars[parts[0]]; break; }
    }
    for (var i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, e) { var v = lookup(e, scope); return v == null ? '' : String(v); });
  }
  function pathOf(node, root) {
    var p = [];
    while (node !== root) { var i = 0, n = node; while ((n = n.previousSibling)) i++; p.unshift(i); node = node.parentNode; }
    return p;
  }
  function walk(root, path) { var n = root; for (var i = 0; i < path.length; i++) n = n.childNodes[path[i]]; return n; }

  // Compile a fragment into a reusable block: a static clone source plus a list of bindings.
  function compile(frag) {
    var binds = [];
    function visit(node) {
      var kids = Array.prototype.slice.call(node.childNodes);
      for (var k = 0; k < kids.length; k++) {
        var n = kids[k];
        if (n.nodeType === 3) {
          if (n.data.indexOf('{{') >= 0) binds.push({ node: n, kind: 'text', src: n.data });
          continue;
        }
        if (n.nodeType !== 1) continue;
        var tag = n.tagName.toLowerCase();
        if (tag === 'sc-if' || tag === 'sc-for') {
          var sub = document.createDocumentFragment();
          while (n.firstChild) sub.appendChild(n.firstChild);
          var anchor = document.createComment(tag);
          var b = { node: anchor, kind: tag === 'sc-if' ? 'if' : 'for', block: compile(sub) };
          if (tag === 'sc-if') b.expr = (n.getAttribute('value') || '').match(ONE)[1];
          else { b.expr = (n.getAttribute('list') || '').match(ONE)[1]; b.as = n.getAttribute('as') || 'item'; }
          n.parentNode.replaceChild(anchor, n);
          binds.push(b);
          continue;
        }
        var attrs = Array.prototype.slice.call(n.attributes);
        for (var a = 0; a < attrs.length; a++) {
          var name = attrs[a].name, val = attrs[a].value;
          if (name.indexOf('hint-') === 0) { n.removeAttribute(name); continue; }
          if (val.indexOf('{{') < 0) continue;
          n.removeAttribute(name);
          var m = val.match(ONE);
          if (EVENTS[name]) binds.push({ node: n, kind: 'event', name: name, expr: m[1] });
          else if (name === 'ref') binds.push({ node: n, kind: 'ref', expr: m[1] });
          else if (m) binds.push({ node: n, kind: 'attr', name: name, expr: m[1] });
          else binds.push({ node: n, kind: 'mixed', name: name, src: val });
        }
        visit(n);
      }
    }
    visit(frag);
    binds.forEach(function (b) { b.path = pathOf(b.node, frag); delete b.node; });
    return { frag: frag, binds: binds };
  }

  function eventName(el, name) {
    if (name !== 'onchange') return EVENTS[name];
    var t = (el.getAttribute('type') || '').toLowerCase();
    if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && !/^(checkbox|radio|file)$/.test(t))) return 'input';
    return 'change';
  }

  // Create a live instance of a block. Returns { nodes, update(scope), destroy() }.
  function instantiate(block) {
    var root = block.frag.cloneNode(true);
    var targets = block.binds.map(function (b) { return walk(root, b.path); });
    var start = document.createComment('['), end = document.createComment(']');
    root.insertBefore(start, root.firstChild); root.appendChild(end);
    var nodes = Array.prototype.slice.call(root.childNodes);
    var scope = null;
    var updaters = block.binds.map(function (b, i) {
      var el = targets[i];
      switch (b.kind) {
        case 'text': return function () { var v = interp(b.src, scope); if (el.data !== v) el.data = v; };
        case 'mixed': return function () { el.setAttribute(b.name, interp(b.src, scope)); };
        case 'event':
          el.addEventListener(eventName(el, b.name), function (e) {
            var fn = lookup(b.expr, scope);
            if (typeof fn === 'function') fn(e);
          });
          return function () {};
        case 'ref':
          var last;
          return function () { var fn = lookup(b.expr, scope); if (typeof fn === 'function' && fn !== last) { last = fn; fn(el); } };
        case 'attr':
          return function () {
            var v = lookup(b.expr, scope);
            if (b.name === 'style') { var s = v == null ? '' : String(v); if (el.__css !== s) { el.__css = s; el.style.cssText = s; } }
            else if (BOOL[b.name]) { var on = v === true || v === 'true'; if (el[b.name] !== on) el[b.name] = on; }
            else if (b.name === 'value' && 'value' in el) { var sv = v == null ? '' : String(v); if (el.value !== sv) el.value = sv; }
            else if (v == null || v === false) el.removeAttribute(b.name);
            else el.setAttribute(b.name, String(v));
          };
        case 'if':
          var inst = null;
          return function () {
            var on = !!lookup(b.expr, scope);
            if (on && !inst) {
              inst = instantiate(b.block);
              var f = document.createDocumentFragment(); inst.nodes.forEach(function (x) { f.appendChild(x); });
              el.parentNode.insertBefore(f, el);
            } else if (!on && inst) { inst.destroy(); inst = null; }
            if (inst) inst.update(scope);
          };
        case 'for':
          var items = [];
          return function () {
            var list = lookup(b.expr, scope) || [];
            while (items.length > list.length) items.pop().destroy();
            for (var j = 0; j < list.length; j++) {
              if (!items[j]) {
                var it = instantiate(b.block);
                var f2 = document.createDocumentFragment(); it.nodes.forEach(function (x) { f2.appendChild(x); });
                el.parentNode.insertBefore(f2, el);
                items[j] = it;
              }
              var vars = {}; vars[b.as] = list[j];
              items[j].update({ vars: vars, parent: scope });
            }
          };
      }
    });
    return {
      nodes: nodes,
      update: function (s) { scope = s; for (var i = 0; i < updaters.length; i++) updaters[i](); },
      destroy: function () {
        var n = start, p = start.parentNode;
        while (n) { var nx = n.nextSibling; p.removeChild(n); if (n === end) break; n = nx; }
      }
    };
  }

  // Minimal component base: props, state, setState (merges now, renders on the next microtask).
  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var self = this;
    if (typeof patch === 'function') patch = patch(this.state, this.props);
    this.state = Object.assign({}, this.state, patch);
    if (!this.__queued && this.__render) {
      this.__queued = true;
      Promise.resolve().then(function () { self.__queued = false; self.__render(); });
    }
  };

  // mount(templateEl, ComponentClass, props, container, translate?)
  function mount(tpl, Klass, props, container, translate) {
    var frag = tpl.content.cloneNode(true);
    if (translate) translate(frag);
    var block = compile(frag);
    var comp = new Klass(props);
    var inst = instantiate(block);
    comp.__render = function () { inst.update({ vars: comp.renderVals(), parent: null }); };
    comp.__render();
    inst.nodes.forEach(function (n) { container.appendChild(n); });
    if (comp.componentDidMount) comp.componentDidMount();
    return comp;
  }

  window.DCLogic = DCLogic;
  window.DCLite = { mount: mount };
})();
