/*
 * BRAVR pilot page logic (Option B, Deep Focus). Ported from the design canvas.
 * renderVals() returns every {{hole}} used in the template in index.html.
 * Text shown to visitors goes through T() so it can be shown in Dutch (see i18n.js).
 */
(function () {
'use strict';
const T = (s) => window.I18N.t(s);
const NLX = window.I18N.lang === 'nl';
class Component extends DCLogic {
componentDidMount() {
const back = window.BRAVR_BOOKING && window.BRAVR_BOOKING.restore();
{ const q = new URLSearchParams(location.search); const mc = (q.get('code') || '').trim(), cc = (q.get('ccode') || q.get('promo') || '').trim(); if (mc || cc) this.setState({ f: Object.assign({}, this.state.f || {}, mc ? { code: mc } : { ccode: cc }) }); }
this._loadTaken = () => { if (document.hidden || this._sending) return; window.BRAVR_BOOKING.taken().then((t) => { if (t) this.setState({ taken: t }); }); };
this._loadTaken(); this._takenTimer = setInterval(this._loadTaken, 60000);
if (back) { this.setState(back); setTimeout(() => { const el = document.getElementById('book'); if (el) el.scrollIntoView(); }, 60); }
this._onPin = () => { if (this._canvasMode) return; const on = (window.scrollY || 0) > 140; if (on !== !!(this.state && this.state.pinCta)) this.setState({ pinCta: on }); };
window.addEventListener('scroll', this._onPin, { passive: true });
this._pgVis = [];
this._pio = new IntersectionObserver((entries) => {
for (const en of entries) { const i = (this._pgs || []).indexOf(en.target); if (i >= 0) this._pgVis[i] = en.isIntersecting; }
const canvas = (window.innerHeight || 0) > 1600;
this._canvasMode = true;
let first = -1; for (let i = 0; i < 300; i++) { if (this._pgVis[i]) { first = i; break; } }
if (first < 0) return;
const top = Math.round(first * (document.documentElement.scrollHeight / 300));
const on = first > 0 && top > 140; const c = this.state || {};
if (!canvas) { if (on !== !!c.pinCta || c.canvasTop != null) this.setState({ pinCta: on, canvasTop: null }); return; }
const hdr = document.querySelector('header'); const adj = top - (hdr ? hdr.offsetTop : 0);
if (on !== !!c.pinCta || (on && adj !== c.canvasTop)) this.setState({ pinCta: on, canvasTop: on ? adj : null });
}, { threshold: [0] });
(this._pgs || []).forEach((el) => { if (el) this._pio.observe(el); });
this._qEl = 0;
this._qTimer = setInterval(() => {
const c = this.state || {};
if (!c.quotesOn || document.hidden || (this.props.quotePreview ?? 0) > 0) return;
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
this._qEl += 500;
if (this._qEl >= 7000) { this._qEl = 0; const i = c.qIdx || 0; this.setState({ qIdx: (i + 1) % 3, qLast: i }); }
}, 500);
this._hgEl = 0;
this._hgTimer = setInterval(() => {
if (this._hgHover && Date.now() - (this._hgHoverAt || 0) > 4000) { this._hgHover = false; if (this.state && this.state.heroPause) this.setState({ heroPause: false }); }
if (this._hgHover || document.hidden) return;
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
this._hgEl += 200;
if (this._hgEl >= 6000) { this._hgEl = 0; const c = this.state || {}; this.setState({ heroIdx: ((c.heroIdx || 0) + 1) % 5, heroN: (c.heroN || 0) + 1 }); }
}, 200);
if (typeof IntersectionObserver !== 'undefined') {
this._io = new IntersectionObserver((entries) => {
let cards = null;
for (const en of entries) {
const gi = (this._rvEls || []).indexOf(en.target);
if (gi >= 0) {
if (en.isIntersecting && en.intersectionRatio >= 0.15 && !(this.state && this.state.rv && this.state.rv[gi])) this.setState({ rv: Object.assign({}, (this.state && this.state.rv) || {}, { [gi]: true }) });
continue;
}
if (en.target === this.quotesEl) {
if (en.isIntersecting && en.intersectionRatio >= 0.15 && !this._quotesDone) { this._quotesDone = true; this.setState({ quotesOn: true }); }
continue;
}
if (en.target === this.hiwEl) {
if (en.isIntersecting && en.intersectionRatio >= 0.15 && !this._hiwDone) { this._hiwDone = true; this.setState({ hiwOn: true }); }
continue;
}
const i = [this.card0, this.card1, this.card2].indexOf(en.target);
if (i >= 0) {
if (!cards) cards = ((this.state && this.state.cardsIn) || [false, false, false]).slice();
cards[i] = en.isIntersecting && en.intersectionRatio >= 0.2;
}
}
if (cards) this.setState({ cardsIn: cards });
}, { threshold: [0, 0.15, 0.2, 0.4] });
[this.hiwEl, this.quotesEl, this.card0, this.card1, this.card2].concat(this._rvEls || []).forEach((el) => { if (el) this._io.observe(el); });
this._sentVis = this._sentVis || [];
this._sio = new IntersectionObserver((entries) => {
for (const en of entries) { const i = (this._sent || []).indexOf(en.target); if (i >= 0) this._sentVis[i] = en.isIntersecting; }
this.tickGraph();
}, { threshold: [0] });
(this._sent || []).forEach((el) => { if (el) this._sio.observe(el); });
this._qsentVis = this._qsentVis || [];
this._qio = new IntersectionObserver((entries) => {
for (const en of entries) { const i = (this._qsent || []).indexOf(en.target); if (i >= 0) this._qsentVis[i] = en.isIntersecting; }
this.tickQuotes();
}, { threshold: [0] });
(this._qsent || []).forEach((el) => { if (el) this._qio.observe(el); });
}
this._onGraphScroll = () => this.tickGraph();
window.addEventListener('scroll', this._onGraphScroll, { passive: true, capture: true });
window.addEventListener('resize', this._onGraphScroll);
this.tickGraph();
}
_openVideo() {
let box = null;
if ((window.innerHeight || 0) > 1600) {
// design canvas: the board itself does not scroll, so place the player over the part of the board on screen
let a = -1, b = -1; for (let i = 0; i < 300; i++) { if (this._pgVis[i]) { if (a < 0) a = i; b = i; } }
const holder = this._pgs && this._pgs[0] && this._pgs[0].parentNode;
if (a >= 0 && holder) { const H = holder.offsetHeight; box = { top: Math.round(a * H / 300), height: Math.max(360, Math.round((b - a + 1) * H / 300)) }; }
} else { this._bodyOv = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
this._onEsc = (e) => { if (e.key === 'Escape') this._closeVideo(); };
document.addEventListener('keydown', this._onEsc);
this.setState({ videoOpen: true, videoBox: box });
}
_closeVideo() {
if (this.video) { try { this.video.pause(); } catch (e) {} }
if (this._bodyOv !== undefined) { document.body.style.overflow = this._bodyOv; this._bodyOv = undefined; }
if (this._onEsc) { document.removeEventListener('keydown', this._onEsc); this._onEsc = null; }
this.setState({ videoOpen: false });
}
componentWillUnmount() {
this._closeVideo && this._onEsc && document.removeEventListener('keydown', this._onEsc);
window.removeEventListener('scroll', this._onPin);
if (this._pio) this._pio.disconnect();
clearInterval(this._qTimer);
clearInterval(this._hgTimer);
if (this._io) this._io.disconnect();
if (this._sio) this._sio.disconnect();
if (this._qio) this._qio.disconnect();
window.removeEventListener('scroll', this._onGraphScroll, { capture: true });
window.removeEventListener('resize', this._onGraphScroll);
if (this._graphRaf) cancelAnimationFrame(this._graphRaf);
}
tickSteps() {
if (this._io || this._hiwDone || !this.hiwEl) return;
const r = this.hiwEl.getBoundingClientRect();
const vh = window.innerHeight || 800;
if (r.top < vh * 0.72 && r.bottom > 0) { this._hiwDone = true; this.setState({ hiwOn: true }); }
}
pinState(wrap, stick, vis, n, key, top) {
let r = wrap.getBoundingClientRect();
const vh = window.innerHeight || 800;
const span = Math.max(1, r.height - stick.offsetHeight);
let shift = 0;
if (vh > 1600 && vis) {
let first = -1;
for (let i = 0; i < n; i++) { if (vis[i]) { first = i; break; } }
const step = r.height / n;
let T;
if (first > 0) { T = -first * step; this[key] = T; }
else if (first === 0) { T = 100; this[key] = T; }
else { T = (this[key] || 2000) < -span / 2 ? -r.height : 2000; }
const fr = stick.getBoundingClientRect();
const cur = this[key + 'Shift'] || 0;
const natural = (fr.top - r.top) - cur;
shift = Math.max(0, Math.round(Math.min(span, Math.max(0, top - T)) - natural));
r = { top: T, bottom: T + r.height, height: r.height };
}
return { p: Math.min(1, Math.max(0, (top - r.top) / span)), shift: shift };
}
qGo(i) {
this._qEl = 0;
const c = this.state || {};
if (i === (c.qIdx || 0)) return;
this.setState({ qIdx: i, qLast: c.qIdx || 0 });
}
tickQuotes() {
if (!this.qWrap || !this.qStick) return;
const st = this.pinState(this.qWrap, this.qStick, this._qsentVis, 60, '_qT', 48);
const idx = st.p < 0.34 ? 0 : (st.p < 0.67 ? 1 : 2);
const cur = this.state || {};
if (idx !== (cur.qIdx || 0) || st.shift !== (this._qTShift || 0)) { this._qTShift = st.shift; this.setState({ qIdx: idx, qShift: st.shift }); }
}
tickCards() {
this.tickSteps();
if (this._io) return;
const vh = window.innerHeight || 800;
const cur = (this.state && this.state.cardsIn) || [false, false, false];
const next = [0, 1, 2].map((i) => {
const el = this['card' + i];
if (!el) return cur[i];
const r = el.getBoundingClientRect();
return r.top < vh * 0.8 && r.bottom > vh * 0.15;
});
if (next.some((v, i) => v !== cur[i])) this.setState({ cardsIn: next });
}
tickGraph() {
this.tickCards();
this.tickQuotes();
const wrap = this.graphWrap, stick = this.graphStick;
if (!wrap || !stick) return;
const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const final = !!this.props.graphFinal || reduce;
let r = wrap.getBoundingClientRect();
const vh = window.innerHeight || 800;
const span = Math.max(1, r.height - stick.offsetHeight);
const hostScrolled = !!this._sio && vh > 1600;
let shift = 0;
if (hostScrolled) {
const vis = this._sentVis || [];
let first = -1;
for (let i = 0; i < 120; i++) { if (vis[i]) { first = i; break; } }
const step = r.height / 120;
let T;
if (first > 0) { T = -first * step; this._lastT = T; }
else if (first === 0) { T = 100; this._lastT = T; }
else { T = (this._lastT || 2000) < -span / 2 ? -r.height : 2000; }
const fr = stick.getBoundingClientRect();
const natural = (fr.top - r.top) - (this._shift || 0);
const desired = final ? 0 : Math.min(span, Math.max(0, 32 - T));
shift = Math.max(0, Math.round(desired - natural));
r = { top: T, bottom: T + r.height, height: r.height };
}
const p = final ? 1 : Math.min(1, Math.max(0, (32 - r.top) / span));
if (shift !== (this._shift || 0)) { this._shift = shift; this.setState({ graphShift: shift }); }
if (final && !this._counted) { this._counted = true; this.countUp(true); }
const stage = final ? 2 : (p < 0.25 ? 0 : (p < 0.5 ? 1 : 2));
if (stage !== ((this.state && this.state.graphStage) || 0)) this.setState({ graphStage: stage });
const reveal = p >= 0.7;
const pinned = final || r.top <= 33;
if (pinned !== !!(this.state && this.state.graphPinned)) {
this.setState({ graphPinned: pinned });
if (!final) {
if (pinned) this.countUp(false);
else { if (this._graphRaf) cancelAnimationFrame(this._graphRaf); this.setState({ graphScore: 1 }); }
}
}
if (reveal !== !!(this.state && this.state.graphReveal)) this.setState({ graphReveal: reveal });
}
countUp(instant) {
const target = this.props.scoreTarget ?? 65;
if (instant) { this.setState({ graphScore: target }); return; }
if (this._graphRaf) cancelAnimationFrame(this._graphRaf);
const t0 = performance.now(), dur = 700;
const bz = (a, b, t) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t;
const ease = (x) => { let lo = 0, hi = 1, t = x; for (let i = 0; i < 20; i++) { t = (lo + hi) / 2; if (bz(0.2, 0.2, t) < x) lo = t; else hi = t; } return bz(0.8, 1, t); };
const step = (now) => {
const k = Math.min(1, (now - t0) / dur);
const e = (1 / (1 + 4 * (1 - ease(k))) - 0.2) / 0.8; // follow the Ready bar's actual width (other four grades shrink to 0)
this.setState({ graphScore: Math.max(1, Math.round(1 + (target - 1) * e)) });
if (k < 1) this._graphRaf = requestAnimationFrame(step);
};
this._graphRaf = requestAnimationFrame(step);
}
renderVals() {
const S = this.state || {};
const playing = !!S.playing;
const len = S.len || 'double';
const pattern = S.pattern || 'same';
const startIx = S.start || 0;
const week = S.week || 1;
const preview = this.props.previewCheckout ?? true;
const same = S.same || (preview && (S.pattern || 'same') === 'same' ? 'Wed 18:15' : null);
const picks = S.picks || {};
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayLong = { Mon: T('Mondays'), Tue: T('Tuesdays'), Wed: T('Wednesdays'), Thu: T('Thursdays'), Fri: T('Fridays'), Sat: T('Saturdays') };
const DS = (d) => T(d);
const times = ['07:30', '08:15', '12:30', '13:15', '17:30', '18:15', '19:00'];
const months = [T('Jan'), T('Feb'), T('Mar')];
const starts = [{ label: 'Week of 18 Jan', y: 2027, m: 0, d: 18 }];
const baseFull = {};
const extraFull = {};
const st = starts[startIx];
const dateFor = (w, i) => new Date(st.y, st.m, st.d + (w - 1) * 7 + i);
const fmt = (dt) => dt.getDate() + ' ' + months[dt.getMonth()];
const isClosed = (day, t) => day === 'Sat' && t >= '17:30';
const takenMap = S.taken || {}; const mineMap = {}; (S.mine || []).forEach((k) => { mineMap[k] = 1; });
const fullIn = (key, w) => !!baseFull[key] || extraFull[w] === key || (!!takenMap[w + ':' + key] && !mineMap[w + ':' + key]);
const isSame = pattern === 'same';
const isDouble = len === 'double';
const blocks = [['07:30', '08:15'], ['12:30', '13:15'], ['17:30', '18:15', '19:00']];
const blockOf = (t) => blocks.find((b) => b.includes(t)) || [t];
const wksFor = (w) => (isSame ? [1, 2, 3, 4] : [w]);
const slotOk = (d, t, wks) => !isClosed(d, t) && !wks.some((w) => fullIn(d + ' ' + t, w));
// a double takes two neighbouring slots in the same block: the clicked slot and the next one, or the one before when there is no next
const pairFor = (d, t, wks) => {
const b = blockOf(t); const i = b.indexOf(t);
const cands = [];
if (i < b.length - 1) cands.push([t, b[i + 1]]);
if (i > 0) cands.push([b[i - 1], t]);
return cands.find((c) => c.every((x) => slotOk(d, x, wks))) || null;
};
const normSel = (key, w) => {
if (!key) return null;
const [d, t] = key.split(' ');
if (!isDouble) return slotOk(d, t, wksFor(w)) ? { d, ts: [t] } : null;
const pr = pairFor(d, t, wksFor(w));
return pr ? { d, ts: pr } : null;
};
const selFor = (w) => normSel(isSame ? same : picks[w], w);
const tLabel = (sl) => sl.ts.join(' & ');
const pill = (on) => 'flex: 1 1 auto; text-align: center; border: 0; border-radius: 999px; padding: 10px 18px; min-height: 40px; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; ' + (on ? 'background: #04C1E2; color: #03111E;' : 'background: transparent; color: #F6FBFF;');
const set = (o) => this.setState(o);

const lengthOpts = [['single', T('Single · 30 min')], ['double', T('Double · 60 min')]].map(([v, l]) => ({ label: l, pressed: len === v, style: pill(len === v), pick: () => set({ len: v }) }));
const patternOpts = [['same', T('Same slot each week')], ['each', T('Pick each week')]].map(([v, l]) => ({ label: l, pressed: pattern === v, style: pill(pattern === v), pick: () => set({ pattern: v, week: 1 }) }));

const weekTabs = [1, 2, 3, 4].map((w) => {
const on = week === w;
return {
label: T('Week') + ' ' + w, short: T('Wk') + ' ' + w, pressed: on, pick: () => set({ week: w }),
style: 'display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 8px 14px; border-radius: 10px; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; background: transparent; ' + (on ? 'border: 1px solid #F6FBFF; color: #F6FBFF;' : 'border: 1px solid #23415E; color: #C9D6E2;'),
dot: 'width: 6px; height: 6px; border-radius: 999px; background: ' + (selFor(w) ? '#04C1E2' : 'transparent')
};
});

const headers = isSame ? days.map(DS) : days.map((d, i) => DS(d) + ' ' + dateFor(week, i).getDate());
const cellBase = 'width: 100%; min-width: 0; min-height: 44px; padding: 4px 6px; border-radius: 10px; font: inherit; font-size: 15px; font-weight: 600; line-height: 1.2; box-sizing: border-box; overflow: hidden; text-overflow: ellipsis; overflow-wrap: normal; ';
const curSel = selFor(week);
const rows = times.map((t) => ({
time: t, divider: t === '12:30' || t === '17:30',
cells: days.map((d) => {
const key = d + ' ' + t;
const closed = isClosed(d, t);
const full = !closed && (isSame ? [1, 2, 3, 4].some((w) => fullIn(key, w)) : fullIn(key, week));
const noPair = !closed && !full && isDouble && !pairFor(d, t, wksFor(week));
const selected = !closed && !full && !!curSel && curSel.d === d && curSel.ts.includes(t);
let style = cellBase;
if (closed) style += 'background: transparent; border: 1px dashed #23415E; color: #6B7C8C; cursor: default;';
else if (full) style += 'background: transparent; border: 1px dashed #23415E; color: #6B7C8C; text-decoration: line-through; cursor: not-allowed;';
else if (noPair) style += 'background: transparent; border: 1px dashed #23415E; color: #6B7C8C; cursor: not-allowed;';
else if (selected) style += 'background: #04C1E2; border: 1px solid #04C1E2; color: #03111E; cursor: pointer;';
else style += 'background: #0F2638; border: 1px solid #23415E; color: #F6FBFF; cursor: pointer;';
const label = closed ? '—' : full ? T('Full') : noPair ? T('Single only') : selected ? T('Selected') : T('Open');
return {
label, style, selected, disabled: closed || full || noPair,
aria: (isSame ? dayLong[d] : DS(d) + ' ' + fmt(dateFor(week, days.indexOf(d)))) + ' ' + t + ', ' + (closed ? T('not available') : full ? T('full') : noPair ? T('no free slot next to it for a double') : selected ? T('selected') + (isDouble && curSel ? T(', together with ') + curSel.ts.filter((x) => x !== t)[0] : '') : T('open') + (isDouble ? T(', books two slots') : '')),
pick: () => {
if (closed || full || noPair) return;
if (isSame) { set({ same: key, clashErr: false }); return; }
const np = Object.assign({}, picks); np[week] = key;
let next = week;
for (let k = 1; k <= 4; k++) { const w = ((week - 1 + k) % 4) + 1; if (!np[w]) { next = w; break; } }
set({ picks: np, week: next, clashErr: false });
}
};
})
}));

const price = isDouble ? 200 : 100;
const chosen = [1, 2, 3, 4].filter((w) => selFor(w)).length;
const sameSel = isSame ? selFor(1) : null;
const complete = isSame ? !!sameSel : chosen === 4;
let slotText = T('No slot chosen yet.');
if (sameSel) { slotText = dayLong[sameSel.d] + T(' at ') + tLabel(sameSel) + ', ' + fmt(dateFor(1, days.indexOf(sameSel.d))) + T(' to ') + fmt(dateFor(4, days.indexOf(sameSel.d))); }
const picksList = [1, 2, 3, 4].map((w) => {
const k = selFor(w);
if (!k) return { week: T('Week') + ' ' + w, value: T('Not chosen'), style: 'color: #6B7C8C' };
return { week: T('Week') + ' ' + w, value: DS(k.d) + ' ' + fmt(dateFor(w, days.indexOf(k.d))) + ' · ' + tLabel(k), style: 'color: #F6FBFF; font-weight: 600' };
});
const left = 4 - chosen;
const ctaHint = isSame ? T('Choose a slot first') : (NLX ? 'Kies nog ' + left + ' ' + (left === 1 ? 'week' : 'weken') : 'Choose ' + left + ' more ' + (left === 1 ? 'week' : 'weeks'));

const F = S.f || {};
const setF = (k, v) => this.setState({ f: Object.assign({}, (this.state && this.state.f) || {}, { [k]: v }) });
const field = (k) => (e) => setF(k, e.target.value);
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F.email || '');
const missing = [];
if (!(F.name || '').trim()) missing.push(T('your name'));
if (!emailOk) missing.push(T('a valid email'));
if (!F.health) missing.push(T('the health check'));
if (!F.meds) missing.push(T('the medication question'));
if (!F.consent) missing.push(T('your consent'));
const pay = F.pay || 'ideal';
const payOpts = [['ideal', 'iDEAL'], ['card', T('Card')]].map(([v, l]) => ({ label: l, pressed: pay === v, style: pill(pay === v), pick: () => setF('pay', v) }));
const medOpts = [['no', T('No')], ['yes', T('Yes')], ['skip', T("I'd rather not say")]].map(([v, l]) => ({ label: l, pressed: F.meds === v, style: pill(F.meds === v), pick: () => setF('meds', v) }));
const confirmed = !!S.confirmed;
const bookingLines = [{ label: T('Session'), value: isDouble ? T('Double · 60 min × 4') : T('Single · 30 min × 4') }].concat(
isSame ? [{ label: isDouble ? T('Weekly slots') : T('Weekly slot'), value: sameSel ? slotText : T('Not chosen') }] : picksList.map((p) => ({ label: p.week, value: p.value })));
const myKeys = []; [1, 2, 3, 4].forEach((w) => { const k = selFor(w); if (k) k.ts.forEach((t) => myKeys.push(w + ':' + k.d + ' ' + t)); });
let firstText = '';
{ const f1 = selFor(1); if (f1) firstText = DS(f1.d) + ' ' + fmt(dateFor(1, days.indexOf(f1.d))) + T(' at ') + f1.ts[0]; }
const submitBooking = (e) => {
if (e && e.preventDefault) e.preventDefault();
if (this._sending) return;
if (missing.length) { this.setState({ tried: true, sendErr: false }); return; }
const B = window.BRAVR_BOOKING;
const ref = B.newRef();
const code = (F.code || '').trim(), ccode = (F.ccode || '').trim();
const slotSummary = bookingLines.map((b) => b.label + ': ' + b.value).join(' | ');
const payload = {
signupId: ref, name: (F.name || '').trim(), email: (F.email || '').trim(), phone: (F.phone || '').trim(), train: (F.train || '').trim(),
codeType: code ? 'member' : ccode ? 'community' : '', discountCode: code || ccode, memberCode: code, communityCode: ccode,
health: F.health ? 'none apply' : '', meds: F.meds || '', consent: F.consent ? 'yes' : '', payMethod: pay,
length: len, pattern, slots: slotSummary, firstSession: firstText, startWeek: st.label,
price: '€' + price, deposit: '€25', dueAtFirstSession: '€' + (price - 25), website: F.website || ''
};
payload.slotKeys = myKeys.join(', ');
payload.slotPlain = isSame ? sameSel.d + ' ' + sameSel.ts.join('+') + ' weekly' : [1, 2, 3, 4].map((w) => { const k = selFor(w); return 'W' + w + ' ' + k.d + ' ' + k.ts.join('+'); }).join(' | ');
const ui = { len, pattern, same: S.same || null, picks, week, f: Object.assign({}, F, { website: '' }), ref, confirmed: true, mine: myKeys };
this._sending = true;
this.setState({ sending: true, sendErr: false, tried: false, clashErr: false });
// last look at the sheet: has someone taken one of these slots in the meantime?
B.taken().then((t) => {
if (t && myKeys.some((k) => t[k])) { this._sending = false; this.setState({ sending: false, taken: t, clashErr: true }); return null; }
return B.submit(payload, ui);
}).then((res) => {
if (!res) return;
if (res.redirect) { window.location.href = res.redirect; return; }
this._sending = false;
this.setState({ sending: false, confirmed: true, ref, mine: myKeys });
}).catch(() => { this._sending = false; this.setState({ sending: false, sendErr: true }); });
};
const gPinned = !!this.props.graphFinal || !!S.graphPinned;
const gradeT = 'transition: flex-grow 700ms cubic-bezier(.2,.8,.2,1), padding 700ms cubic-bezier(.2,.8,.2,1), opacity 400ms ease; min-width: 0; overflow: hidden; display: flex; flex-direction: column; gap: 10px; flex-shrink: 1; flex-basis: 0;';
const gradeStyle = (i) => {
const ready = i === 3, last = i === 4;
if (gPinned) return gradeT + (ready ? ' flex-grow: 1; opacity: 1; padding-right: 0;' : ' flex-grow: 0; opacity: 0; padding-right: 0;');
return gradeT + ' flex-grow: 1; opacity: 1; padding-right: ' + (last ? '0' : '6px') + ';';
};
const hiwReduce = !!(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const hiwOn = !!this.props.stepsRevealed || hiwReduce || !!S.hiwOn;
const hiwInstant = !!this.props.stepsRevealed || hiwReduce;
const easeOut = 'cubic-bezier(.2,.8,.2,1)';
const rise = (delay, dy) => hiwInstant ? 'opacity: 1; transform: none;' :
'transition: opacity 600ms ' + easeOut + ' ' + delay + 'ms, transform 750ms ' + easeOut + ' ' + delay + 'ms; ' + (hiwOn ? 'opacity: 1; transform: none;' : 'opacity: 0; transform: translateY(' + (dy || 24) + 'px);');
const qPrev = this.props.quotePreview ?? 0;
const qOn = qPrev > 0 || hiwReduce || !!S.quotesOn;
const qActive = qPrev > 0 ? qPrev - 1 : (S.qIdx || 0);
const quoteAnim = (i) => {
const t = (qPrev > 0 || hiwReduce) ? '' : 'transition: opacity 650ms cubic-bezier(.2,.8,.2,1), transform 750ms cubic-bezier(.2,.8,.2,1); ';
let pos;
if (qOn && i === qActive) pos = 'opacity: 1; transform: none;';
else if (qOn && i === S.qLast) pos = 'opacity: 0; transform: translateX(-60px); pointer-events: none; visibility: hidden; transition-property: opacity, transform, visibility;';
else pos = 'opacity: 0; transform: translateX(60px); pointer-events: none; visibility: hidden;';
return 'grid-area: 1 / 1; ' + t + pos;
};
const qBeat = (i) => "color: #F6FBFF; margin: 0; transform-origin: 50% 60%; " + (rvAll ? 'opacity: 0.55;' : 'transition: opacity 1200ms ease ' + (i * 600) + 'ms, transform 1500ms cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 600) + 'ms; ' + (rvSet[3] ? 'opacity: 0.55; transform: none;' : 'opacity: 0; transform: translateY(48px) scale(1.4);'));
const qPhotoPos = [[1.06, 0, 0], [1.14, -4, 2], [1.1, 3, -2]];
const qp = qPhotoPos[qOn ? qActive : 0];
const qStatic = qPrev > 0 || hiwReduce;
const qdot = (i) => 'width: ' + (i === qActive && qOn ? '28px' : '8px') + '; height: 8px; border-radius: 999px; transition: width 400ms ease, background 400ms ease; background: ' + (i === qActive && qOn ? '#04C1E2' : 'rgba(246, 251, 255, 0.25)');
const rvAll = !!this.props.textRevealed || hiwReduce;
const rvSet = S.rv || {};
const rv = (g, i, base) => (base || '') + (rvAll ? '' : 'transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 100) + 'ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 100) + 'ms; ' + (rvSet[g] ? 'opacity: 1; transform: none;' : 'opacity: 0; transform: translateY(40px);'));
const cardsAll = !!this.props.cardsRevealed;
const cardsIn = S.cardsIn || [false, false, false];
const cardAnim = (i, delay) => {
const on = cardsAll || !!cardsIn[i];
return 'transition: opacity 650ms cubic-bezier(.2,.8,.2,1) ' + delay + 'ms, transform 650ms cubic-bezier(.2,.8,.2,1) ' + delay + 'ms; ' + (on ? 'opacity: 1; transform: translateY(0);' : 'opacity: 0; transform: translateY(28px);');
};
const gReveal = !!this.props.graphFinal || !!S.graphReveal;
const gStage = this.props.graphFinal ? 2 : (S.graphStage || 0);
const ease = 'transition: opacity 600ms cubic-bezier(.2,.8,.2,1), transform 600ms cubic-bezier(.2,.8,.2,1);';
const tagBase = 'position: absolute; padding: 0.5cqw 1.1cqw; border-radius: 0.5cqw; font-family: \'Space Grotesk\', sans-serif; font-size: max(11px, 1.7cqw); line-height: 1.2; white-space: nowrap; ' + ease;
const shown = (dy) => gReveal ? 'opacity: 1; transform: translateY(0);' : 'opacity: 0; transform: translateY(' + dy + ');';
const boxBase = 'position: absolute; box-sizing: border-box; ' + ease + (gReveal ? ' opacity: 1;' : ' opacity: 0;');
const hsEase = 'cubic-bezier(0.16, 1, 0.3, 1)';
const hsV = {};
[0, 1, 2].forEach((i) => {
hsV['rvSt' + i] = rv(1, 3 + i);
const d = 500 + i * 450;
hsV['hsNum' + i] = 'position: relative; z-index: 1; width: 40px; height: 40px; border-radius: 999px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; font-weight: 600; ' + (hiwReduce ? '' : 'transition: background 400ms ease ' + d + 'ms, color 400ms ease ' + d + 'ms, border-color 400ms ease ' + d + 'ms, box-shadow 400ms ease ' + d + 'ms; ') + (hiwOn ? 'background: #04C1E2; color: #03111E; border: 1px solid #04C1E2; box-shadow: 0 0 0 6px rgba(4,193,226,.12);' : 'background: transparent; color: #04C1E2; border: 1px solid rgba(4,193,226,.45);');
hsV['hsSeg' + i] = 'position: absolute; inset: 0; background: #04C1E2; transform-origin: top; ' + (hiwReduce ? '' : 'transition: transform 600ms ' + hsEase + ' ' + (d + 250) + 'ms; ') + 'transform: scaleY(' + (hiwOn ? 1 : 0) + ');';
});
hsV.rvStage = rv(1, 4, 'flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; justify-content: center; ');
const hgN = S.heroN || 0, hgI = S.heroIdx || 0, hgPause = !!S.heroPause;
const hgReduce = hiwReduce;
const hgV = {};
[0, 1, 2, 3, 4].forEach((i) => {
const on = i === hgI;
hgV['hgPick' + i] = () => { this._hgEl = 0; if (i !== ((this.state && this.state.heroIdx) || 0)) this.setState({ heroIdx: i, heroN: ((this.state && this.state.heroN) || 0) + 1 }); };
hgV['hgSel' + i] = on ? 'true' : 'false';
hgV['hgHid' + i] = on ? 'false' : 'true';
hgV['hgImg' + i] = 'position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: ' + ['50% 30%', '0% 50%', '27% center', '50% 35%', '27% center'][i] + '; transition: opacity 2400ms cubic-bezier(.45,0,.55,1), transform ' + (on ? '8000ms cubic-bezier(.2,.6,.3,1)' : '2400ms cubic-bezier(.45,0,.55,1)') + '; ' + (on ? 'opacity: 1; transform: scale(1);' : 'opacity: 0; transform: scale(1.06);');
hgV['hgTxt' + i] = 'position: absolute; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; gap: 10px; transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ' + (on ? '450ms' : '0ms') + ', transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ' + (on ? '450ms' : '0ms') + '; ' + (on ? 'opacity: 1; transform: none;' : 'opacity: 0; transform: translateY(18px); pointer-events: none;');
hgV['hgTab' + i] = 'position: relative; overflow: hidden; flex: 1 1 auto; min-height: 44px; padding: 10px 14px; border-radius: 10px; cursor: pointer; font-family: \'Open Sans\', sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); transition: background 300ms ease, color 300ms ease, border-color 300ms ease; ' + (on ? 'background: rgba(246,251,255,0.14); color: #F6FBFF; border: 1px solid rgba(4,193,226,0.55);' : 'background: rgba(0,0,0,0.38); color: #A9BCCD; border: 1px solid rgba(246,251,255,0.12);');
hgV['hgProg' + i] = 'position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: #04C1E2; transform-origin: left center; ' + (on && !hgReduce ? 'animation: ' + (hgN % 2 ? 'hgProgB' : 'hgProgA') + ' ' + 6000 + 'ms linear both; animation-play-state: ' + (hgPause ? 'paused' : 'running') + ';' : 'transform: scaleX(' + (on ? 1 : 0) + ');');
});
hgV.hgVig = 'position: absolute; inset: 0; pointer-events: none; z-index: 1; background: radial-gradient(ellipse 70% 65% at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.9) 78%, #000 100%); opacity: 0; transform-origin: 50% 45%; ' + (hgN > 0 && !hgReduce ? 'animation: ' + (hgN % 2 ? 'hgVigB' : 'hgVigA') + ' 2800ms cubic-bezier(.45,0,.55,1) both;' : '');
hgV.hgMove = () => { this._hgHoverAt = Date.now(); if (!this._hgHover) { this._hgHover = true; if (!(this.state && this.state.heroPause)) this.setState({ heroPause: true }); } };
hgV.hgEnter = () => { this._hgHover = true; this._hgHoverAt = Date.now(); if (!(this.state && this.state.heroPause)) this.setState({ heroPause: true }); };
hgV.hgLeave = () => { this._hgHover = false; if (this.state && this.state.heroPause) this.setState({ heroPause: false }); };
hgV.rvGal = rv(0, 3, 'flex: 1 1 440px; min-width: 0; ');
const faqOpen = S.faqOpen || {};
const faqV = {};
for (let i = 0; i < 6; i++) {
const on = !!faqOpen[i];
faqV['faqExp' + i] = on ? 'true' : 'false';
faqV['faqToggle' + i] = () => { const cur = (this.state && this.state.faqOpen) || {}; this.setState({ faqOpen: Object.assign({}, cur, { [i]: !cur[i] }) }); };
faqV['faqIcon' + i] = 'flex: none; width: 32px; height: 32px; border-radius: 999px; display: flex; align-items: center; justify-content: center; transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), background 300ms ease, color 300ms ease, border-color 300ms ease; ' + (on ? 'transform: rotate(45deg); background: #04C1E2; color: #03111E; border: 1px solid #04C1E2;' : 'transform: none; background: transparent; color: #04C1E2; border: 1px solid rgba(4,193,226,0.45);');
faqV['faqBody' + i] = 'display: grid; grid-template-rows: ' + (on ? '1fr' : '0fr') + '; opacity: ' + (on ? 1 : 0) + '; transition: grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease ' + (on ? '100ms' : '0ms') + ';';
}
return {
...faqV,
...hgV,
...hsV,
graphScore: S.graphScore ?? (this.props.graphFinal ? (this.props.scoreTarget ?? 65) : 1),
scoreLineStyle: 'position: absolute; left: 0; width: 100%; height: 0; top: ' + ((806 - (S.graphScore ?? (this.props.graphFinal ? (this.props.scoreTarget ?? 65) : 1)) * 7.43) / 8.4).toFixed(3) + '%',
scrollHint: 'flex: none; display: flex; align-items: center; gap: 8px; transition: opacity 500ms ease; opacity: ' + (gStage < 2 ? 1 : 0) + ';',
calloutStyle: 'position: relative; display: flex; align-items: center; gap: 14px; margin-top: 6px; padding: 16px 22px; border-radius: 14px; background: #04C1E2; box-shadow: 0 10px 30px rgba(4, 193, 226, 0.28); ' + ease + ' ' + shown('12px'),
gradeStyle0: gradeStyle(0), gradeStyle1: gradeStyle(1), gradeStyle2: gradeStyle(2), gradeStyle3: gradeStyle(3), gradeStyle4: gradeStyle(4),
gImg0: 'position: absolute; inset: 0; width: 100%; height: 100%; display: block; transition: opacity 500ms ease; opacity: ' + (gStage === 0 ? 1 : 0), gImg1: 'position: absolute; inset: 0; width: 100%; height: 100%; display: block; transition: opacity 500ms ease; opacity: ' + (gStage === 1 ? 1 : 0), gImg2: 'position: absolute; inset: 0; width: 100%; height: 100%; display: block; transition: opacity 500ms ease; opacity: ' + (gStage === 2 ? 1 : 0),
setHiw: (el) => { this.hiwEl = el; },
hiw1: rise(0), hiwImgA: rise(180, 28), hiwImgB: rise(300, 28),
hiw2: rise(800), hiwVid: 'flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; justify-content: flex-end; ' + rise(960, 28),
hiw3Num: rise(1600, 20),
hiw3Head: 'transform-origin: left center; ' + (hiwInstant ? 'opacity: 1; transform: none;' : 'transition: opacity 350ms ease 1600ms, transform 850ms ' + easeOut + ' 2450ms; ' + (hiwOn ? 'opacity: 1; transform: scale(1);' : 'opacity: 0; transform: scale(2);')),
hiw3Body: rise(3050, 22),
setQWrap: (el) => { this.qWrap = el; }, setQStick: (el) => { this.qStick = el; },
qStickStyle: 'position: sticky; top: 48px; display: flex; flex-direction: column; gap: min(var(--s-intro), 5vh); transition: transform 250ms ease-out; transform: translateY(' + (S.qShift || 0) + 'px)',
qsentinels: Array.from({ length: 60 }, (_, i) => ({ ref: (el) => { this._qsent = this._qsent || []; this._qsent[i] = el; }, style: 'position: absolute; left: 0; width: 1px; height: 1px; top: ' + (i * 100 / 60) + '%' })),
qPhotoWrap: 'flex: 1 1 420px; min-width: 0; margin: 0; ' + (qStatic ? 'opacity: 1;' : 'transition: opacity 900ms cubic-bezier(.2,.8,.2,1), transform 900ms cubic-bezier(.2,.8,.2,1); ' + (qOn ? 'opacity: 1; transform: none;' : 'opacity: 0; transform: translateX(40px);')),
...(() => { const out = {}; const act = qOn ? qActive : 0; [0, 1, 2].forEach((i) => { const on = i === act; const q = on ? qp : [1.04, 0, 0]; out['qPhoto' + i] = 'position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: 55% 45%; ' + (qStatic ? '' : 'transition: opacity 900ms ease, transform 1400ms cubic-bezier(.2,.8,.2,1); ') + 'opacity: ' + (on ? 1 : 0) + '; transform: scale(' + q[0] + ') translate(' + q[1] + '%, ' + q[2] + '%);'; }); return out; })(),
qdot0: qdot(0), qdot1: qdot(1), qdot2: qdot(2),
setQuotes: (el) => { this.quotesEl = el; }, quote0: quoteAnim(0), quote1: quoteAnim(1), quote2: quoteAnim(2),
rvRef7: (el) => { this._rvEls = this._rvEls || []; this._rvEls[7] = el; }, rv7h: rv(7, 1, ''), rv7e: rv(7, 0),
rv7s: rv(7, 2, 'flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 20px; '),
rvRef8: (el) => { this._rvEls = this._rvEls || []; this._rvEls[8] = el; }, pf0: rv(8, 0, ''), pf1: rv(8, 2, ''), pf2: rv(8, 4, ''), pf3: rv(8, 6, ''), pfC: rv(8, 8, ''),
pfLine: rv(8, 9, 'margin: clamp(40px, 4vw, 56px) auto 0; max-width: 820px; text-align: center; font-size: clamp(20px, 2.2vw, 26px); line-height: 1.4; font-weight: 500; color: #F6FBFF; text-wrap: balance; '),
...(() => { const I = window.I18N; const lang = I ? I.lang : (S.lang || 'en'); const pick = (l) => () => { if (I) { if (l !== I.lang) I.setLang(l); } else this.setState({ lang: l }); }; return { langEn: lang === 'en' ? 'true' : 'false', langNl: lang === 'nl' ? 'true' : 'false', pickEn: pick('en'), pickNl: pick('nl') }; })(),
noticeOn: this.props.showNotice !== false && !S.noticeClosed,
closeNotice: () => this.setState({ noticeClosed: true }),
pgsent: Array.from({ length: 300 }, (_, i) => ({ ref: (el) => { this._pgs = this._pgs || []; this._pgs[i] = el; }, style: 'position: absolute; left: 0; width: 1px; height: 1px; top: ' + (i / 3) + '%' })),
ctaStyle: (() => { const base = 'background: #04C1E2; color: #03111E; text-decoration: none; font-weight: 600; font-size: 16px; padding: 12px 22px; border-radius: 999px; min-height: 44px; box-sizing: border-box; display: inline-flex; align-items: center; z-index: 45; '; const right = 'right: max(24px, calc((100% - 1248px) / 2 + 24px)); box-shadow: 0 10px 30px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(3,17,30,0.2); animation: ctaIn 400ms cubic-bezier(0.16, 1, 0.3, 1) both;'; if (!S.pinCta) return base; if (S.canvasTop != null) return base + 'position: absolute; top: ' + (S.canvasTop + 16) + 'px; ' + right.replace('max(24px, calc((100% - 1248px) / 2 + 24px))', '24px'); return base + 'position: fixed; top: 16px; ' + right; })(),
chipExp: S.chipOpen ? 'true' : 'false',
chipToggle: () => this.setState({ chipOpen: !(this.state && this.state.chipOpen) }),
chipIcon: 'flex: none; width: 22px; height: 22px; border-radius: 999px; border: 1.5px solid currentColor; box-sizing: border-box; display: flex; align-items: center; justify-content: center; transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1); transform: rotate(' + (S.chipOpen ? 45 : 0) + 'deg);',
chipBody: 'display: grid; grid-template-rows: ' + (S.chipOpen ? '1fr' : '0fr') + '; opacity: ' + (S.chipOpen ? 1 : 0) + '; transition: grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease;',
chip2Exp: S.chip2Open ? 'true' : 'false',
chip2Toggle: () => this.setState({ chip2Open: !(this.state && this.state.chip2Open) }),
chip2Icon: 'flex: none; width: 22px; height: 22px; border-radius: 999px; border: 1.5px solid currentColor; box-sizing: border-box; display: flex; align-items: center; justify-content: center; transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1); transform: rotate(' + (S.chip2Open ? 45 : 0) + 'deg);',
chip2Body: 'display: grid; grid-template-rows: ' + (S.chip2Open ? '1fr' : '0fr') + '; opacity: ' + (S.chip2Open ? 1 : 0) + '; transition: grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease;',
fCcode: F.ccode || '', onCcode: field('ccode'),
codeOff: !!(F.ccode || '').trim(), ccodeOff: !!(F.code || '').trim(),
codeLab: 'display: flex; flex-direction: column; gap: 6px; font-size: 14px; color: #A9BCCD; transition: opacity 250ms ease; opacity: ' + ((F.ccode || '').trim() ? 0.4 : 1) + ';',
ccodeLab: 'display: flex; flex-direction: column; gap: 6px; font-size: 14px; color: #A9BCCD; transition: opacity 250ms ease; opacity: ' + ((F.code || '').trim() ? 0.4 : 1) + ';',
codeNote: (F.code || '').trim() ? T('Member code in use. Clear it to use a community code instead.') : (F.ccode || '').trim() ? T('Community code in use. Clear it to use a member code instead.') : T('One code per booking: member or community, not both.'),
rvRef6: (el) => { this._rvEls = this._rvEls || []; this._rvEls[6] = el; }, rv6h: rv(6, 1, 'flex: 1 1 240px; '),
rv5s: rv(5, 2),
rvRef5: (el) => { this._rvEls = this._rvEls || []; this._rvEls[5] = el; }, rv5h: rv(5, 1, ''),
rv5e: rv(5, 0),
rv4s: rv(4, 2),
rvRef4: (el) => { this._rvEls = this._rvEls || []; this._rvEls[4] = el; }, rv4h: rv(4, 1, ''),
rv4e: rv(4, 0),
qb0: qBeat(0), qb1: qBeat(1), qq: rv(3, 12, ''),
rv3s: rv(3, 16, 'display: flex; flex-wrap: wrap; gap: 32px clamp(32px, 5vw, 64px); align-items: center; '),
qSel0: qActive === 0 ? 'true' : 'false', qSel1: qActive === 1 ? 'true' : 'false', qSel2: qActive === 2 ? 'true' : 'false',
qPick0: () => this.qGo(0), qPick1: () => this.qGo(1), qPick2: () => this.qGo(2),
rvRef3: (el) => { this._rvEls = this._rvEls || []; this._rvEls[3] = el; }, rv3h: rv(3, 1, ''),
rv3e: rv(3, 0),
rv2s: rv(2, 2),
rvRef2: (el) => { this._rvEls = this._rvEls || []; this._rvEls[2] = el; }, rv2h: rv(2, 1, ''),
rv2e: rv(2, 0),
rvRef1: (el) => { this._rvEls = this._rvEls || []; this._rvEls[1] = el; }, rv1h: rv(1, 1, ''),
rv1e: rv(1, 0),
rv0s: rv(0, 2),
rvRef0: (el) => { this._rvEls = this._rvEls || []; this._rvEls[0] = el; }, rv0h: rv(0, 1, ''),
rv0e: rv(0, 0),
setCard0: (el) => { this.card0 = el; }, setCard1: (el) => { this.card1 = el; }, setCard2: (el) => { this.card2 = el; },
cardH0: cardAnim(0, 0), cardP0: cardAnim(0, 140), cardH1: cardAnim(1, 0), cardP1: cardAnim(1, 140), cardH2: cardAnim(2, 0), cardP2: cardAnim(2, 140),
graphFigStyle: 'position: sticky; top: 32px; margin: 0; display: flex; flex-direction: column; gap: min(40px, 3.5vh); transition: transform 250ms ease-out; transform: translateY(' + (S.graphShift || 0) + 'px)',
sentinels: Array.from({ length: 120 }, (_, i) => ({ ref: (el) => { this._sent = this._sent || []; this._sent[i] = el; }, style: 'position: absolute; left: 0; width: 1px; height: 1px; top: ' + (i * 100 / 120) + '%' })),
setGraphWrap: (el) => { this.graphWrap = el; }, setGraphStick: (el) => { this.graphStick = el; }, 
recBoxStyle: boxBase + ' left: 35.3%; top: 8.9%; width: 9.8%; height: 57.1%; background: rgba(120, 132, 200, 0.18); border: 2px dotted #3B4A8A;',
falBoxStyle: boxBase + ' left: 52.4%; top: 32.1%; width: 9.5%; height: 37.5%; background: rgba(20, 20, 20, 0.14); border: 2px dotted #222222;',
recTagStyle: tagBase + ' left: 31.5%; top: 2.2%; background: #04C1E2; color: #03111E; ' + shown('-1.2cqw'),
falTagStyle: tagBase + ' left: 51%; top: 70.6%; background: #F86C73; color: #03111E; ' + shown('1.2cqw'),
videoOpen: !!S.videoOpen,
openVideo: () => this._openVideo(),
videoWrap: (S.videoBox ? 'position: absolute; left: 0; right: 0; top: ' + S.videoBox.top + 'px; height: ' + S.videoBox.height + 'px; ' : 'position: fixed; inset: 0; ') + 'z-index: 1000; background: rgba(1, 8, 15, 0.88); display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box',
closeVideo: () => this._closeVideo(),
stopClick: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
setVideo: (el) => { this.video = el; },
lengthOpts, patternOpts, weekTabs, headers, rows,
isSame, isEach: !isSame, isDouble,
title: isDouble ? T('Double') : T('Single'),
subtitle: isDouble ? T('60 minutes a week, four weeks') : T('30 minutes a week, four weeks'),
detail: isDouble ? T('Two workouts per session, plus a data review with your coach.') : T('One focused workout per session.'),
slotText, slotColor: sameSel ? '#F6FBFF' : '#A9BCCD', picksList,
price, due: price - 25, complete, incomplete: !complete, ctaHint,
fName: F.name || '', fEmail: F.email || '', fPhone: F.phone || '', fTrain: F.train || '', fArea: F.area || '', fCode: F.code || '',
onName: field('name'), onEmail: field('email'), onPhone: field('phone'), onTrain: field('train'), onArea: field('area'), onCode: field('code'),
fHealth: !!F.health, fConsent: !!F.consent,
toggleHealth: () => setF('health', !F.health), toggleConsent: () => setF('consent', !F.consent),
payOpts, medOpts, payLabel: pay === 'ideal' ? 'iDEAL' : T('card'),
bookingLines, firstText, confirmed,
showNeedSlot: !complete && !confirmed, showCheckout: complete && !confirmed,
showErr: (!!S.tried && missing.length > 0) || !!S.sendErr, errText: S.sendErr ? T('Something went wrong sending your booking. Try again, or email build@bravr.io.') : T('Still needed: ') + missing.join(', ') + '.',
fWebsite: F.website || '', onWebsite: field('website'),
sending: !!S.sending, clashErr: !!S.clashErr,
submitBooking, bookingRef: S.ref || '', editBooking: () => this.setState({ confirmed: false })
};
}
}

const PROPS = {"showNotice": true, "textRevealed": false, "quotePreview": 0, "stepsRevealed": false, "cardsRevealed": false, "graphFinal": false, "scoreTarget": 65, "previewCheckout": false};
function start() {
  const tpl = document.getElementById('page-tpl');
  const app = document.getElementById('app');
  window.BRAVR_PAGE = window.DCLite.mount(tpl, Component, PROPS, app, window.I18N.translateTree);
  const ns = document.querySelector('.noscript'); if (ns) ns.remove();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
