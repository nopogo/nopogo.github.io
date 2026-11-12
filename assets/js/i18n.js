// NL/EN strings. Placeholders {deposit} {price} {dates} {location} come from config.js.
// data-i18n = textContent, data-i18n-html = innerHTML, data-i18n-ph = placeholder, data-i18n-aria = aria-label
(function () {
  const STR = {
    en: {
      "meta.title": "BRAVR: VR stress resilience training in Amsterdam",
      "nav.how": "How it works",
      "nav.course": "The course",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.cta": "Reserve a place",
      "lang.switch": "Nederlands",

      "hero.eyebrow": "New in Amsterdam · {dates}",
      "hero.title": "Stay calm when it counts.",
      "hero.sub": "A 6-week course where virtual reality and your own heartbeat train you to stay in control under pressure. Built on the system BRAVR developed for soldiers and first responders, now open to everyone.",
      "hero.cta": "Reserve your place",
      "hero.secondary": "How does it work?",
      "hero.m1": "8 sessions of about 20 minutes",
      "hero.m3": "Deposit {deposit}",

      "problem.title": "Stress isn't the problem. Losing control is.",
      "problem.lead": "A deadline, a hard conversation, a presentation, a near-miss on the bike. Under acute stress your heart races, your vision narrows and clear thinking gets harder. Most of us are never taught what to do in that moment.",
      "problem.c1t": "Your body takes over",
      "problem.c1b": "Acute stress triggers a fight-or-flight response: a racing pulse, shallow breathing and tunnel vision.",
      "problem.c2t": "Your decisions suffer",
      "problem.c2b": "Under pressure, fine motor skills, memory and judgement are the first things to go.",
      "problem.c3t": "It's trainable",
      "problem.c3b": "Calming yourself under pressure is a skill. Like any skill, it gets better with practice.",

      "how.title": "How it works",
      "how.lead": "You wear a VR headset and a chest-strap heart-rate sensor. The training reacts to your stress level in real time.",
      "how.s1t": "Your heart is measured",
      "how.s1b": "A sensor tracks your heart rate variability (HRV), one of the most reliable signals of stress.",
      "how.s2t": "The scenario reacts",
      "how.s2b": "As your stress rises, your vision and hearing in VR narrow and the challenge gets harder.",
      "how.s3t": "You learn to regain control",
      "how.s3b": "When you calm down, the world opens up again. Your nervous system learns what works.",

      "course.title": "The course",
      "course.lead": "A structured programme that steps up in intensity, guided by a trainer.",
      "course.f1l": "Duration",
      "course.f1v": "6 weeks",
      "course.f2l": "Sessions",
      "course.f2v": "8 × ~20 min",
      "course.f4l": "Location",
      "course.f4v": "{location}",
      "course.sessionTitle": "Each session",
      "course.st1": "Calibration: we measure your personal baseline.",
      "course.st2": "Three training sets in VR with live biofeedback.",
      "course.st3": "After-action review: what happened in your body, and what worked.",
      "course.levelsTitle": "Four intensity levels",
      "course.levelsLead": "You unlock each level by completing the one before.",
      "course.l1": "Light",
      "course.l2": "Moderate",
      "course.l3": "Intense",
      "course.l4": "Overload",

      "science.title": "Grounded in research",
      "science.lead": "BRAVR builds on more than 15 years of academic research into stress inoculation training and heart-rate biofeedback. A selection:",
      "science.more": "See all research on bravr.io →",

      "pricing.title": "Secure your place",
      "pricing.lead": "Places in the first round are limited. A deposit guarantees your spot in the first round.",
      "pricing.priceLabel": "Full course",
      "pricing.depositLabel": "Deposit today",
      "pricing.depositNote": "Deducted from the course price. Fully refundable until the course schedule is confirmed.",
      "pricing.i1": "8 guided VR sessions",
      "pricing.i2": "Personal HRV progress report",
      "pricing.i3": "Breathing and reset techniques to use every day",
      "pricing.i4": "Have a discount code? Enter it in the form.",
      "pricing.cta": "Sign up",

      "form.title": "Sign up",
      "form.lead": "Tell us a little about yourself. You'll be asked to pay the deposit on the next step, or you can just register your interest.",
      "form.sAbout": "About you",
      "form.sProfile": "Your situation",
      "form.sPlanning": "Planning",
      "form.sFinish": "Finish",
      "form.firstName": "First name",
      "form.lastName": "Last name",
      "form.email": "Email",
      "form.phone": "Phone",
      "form.age": "Age",
      "form.postcode": "Postcode",
      "form.postcodePh": "1012 AB",
      "form.select": "Select…",
      "form.occupation": "What do you do?",
      "form.occ.office": "Office / corporate",
      "form.occ.healthcare": "Healthcare",
      "form.occ.education": "Education",
      "form.occ.security": "Security / police / defence",
      "form.occ.creative": "Creative / performing arts",
      "form.occ.hospitality": "Hospitality / retail",
      "form.occ.student": "Student",
      "form.occ.self": "Self-employed / entrepreneur",
      "form.occ.other": "Other",
      "form.occOther": "Other, namely",
      "form.stress": "Where do you feel stress most? (choose any)",
      "form.st.work": "Work pressure / deadlines",
      "form.st.speaking": "Public speaking / presenting",
      "form.st.exams": "Exams / performance",
      "form.st.conflict": "Conflict / difficult conversations",
      "form.st.sport": "Sport / competition",
      "form.st.daily": "Daily life / feeling overwhelmed",
      "form.st.other": "Other",
      "form.vr": "Have you used VR before?",
      "form.vr.none": "Never",
      "form.vr.some": "A few times",
      "form.vr.regular": "Regularly",
      "form.goal": "What would you like to get out of the course? (optional)",
      "form.schedule": "When could you attend? (choose any)",
      "form.sch.wdDay": "Weekdays, daytime",
      "form.sch.wdEve": "Weekday evenings",
      "form.sch.weekend": "Weekends",
      "form.start": "Earliest start",
      "form.start.asap": "As soon as possible",
      "form.start.1to3": "In 1–3 months",
      "form.start.3plus": "In 3+ months",
      "form.start.unsure": "Not sure yet",
      "form.source": "How did you hear about us?",
      "form.src.social": "Social media",
      "form.src.friend": "Friend / colleague",
      "form.src.search": "Search engine",
      "form.src.employer": "Employer",
      "form.src.event": "Event / flyer",
      "form.src.other": "Other",
      "form.discount": "Discount code (optional)",
      "form.discountHelp": "Applied at checkout.",
      "form.intent": "What would you like to do?",
      "form.intent.deposit": "Reserve my place: pay the {deposit} deposit now",
      "form.intent.interest": "Just keep me informed, no payment",
      "form.cPrivacy": "I agree that BRAVR stores my details to contact me about this course, as described in the <a href=\"#privacy\">privacy notice</a>.",
      "form.cHealth": "I don't have photosensitive epilepsy, and I'll check with a doctor if I'm unsure whether VR is suitable for me.",
      "form.cNews": "Send me occasional updates about BRAVR (optional).",
      "form.submitDeposit": "Continue to payment",
      "form.submitInterest": "Sign up",
      "form.sending": "Sending…",
      "form.secure": "Payments are handled securely by Stripe (iDEAL, card).",

      "err.required": "Please fill in this field.",
      "err.email": "Please enter a valid email address.",
      "err.phone": "Please enter a valid phone number.",
      "err.postcode": "Please enter a valid Dutch postcode (e.g. 1012 AB).",
      "err.group": "Please choose at least one option.",
      "err.consent": "Please tick this box to continue.",
      "err.summary": "Some fields need your attention.",
      "err.network": "Something went wrong while sending. Please try again, or email us.",
      "err.noPayment": "Online payment isn't set up yet. Your signup has been saved and we'll contact you.",

      "done.title": "You're on the list!",
      "done.body": "Thanks for signing up. We'll email you as soon as dates are confirmed.",
      "done.redirect": "Taking you to secure payment…",

      "faq.title": "Frequently asked questions",
      "faq.q1": "Who is this course for?",
      "faq.a1": "Anyone 18+ who wants to handle pressure better: professionals, students, performers, athletes, parents. No VR experience needed.",
      "faq.q2": "Will I get motion sickness?",
      "faq.a2": "The scenarios are designed for minimal motion. Sessions are short, and the trainer stops if you feel unwell.",
      "faq.q3": "Is VR safe for me?",
      "faq.a3": "For most people, yes. If you have photosensitive epilepsy, a heart condition, or are pregnant, please consult your doctor before signing up.",
      "faq.q4": "Can I get my deposit back?",
      "faq.a4": "Yes. The deposit is fully refundable until the course schedule is confirmed. After that it is deducted from the course price.",
      "faq.q5": "What happens to my data?",
      "faq.a5": "Your signup details are used only to contact you about this course. During training, heart data is stored under a username, not your name.",
      "faq.q6": "Where exactly is it?",
      "faq.a6": "{location}. We'll share the exact address with everyone who signed up.",

      "privacy.title": "Privacy notice",
      "privacy.body": "BRAVR Technologies BV (KVK 97265896) processes the details you enter in this form to contact you about the course and to manage your reservation. We do not sell or share your data. Payments are processed by Stripe; we never see your card or bank details. You can ask us to view or delete your data at any time. See the full privacy policy on <a href=\"https://bravr.io/#privacy\" target=\"_blank\" rel=\"noopener\">bravr.io</a>.",

      "footer.tag": "Master your instincts.",
      "footer.b2b": "For organisations",

      "thanks.title": "Your place is reserved",
      "thanks.body": "Thank you! We've received your deposit. You'll get a payment receipt from Stripe by email, and we'll contact you as soon as the course dates are set.",
      "thanks.next": "What happens next?",
      "thanks.n1": "We confirm the schedule and venue.",
      "thanks.n2": "You choose your time slots.",
      "thanks.n3": "Your first session: calibration and your first training set.",
      "thanks.back": "Back to home"
    },

    nl: {
      "meta.title": "BRAVR: VR-training voor stressbestendigheid in Amsterdam",
      "nav.how": "Hoe het werkt",
      "nav.course": "De cursus",
      "nav.pricing": "Prijs",
      "nav.faq": "Vragen",
      "nav.cta": "Reserveer een plek",
      "lang.switch": "English",

      "hero.eyebrow": "Nieuw in Amsterdam · {dates}",
      "hero.title": "Blijf kalm als het erop aankomt.",
      "hero.sub": "Een cursus van 6 weken waarin virtual reality en je eigen hartslag je trainen om onder druk de controle te houden. Gebaseerd op het systeem dat BRAVR ontwikkelde voor militairen en hulpverleners, nu voor iedereen.",
      "hero.cta": "Reserveer je plek",
      "hero.secondary": "Hoe werkt het?",
      "hero.m1": "8 sessies van ca. 20 minuten",
      "hero.m3": "Aanbetaling {deposit}",

      "problem.title": "Stress is niet het probleem. De controle verliezen wel.",
      "problem.lead": "Een deadline, een lastig gesprek, een presentatie, bijna een ongeluk op de fiets. Bij acute stress gaat je hart tekeer, vernauwt je blik en wordt helder denken moeilijk. Bijna niemand leert wat je op dat moment moet doen.",
      "problem.c1t": "Je lichaam neemt het over",
      "problem.c1b": "Acute stress zet een vecht-of-vluchtreactie in gang: hoge hartslag, snelle ademhaling en tunnelvisie.",
      "problem.c2t": "Je beslissingen lijden eronder",
      "problem.c2b": "Onder druk gaan fijne motoriek, geheugen en beoordelingsvermogen als eerste achteruit.",
      "problem.c3t": "Het is te trainen",
      "problem.c3b": "Jezelf kalmeren onder druk is een vaardigheid. Zoals elke vaardigheid wordt die beter met oefening.",

      "how.title": "Hoe het werkt",
      "how.lead": "Je draagt een VR-bril en een hartslagsensor op je borst. De training reageert direct op je stressniveau.",
      "how.s1t": "Je hart wordt gemeten",
      "how.s1b": "Een sensor meet je hartslagvariabiliteit (HRV), een van de betrouwbaarste signalen van stress.",
      "how.s2t": "Het scenario reageert",
      "how.s2b": "Als je stress stijgt, worden je zicht en gehoor in VR beperkt en wordt de uitdaging moeilijker.",
      "how.s3t": "Je leert de controle terug te pakken",
      "how.s3b": "Als je tot rust komt, opent de wereld zich weer. Je zenuwstelsel leert wat werkt.",

      "course.title": "De cursus",
      "course.lead": "Een gestructureerd programma dat in intensiteit opbouwt, onder begeleiding van een trainer.",
      "course.f1l": "Duur",
      "course.f1v": "6 weken",
      "course.f2l": "Sessies",
      "course.f2v": "8 × ca. 20 min",
      "course.f4l": "Locatie",
      "course.f4v": "{location}",
      "course.sessionTitle": "Elke sessie",
      "course.st1": "Kalibratie: we meten jouw persoonlijke basislijn.",
      "course.st2": "Drie trainingssets in VR met live biofeedback.",
      "course.st3": "Nabespreking: wat gebeurde er in je lichaam, en wat werkte?",
      "course.levelsTitle": "Vier intensiteitsniveaus",
      "course.levelsLead": "Je ontgrendelt elk niveau door het vorige af te ronden.",
      "course.l1": "Licht",
      "course.l2": "Gemiddeld",
      "course.l3": "Intens",
      "course.l4": "Overload",

      "science.title": "Gebaseerd op onderzoek",
      "science.lead": "BRAVR bouwt voort op meer dan 15 jaar wetenschappelijk onderzoek naar stressinoculatietraining en hartslag-biofeedback. Een selectie (Engelstalig):",
      "science.more": "Al het onderzoek op bravr.io →",

      "pricing.title": "Zeker van je plek",
      "pricing.lead": "Het aantal plekken in de eerste ronde is beperkt. Met een aanbetaling ben je verzekerd van een plek in de eerste ronde.",
      "pricing.priceLabel": "Volledige cursus",
      "pricing.depositLabel": "Aanbetaling nu",
      "pricing.depositNote": "Wordt verrekend met de cursusprijs. Volledig terugbetaalbaar tot het rooster definitief is.",
      "pricing.i1": "8 begeleide VR-sessies",
      "pricing.i2": "Persoonlijk HRV-voortgangsrapport",
      "pricing.i3": "Ademhalings- en resettechnieken voor elke dag",
      "pricing.i4": "Heb je een kortingscode? Vul die in het formulier in.",
      "pricing.cta": "Aanmelden",

      "form.title": "Aanmelden",
      "form.lead": "Vertel ons iets over jezelf. In de volgende stap betaal je de aanbetaling, of je laat alleen je interesse achter.",
      "form.sAbout": "Over jou",
      "form.sProfile": "Jouw situatie",
      "form.sPlanning": "Planning",
      "form.sFinish": "Afronden",
      "form.firstName": "Voornaam",
      "form.lastName": "Achternaam",
      "form.email": "E-mail",
      "form.phone": "Telefoon",
      "form.age": "Leeftijd",
      "form.postcode": "Postcode",
      "form.postcodePh": "1012 AB",
      "form.select": "Kies…",
      "form.occupation": "Wat doe je?",
      "form.occ.office": "Kantoor / zakelijk",
      "form.occ.healthcare": "Zorg",
      "form.occ.education": "Onderwijs",
      "form.occ.security": "Beveiliging / politie / defensie",
      "form.occ.creative": "Creatief / podiumkunsten",
      "form.occ.hospitality": "Horeca / retail",
      "form.occ.student": "Student",
      "form.occ.self": "Zzp / ondernemer",
      "form.occ.other": "Anders",
      "form.occOther": "Anders, namelijk",
      "form.stress": "Waar ervaar je de meeste stress? (meerdere mogelijk)",
      "form.st.work": "Werkdruk / deadlines",
      "form.st.speaking": "Spreken in het openbaar / presenteren",
      "form.st.exams": "Examens / presteren",
      "form.st.conflict": "Conflicten / lastige gesprekken",
      "form.st.sport": "Sport / wedstrijden",
      "form.st.daily": "Dagelijks leven / overweldigd voelen",
      "form.st.other": "Anders",
      "form.vr": "Heb je eerder VR gebruikt?",
      "form.vr.none": "Nooit",
      "form.vr.some": "Een paar keer",
      "form.vr.regular": "Regelmatig",
      "form.goal": "Wat wil je uit de cursus halen? (optioneel)",
      "form.schedule": "Wanneer kun je? (meerdere mogelijk)",
      "form.sch.wdDay": "Doordeweeks overdag",
      "form.sch.wdEve": "Doordeweeks 's avonds",
      "form.sch.weekend": "Weekend",
      "form.start": "Vroegste start",
      "form.start.asap": "Zo snel mogelijk",
      "form.start.1to3": "Over 1–3 maanden",
      "form.start.3plus": "Over 3+ maanden",
      "form.start.unsure": "Weet ik nog niet",
      "form.source": "Hoe heb je over ons gehoord?",
      "form.src.social": "Social media",
      "form.src.friend": "Vriend / collega",
      "form.src.search": "Zoekmachine",
      "form.src.employer": "Werkgever",
      "form.src.event": "Evenement / flyer",
      "form.src.other": "Anders",
      "form.discount": "Kortingscode (optioneel)",
      "form.discountHelp": "Wordt toegepast bij het afrekenen.",
      "form.intent": "Wat wil je doen?",
      "form.intent.deposit": "Mijn plek reserveren: nu {deposit} aanbetalen",
      "form.intent.interest": "Alleen op de hoogte blijven, zonder betaling",
      "form.cPrivacy": "Ik ga ermee akkoord dat BRAVR mijn gegevens bewaart om contact met me op te nemen over deze cursus, zoals beschreven in de <a href=\"#privacy\">privacyverklaring</a>.",
      "form.cHealth": "Ik heb geen fotosensitieve epilepsie, en ik overleg met een arts als ik twijfel of VR geschikt voor me is.",
      "form.cNews": "Stuur me af en toe updates over BRAVR (optioneel).",
      "form.submitDeposit": "Verder naar betalen",
      "form.submitInterest": "Aanmelden",
      "form.sending": "Versturen…",
      "form.secure": "Betalingen worden veilig verwerkt door Stripe (iDEAL, creditcard).",

      "err.required": "Vul dit veld in.",
      "err.email": "Vul een geldig e-mailadres in.",
      "err.phone": "Vul een geldig telefoonnummer in.",
      "err.postcode": "Vul een geldige postcode in (bijv. 1012 AB).",
      "err.group": "Kies minstens één optie.",
      "err.consent": "Vink dit vakje aan om verder te gaan.",
      "err.summary": "Een paar velden hebben je aandacht nodig.",
      "err.network": "Er ging iets mis bij het versturen. Probeer het opnieuw, of mail ons.",
      "err.noPayment": "Online betalen is nog niet ingesteld. Je aanmelding is opgeslagen en we nemen contact met je op.",

      "done.title": "Je staat op de lijst!",
      "done.body": "Bedankt voor je aanmelding. We mailen je zodra de data bekend zijn.",
      "done.redirect": "We sturen je door naar de beveiligde betaalpagina…",

      "faq.title": "Veelgestelde vragen",
      "faq.q1": "Voor wie is deze cursus?",
      "faq.a1": "Voor iedereen vanaf 18 jaar die beter met druk wil omgaan: professionals, studenten, artiesten, sporters, ouders. VR-ervaring is niet nodig.",
      "faq.q2": "Word ik misselijk van VR?",
      "faq.a2": "De scenario's zijn ontworpen met zo min mogelijk beweging. De sessies zijn kort, en de trainer stopt als je je niet goed voelt.",
      "faq.q3": "Is VR veilig voor mij?",
      "faq.a3": "Voor de meeste mensen wel. Heb je fotosensitieve epilepsie of een hartaandoening, of ben je zwanger? Overleg dan eerst met je arts.",
      "faq.q4": "Krijg ik mijn aanbetaling terug?",
      "faq.a4": "Ja. De aanbetaling is volledig terugbetaalbaar tot het rooster definitief is. Daarna wordt die verrekend met de cursusprijs.",
      "faq.q5": "Wat gebeurt er met mijn gegevens?",
      "faq.a5": "Je aanmeldgegevens gebruiken we alleen om contact met je op te nemen over deze cursus. Tijdens de training worden hartgegevens opgeslagen onder een gebruikersnaam, niet onder je naam.",
      "faq.q6": "Waar is het precies?",
      "faq.a6": "{location}. Het exacte adres delen we met iedereen die zich heeft aangemeld.",

      "privacy.title": "Privacyverklaring",
      "privacy.body": "BRAVR Technologies BV (KVK 97265896) verwerkt de gegevens die je in dit formulier invult om contact met je op te nemen over de cursus en je reservering te beheren. We verkopen of delen je gegevens niet. Betalingen worden verwerkt door Stripe; wij zien je kaart- of bankgegevens nooit. Je kunt ons altijd vragen je gegevens in te zien of te verwijderen. Zie het volledige privacybeleid op <a href=\"https://bravr.io/#privacy\" target=\"_blank\" rel=\"noopener\">bravr.io</a>.",

      "footer.tag": "Master your instincts.",
      "footer.b2b": "Voor organisaties",

      "thanks.title": "Je plek is gereserveerd",
      "thanks.body": "Bedankt! We hebben je aanbetaling ontvangen. Je krijgt een betaalbewijs van Stripe per e-mail, en we nemen contact met je op zodra de cursusdata vastliggen.",
      "thanks.next": "Hoe gaat het verder?",
      "thanks.n1": "We bevestigen het rooster en de locatie.",
      "thanks.n2": "Jij kiest je tijdsloten.",
      "thanks.n3": "Je eerste sessie: kalibratie en je eerste trainingsset.",
      "thanks.back": "Terug naar home"
    }
  };

  const cfg = window.BRAVR_CONFIG || {};
  const KEY = "bravr-lang";

  function fill(s, lang) {
    return s.replace(/\{(\w+)\}/g, (m, k) => {
      const map = {
        deposit: cfg.DEPOSIT_AMOUNT, price: cfg.COURSE_PRICE,
        dates: cfg.START_DATES && cfg.START_DATES[lang],
        location: cfg.LOCATION && cfg.LOCATION[lang]
      };
      return map[k] != null ? map[k] : m;
    });
  }

  function detect() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "nl" || saved === "en") return saved;
    } catch (e) {}
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "nl" || q === "en") return q;
    return (navigator.language || "").toLowerCase().startsWith("nl") ? "nl" : "en";
  }

  let current = detect();

  function t(key) {
    const s = (STR[current] && STR[current][key]) || STR.en[key] || key;
    return fill(s, current);
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll("[data-cfg]").forEach(el => { el.textContent = cfg[el.dataset.cfg] || ""; });
    const title = document.querySelector("title[data-i18n-title]");
    if (title) document.title = t(title.dataset.i18nTitle);
    document.dispatchEvent(new CustomEvent("langchange", { detail: current }));
  }

  function setLang(lang) {
    current = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
  }

  window.I18N = { t, apply, setLang, get lang() { return current; } };

  document.addEventListener("DOMContentLoaded", () => {
    apply();
    document.querySelectorAll("[data-lang-toggle]").forEach(btn =>
      btn.addEventListener("click", () => setLang(current === "nl" ? "en" : "nl")));
  });
})();
