/*
 * English / Dutch for the BRAVR pilot page.
 *
 * The page is written in English. For Dutch, every English text in the page
 * template is looked up in NL below and swapped before the page is drawn.
 * To fix a Dutch line: find the English text on the left and change the
 * Dutch on the right. Keep any {{holes}} exactly as they are.
 * A line that is missing here simply stays in English.
 *
 * Language choice: ?lang=nl or ?lang=en in the URL, then the visitor's last
 * choice (the NL/EN button), then the browser language.
 */
(function () {
  'use strict';

  var NL = {
    // ---- head
    '__title': 'BRAVR · Pilot in Amsterdam: train je stressreactie',
    '__description': 'Een vierweekse pilot in Amsterdam die de stressreactie van je lichaam traint zoals een gym je spieren traint. VR en je eigen hartslag.',

    // ---- notice bar + header
    'Demo Activation coming soon • Join us at [PARTNER LOCATION]': 'Demo-activatie binnenkort • Kom langs bij [PARTNER LOCATION]',
    'Reserve a place': 'Reserveer een plek',
    '@Language': 'Taal',
    '@Notice': 'Mededeling',
    '@Close notice': 'Mededeling sluiten',

    // ---- hero
    'CHAOS IS INEVITABLE': 'CHAOS IS ONVERMIJDELIJK',
    'Panic is optional': 'Paniek is een keuze',
    "A four-week clinic that trains your body's stress response the way a gym trains muscle.": 'Een clinic van vier weken die de stressreactie van je lichaam traint zoals een gym je spieren traint.',
    'Watch the teaser · 1:02': 'Bekijk de teaser · 1:02',
    'High performers know...': 'Toppresteerders weten het...',
    'The last shot': 'Het laatste schot',
    'The Empty Stage': 'Het lege podium',
    'The One swing': 'Die ene swing',
    'The Big Moment': 'Het grote moment',
    'The Lock-in': 'De lock-in',
    '@BRAVR teaser video': 'BRAVR-teaservideo',
    '@Close video': 'Video sluiten',
    '@BRAVR teaser, one minute': 'BRAVR-teaser, één minuut',
    '@Moments that matter': 'Momenten die ertoe doen',
    '@Choose a moment': 'Kies een moment',

    // ---- when pressure rises
    'When pressure rises,': 'Als de druk stijgt,',
    'performance falls.': 'zakt je prestatie in.',
    '01 · Trigger': '01 · Trigger',
    'Pressure rises': 'De druk stijgt',
    '02 · Body': '02 · Lichaam',
    'Heart rate jumps, adrenaline flows': 'Je hartslag schiet omhoog, de adrenaline stroomt',
    '03 · Brain': '03 · Brein',
    'Pre-frontal cortex prioritises fast reactions over good decisions': 'De prefrontale cortex kiest voor snelle reacties in plaats van goede beslissingen',
    '04 · Result': '04 · Gevolg',
    'Performance drops, panic hits, you spiral out of control': 'Je prestatie zakt, de paniek slaat toe, je raakt de controle kwijt',
    'Rising panic ramps up the': 'Oplopende paniek voert de',
    'pressure': 'druk op',
    '…and the loop starts again, harder each time.': '…en de cirkel begint opnieuw, elke keer heftiger.',
    'This is why minds go blank, penalty kicks are missed, and fights are lost': 'Daarom slaat je hoofd dicht, worden penalty’s gemist en gaan gevechten verloren',
    'exactly when success matters most.': 'precies op het moment dat het er het meest toe doet.',
    '@The panic loop: each step feeds the next, and the last feeds back into the first': 'De paniekcirkel: elke stap voedt de volgende, en de laatste voedt weer de eerste',

    // ---- how it works
    'MASTER YOUR INSTINCTS': 'BEHEERS JE INSTINCT',
    'A gym for your': 'Een gym voor je',
    'stress response.': 'stressreactie.',
    'Gear up.': 'Gear up.',
    'A heart rate sensor and a headset, set up in minutes from one plug-and-play unit.': 'Een hartslagsensor en een headset, in een paar minuten klaar vanuit één plug-and-play-unit.',
    'Feel the pressure.': 'Voel de druk.',
    'The virtual environment stimulates your stress response, putting you in a reactive state.': 'De virtuele omgeving prikkelt je stressreactie en brengt je in een reactieve staat.',
    'Take control.': 'Neem de controle.',
    'We measure and reintegrate your response into the world. Panic causes tunnel vision, control reduces it - so you can train yourself to reactively manage stress.': 'We meten je reactie en verwerken die in de wereld om je heen. Paniek geeft tunnelvisie, controle verkleint die - zo train je jezelf om stress direct te reguleren.',
    'Headset · Immersion': 'Headset · Immersie',
    'Sensor belt · HRV': 'Sensorband · HRV',
    'Stressed': 'Gestrest',
    'Steady': 'Stabiel',
    '@How it works, three stages': 'Hoe het werkt, in drie fases',
    '@A heart-rate chest strap being fitted under a sweater': 'Een hartslag-borstband wordt onder een trui aangebracht',
    '@A woman in a VR headset holding both controllers': 'Een vrouw met een VR-headset en twee controllers',
    '@Two views inside the headset playing together: on top, stressed, the view is dark and narrowed; below, steady, the corridor is bright and clear': 'Twee beelden in de headset naast elkaar: boven, gestrest, is het beeld donker en vernauwd; onder, stabiel, is de gang licht en helder',
    '@One more rep': 'Nog één herhaling',

    // ---- your data
    'Your data': 'Jouw data',
    'See what happened': 'Zie wat er gebeurde',
    'Learn what to Change.': 'Leer wat je kunt veranderen.',
    'Critical': 'Kritiek',
    'Limited': 'Beperkt',
    'Capable': 'Bekwaam',
    'Ready': 'Klaar',
    'Elite': 'Elite',
    'recovering': 'herstel',
    'faltering': 'terugval',
    'BioScore, UK police pilot 2026, participant workout report': 'BioScore, pilot met de Britse politie 2026, workoutrapport van een deelnemer',
    'See where your stress response faltered, and how fast you recovered.': 'Zie waar je stressreactie haperde, en hoe snel je herstelde.',
    '@BRAVR BioSignal grades, from lowest to highest: Critical, Limited, Capable, Ready, Elite. This workout averaged Ready.': 'BRAVR BioSignal-niveaus, van laag naar hoog: Kritiek, Beperkt, Bekwaam, Klaar, Elite. Deze workout kwam gemiddeld uit op Klaar.',
    '@A workout report showing the BioScore line over four rounds, with a 65% average line': 'Een workoutrapport met de BioScore-lijn over vier rondes, met een gemiddelde lijn op 65%',

    // ---- testimonials
    'Some people are collected under pressure,': 'Sommige mensen blijven kalm onder druk,',
    'most feel a hurricane in their chest threatening to overwhelm them.': 'de meesten voelen een orkaan in hun borst die hen dreigt te overspoelen.',
    'Which do you want to be?': 'Wie wil jij zijn?',
    'UK Police · 2026': 'Britse politie · 2026',
    'Tested where pressure is the job': 'Getest waar druk bij het werk hoort',
    '“If it wasn\'t for [BRAVR], I wouldn\'t practise the breathing skill.”': '“Zonder [BRAVR] zou ik de ademhalingstechniek niet oefenen.”',
    'Participant, UK police pilot, 2026': 'Deelnemer, pilot Britse politie, 2026',
    '“I regulate in preparation, like before assessments.”': '“Ik reguleer ter voorbereiding, bijvoorbeeld vóór beoordelingen.”',
    '“I was able to step back, look around, understand the broader team\'s positioning, and take decisive action.”': '“Ik kon een stap terug doen, om me heen kijken, de positie van het hele team overzien en daadkrachtig handelen.”',
    'Participant, describing a moment in a live exercise, UK police pilot, 2026': 'Deelnemer, over een moment tijdens een live-oefening, pilot Britse politie, 2026',
    '@Police officers gathered round a BRAVR unit during a briefing at the UK pilot. Faces and identifying details are blurred.': 'Politieagenten rond een BRAVR-unit tijdens een briefing bij de Britse pilot. Gezichten en herkenbare details zijn vervaagd.',
    '@An officer in a VR headset trains inside a taped square on the floor while colleagues and BRAVR staff look on. Faces and identifying details are blurred.': 'Een agent met een VR-headset traint binnen een afgeplakt vierkant op de vloer terwijl collega’s en BRAVR-medewerkers toekijken. Gezichten en herkenbare details zijn vervaagd.',
    '@An officer in a VR headset mid-session while the rest of the team gathers round the BRAVR unit. Faces and identifying details are blurred.': 'Een agent met een VR-headset midden in een sessie terwijl de rest van het team rond de BRAVR-unit staat. Gezichten en herkenbare details zijn vervaagd.',
    '@Quotes': 'Citaten',
    '@Show quote 1 of 3': 'Toon citaat 1 van 3',
    '@Show quote 2 of 3': 'Toon citaat 2 van 3',
    '@Show quote 3 of 3': 'Toon citaat 3 van 3',

    // ---- booking
    'RESERVE A PLACE': 'RESERVEER EEN PLEK',
    'Be the First,': 'Wees de eerste,',
    'and meet the others.': 'en ontmoet de rest.',
    'Same time every week, or pick each week yourself. Reserve with a small deposit; the rest is due on the day of your first session.': 'Elke week hetzelfde tijdstip, of kies zelf per week. Reserveer met een kleine aanbetaling; de rest betaal je op de dag van je eerste sessie.',
    '[PARTNER GYM] members get [X]% off': 'Leden van [PARTNER GYM] krijgen [X]% korting',
    'Enter your member code at checkout and the discount comes off your pilot price. [X] of 30 places left.': 'Vul je ledencode in bij het afrekenen en de korting gaat van je pilotprijs af. Nog [X] van de 30 plekken vrij.',
    'Got a community code? [X]% off': 'Heb je een communitycode? [X]% korting',
    "Enter your community code at checkout. One code per booking: it can't be combined with the member discount.": 'Vul je communitycode in bij het afrekenen. Eén code per boeking: niet te combineren met de ledenkorting.',
    'Length': 'Duur',
    'Pattern': 'Patroon',
    'Select a workout': 'Kies je workout',
    'Select a slot': 'Kies je tijd',
    'Add your details': 'Vul je gegevens in',
    '{{w.time}} a week · 4 weeks': '{{w.time}} per week · 4 weken',
    '€25 today · €{{w.due}} by your first session': '€25 vandaag · €{{w.due}} vóór je eerste sessie',
    'Dashed slots are reserved.': 'Gestippelde tijden zijn gereserveerd.',
    'Double workouts fill two slots back-to-back.': 'Dubbele workouts vullen twee tijden achter elkaar.',
    '“Single only” – only a single workout can be selected.': '“Alleen enkel” – hier kun je alleen een enkele workout kiezen.',
    'Times shown are Amsterdam time.': 'Alle tijden zijn Amsterdamse tijd.',
    'Pilot price': 'Pilotprijs',
    'Reserve now': 'Nu reserveren',
    'Due by your first session': 'Te betalen vóór je eerste sessie',
    'Reserve my place for €25': 'Reserveer mijn plek voor €25',
    'Deposits are refundable up to 7 days before your first session.': 'Je aanbetaling krijg je terug tot 7 dagen voor je eerste sessie.',
    'Go or no-go: 14 December': 'Go of no-go: 14 december',
    'The pilot runs if [N] people book by 14 December. If not, your €25 comes straight back.': 'De pilot gaat door als [N] mensen vóór 14 december boeken. Zo niet, dan krijg je je €25 direct terug.',
    '[X] of [N]': '[X] van [N]',
    'booked so far': 'tot nu toe geboekt',
    '@Session length': 'Sessieduur',
    '@Booking pattern': 'Boekingspatroon',
    '@Choose the week to book': 'Kies de week die je wilt boeken',
    '@[X] of [N] bookings so far': '[X] van [N] boekingen tot nu toe',

    // ---- checkout
    'Checkout': 'Afrekenen',
    'Confirm your place': 'Bevestig je plek',
    'A few details, a quick health check, and a €25 deposit. Fully refundable up to 7 days before your first session.': 'Een paar gegevens, een korte gezondheidscheck en een aanbetaling van €25. Volledig terug te krijgen tot 7 dagen voor je eerste sessie.',
    "You haven't picked your slot yet. Choose a workout and a slot first, then come back here.": 'Je hebt nog geen tijd gekozen. Kies eerst een workout en een tijd, en kom dan hier terug.',
    'Choose your slot': 'Kies je tijd',
    'Someone just booked that slot. Nothing was charged. Pick another time and you are back on track.': 'Iemand heeft die tijd net geboekt. Er is niets afgeschreven. Kies een andere tijd en je kunt weer verder.',
    '1 · Your details': '1 · Je gegevens',
    'Name': 'Naam',
    'Email': 'E-mail',
    'Phone (optional)': 'Telefoon (optioneel)',
    'Where do you train now?': 'Waar train je nu?',
    'Member code': 'Ledencode',
    'Community code': 'Communitycode',
    '@Gym, club or studio': 'Gym, club of studio',
    '@[PARTNER] code': '[PARTNER]-code',
    '@Optional': 'Optioneel',
    '2 · Quick health check': '2 · Korte gezondheidscheck',
    'None of these apply to me: a history of seizures or epilepsy, a heart condition or pacemaker, pregnancy, a concussion in the last 3 months, or current treatment for trauma or a serious mental health condition.': 'Niets hiervan is op mij van toepassing: aanvallen of epilepsie in het verleden, een hartaandoening of pacemaker, zwangerschap, een hersenschudding in de afgelopen 3 maanden, of een lopende behandeling voor trauma of een ernstige psychische aandoening.',
    'If one does, email': 'Is er iets van toepassing? Mail dan naar',
    'before booking and we\'ll talk it through.': 'voordat je boekt, dan bespreken we het samen.',
    'Do you take medication that affects your heart rhythm, like beta blockers or ADHD stimulants? It helps us read your data correctly.': 'Gebruik je medicijnen die je hartritme beïnvloeden, zoals bètablokkers of ADHD-medicatie? Dan kunnen we je data goed lezen.',
    '3 · Consent and payment': '3 · Toestemming en betaling',
    'I agree that BRAVR records my heart-rate data during sessions to run the training and give me my results, as set out in the': 'Ik ga ermee akkoord dat BRAVR tijdens de sessies mijn hartslaggegevens vastlegt om de training te geven en mij mijn resultaten te laten zien, zoals beschreven in de',
    'privacy notice': 'privacyverklaring',
    '. Anonymised group results may be used to improve BRAVR.': '. Geanonimiseerde groepsresultaten kunnen worden gebruikt om BRAVR te verbeteren.',
    'Pay €25 deposit with {{payLabel}}': 'Betaal €25 aanbetaling met {{payLabel}}',
    "You'll be sent to a secure payment page. The remaining €{{due}} is due at your first session.": 'Je gaat naar een beveiligde betaalpagina. De resterende €{{due}} betaal je bij je eerste sessie.',
    'Your booking': 'Je boeking',
    'Deposit today': 'Aanbetaling vandaag',
    'Change workout or slot': 'Workout of tijd wijzigen',
    'Privacy notice': 'Privacyverklaring',
    'BRAVR Technologies BV (KvK 97265896) processes the details you enter in this form to contact you about the course and to manage your reservation. We do not sell or share your data. Payments are processed by Stripe; we never see your card or bank details. You can ask us to view or delete your data at any time. See the full privacy policy on': 'BRAVR Technologies BV (KvK 97265896) verwerkt de gegevens die je in dit formulier invult om contact met je op te nemen over de training en je reservering te beheren. We verkopen of delen je gegevens niet. Betalingen lopen via Stripe; wij zien je kaart- of bankgegevens nooit. Je kunt ons altijd vragen je gegevens in te zien of te verwijderen. Lees de volledige privacyverklaring op',
    '@Payment method': 'Betaalmethode',
    '@Booking summary': 'Overzicht van je boeking',

    // ---- confirmation
    "You're in.": 'Je bent erbij.',
    'Booking {{bookingRef}} · deposit €25 paid': 'Boeking {{bookingRef}} · aanbetaling €25 betaald',
    'What happens next': 'Wat er nu gebeurt',
    'A confirmation is on its way to {{fEmail}}.': 'Er is een bevestiging onderweg naar {{fEmail}}.',
    'First session: {{firstText}}. [PARTNER GYM], [ADDRESS], Amsterdam': 'Eerste sessie: {{firstText}}. [PARTNER GYM], [ADDRESS], Amsterdam',
    'Wear comfortable clothes. Glasses are fine. Arrive 10 minutes early for setup.': 'Draag comfortabele kleding. Een bril is geen probleem. Kom 10 minuten eerder voor de set-up.',
    '€{{due}} is due at your first session. Change of plan? Full refund up to 7 days before.': '€{{due}} betaal je bij je eerste sessie. Plannen veranderd? Je krijgt alles terug tot 7 dagen ervoor.',
    'Add to calendar': 'Zet in je agenda',
    'Back to the form': 'Terug naar het formulier',

    // ---- questions
    'Questions': 'Vragen',
    'Who is this course for?': 'Voor wie is deze training?',
    'Anyone 18+ who wants to handle pressure better: professionals, students, performers, athletes, parents. No VR experience needed.': 'Voor iedereen van 18+ die beter met druk wil omgaan: professionals, studenten, performers, sporters, ouders. Ervaring met VR is niet nodig.',
    'Will I get motion sickness?': 'Word ik misselijk van VR?',
    'The scenarios are designed for minimal motion. Sessions are short, and the trainer stops if you feel unwell.': 'De scenario’s zijn ontworpen met zo min mogelijk beweging. De sessies zijn kort, en de trainer stopt als je je niet goed voelt.',
    'Is VR safe for me?': 'Is VR veilig voor mij?',
    'For most people, yes. If you have photosensitive epilepsy, a heart condition, or are pregnant, please consult your doctor before signing up.': 'Voor de meeste mensen wel. Heb je fotosensitieve epilepsie of een hartaandoening, of ben je zwanger? Overleg dan eerst met je arts voordat je je aanmeldt.',
    'Can I get my deposit back?': 'Krijg ik mijn aanbetaling terug?',
    'Yes. The deposit is fully refundable until the course schedule is confirmed. After that it is deducted from the course price.': 'Ja. Je krijgt de aanbetaling volledig terug tot het rooster definitief is. Daarna wordt die van de prijs afgetrokken.',
    'What happens to my data?': 'Wat gebeurt er met mijn gegevens?',
    'Your signup details are used only to contact you about this course. During training, heart data is stored under a username, not your name.': 'Je aanmeldgegevens gebruiken we alleen om contact met je op te nemen over deze training. Tijdens de training worden hartgegevens opgeslagen onder een gebruikersnaam, niet onder je naam.',
    'Where exactly is it?': 'Waar is het precies?',
    "At [PARTNER GYM], [ADDRESS], Amsterdam. We'll share the exact details with everyone who signed up.": 'Bij [PARTNER GYM], [ADDRESS], Amsterdam. We sturen de precieze details naar iedereen die zich heeft aangemeld.',

    // ---- footer
    'Privacy policy': 'Privacybeleid',

    // ---- text the page builds while you use it (booking grid, checkout)
    'Single · 30 min': 'Enkel · 30 min',
    'Double · 60 min': 'Dubbel · 60 min',
    'Same slot each week': 'Elke week dezelfde tijd',
    'Pick each week': 'Per week kiezen',
    'Week': 'Week',
    'Wk': 'Wk',
    'Scroll': 'Scroll',
    'Full': 'Vol',
    'Single only': 'Alleen enkel',
    'Selected': 'Gekozen',
    'Open': 'Vrij',
    'Not chosen': 'Niet gekozen',
    'No slot chosen yet.': 'Nog geen tijd gekozen.',
    'Choose a slot first': 'Kies eerst een tijd',
    'Session': 'Sessie',
    'Double · 60 min × 4': 'Dubbel · 60 min × 4',
    'Single · 30 min × 4': 'Enkel · 30 min × 4',
    'Weekly slots': 'Vaste tijden',
    'Weekly slot': 'Vaste tijd',
    'Double': 'Dubbel',
    'Single': 'Enkel',
    '60 minutes a week, four weeks': '60 minuten per week, vier weken',
    '30 minutes a week, four weeks': '30 minuten per week, vier weken',
    'Two workouts per session, plus a data review with your coach.': 'Twee workouts per sessie, plus een data-review met je coach.',
    'One focused workout per session.': 'Eén gerichte workout per sessie.',
    'No': 'Nee',
    'Yes': 'Ja',
    "I'd rather not say": 'Zeg ik liever niet',
    'Card': 'Kaart',
    'card': 'kaart',
    'Member code in use. Clear it to use a community code instead.': 'Ledencode ingevuld. Wis die om een communitycode te gebruiken.',
    'Community code in use. Clear it to use a member code instead.': 'Communitycode ingevuld. Wis die om een ledencode te gebruiken.',
    'One code per booking: member or community, not both.': 'Eén code per boeking: leden- of communitycode, niet allebei.',
    'Stage': 'Fase',
    'Stage 1: gear up': 'Fase 1: gear up',
    'Stage 2: feel the pressure': 'Fase 2: voel de druk',
    'Stage 3: take control': 'Fase 3: neem de controle',
    'Heart rate variability tells you, second by second, how stressed your body actually is.': 'Hartslagvariabiliteit laat seconde voor seconde zien hoe gestrest je lichaam echt is.',
    'Actual view inside the headset. The steadier you are, the clearer the world.': 'Het echte beeld in de headset. Hoe stabieler je bent, hoe helderder de wereld.',
    'Using specific regulation techniques, your stress response gets better with practise.': 'Met gerichte reguleringstechnieken wordt je stressreactie beter met oefening.',
    ' at ': ' om ',
    ' to ': ' t/m ',
    'not available': 'niet beschikbaar',
    'full': 'vol',
    'no free slot next to it for a double': 'geen vrije tijd ernaast voor een dubbel',
    'selected': 'gekozen',
    ', together with ': ', samen met ',
    'open': 'vrij',
    ', books two slots': ', boekt twee tijden',
    'your name': 'je naam',
    'a valid email': 'een geldig e-mailadres',
    'the health check': 'de gezondheidscheck',
    'the medication question': 'de vraag over medicijnen',
    'your consent': 'je toestemming',
    'Still needed: ': 'Nog nodig: ',
    'Sending…': 'Bezig met versturen…',
    'Something went wrong sending your booking. Try again, or email build@bravr.io.': 'Er ging iets mis bij het versturen van je boeking. Probeer het opnieuw, of mail naar build@bravr.io.',
    'Mon': 'ma', 'Tue': 'di', 'Wed': 'wo', 'Thu': 'do', 'Fri': 'vr', 'Sat': 'za',
    'Mondays': 'Elke maandag', 'Tuesdays': 'Elke dinsdag', 'Wednesdays': 'Elke woensdag', 'Thursdays': 'Elke donderdag', 'Fridays': 'Elke vrijdag', 'Saturdays': 'Elke zaterdag',
    'Jan': 'jan', 'Feb': 'feb', 'Mar': 'mrt',

    // ---- thanks.html (fallback page after payment)
    'Your place is reserved': 'Je plek is gereserveerd',
    'Thanks. Your deposit is in and your place on the pilot is held. A confirmation from Stripe is on its way to your inbox.': 'Bedankt. Je aanbetaling is binnen en je plek in de pilot staat vast. Er is een bevestiging van Stripe onderweg naar je inbox.',
    'We confirm the go or no-go on 14 December. If the pilot does not run, your €25 comes straight back.': 'Op 14 december laten we weten of de pilot doorgaat. Gaat hij niet door, dan krijg je je €25 direct terug.',
    'Questions? Email build@bravr.io.': 'Vragen? Mail naar build@bravr.io.',
    'Back to the page': 'Terug naar de pagina'
  };

  function detect() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q === 'nl' || q === 'en') { try { localStorage.setItem('bravr-lang', q); } catch (e) {} return q; }
    } catch (e) {}
    try { var s = localStorage.getItem('bravr-lang'); if (s === 'nl' || s === 'en') return s; } catch (e) {}
    return /^nl\b/i.test(navigator.language || '') ? 'nl' : 'en';
  }

  var lang = detect();
  var ATTRS = ['aria-label', 'alt', 'placeholder', 'title'];

  function t(en) {
    if (lang !== 'nl') return en;
    return Object.prototype.hasOwnProperty.call(NL, en) ? NL[en] : en;
  }
  function tAttr(en) {
    if (lang !== 'nl') return en;
    return Object.prototype.hasOwnProperty.call(NL, '@' + en) ? NL['@' + en] : t(en);
  }

  // Translate a DOM tree (the page template, or a plain page like thanks.html) in place.
  function translateTree(root) {
    if (lang !== 'nl') return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 3) {
        var raw = n.data, core = raw.trim();
        if (!core) continue;
        if (Object.prototype.hasOwnProperty.call(NL, core)) n.data = raw.replace(core, function () { return NL[core]; });
      } else {
        for (var i = 0; i < ATTRS.length; i++) {
          var v = n.getAttribute(ATTRS[i]);
          if (v && v.indexOf('{{') < 0) n.setAttribute(ATTRS[i], tAttr(v));
        }
        if (n.tagName === 'TEMPLATE') translateTree(n.content);
      }
    }
  }

  // Reloads the page in the other language and keeps the visitor where they were.
  // (Assigning location.href would only jump to an anchor like #book if the URL has one, without reloading.)
  function setLang(l) {
    if (l !== 'nl' && l !== 'en') return;
    try { localStorage.setItem('bravr-lang', l); } catch (e) {}
    try {
      var u = new URL(location.href);
      u.searchParams.delete('lang'); u.hash = '';
      history.replaceState(null, '', u.pathname + u.search);
    } catch (e) {}
    location.reload();
  }

  document.documentElement.lang = lang;
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest && e.target.closest('[data-lang]');
    if (b) { e.preventDefault(); if (b.getAttribute('data-lang') !== lang) setLang(b.getAttribute('data-lang')); }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var bs = document.querySelectorAll('[data-lang]');
    for (var k = 0; k < bs.length; k++) bs[k].setAttribute('aria-pressed', bs[k].getAttribute('data-lang') === lang ? 'true' : 'false');
  });
  if (lang === 'nl') {
    document.addEventListener('DOMContentLoaded', function () {
      if (NL.__title && document.body && document.body.hasAttribute('data-page')) document.title = NL.__title;
      var d = document.querySelector('meta[name="description"]');
      if (d && NL.__description && document.body.hasAttribute('data-page')) d.setAttribute('content', NL.__description);
    });
  }

  window.I18N = { lang: lang, t: t, translateTree: translateTree, setLang: setLang };
})();
