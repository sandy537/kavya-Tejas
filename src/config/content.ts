/**
 * All user-facing copy, in English, Kannada and Telugu.
 */

export type Language = "en" | "kn" | "te";

export const languageNames: Record<Language, string> = {
  en: "English",
  kn: "ಕನ್ನಡ",
  te: "తెలుగు",
};

const en = {
  opening: {
    blessing: "With the blessings of Almighty",
    invited: "You're Invited",
    and: "&",
    open: "Open Invitation",
    hint: "Tap to open the envelope",
  },
  hero: {
    blessing: "With the blessings of Almighty",
    scroll: "Scroll",
  },
  invitation: {
    eyebrow: "With joy in our hearts",
    line: "we invite you to celebrate the wedding of",
    and: "and",
  },
  couple: { eyebrow: "The Beloved" },
  people: { groom: "The Groom", bride: "The Bride" },
  story: {
    eyebrow: "Our Story",
    title: "It all began with our families bringing us together.",
    paragraphs: [
      "We met as two strangers, with a few questions, a little curiosity, and no idea where this journey would lead.",
      "As we spent time getting to know each other, conversations turned into comfort, comfort into friendship, and friendship slowly into love.",
      "What began as an arranged meeting became a choice we made for ourselves.",
      "Today, with the love and blessings of our families, we’re happy to begin this beautiful journey together.",
      "An arranged beginning, a love we found, and a forever we choose.",
    ],
  },
  family: {
    eyebrow: "With Our Families",
    title: "Together With Our Families",
    groomFamily: "Groom's Family",
    brideFamily: "Bride's Family",
    and: "&",
  },
  photos: {
    eyebrow: "Pre-wedding Canvas",
    title: "A Few Moments We Cherish",
    placeholder: "Photograph",
  },
  details: {
    eyebrow: "The Celebrations",
    title: "Timeline",
    ceremony: "Wedding Ceremony",
  },
  ceremonies: {
    eyebrow: "One Auspicious Day",
    title: "One Day. Three Celebrations. One Forever.",
    lead: "From haldi to the evening welcome and the sacred muhurtham, every celebration unfolds on the same beautiful day.",
    notes: {
      haldi: "Turmeric on our hands, laughter in the courtyard, and the blessings of everyone we love.",
      reception: "An evening to greet you, to feed you, and to celebrate before the vows.",
      muhurtham: "The hour the knot is tied. Be with us as we begin.",
    },
  },
  saptapadi: {
    eyebrow: "Seven Sacred Steps",
    title: "Seven steps. Seven promises.",
    instruction: "Tap any star to discover its meaning",
    interactionHint: "Choose a star",
    close: "Close blessing",
    vows: [
      { sanskrit: "ॐ इषे त्वा", transliteration: "Om Ishe Tva", title: "Nourishment", meaning: "May we share food, strength, and the promise to care for one another." },
      { sanskrit: "ॐ ऊर्जे त्वा", transliteration: "Om Urje Tva", title: "Strength", meaning: "May we grow in courage, health, and the strength to stand together." },
      { sanskrit: "ॐ रायस्पोषाय त्वा", transliteration: "Om Rayasposhaya Tva", title: "Prosperity", meaning: "May our home flourish with honest work, abundance, and generosity." },
      { sanskrit: "ॐ मायोभवाय त्वा", transliteration: "Om Mayobhavaya Tva", title: "Happiness", meaning: "May we bring joy into our home and make one another's happiness a shared duty." },
      { sanskrit: "ॐ प्रजाभ्यः त्वा", transliteration: "Om Prajabhyaḥ Tva", title: "Family", meaning: "May love surround our family and may we nurture every life entrusted to us." },
      { sanskrit: "ॐ ऋतुभ्यः त्वा", transliteration: "Om Ṛtubhyaḥ Tva", title: "Harmony", meaning: "May we move through every season with patience, respect, and a steady heart." },
      { sanskrit: "ॐ सखे सप्तपदा भव", transliteration: "Om Sakhe Saptapada Bhava", title: "Friendship", meaning: "Having walked seven steps together, may we remain true companions for life." },
    ],
  },
  countdown: {
    eyebrow: "Counting the days",
    title: "Counting Down to Our Forever",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    passed: "We are married — thank you for celebrating with us.",
    today: "Today is the day.",
  },
  venue: { eyebrow: "The Venue", title: "Where To Find Us", directions: "Open in Maps" },
  rsvp: {
    eyebrow: "Kindly Respond", title: "Will You Join Us?", subtitle: "Your presence would mean the world to us.",
    yes: "Will Attend", no: "Unable to Attend", maybe: "Maybe", send: "Send RSVP on WhatsApp",
    namePlaceholder: "Your name", thanks: "Thank you — your response opens WhatsApp.",
    unconfigured: "RSVP by WhatsApp becomes active once a number is added in wedding.ts.",
    messages: { yes: "will joyfully attend", no: "is unable to attend", maybe: "will try to attend" },
  },
  final: {
    together: "Together with our families, we invite you to celebrate our special day.",
    awaiting: "Come and bless us. Your being there is what will make this day ours.",
    withLove: "With Love", share: "Share Invitation", shared: "Link copied",
  },
  ui: { musicOn: "Turn music off", musicOff: "Turn music on", language: "Switch language" },
};

