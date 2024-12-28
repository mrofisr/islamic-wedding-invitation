// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Triyono & Dewi",
    description: "We are getting married and would love for you to be a part of our celebration.",
    ogImage: "/images/og-image.jpg", // OpenGraph image for social media
    favicon: "/images/favicon.ico",
  },

  // Couple Information
  couple: {
    groomName: "Triyono",
    brideName: "Dewi",
    groomFullName: "Triyono Bin ...",
    brideFullName: "Dewi Maesaroh Binti Subian",
    groomImage: "/images/groom.jpg",
    brideImage: "/images/bride.jpg",
    hashtag: "#FulanFulanaWedding2024",
  },

  // Event Details
  event: {
    date: "2025-2-14",
    time: "08:00",
    timezone: "WIB",
    dateTime: "2025-02-14T08:00:00Z", // ISO 8601 format
    venue: {
      name: "Kuwarasan",
      address: "Kuwarasan",
      date: "Jumat, 14 Februari, 2025",
      time: "16:16 - 17:30 WIB",
      phone: "+62 123 4567 890",
      maps_url: "https://maps.app.goo.gl/4GNbf92fWh4du4xf8",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.35812475247437!2d110.3598944208979!3d-7.271534836554572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1735392938031!5m2!1sid!2sid",
      latitude: -7.271421426879623, // Replace with actual coordinates
      longitude: 110.35986759881031 // Replace with actual coordinates
    },
  },

  eventDetails: [{
    title: "Akad Nikah - Triyono & Dewi Wedding",
    date: "2025-1-14",
    startTime: "08:00",
    endTime: "10:00",
    timeZone: "Asia/Jakarta",
    location: "Kuwarasan",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }, {
    title: "Resepsi Nikah - Triyono & Dewi Wedding",
    date: "2024-1-14",
    startTime: "16:16",
    endTime: "17:30",
    timeZone: "Asia/Jakarta",
    location: "Kuwarasan",
    description: "We invite you to join us in celebrating our wedding ceremony."
  }],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true, // Add this option
    resumeOnReturn: true,  // Add this option
  },

  bankAccounts: [
    {
      bank: '-',
      accountNumber: '-',
      accountName: '-',
      logo: '/path/to/bca-logo.png' // Add your bank logos
    },
    {
      bank: '-',
      accountNumber: '-',
      accountName: '-',
      logo: '/path/to/mandiri-logo.png'
    }
  ]
};

export default config;