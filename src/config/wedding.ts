/**
 * Wedding invitation data for Kavya & Tejas.
 * Edit this file to change the invitation details.
 */

export const weddingConfig = {
  couplePhoto: "/images/couple/couple.jpeg",

  groom: {
    name: "Tejas",
    shortName: "Tejas",
    photo: "/images/couple/groom.jpg",
  },

  bride: {
    name: "Kavya",
    shortName: "Kavya",
    photo: "/images/couple/bride.jpg",
  },

  wedding: {
    /** India time; drives the main countdown. */
    dateISO: "2026-08-27T23:41:00+05:30",
    dayName: "Thursday",
    dateLabel: "27 August 2026",
    time: "11:41 PM",
    ceremony: "Muhurtham / Wedding Ceremony",
    venue: "Ishaar Staycation, Vijayawada",

    events: [
      {
        key: "haldi",
        name: "Haldi",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "10:30 AM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/haldi.png"],
      },
      {
        key: "reception",
        name: "Reception",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "6:00 PM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/reception.png"],
      },
      {
        key: "muhurtham",
        name: "Muhurtham",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "11:41 PM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/mahurtham.png"],
      },
    ],

    address: "Ishaar Staycation, Vijayawada, Andhra Pradesh, India",
    mapsUrl: "",
  },

  contact: {
    whatsapp: "",
  },

  music: {
    enabled: true,
    source: "/music/marriagesong.mp3",
  },

  gallery: [
    { src: "/images/gallery/couple-main.jpg", alt: "Kavya and Tejas together" },
    { src: "/images/gallery/moment-02.jpg", alt: "Kavya and Tejas" },
    { src: "/images/gallery/moment-03.jpg", alt: "Kavya and Tejas together" },
    { src: "/images/gallery/moment-04.jpg", alt: "A candid moment of Kavya and Tejas" },
    { src: "/images/gallery/moment-05.jpg", alt: "Kavya and Tejas" },
  ],

  site: {
    url: "",
  },
} as const;

export type WeddingConfig = typeof weddingConfig;
