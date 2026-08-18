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
const te = en as typeof en;

export const content = { en, kn, te };
