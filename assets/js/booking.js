/*
 * Sends a booking to the Google Sheet (Apps Script), then hands over to Stripe.
 * Settings live in config.js. With no Stripe link set, the page runs in
 * demo mode: the booking is still sent to the sheet (if a sheet URL is set)
 * and the on-page confirmation is shown instead of a payment page.
 */
(function () {
  'use strict';
  var CFG = window.BRAVR_CONFIG || {};
  var SAVE_KEY = 'bravr-booking';

  function utm() {
    var out = {};
    try {
      var q = new URLSearchParams(location.search);
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) { if (q.get(k)) out[k] = q.get(k); });
    } catch (e) {}
    return out;
  }

  function stripeUrl(p) {
    var link = (CFG.STRIPE_PAYMENT_LINK || '').trim();
    if (!link) return '';
    var u = new URL(link);
    if (p.email) u.searchParams.set('prefilled_email', p.email);
    if (p.discountCode) u.searchParams.set('prefilled_promo_code', p.discountCode);
    u.searchParams.set('client_reference_id', p.signupId);
    u.searchParams.set('locale', p.lang === 'nl' ? 'nl' : 'en');
    return u.toString();
  }

  // payload: plain object of booking fields. ui: state to restore after Stripe sends the visitor back.
  // Resolves to { redirect: url } or { redirect: '' } (demo mode).
  function submit(payload, ui) {
    var p = Object.assign({
      intent: 'deposit',
      lang: (window.I18N && window.I18N.lang) || 'en',
      referrer: document.referrer || '',
      page: location.origin + location.pathname,
      submittedAt: new Date().toISOString()
    }, utm(), payload);

    var url = (CFG.APPS_SCRIPT_URL || '').trim();
    var send = url
      ? fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(p) })
      : Promise.resolve(console.info('[BRAVR demo] no APPS_SCRIPT_URL set, booking not sent:', p));

    return send.then(function () {
      var redirect = stripeUrl(p);
      if (redirect) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(ui || {})); } catch (e) {} }
      return { redirect: redirect };
    });
  }

  // After Stripe: the success link points back to this page with ?paid=1. Returns the saved state, once.
  function restore() {
    var paid = false;
    try { paid = new URLSearchParams(location.search).get('paid') === '1'; } catch (e) {}
    if (!paid) return null;
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); localStorage.removeItem(SAVE_KEY); } catch (e) {}
    try {
      var u = new URL(location.href); u.searchParams.delete('paid');
      history.replaceState(null, '', u.pathname + u.search + '#book');
    } catch (e) {}
    return saved || { confirmed: true };
  }

  // Short, readable booking reference that also works as Stripe's client_reference_id.
  function newRef() {
    var a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s = '';
    for (var i = 0; i < 6; i++) s += a[Math.floor(Math.random() * a.length)];
    return 'BRV-' + s;
  }

  window.BRAVR_BOOKING = { submit: submit, restore: restore, newRef: newRef };
})();