const kn = en as typeof en;

const te = {
  ...en,
  opening: { blessing: "దైవ ఆశీస్సులతో", invited: "మీకు ఆహ్వానం", and: "&", open: "ఆహ్వానం తెరవండి", hint: "కవరును తెరవడానికి నొక్కండి" },
  hero: { blessing: "దైవ ఆశీస్సులతో", scroll: "ముందుకు సాగండి" },
  invitation: { eyebrow: "మా హృదయపూర్వక ఆనందంతో", line: "మా వివాహ వేడుకకు మిమ్మల్ని ఆహ్వానిస్తున్నాము", and: "మరియు" },
  couple: { eyebrow: "ప్రియమైన జంట" },
  people: { groom: "వరుడు", bride: "వధువు" },
  story: { eyebrow: "మా కథ", title: "మా కుటుంబాలు మమ్మల్ని కలిపిన చోట ఈ కథ మొదలైంది.", paragraphs: ["రెండు కుటుంబాల పరిచయంతో మొదలైన ఈ ప్రయాణం, ఒక్కొక్క మాటతో ఒకరికొకరం దగ్గర చేసింది.", "పరిచయం స్నేహంగా, స్నేహం అనుబంధంగా, ఆ అనుబంధం ప్రేమగా మారింది.", "మొదట పెద్దలు కలిపిన ఈ బంధం, ఇప్పుడు మేమిద్దరం మనస్ఫూర్తిగా ఎంచుకున్న జీవిత ప్రయాణం.", "కుటుంబాల ప్రేమ, ఆశీస్సులతో కలిసి ఈ కొత్త అధ్యాయాన్ని ప్రారంభిస్తున్నాము.", "ఒక అందమైన ఆరంభం, మనసుతో ఎంచుకున్న బంధం, జీవితాంతం కలిసి నడిచే ప్రయాణం." ] },
  family: { eyebrow: "మా కుటుంబాలతో కలిసి", title: "మా కుటుంబాల సమక్షంలో", groomFamily: "వరుడి కుటుంబం", brideFamily: "వధువు కుటుంబం", and: "మరియు" },
  photos: { eyebrow: "మా జ్ఞాపకాలు", title: "మేము ప్రేమగా దాచుకున్న కొన్ని క్షణాలు", placeholder: "చిత్రం" },
  details: { eyebrow: "వేడుకలు", title: "వివాహ వేడుకల సమయం", ceremony: "వివాహ వేడుక" },
  ceremonies: { eyebrow: "ఒక శుభదినం", title: "ఒక రోజు. మూడు వేడుకలు. ఒక జీవిత బంధం.", lead: "పసుపు వేడుక నుంచి సాయంత్రపు స్వాగతం, పవిత్రమైన ముహూర్తం వరకు ప్రతి వేడుక ఒకే శుభదినంలో జరుగుతుంది.", notes: { haldi: "పసుపు పరిమళం, కుటుంబ సభ్యుల నవ్వులు, మనసారా ఇచ్చే ఆశీస్సులతో ఉదయం మొదలవుతుంది.", reception: "మన వారందరినీ ఆహ్వానించి, కలిసి ఆనందించే అందమైన సాయంత్రం.", muhurtham: "మంగళ బంధం ముడిపడే పవిత్ర సమయం. మా జీవితంలో ఈ కొత్త ఆరంభానికి మాతో కలిసి ఉండండి." } },
  saptapadi: { eyebrow: "సప్తపది", title: "ఏడు అడుగులు. ఏడు వాగ్దానాలు.", instruction: "ప్రతి నక్షత్రాన్ని తాకి దాని అర్థాన్ని తెలుసుకోండి", interactionHint: "ఒక అడుగును ఎంచుకోండి", close: "ఆశీర్వాదాన్ని మూసివేయండి", vows: [
    { sanskrit: "ॐ इषे त्वा", transliteration: "Om Ishe Tva", title: "పోషణ", meaning: "మన జీవితంలో ఆహారం, బలం, పరస్పర శ్రద్ధ ఎల్లప్పుడూ పంచుకుందాం." },
    { sanskrit: "ॐ ऊर्जे त्वा", transliteration: "Om Urje Tva", title: "బలం", meaning: "ధైర్యం, ఆరోగ్యం, పరస్పర బలంతో కలిసి ముందుకు సాగుదాం." },
    { sanskrit: "ॐ रायस्पोषाय त्वा", transliteration: "Om Rayasposhaya Tva", title: "సంపద", meaning: "నిజాయితీతో కూడిన శ్రమ, సమృద్ధి, దానగుణంతో మన ఇల్లు వర్ధిల్లాలి." },
    { sanskrit: "ॐ मायोभवाय त्वा", transliteration: "Om Mayobhavaya Tva", title: "ఆనందం", meaning: "మన ఇంటిలో ఆనందాన్ని నింపుతూ ఒకరి సంతోషాన్ని మరొకరు మన బాధ్యతగా భావిద్దాం." },
    { sanskrit: "ॐ प्रजाभ्यः त्वा", transliteration: "Om Prajabhyaḥ Tva", title: "కుటుంబం", meaning: "మన కుటుంబాన్ని ప్రేమతో కాపాడుతూ మనకు అప్పగించబడిన ప్రతి బంధాన్ని ఆదరిద్దాం." },
    { sanskrit: "ॐ ऋतुभ्यः त्वा", transliteration: "Om Ṛtubhyaḥ Tva", title: "సామరస్యం", meaning: "జీవితంలోని ప్రతి కాలాన్ని ఓర్పు, గౌరవం, స్థిరమైన మనసుతో కలిసి ఎదుర్కొందాం." },
    { sanskrit: "ॐ सखे सप्तपदा भव", transliteration: "Om Sakhe Saptapada Bhava", title: "స్నేహం", meaning: "ఏడు అడుగులు కలిసి నడిచిన మనం జీవితాంతం నిజమైన స్నేహితులుగా, తోడుగా నిలుద్దాం." },
  ] },
  countdown: { eyebrow: "రోజులను లెక్కిస్తూ", title: "మన జీవితాంతం కోసం ఎదురుచూపు", days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు", passed: "మేము వివాహ బంధంలోకి అడుగుపెట్టాము — మాతో ఆనందాన్ని పంచుకున్నందుకు ధన్యవాదాలు.", today: "ఈ రోజు మన శుభదినం." },
  venue: { eyebrow: "వేదిక", title: "మమ్మల్ని ఎక్కడ కలవాలి", directions: "మ్యాప్స్‌లో చూడండి" },
  rsvp: en.rsvp,
  final: { together: "మా కుటుంబాలతో కలిసి మా ప్రత్యేక రోజును ఆనందంగా జరుపుకోవడానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము.", awaiting: "వచ్చి మమ్మల్ని ఆశీర్వదించండి. మీ రాకే మా రోజును మరింత ప్రత్యేకం చేస్తుంది.", withLove: "ప్రేమతో", share: "ఆహ్వానాన్ని పంచుకోండి", shared: "లింక్ కాపీ అయింది" },
  ui: { musicOn: "సంగీతాన్ని ఆపండి", musicOff: "సంగీతాన్ని ప్రారంభించండి", language: "భాష మార్చండి" },
};

export const content = { en, kn, te };
