// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Navahari Rai. V & Vaishnavi Wedding",
    description:
      "We are getting married and would love for you to be a part of our celebration.",
    ogImage: "/images/og-image.jpg", // OpenGraph image for social media
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Navahari Rai. V",
    brideName: "Vaishnavi",
  },

  //suraj
  // Event Details
  event: {
    date: "23-02-2025",
    time: "10:28 AM",
    timezone: "Asia/Kolkata",
    dateTime: "2025-12-24T16:22:47Z", // ISO 8601 format
    name: "Grand Ballroom, Hotel Majesty",
    address: "Jl. Example Street No. 123, City Name",
    time: "16:16 - 17:30 WIB",
    phone: "+62 123 4567 890",
    maps_url: "https://maps.google.com/?q=YourVenueLocation",
    maps_embed: "https://www.google.com/maps/embed?pb=your-map-embed-url",
    latitude: -6.2088, // Replace with actual coordinates
    longitude: 106.8456, // Replace with actual coordinates
  },

  eventDetails: [
    {
      title: "Akad Nikah",
      date: "23-02-2025",
      startTime: "16:16",
      endTime: "17:30",
      timeZone: "Asia/Jakarta",
      location: "Grand Ballroom, Hotel Majesty",
      description:
        "We invite you to join us in celebrating our wedding ceremony.",
    },
    {
      title: "Resepsi Nikah",
      date: "23-02-2025",
      startTime: "16:16",
      endTime: "17:30",
      timeZone: "Asia/Jakarta",
      location: "Grand Ballroom, Hotel Majesty",
      description:
        "We invite you to join us in celebrating our wedding ceremony.",
    },
  ],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: "Bank Central Asia",
      accountNumber: "1234567890",
      accountName: "FULAN",
      logo: "/path/to/bca-logo.png",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "0987654321",
      accountName: "FULANA",
      logo: "/path/to/mandiri-logo.png",
    },
  ],
  qris: {
    image: "https://ypp.co.id/site/uploads/qris/5f7c6da47a380-qr-code-dana.jpg",
  },
};

export default config;
