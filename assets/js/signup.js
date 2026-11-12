// Signup form: validation, saving to Google Sheets (Apps Script), redirect to Stripe Payment Link.
(function () {
  const cfg = window.BRAVR_CONFIG || {};
  const t = k => window.I18N.t(k);

  const RX = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phone: /^\+?[0-9\s\-().]{8,20}$/,
    postcode: /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/
  };

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    if (!form) return;
    const submitBtn = form.querySelector("[type=submit]");
    const summary = document.getElementById("form-summary");
    let attempted = false;

    // ---------- UI helpers ----------
    function intent() {
      const r = form.querySelector("input[name=intent]:checked");
      return r ? r.value : "deposit";
    }
    function updateSubmitLabel() {
      submitBtn.textContent = t(intent() === "deposit" ? "form.submitDeposit" : "form.submitInterest");
    }
    function toggleOther() {
      const sel = form.elements.occupation;
      const wrap = document.getElementById("occ-other-wrap");
      const show = sel.value === "other";
      wrap.hidden = !show;
      form.elements.occupationOther.required = show;
    }
    form.addEventListener("change", e => {
      if (e.target.name === "intent") updateSubmitLabel();
      if (e.target.name === "occupation") toggleOther();
      if (attempted) validate();
    });
    form.addEventListener("input", () => { if (attempted) validate(); });
    document.addEventListener("langchange", () => { updateSubmitLabel(); if (attempted) validate(); });
    updateSubmitLabel();
    toggleOther();

    // Prefill discount code from ?code= or ?promo=
    const qs = new URLSearchParams(location.search);
    const preCode = qs.get("code") || qs.get("promo");
    if (preCode) form.elements.discountCode.value = preCode.toUpperCase();

    // ---------- Validation ----------
    function setError(container, key) {
      const msg = container.querySelector(".err");
      container.classList.toggle("invalid", !!key);
      if (msg) msg.textContent = key ? t(key) : "";
      container.querySelectorAll("input,select,textarea").forEach(i =>
        key ? i.setAttribute("aria-invalid", "true") : i.removeAttribute("aria-invalid"));
    }

    function validate() {
      let firstBad = null;
      form.querySelectorAll(".field").forEach(f => {
        const input = f.querySelector("input,select,textarea");
        if (!input || f.hidden) { setError(f, null); return; }
        const v = (input.value || "").trim();
        let err = null;
        if (input.type === "checkbox") {
          if (input.required && !input.checked) err = "err.consent";
        } else if (input.required && !v) err = "err.required";
        else if (v && input.dataset.rx && !RX[input.dataset.rx].test(v)) err = "err." + input.dataset.rx;
        setError(f, err);
        if (err && !firstBad) firstBad = input;
      });
      form.querySelectorAll("fieldset[data-required-group]").forEach(fs => {
        const ok = fs.querySelector("input:checked");
        setError(fs, ok ? null : "err.group");
        if (!ok && !firstBad) firstBad = fs.querySelector("input");
      });
      summary.textContent = firstBad ? t("err.summary") : "";
      summary.hidden = !firstBad;
      return firstBad;
    }

    // ---------- Payload ----------
    function uuid() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      return "s-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    }
    function buildPayload(id) {
      const fd = new FormData(form);
      const data = {};
      for (const [k, v] of fd.entries()) {
        if (k === "website") continue; // honeypot
        data[k] = data[k] ? data[k] + ", " + v : String(v).trim();
      }
      ["consentPrivacy", "consentHealth", "consentNews"].forEach(k => { data[k] = fd.has(k) ? "yes" : "no"; });
      if (data.discountCode) data.discountCode = data.discountCode.toUpperCase();
      if (data.postcode) data.postcode = data.postcode.toUpperCase().replace(/^(\d{4})\s*([A-Z]{2})$/, "$1 $2");
      Object.assign(data, {
        signupId: id,
        lang: window.I18N.lang,
        submittedAt: new Date().toISOString(),
        page: location.href.split("?")[0],
        referrer: document.referrer || ""
      });
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(k => {
        if (qs.get(k)) data[k] = qs.get(k);
      });
      return data;
    }

    async function save(payload) {
      if (!cfg.APPS_SCRIPT_URL) {
        console.info("[BRAVR demo mode] APPS_SCRIPT_URL not set. Payload:", payload);
        return;
      }
      // text/plain + no-cors avoids a CORS preflight, which Apps Script doesn't answer.
      await fetch(cfg.APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
    }

    function stripeUrl(payload) {
      const u = new URL(cfg.STRIPE_PAYMENT_LINK);
      u.searchParams.set("prefilled_email", payload.email);
      u.searchParams.set("client_reference_id", payload.signupId);
      if (payload.discountCode) u.searchParams.set("prefilled_promo_code", payload.discountCode);
      u.searchParams.set("locale", payload.lang === "nl" ? "nl" : "en");
      return u.toString();
    }

    function showDone(extraKey) {
      const done = document.getElementById("form-done");
      form.hidden = true;
      done.hidden = false;
      const note = done.querySelector(".done-note");
      note.textContent = extraKey ? t(extraKey) : "";
      note.hidden = !extraKey;
      done.scrollIntoView({ behavior: "smooth", block: "center" });
      done.focus();
    }

    // ---------- Submit ----------
    form.addEventListener("submit", async e => {
      e.preventDefault();
      attempted = true;
      const bad = validate();
      if (bad) { bad.focus(); return; }

      // Honeypot: bots fill hidden fields. Pretend success.
      if (form.elements.website.value) { showDone(); return; }

      const payload = buildPayload(uuid());
      submitBtn.disabled = true;
      submitBtn.textContent = t("form.sending");

      try {
        await save(payload);
      } catch (err) {
        console.error(err);
        summary.textContent = t("err.network");
        summary.hidden = false;
        submitBtn.disabled = false;
        updateSubmitLabel();
        return;
      }

      if (payload.intent === "deposit") {
        if (cfg.STRIPE_PAYMENT_LINK) {
          showDone("done.redirect");
          setTimeout(() => { location.href = stripeUrl(payload); }, 600);
        } else {
          showDone("err.noPayment");
        }
      } else {
        showDone();
      }
    });
  });
})();
