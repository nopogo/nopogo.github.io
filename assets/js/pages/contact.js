/* BRAVR Contact page. Generated from the design board; edit the board, not this file. */
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

contactVals() {
const S = this.state || {}; const C = S.c || {};
const T = (s) => (window.I18N ? window.I18N.t(s) : s);
const set = (k) => (e) => { const cur = (this.state && this.state.c) || {}; this.setState({ c: Object.assign({}, cur, { [k]: e.target.value }), cTried: (this.state || {}).cTried }); };
const reasons = ['Pilot booking', 'Demo', 'Partnership', 'Press', 'Careers', 'Other'];
const missing = [];
if (!(C.name || '').trim()) missing.push(T('your name'));
if (!/^\S+@\S+\.\S+$/.test((C.email || '').trim())) missing.push(T('a valid email'));
if (!(C.msg || '').trim()) missing.push(T('a message'));
if (!C.consent) missing.push(T('your consent'));
const pill = (on) => 'flex: 0 1 auto; text-align: center; border: 0; border-radius: 999px; padding: 10px 16px; min-height: 40px; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; ' + (on ? 'background: #04C1E2; color: #03111E;' : 'background: transparent; color: #F6FBFF;');
const reason = C.reason || 'Pilot booking';
return {
cName: C.name || '', cEmail: C.email || '', cOrg: C.org || '', cMsg: C.msg || '', cConsent: !!C.consent,
onName: set('name'), onEmail: set('email'), onOrg: set('org'), onMsg: set('msg'), website: C.website || '', onWebsite: set('website'),
toggleConsent: () => { const cur = (this.state && this.state.c) || {}; this.setState({ c: Object.assign({}, cur, { consent: !cur.consent }) }); },
reasonOpts: reasons.map((r) => ({ label: T(r), pressed: reason === r ? 'true' : 'false', style: pill(reason === r), pick: () => { const cur = (this.state && this.state.c) || {}; this.setState({ c: Object.assign({}, cur, { reason: r }) }); } })),
cShowErr: !!S.cTried && missing.length > 0 || !!S.cErr, cErrText: S.cErr ? T('Something went wrong sending your message. Try again, or email build@bravr.io.') : T('Still needed: ') + missing.join(', ') + '.',
cSending: !!S.cSending, cSendLabel: S.cSending ? T('Sending…') : T('Send message'),
cSent: !!S.cSent, cForm: !S.cSent,
cAgain: () => this.setState({ cSent: false, c: {}, cTried: false }),
cSubmit: (e) => {
if (e && e.preventDefault) e.preventDefault();
if (this._cSending) return;
if (missing.length) { this.setState({ cTried: true, cErr: false }); return; }
if (C.website) { this.setState({ cSent: true }); return; }
const payload = { intent: 'contact', name: C.name.trim(), email: C.email.trim(), organisation: (C.org || '').trim(), reason, message: C.msg.trim(), consent: 'yes' };
const B = window.BRAVR_BOOKING;
this._cSending = true; this.setState({ cSending: true, cErr: false });
(B && B.send ? B.send(payload) : Promise.resolve()).then(() => { this._cSending = false; this.setState({ cSending: false, cSent: true, cTried: false }); })
.catch(() => { this._cSending = false; this.setState({ cSending: false, cErr: true }); });
}
};
}

renderVals() {
return { ...this.langVals(), ...this.contactVals() };
}
}
function start() { window.DCLite.mount(document.getElementById('page-tpl'), Component, {}, document.getElementById('app'), window.I18N.translateTree); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
