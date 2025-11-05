// src/data/places.js

export const allPlacesData = [
  
  // ---------------------------------
  // ---  DATA SHEET FOR SORO HILL ---
  // ---------------------------------
  {
    slug: "soro-hill",
    title: "Soro Hill",
    location: "Sabo, Oyo",
    category: "Landmarks",
    rating: 4.0,
    reviewCount: 1421,
    gallery: [
      { id: 1, src: "/img/places/gallery/soro-hill.jpg", alt: "Soro Hill main view" },
      { id: 2, src: "/img/places/gallery/soro-hill-2.jpg", alt: "View from Soro Hill" },
      { id: 3, src: "/img/places/gallery/soro-hill-3.jpg", alt: "Path up Soro Hill" },
      { id: 4, src: "/img/places/gallery/soro-hill-4.jpg", alt: "Path up Soro Hill" },
      // ...etc
    ],
    ratingBars: [
      { name: "Guide", score: 4.8 },
      { name: "Transportation", score: 3.0 },
      { name: "Value for money", score: 4.5 },
      { name: "Safety", score: 4.0 },
    ],
    features: [
      { title: "Free cancellation", text: "Cancel up to 24 hours in advance..." },
      { title: "Health precaution", text: "Special health and safety measures apply..." },
      // ...etc
    ],
    description: "See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey...",
    activity: [ 
      "Discover London on board a classic Routemaster...",
      "Cruise down the River Thames",
      // ...etc
    ],
    included: [ "Double-decker Routemaster tour", "Short trip", "Gratuities" ],
    notIncluded: [ "Double-decker Routemaster tour", "Changing of the Guard" ],
    safety: [ "All required protective equipment is provided", "All areas cleaned..." ]
  },

  // ------------------------------------
  // --- DATA SHEET FOR LE'MASIK HOTEL ---
  // ------------------------------------
  {
    slug: "le-masik-hotel",
    title: "Le'Masik Hotel",
    location: "Fola-tyre, Oyo",
    category: "Hotels",
    rating: 4.8,
    reviewCount: 485,
    gallery: [
      { id: 1, src: "/img/places/gallery/lemasik.jpg", alt: "Le'Masik Hotel" },
      // ...etc
    ],
    ratingBars: [ /* ... Le'Masik's rating bars ... */ ],
    features: [ /* ... Le'Masik's features ... */ ],
    description: "The description for Le'Masik Hotel...",
    activity: [ /* ... */ ],
    included: [ /* ... */ ],
    notIncluded: [ /* ... */ ],
    safety: [ /* ... */ ]
  },
  
  // You can add 98 more objects here
];