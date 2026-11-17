/* BRAVR Thanks page. Generated from the design board; edit the board, not this file. */
(function () {
'use strict';
class Component extends DCLogic {

langVals() {
const S = this.state || {};
const I = window.I18N; const lang = I ? I.lang : (S.lang || 'en');
const pick = (l) => () => { if (I) { if (l !== I.lang) I.setLang(l); } else this.setState({ lang: l }); };
return { langEn: lang === 'en' ? 'true' : 'false', langNl: lang === 'nl' ? 'true' : 'false', pickEn: pick('en'), pickNl: pick('nl') };
}
faqVals(n) {
const S = this.state || {}; const open = S.faqOpen || {}; const v = {};
for (let i = 0; i < n; i++) {
const on = !!open[i];
v['faqExp' + i] = on ? 'true' : 'false';
v['faqToggle' + i] = () => { const cur = (this.state && this.state.faqOpen) || {}; this.setState({ faqOpen: Object.assign({}, cur, { [i]: !cur[i] }) }); };
v['faqIcon' + i] = 'flex: none; width: 32px; height: 32px; border-radius: 999px; display: flex; align-items: center; justify-content: center; transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), background 300ms ease, color 300ms ease, border-color 300ms ease; ' + (on ? 'transform: rotate(45deg); background: #04C1E2; color: #03111E; border: 1px solid #04C1E2;' : 'transform: none; background: transparent; color: #04C1E2; border: 1px solid rgba(4,193,226,0.45);');
v['faqBody' + i] = 'display: grid; grid-template-rows: ' + (on ? '1fr' : '0fr') + '; opacity: ' + (on ? 1 : 0) + '; transition: grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease ' + (on ? '100ms' : '0ms') + ';';
}
return v;
}

componentDidMount() {
let b = null;
try { b = JSON.parse(localStorage.getItem('bravr-booking') || 'null'); } catch (e) {}
if (b && b.savedAt && Date.now() - b.savedAt > 3 * 864e5) { b = null; try { localStorage.removeItem('bravr-booking'); } catch (e) {} }
if (b) this.setState({ booking: b });
}
thanksVals() {
const S = this.state || {};
const sample = !window.I18N;
const b = S.booking || (sample ? { ref: 'BRV-7KQ2MX', lines: [{ label: 'Session', value: 'Double · 60 min × 4' }, { label: 'Weekly slots', value: 'Wednesdays at 18:15 & 19:00, 20 Jan to 10 Feb' }], firstText: 'Wed 20 Jan at 18:15', due: 175 } : null);
return {
tHas: !!b, tNone: !b,
tRef: b ? b.ref : '', tLines: b ? (b.lines || []) : [], tFirst: b ? (b.firstText || '') : '', tDue: b ? b.due : ''
};
}

renderVals() {
return { ...this.langVals(), ...this.thanksVals() };
}
}
function start() { window.DCLite.mount(document.getElementById('page-tpl'), Component, {}, document.getElementById('app'), window.I18N.translateTree); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
