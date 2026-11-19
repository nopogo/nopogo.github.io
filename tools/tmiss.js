// usage: node tmiss.js http://localhost:8123 page1.html page2.html ...  -> prints English strings with no Dutch entry
const { chromium } = require('playwright');
(async () => {
  const [base, ...pages] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  for (const pg of pages) {
    await p.goto(base + '/' + pg + '?lang=nl', { waitUntil: 'networkidle' });
    const miss = await p.evaluate(() => {
      const tpl = document.getElementById('page-tpl'); const out = new Set();
      const w = document.createTreeWalker(tpl.content, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT); let n;
      // the template is translated in place on mount? use a fresh clone of the raw html instead
      return null;
    });
    // read raw template from file text instead
    const html = await (await p.context().request.get(base + '/' + pg)).text();
    const res = await p.evaluate((html) => {
      const d = new DOMParser().parseFromString(html, 'text/html'); const tpl = d.getElementById('page-tpl');
      const out = [];
      const w = d.createTreeWalker(tpl.content, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT); let n;
      const has = (k) => window.I18N.t(k) !== k;
      while ((n = w.nextNode())) {
        if (n.nodeType === 3) { const c = n.data.trim(); if (c && /[A-Za-z]{2}/.test(c) && c.indexOf('{{') < 0 && !has(c)) out.push(c); }
        else for (const a of ['aria-label', 'alt', 'placeholder', 'title']) { const v = n.getAttribute(a); if (v && v.indexOf('{{') < 0 && /[A-Za-z]{2}/.test(v) && window.I18N.t(v) === v && !(('@' + v) in {}) ) { out.push('@' + v); } }
      }
      return out;
    }, html);
    // filter attribute keys that do have '@' entries
    const res2 = await p.evaluate((list) => list.filter((k) => { if (k[0] !== '@') return true; return document.documentElement.lang === 'nl' && window.I18N.t(k) === k && window.I18N.t(k.slice(1)) === k.slice(1); }), res);
    console.log('== ' + pg); [...new Set(res2)].forEach((x) => console.log('  ' + x));
  }
  await b.close();
})();
