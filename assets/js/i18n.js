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
    'Some people are collected under pressure,': 'Sommige mensen blijven beheerst onder druk,',
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
    'BRAVR Technologies BV (KvK 97265896) processes the details you enter in this form to contact you about the course and to manage your reservation. We do not sell or share your data. Payments are processed by Stripe; we never see your card or bank details. You can ask us to view or delete your data at any time. Read the full': 'BRAVR Technologies BV (KvK 97265896) verwerkt de gegevens die je in dit formulier invult om contact met je op te nemen over de training en je reservering te beheren. We verkopen of delen je gegevens niet. Betalingen lopen via Stripe; wij zien je kaart- of bankgegevens nooit. Je kunt ons altijd vragen je gegevens in te zien of te verwijderen. Lees het volledige',
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


    // ---- top navigation, footer, sub pages
    'About': 'Over ons',
    'Research': 'Onderzoek',
    'Contact': 'Contact',
    'privacy policy': 'privacybeleid',
    '@Main': 'Hoofdmenu',
    '@BRAVR home': 'BRAVR-home',
    // contact page
    'Let’s': 'Laten we',
    'talk.': 'praten.',
    'Questions about the Amsterdam pilot, a demo for your team, a partnership or press: send us a message and we’ll reply within one working day.': 'Vragen over de pilot in Amsterdam, een demo voor je team, een samenwerking of pers: stuur ons een bericht en je hoort binnen één werkdag van ons.',
    'What is it about?': 'Waar gaat het over?',
    '@What is it about?': 'Waar gaat het over?',
    'Pilot booking': 'Pilotboeking',
    'Demo': 'Demo',
    'Partnership': 'Samenwerking',
    'Press': 'Pers',
    'Careers': 'Werken bij',
    'Other': 'Anders',
    'Organisation (optional)': 'Organisatie (optioneel)',
    'Message': 'Bericht',
    '@How can we help?': 'Waarmee kunnen we helpen?',
    'BRAVR may use these details to reply to my message, as set out in the': 'BRAVR mag deze gegevens gebruiken om op mijn bericht te reageren, zoals beschreven in het',
    'a message': 'een bericht',
    'Send message': 'Bericht versturen',
    'Something went wrong sending your message. Try again, or email build@bravr.io.': 'Er ging iets mis bij het versturen van je bericht. Probeer het opnieuw, of mail naar build@bravr.io.',
    'Message sent.': 'Bericht verstuurd.',
    'Thanks for getting in touch. We usually reply within one working day.': 'Bedankt voor je bericht. Meestal reageren we binnen één werkdag.',
    'Send another message': 'Nog een bericht versturen',
    '@Other ways to reach us': 'Andere manieren om ons te bereiken',
    'LinkedIn': 'LinkedIn',
    'BRAVR on LinkedIn ↗': 'BRAVR op LinkedIn ↗',
    'Company': 'Bedrijf',
    'Reply time': 'Reactietijd',
    'Within one working day': 'Binnen één werkdag',
    'Joining the pilot?': 'Doe je mee aan de pilot?',
    'Book straight from the pilot page. It takes about two minutes.': 'Boek direct op de pilotpagina. Dat kost ongeveer twee minuten.',

    // ---- About page, current board (hero, story, values, people)
    "THE NEXT STEP TO": "DE VOLGENDE STAP:",
    "For high performers who others count on under pressure, BRAVR trains your stress response so you stay clear-headed when it matters. Unlike meditation apps, you practice under realistic pressure while seeing your body respond live.": "Voor high performers op wie anderen rekenen als de druk oploopt. BRAVR traint je stressreactie, zodat je helder blijft denken wanneer het ertoe doet. Anders dan bij meditatie-apps oefen je onder realistische druk en zie je live hoe je lichaam reageert.",
    "ABOUT": "OVER ONS",
    "Our STORY": "Ons VERHAAL",
    "We’ve all seen what pressure can do. It clouds judgment, disrupts focus, and gets in the way of performing at your best. Over time, it takes a toll on your body and mind.": "We hebben allemaal gezien wat druk met je doet. Het vertroebelt je oordeel, verstoort je focus en staat je beste prestatie in de weg. Op den duur eist het zijn tol van lichaam en geest.",
    "@A child’s drawing that says Welkom thuis papa: welcome home, dad": "Een kindertekening met de tekst Welkom thuis papa",
    "“Welkom thuis papa”: welcome home, dad.": "“Welkom thuis papa”.",
    "As parents of young children we realised being at your best when you are at your worst is a skill, not a personality trait. And like any skill, it can be trained.": "Als ouders van jonge kinderen beseften we dat op je best zijn wanneer je op je slechtst bent een vaardigheid is, geen karaktertrek. En zoals elke vaardigheid kun je het trainen.",
    "A skill,": "Een vaardigheid,",
    "not a personality trait.": "geen karaktertrek.",
    "We started BRAVR to make training that skill something you can do anywhere, measure properly and repeat until it sticks.": "We zijn BRAVR begonnen om het trainen van die vaardigheid iets te maken wat je overal kunt doen, goed kunt meten en kunt herhalen tot het blijft hangen.",
    "@The three BRAVR founders smiling behind a BRAVR box": "De drie oprichters van BRAVR lachend achter een BRAVR-box",
    "@The BRAVR team in a working session around a table": "Het BRAVR-team in een werksessie rond een tafel",
    "The founders with the first BRAVR box, and the team at work.": "De oprichters met de eerste BRAVR-box, en het team aan het werk.",
    "WHAT WE DO DIFFERENTLY": "WAT WE ANDERS DOEN",
    "Our edge": "Onze voorsprong",
    "We believe in holding a standard of excellence - in care, design, and technology, so that we can deliver training that builds confidence and personal ownership.": "We houden een hoge standaard aan in zorg, ontwerp en technologie, zodat onze training zelfvertrouwen en eigenaarschap opbouwt.",
    "Evidence-based": "Wetenschappelijk onderbouwd",
    "Our method comes from published work on stress-inducing VR, live biometrics, heart-rate variability and game-based biofeedback.": "Onze methode komt uit gepubliceerd onderzoek naar stressopwekkende VR, live biometrie, hartslagvariabiliteit en biofeedback via games.",
    "Excellence": "Excellentie",
    "We believe in holding a standard of excellence in Design, Technology and Service.": "We houden een hoge standaard aan in ontwerp, technologie en service.",
    "Empowerment": "Eigen kracht",
    "Every design decision helps build confidence and personal ownership over your training.": "Elke ontwerpkeuze helpt je zelfvertrouwen en eigenaarschap over je training op te bouwen.",
    "WHO WE ARE": "WIE WE ZIJN",
    "OUR team": "ONS team",
    "Founders": "Oprichters",
    "The team": "Het team",
    "Co-founder · Engineering": "Medeoprichter · Engineering",
    "Co-founder · Creative": "Medeoprichter · Creatief",
    "Co-founder · Operations": "Medeoprichter · Operations",
    "@Portrait of Cornell A. Wilson Jr.": "Portret van Cornell A. Wilson Jr.",
    "@Portrait of Scott Williamson": "Portret van Scott Williamson",
    "@Portrait of Kelli Dunlap": "Portret van Kelli Dunlap",
    "@Portrait of Egi Cuijten-Niks": "Portret van Egi Cuijten-Niks",

    // ---- landing page questions taken over from the About page
    "No. We bring everything you need for a session: headset, heart-rate sensor and software.": "Nee. We nemen alles mee wat je nodig hebt voor een sessie: headset, hartslagsensor en software.",

    // ---- About, Research, Privacy, Thank-you and 404 pages (keep in step with the design boards)
    "Panic is": "Paniek is",
    "Optional.": "een keuze.",
    "BRAVR Technologies BV · KvK 97265896": "BRAVR Technologies BV · KvK 97265896",
    "About BRAVR": "Over BRAVR",
    "Master your": "Beheers je",
    "instincts.": "instinct.",
    "BRAVR Technologies is a Dutch VR startup. We combine virtual reality with live heart data to train people to stay in control when stress spikes: first soldiers and emergency responders, now anyone who performs under pressure.": "BRAVR Technologies is een Nederlandse VR-startup. We combineren virtual reality met live hartdata om mensen te trainen de controle te houden als de stress piekt: eerst militairen en hulpverleners, nu iedereen die onder druk moet presteren.",
    "Our story": "Ons verhaal",
    "Pressure is the job.": "Druk hoort bij het werk.",
    "#research-pressure": "druk bij het werk hoort.",
    "Panic shouldn’t be.": "Paniek niet.",
    "An uncontrolled stress response hurts performance, and in some jobs it costs lives. Over years, it also wears people down: exhaustion, burnout, PTSD.": "Een ongecontroleerde stressreactie kost prestaties, en in sommige beroepen levens. Op de lange duur slijt het mensen ook: uitputting, burn-out, PTSS.",
    "Stress exposure training works, but it is expensive, hard to organise and judged by eye. We started BRAVR to make it something you can do anywhere, measure properly and repeat until it sticks.": "Stressblootstellingstraining werkt, maar is duur, lastig te organiseren en wordt op het oog beoordeeld. We zijn BRAVR begonnen om er iets van te maken dat je overal kunt doen, goed kunt meten en kunt herhalen tot het blijft hangen.",
    "[Placeholder: founding moment. When and why the founders started BRAVR, in two or three sentences.]": "[Placeholder: het begin. Wanneer en waarom de oprichters BRAVR zijn gestart, in twee of drie zinnen.]",
    "@An officer training in a BRAVR headset while colleagues watch. Faces are blurred.": "Een agent traint met een BRAVR-headset terwijl collega’s toekijken. Gezichten zijn vervaagd.",
    "Our approach": "Onze aanpak",
    "Stress training,": "Stresstraining,",
    "fixed.": "opgelost.",
    "Traditional stress exposure and inoculation training (SET/SIT) has three problems. BRAVR is built to solve each one.": "Traditionele stressblootstellings- en stressinoculatietraining (SET/SIT) heeft drie problemen. BRAVR is gebouwd om ze alle drie op te lossen.",
    "Today: expensive": "Nu: duur",
    "Affordable": "Betaalbaar",
    "High per-person and logistics costs keep it rare. One BRAVR box trains a whole team.": "Hoge kosten per persoon en veel logistiek maken het zeldzaam. Eén BRAVR-box traint een heel team.",
    "Today: inaccessible": "Nu: ontoegankelijk",
    "Anywhere": "Overal",
    "Venues, travel and scheduling limit it to specialist units. BRAVR needs a 2 × 2 m space and a plug.": "Locaties, reizen en planning beperken het tot gespecialiseerde eenheden. BRAVR heeft 2 × 2 m ruimte en een stopcontact nodig.",
    "Today: imprecise": "Nu: onnauwkeurig",
    "Measured": "Gemeten",
    "Progress is judged by observation. BRAVR reads your heart-rate variability, second by second.": "Vooruitgang wordt op het oog beoordeeld. BRAVR leest je hartslagvariabiliteit, seconde voor seconde.",
    "Recognised by": "Erkend door",
    "F6S · Top wellness startup NL": "F6S · Top wellness-startup NL",
    "UK police pilot 2026": "Pilot Britse politie 2026",
    "Our difference": "Ons verschil",
    "Four things we": "Vier dingen die we",
    "do differently.": "anders doen.",
    "Real stress": "Echte stress",
    "Safely triggered": "Veilig opgewekt",
    "Your body": "Je lichaam",
    "Live heart data": "Live hartdata",
    "Every session": "Elke sessie",
    "One box": "Eén box",
    "Plug and play": "Plug-and-play",
    "Vision": "Visie",
    "Effective mental readiness training at national scale.": "Effectieve mentale paraatheidstraining op landelijke schaal.",
    "Mission": "Missie",
    "Train people to stay in control under acute stress, with VR and their own heartbeat.": "Mensen trainen om de controle te houden onder acute stress, met VR en hun eigen hartslag.",
    "Strategy": "Strategie",
    "[Placeholder: one-sentence strategy statement.]": "[Placeholder: strategie in één zin.]",
    "What we stand for": "Waar we voor staan",
    "Our Values": "Onze waarden",
    "[Placeholder: one line introducing the values.]": "[Placeholder: één regel die de waarden introduceert.]",
    "[Placeholder: one sentence about this value.]": "[Placeholder: één zin over deze waarde.]",
    "[Value 1]": "[Waarde 1]",
    "[Value 2]": "[Waarde 2]",
    "[Value 3]": "[Waarde 3]",
    "[Value 4]": "[Waarde 4]",
    "[Value 5]": "[Waarde 5]",
    "Built on research": "Gebouwd op onderzoek",
    "15+ years of science": "15+ jaar wetenschap",
    "BRAVR applies principles from more than fifteen years of academic research into stress-inducing VR, real-time biometrics, heart-rate variability and game-driven biofeedback.": "BRAVR past principes toe uit meer dan vijftien jaar wetenschappelijk onderzoek naar stressopwekkende VR, realtime biometrie, hartslagvariabiliteit en biofeedback via games.",
    "Every workout is designed to trigger a real stress response safely, measure it live, and teach your body to take back control faster each time.": "Elke workout is ontworpen om veilig een echte stressreactie op te wekken, die live te meten en je lichaam te leren elke keer sneller de controle terug te pakken.",
    "See the research": "Bekijk het onderzoek",
    "years of research behind the method": "jaar onderzoek achter de methode",
    "peer-reviewed studies we build on": "peer-reviewed studies waarop we bouwen",
    "pre-seed raised, August 2025": "pre-seed opgehaald, augustus 2025",
    "first police pilot, UK": "eerste politiepilot, VK",
    "The people": "De mensen",
    "The team behind": "Het team achter",
    "Engineers, designers, researchers and one very good dog.": "Engineers, ontwerpers, onderzoekers en één hele goede hond.",
    "Engineering": "Engineering",
    "Full-stack engineer turned award-winning game and VR developer, specialised in bioinformatics.": "Full-stack engineer die prijswinnend game- en VR-ontwikkelaar werd, gespecialiseerd in bio-informatica.",
    "Creative": "Creatief",
    "Designer and maker of applied behavioural-science games for research and mental healthcare for 15+ years.": "Al 15+ jaar ontwerper en maker van games op basis van gedragswetenschap, voor onderzoek en de geestelijke gezondheidszorg.",
    "Operations": "Operations",
    "From startup to scale-up to IPO; helps high-performing teams scale.": "Van startup via scale-up naar beursgang; helpt goed presterende teams groeien.",
    "Audio": "Audio",
    "Sonic artist and anthropologist.": "Geluidskunstenaar en antropoloog.",
    "Master’s student in Brain and Cognition at the University of Amsterdam.": "Masterstudent Brain and Cognition aan de Universiteit van Amsterdam.",
    "Joy": "Plezier",
    "Company dog. Chief morale officer.": "Bedrijfshond. Hoofd moraal.",
    "What about you?": "En jij?",
    "We’re growing. If you want to help people perform under pressure, get in touch.": "We groeien. Wil je mensen helpen presteren onder druk? Neem contact op.",
    "Contact us →": "Neem contact op →",
    "Advisors": "Adviseurs",
    "Major General, USMC (Retired)": "Generaal-majoor, USMC (b.d.)",
    "PSLM, MSyl · former National Chief Firearms Instructor and police leadership trainer": "PSLM, MSyl · voormalig nationaal hoofdinstructeur vuurwapens en trainer politieleiderschap",
    "PsyD · clinical psychologist and game designer": "PsyD · klinisch psycholoog en gameontwerper",
    "Founder and CEO of Flashgroup XR and Apollo Journey": "Oprichter en CEO van Flashgroup XR en Apollo Journey",
    "Leadership": "Leiding",
    "Meet the": "Maak kennis met de",
    "founders.": "oprichters.",
    "[Placeholder: longer bio, two or three paragraphs.]": "[Placeholder: langere bio, twee of drie alinea’s.]",
    "Work with us": "Werk met ons samen",
    "F.A.Q": "Veelgestelde vragen",
    "Are you hiring?": "Hebben jullie vacatures?",
    "We’re always glad to hear from talented people. Tell us about yourself through the": "We horen graag van talentvolle mensen. Vertel ons over jezelf via het",
    "contact form": "contactformulier",
    "Do I need my own VR system?": "Heb ik een eigen VR-systeem nodig?",
    "No. BRAVR comes as a plug-and-play box with everything needed for a session: headset, heart-rate sensor and software.": "Nee. BRAVR komt als plug-and-play-box met alles wat je voor een sessie nodig hebt: headset, hartslagsensor en software.",
    "Can I see a demo?": "Kan ik een demo zien?",
    "Yes. Request one through the": "Ja. Vraag er een aan via het",
    ". We usually reply within one working day.": ". Meestal reageren we binnen één werkdag.",
    "What is the long-term vision?": "Wat is de visie op lange termijn?",
    "Effective mental readiness training, available at national scale.": "Effectieve mentale paraatheidstraining, beschikbaar op landelijke schaal.",
    "Bring BRAVR to": "Breng BRAVR naar",
    "your team.": "je team.",
    "Pilots, demos and partnerships: tell us what you need and we’ll get back to you within one working day.": "Pilots, demo’s en samenwerkingen: vertel ons wat je nodig hebt en je hoort binnen één werkdag van ons.",
    "Get in touch": "Neem contact op",
    "Join the Amsterdam pilot": "Doe mee aan de pilot in Amsterdam",
    "Built on 15+ years": "Gebouwd op 15+ jaar",
    "of research.": "onderzoek.",
    "BRAVR doesn’t guess. The method comes from published work on stress-inducing VR, live biometrics, heart-rate variability and game-based biofeedback.": "BRAVR gokt niet. De methode komt uit gepubliceerd onderzoek naar stressopwekkende VR, live biometrie, hartslagvariabiliteit en biofeedback via games.",
    "How it works": "Hoe het werkt",
    "A real stress response,": "Een echte stressreactie,",
    "safely.": "veilig.",
    "We use a VR environment to safely trigger a real stress response, then help you learn to control it.": "We gebruiken een VR-omgeving om veilig een echte stressreactie op te wekken, en helpen je die te leren beheersen.",
    "01 · Monitor": "01 · Meten",
    "During play, we monitor each player’s heart-rate variability (HRV), a measure of the body’s response to acute stress.": "Tijdens het spelen meten we de hartslagvariabiliteit (HRV) van elke speler: een maat voor hoe het lichaam reageert op acute stress.",
    "02 · Restrict": "02 · Beperken",
    "As players get more stressed, sound and vision are restricted, making it harder to complete challenges.": "Hoe gestrester spelers worden, hoe meer geluid en beeld worden beperkt. Zo worden de uitdagingen moeilijker.",
    "03 · Assess": "03 · Beoordelen",
    "These challenges show how well players stay in control while under pressure.": "Deze uitdagingen laten zien hoe goed spelers de controle houden onder druk.",
    "04 · Train": "04 · Trainen",
    "The steadier the players stay, the easier it is to succeed. That feedback loop trains the nervous system’s response to danger, so performance holds when it matters most.": "Hoe stabieler spelers blijven, hoe makkelijker ze slagen. Die feedbacklus traint de reactie van het zenuwstelsel op gevaar, zodat je prestaties overeind blijven als het er het meest toe doet.",
    "Supporting research": "Onderbouwend onderzoek",
    "The studies": "De studies",
    "WE're Built on.": "waarop we bouwen.",
    "14 papers · links open the original publication": "14 artikelen · links openen de oorspronkelijke publicatie",
    "VR stimulation in stress exposure and inoculation": "VR-stimulatie bij stressblootstelling en -inoculatie",
    "5 papers": "5 artikelen",
    "4 papers": "4 artikelen",
    "2 papers": "2 artikelen",
    "1 paper": "1 artikel",
    "Real-time biometrics for stress management": "Realtime biometrie voor stressmanagement",
    "HRV as a measure of stress-response training": "HRV als maat voor stressreactietraining",
    "Game-driven biofeedback training": "Biofeedbacktraining via games",
    "Immersion in design": "Immersie in ontwerp",
    "From the field": "Uit de praktijk",
    "Tested where": "Getest waar",
    "In 2026 we ran a pilot with UK police firearms officers. Each workout produces a BioScore report that shows where the stress response faltered and how fast it recovered.": "In 2026 deden we een pilot met vuurwapenagenten van de Britse politie. Elke workout levert een BioScore-rapport op dat laat zien waar de stressreactie haperde en hoe snel die herstelde.",
    "Try it in Amsterdam": "Probeer het in Amsterdam",
    "Ask about a pilot": "Vraag naar een pilot",
    "@A workout report showing the BioScore line over four rounds": "Een workoutrapport met de BioScore-lijn over vier rondes",
    "Your data,": "Jouw gegevens,",
    "plainly.": "helder uitgelegd.",
    "What we collect, why, and what you can ask us to do with it. Last updated: [DATE].": "Wat we verzamelen, waarom, en wat je ons kunt vragen ermee te doen. Laatst bijgewerkt: [DATUM].",
    "@On this page": "Op deze pagina",
    "Who we are": "Wie we zijn",
    "What we collect": "Wat we verzamelen",
    "How we use it": "Hoe we het gebruiken",
    "Who we share it with": "Met wie we het delen",
    "Advertising and cookies": "Advertenties en cookies",
    "How we protect it": "Hoe we het beschermen",
    "Your rights": "Jouw rechten",
    "Changes to this policy": "Wijzigingen in dit beleid",
    "BRAVR Technologies BV (“BRAVR”, “we”) is responsible for the personal data described here. We are registered with the Dutch Chamber of Commerce (KvK) under number 97265896. You can reach us at": "BRAVR Technologies BV (“BRAVR”, “wij”) is verantwoordelijk voor de persoonsgegevens die hier worden beschreven. We staan ingeschreven bij de Kamer van Koophandel (KvK) onder nummer 97265896. Je bereikt ons via",
    "[Placeholder: registered address.]": "[Placeholder: vestigingsadres.]",
    "We only collect what you give us:": "We verzamelen alleen wat je ons zelf geeft:",
    "Updates and early access:": "Updates en vroege toegang:",
    "your name, email address and, if you give them, your job title and organisation.": "je naam, e-mailadres en, als je die opgeeft, je functie en organisatie.",
    "Pilot booking:": "Pilotboeking:",
    "name, email, phone (optional), where you train, any member or community code, your chosen sessions, and your answers to the health check and the medication question.": "naam, e-mail, telefoon (optioneel), waar je traint, een eventuele leden- of communitycode, je gekozen sessies en je antwoorden op de gezondheidscheck en de vraag over medicijnen.",
    "Training sessions:": "Trainingssessies:",
    "heart rate and heart-rate variability, recorded under a username rather than your name. We record this only with your consent.": "hartslag en hartslagvariabiliteit, vastgelegd onder een gebruikersnaam en niet onder je naam. We leggen dit alleen vast met jouw toestemming.",
    "Contact form:": "Contactformulier:",
    "your name, email, organisation (optional) and your message.": "je naam, e-mail, organisatie (optioneel) en je bericht.",
    "We do not collect sensitive data such as political views, racial or ethnic origin or religious beliefs, and we never use health data for advertising.": "We verzamelen geen gevoelige gegevens zoals politieke opvattingen, ras of etnische afkomst of religieuze overtuigingen, en we gebruiken gezondheidsgegevens nooit voor advertenties.",
    "To contact you about the products, services or pilots you asked about.": "Om contact met je op te nemen over de producten, diensten of pilots waar je naar vroeg.",
    "To manage your pilot booking and run your training sessions.": "Om je pilotboeking te beheren en je trainingssessies te verzorgen.",
    "To show you your own training results.": "Om je je eigen trainingsresultaten te laten zien.",
    "To improve BRAVR, using anonymised group results only.": "Om BRAVR te verbeteren, uitsluitend met geanonimiseerde groepsresultaten.",
    "To understand which job roles our website and campaigns reach.": "Om te begrijpen welke functies onze website en campagnes bereiken.",
    "[Placeholder: legal basis for each use (consent, contract, legitimate interest).]": "[Placeholder: grondslag per gebruik (toestemming, overeenkomst, gerechtvaardigd belang).]",
    "We never sell your personal data. We use a small number of services to run BRAVR:": "We verkopen je persoonsgegevens nooit. We gebruiken een klein aantal diensten om BRAVR te laten draaien:",
    "processes deposit payments. We never see your card or bank details.": "verwerkt de aanbetalingen. Wij zien je kaart- of bankgegevens nooit.",
    "(Sheets and Apps Script) stores booking and contact-form details.": "(Sheets en Apps Script) bewaart boekings- en contactformuliergegevens.",
    "runs our advertising (see below).": "verzorgt onze advertenties (zie hieronder).",
    "Our LinkedIn ads target broad audiences that meet LinkedIn’s minimum audience size. We do not micro-target individuals.": "Onze LinkedIn-advertenties richten zich op brede doelgroepen die voldoen aan de minimale doelgroepgrootte van LinkedIn. We richten ons niet op individuele personen.",
    "Cookies and similar technologies may be used to measure how our ads perform on third-party sites and apps such as LinkedIn. You can manage cookie and ad settings in your browser or your LinkedIn account.": "Cookies en vergelijkbare technieken kunnen worden gebruikt om te meten hoe onze advertenties presteren op sites en apps van derden, zoals LinkedIn. Je kunt je cookie- en advertentie-instellingen beheren in je browser of je LinkedIn-account.",
    "This website itself stores two small settings in your browser: your language choice, and your booking details for up to three days after you pay, so we can show your confirmation.": "Deze website bewaart zelf twee kleine instellingen in je browser: je taalkeuze, en je boekingsgegevens tot drie dagen nadat je hebt betaald, zodat we je bevestiging kunnen tonen.",
    "We store personal data securely using standard safeguards. Training data is kept under a username; the link between your name and username is kept separately in an encrypted file and deleted once the pilot’s final follow-up survey closes.": "We bewaren persoonsgegevens veilig met standaard beveiligingsmaatregelen. Trainingsdata staat onder een gebruikersnaam; de koppeling tussen je naam en gebruikersnaam bewaren we apart in een versleuteld bestand en verwijderen we zodra de laatste vervolgvragenlijst van de pilot sluit.",
    "[Placeholder: how long other data is kept.]": "[Placeholder: hoe lang andere gegevens worden bewaard.]",
    "You can ask us at any time to see, correct or delete your personal data. Email": "Je kunt ons altijd vragen je persoonsgegevens in te zien, te corrigeren of te verwijderen. Mail naar",
    "and we will respond within one month.": "en je krijgt binnen een maand antwoord.",
    "You can also withdraw your consent at any time, object to how we use your data, or complain to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).": "Je kunt ook altijd je toestemming intrekken, bezwaar maken tegen hoe we je gegevens gebruiken, of een klacht indienen bij de Autoriteit Persoonsgegevens.",
    "If we change this policy, we will update this page and the date at the top.": "Als we dit beleid wijzigen, passen we deze pagina en de datum bovenaan aan.",
    "Booking confirmed": "Boeking bevestigd",
    "You’re in.": "Je bent erbij.",
    "See you in Amsterdam.": "Tot in Amsterdam.",
    "Thanks for signing up. Your deposit is in and your place on the pilot is held.": "Bedankt voor je aanmelding. Je aanbetaling is binnen en je plek in de pilot staat vast.",
    "First session": "Eerste sessie",
    "Deposit paid": "Aanbetaling voldaan",
    "Four things": "Vier dingen",
    "to know.": "om te weten.",
    "Check your inbox": "Check je inbox",
    "Stripe has sent a receipt for your €25 deposit. Keep it: it’s your proof of booking.": "Stripe heeft een betaalbewijs gestuurd voor je aanbetaling van €25. Bewaar het: dat is je bewijs van boeking.",
    "The pilot runs if enough people book by 14 December. If it doesn’t, your €25 comes straight back.": "De pilot gaat door als genoeg mensen vóór 14 december boeken. Gaat hij niet door, dan krijg je je €25 direct terug.",
    "Before your first session": "Vóór je eerste sessie",
    "Wear comfortable clothes. Glasses are fine. Arrive 10 minutes early so we can set you up.": "Draag comfortabele kleding. Een bril is geen probleem. Kom 10 minuten eerder, dan zetten we alles voor je klaar.",
    "On the day": "Op de dag zelf",
    "The rest of the pilot price is due by your first session at [PARTNER GYM], [ADDRESS], Amsterdam.": "De rest van de pilotprijs betaal je uiterlijk bij je eerste sessie bij [PARTNER GYM], [ADDRESS], Amsterdam.",
    "Back to the pilot page": "Terug naar de pilotpagina",
    "Questions? Get in touch": "Vragen? Neem contact op",
    "Off the grid.": "Van de kaart.",
    "This page doesn’t exist, or it has moved. Pick a way back.": "Deze pagina bestaat niet, of is verhuisd. Kies een weg terug.",
    "Go to the home page": "Naar de homepage",
    "Contact us": "Neem contact op",

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
        // an element can name its own key (data-i18n="x" → NL['#x']) when the same English needs two different Dutch versions
        var ctx = n.parentNode && n.parentNode.getAttribute && n.parentNode.getAttribute('data-i18n');
        if (ctx && Object.prototype.hasOwnProperty.call(NL, '#' + ctx)) n.data = raw.replace(core, function () { return NL['#' + ctx]; });
        else if (Object.prototype.hasOwnProperty.call(NL, core)) n.data = raw.replace(core, function () { return NL[core]; });
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
