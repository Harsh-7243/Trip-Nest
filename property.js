// Property data for all properties (now with Indian tourist places)
const propertyData = {
  1: {
    id: 1,
    title: "Goa Beachfront Villa",
    location: "Goa, India",
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      "gallery/goa_beach_1.jpeg",
      "gallery/goa_beach_2.jpeg",
      "gallery/goa_beach_3.jpeg",
      "gallery/goa_beach_4.jpeg",
    ],
    host: {
      name: "Sarah",
      avatar: "gallery/avatar_1.jpeg",
      joinDate: "2019",
      reviews: 89,
      verified: true,
    },
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Experience the magic of Goa in this luxurious beachfront villa. Enjoy private beach access, Goan cuisine, and vibrant nightlife just steps away. Perfect for families or groups seeking sun, sand, and serenity on India's most famous coast.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-tv", name: "TV" },
      { icon: "fas fa-coffee", name: "Kitchen" },
      { icon: "fas fa-swimming-pool", name: "Pool" },
      { icon: "fas fa-dumbbell", name: "Gym" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets", "No parties or events"],
  },
  2: {
    id: 2,
    title: "Manali Mountain Cabin",
    location: "Manali, Himachal Pradesh",
    price: 280,
    rating: 4.8,
    reviews: 89,
    images: [
      "gallery/manali_1.jpg",
      "gallery/manali_2.jpg",
    ],
    host: {
      name: "Mike",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joinDate: "2018",
      reviews: 54,
      verified: true,
    },
    type: "Entire cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description:
      "Nestled in the Himalayas, this cozy Manali cabin offers breathtaking mountain views, apple orchards, and easy access to Solang Valley adventures. Enjoy bonfires, snow-capped peaks, and Himachali hospitality.",
    amenities: [
      { icon: "fas fa-fire", name: "Fireplace" },
      { icon: "fas fa-hot-tub", name: "Hot tub" },
      { icon: "fas fa-mountain", name: "Mountain view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  3: {
    id: 3,
    title: "Mumbai City Apartment",
    location: "Mumbai, Maharashtra",
    price: 180,
    rating: 4.7,
    reviews: 203,
    images: [
      "gallery/mumbai_2.jpg",
      "gallery/mumbai_4.jpg",
    ],
    host: {
      name: "Emma",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2020",
      reviews: 120,
      verified: true,
    },
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Stay in the heart of Mumbai! This modern apartment is close to Marine Drive, Gateway of India, and the best street food. Enjoy city views and the vibrant energy of Maharashtra's capital.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-elevator", name: "Elevator" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 4:00 PM - 11:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
  4: {
    id: 4,
    title: "Jaipur Heritage Townhouse",
    location: "Jaipur, Rajasthan",
    price: 320,
    rating: 4.9,
    reviews: 156,
    images: [
      "gallery/jaipur_1.jpg",
      "gallery/jaipur_2.jpg",
      "gallery/jaipur_3.jpg",
    ],
    host: {
      name: "David",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2017",
      reviews: 102,
      verified: true,
    },
    type: "Entire house",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description:
      "Live like royalty in Jaipur! This heritage townhouse is near Hawa Mahal and City Palace. Enjoy Rajasthani decor, rooftop views, and traditional cuisine in the Pink City.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-fire", name: "Fireplace" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  5: {
    id: 5,
    title: "Jaisalmer Desert Oasis",
    location: "Jaisalmer, Rajasthan",
    price: 380,
    rating: 4.8,
    reviews: 94,
    images: [
      "gallery/jaisalmer_1.jpg",
      "gallery/jaisalmer_2.jpg",
      "gallery/jaisalmer_3.jpg",
    ],
    host: {
      name: "Lisa",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2016",
      reviews: 77,
      verified: true,
    },
    type: "Entire house",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Stay in a luxury oasis on the edge of the Thar Desert! Enjoy camel safaris, Rajasthani folk music, and starry nights near Jaisalmer Fort.",
    amenities: [
      { icon: "fas fa-swimming-pool", name: "Pool" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
  6: {
    id: 6,
    title: "Nainital Lake Cottage",
    location: "Nainital, Uttarakhand",
    price: 250,
    rating: 4.9,
    reviews: 178,
    images: [
      "gallery/nainital_1.jpeg",
      "gallery/nainital_2.jpg",
      "gallery/nainital_3.jpg",
      "gallery/nainital_4.jpeg",
    ],
    host: {
      name: "John",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2015",
      reviews: 99,
      verified: true,
    },
    type: "Entire cottage",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Wake up to the misty hills of Nainital! This lakefront cottage offers boating, nature walks, and easy access to Mall Road and Naina Devi Temple.",
    amenities: [
      { icon: "fas fa-water", name: "Lake view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  7: {
    id: 7,
    title: "Bangalore Urban Loft",
    location: "Bangalore, Karnataka",
    price: 210,
    rating: 4.8,
    reviews: 112,
    images: [
      "gallery/banglore_1.jpg",
      "gallery/banglore_2.jpg",
      "gallery/banglore_3.jpg",
    ],
    host: {
      name: "Olivia",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2021",
      reviews: 60,
      verified: true,
    },
    type: "Entire loft",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Enjoy Bangalore's cosmopolitan vibe in this chic loft. Walk to MG Road, sample South Indian cuisine, and relax in a modern, airy space.",
    amenities: [
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-elevator", name: "Elevator" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  8: {
    id: 8,
    title: "Munnar Rustic Farmhouse",
    location: "Munnar, Kerala",
    price: 175,
    rating: 4.7,
    reviews: 98,
    images: [
      "gallery/munnar_1.jpg",
      "gallery/munnar_2.jpg",
      "gallery/munnar_3.jpg",
    ],
    host: {
      name: "Ethan",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2014",
      reviews: 45,
      verified: true,
    },
    type: "Entire house",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Surround yourself with tea gardens and misty hills in Munnar! This rustic farmhouse is perfect for nature lovers and those seeking Kerala's tranquility.",
    amenities: [
      { icon: "fas fa-tree", name: "Countryside view" },
      { icon: "fas fa-fire", name: "Fire pit" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  9: {
    id: 9,
    title: "Puducherry Seaside Bungalow",
    location: "Puducherry, India",
    price: 120,
    rating: 4.6,
    reviews: 76,
    images: [
      "gallery/puducherry_1.jpg",
      "gallery/puducherry_2.jpg",
      "gallery/puducherry_3.jpg",
    ],
    host: {
      name: "Priya",
      avatar: "gallery/avatar_1.jpeg",
      joinDate: "2019",
      reviews: 30,
      verified: true,
    },
    type: "Entire bungalow",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Wake up to the sound of waves in this charming Puducherry bungalow. Stroll the French Quarter, visit Auroville, and relax on the sandy beaches of Tamil Nadu.",
    amenities: [
      { icon: "fas fa-water", name: "Sea view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 1:00 PM - 8:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  10: {
    id: 10,
    title: "Delhi Modern Studio",
    location: "Delhi, India",
    price: 160,
    rating: 4.8,
    reviews: 134,
    images: [
      "gallery/delhi_1.jpg",
      "gallery/delhi_2.jpg",
      "gallery/delhi_3.jpg",
    ],
    host: {
      name: "Lukas",
      avatar: "gallery/avatar_4.jpeg",
      joinDate: "2022",
      reviews: 40,
      verified: true,
    },
    type: "Entire studio",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Explore Delhi's rich history from this modern studio. Walk to India Gate, Connaught Place, and enjoy the flavors of Old Delhi nearby.",
    amenities: [
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-elevator", name: "Elevator" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  11: {
    id: 11,
    title: "Wayanad Tropical Treehouse",
    location: "Wayanad, Kerala",
    price: 300,
    rating: 4.9,
    reviews: 201,
    images: [
      "gallery/waynad_1.jpg",
      "gallery/waynad_2.jpeg",
      "gallery/waynad_3.jpg",
    ],
    host: {
      name: "Ayu",
      avatar: "gallery/avatar_1.jpeg",
      joinDate: "2018",
      reviews: 110,
      verified: true,
    },
    type: "Entire treehouse",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Live among the treetops in Wayanad! This unique treehouse offers jungle views, bamboo interiors, and a true Kerala adventure.",
    amenities: [
      { icon: "fas fa-tree", name: "Jungle view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  12: {
    id: 12,
    title: "Udaipur Luxury Penthouse",
    location: "Udaipur, Rajasthan",
    price: 600,
    rating: 5.0,
    reviews: 88,
    images: [
      "gallery/udaipur_1.jpeg",
      "gallery/udaipur_2.jpeg",
      "gallery/udaipur_3.jpeg",
    ],
    host: {
      name: "Fatima",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2017",
      reviews: 70,
      verified: true,
    },
    type: "Entire penthouse",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    description:
      "Enjoy royal luxury in Udaipur! This penthouse has panoramic views of Lake Pichola, rooftop pool, and is close to City Palace and Jag Mandir.",
    amenities: [
      { icon: "fas fa-swimming-pool", name: "Private pool" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-car", name: "Free parking" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  105: {
    id: 105,
    title: "Shimla Hilltop Cottage",
    location: "Shimla, Himachal Pradesh",
    price: 270,
    rating: 4.8,
    reviews: 61,
    images: [
      "gallery/shimla_1.jpg",
      "gallery/shimla_2.jpg",
      "gallery/shimla_3.jpg",
    ],
    host: {
      name: "Meera",
      avatar: "gallery/avatar_1.jpeg",
      joinDate: "2021",
      reviews: 61,
      verified: true,
    },
    type: "Cottage",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    description: "Charming cottage with panoramic views of the Shimla hills.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-fire", name: "Fireplace" },
      { icon: "fas fa-mountain", name: "Mountain view" },
      { icon: "fas fa-car", name: "Free parking" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  106: {
    id: 106,
    title: "Mall Road View Apartment",
    location: "Shimla, Himachal Pradesh",
    price: 210,
    rating: 4.6,
    reviews: 44,
    images: [
      "gallery/shimla_3.jpg",
      "gallery/shimla_4.jpg",
    ],
    host: {
      name: "Rohit",
      avatar: "gallery/avatar_3.jpeg",  
      joinDate: "2020",
      reviews: 44,
      verified: true,
    },
    type: "Apartment",
    guests: 3,  
    bedrooms: 1,
    bathrooms: 1,
    description: "Modern apartment steps from Shimla's famous Mall Road.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-elevator", name: "Elevator" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
  107: {
    id: 107,
    title: "Pine View Villa",
    location: "Shimla, Himachal Pradesh",
    price: 320,
    rating: 4.9,
    reviews: 72,
    images: [
      "gallery/pineview_1.jpg",
      "gallery/pineview_2.jpg",
    ],
    host: {
      name: "Anjali",
      avatar: "gallery/avatar_1.jpeg",
      joinDate: "2019",
      reviews: 72,
      verified: true,
    },
    type: "Villa",
    guests: 7,
    bedrooms: 3,
    bathrooms: 3,
    description: "Spacious villa surrounded by pine forests, perfect for families.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-tree", name: "Forest view" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 1:00 PM - 8:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  108: {
    id: 108,
    title: "Taj Mahal View Suite",
    location: "Agra, Uttar Pradesh",
    price: 350,
    rating: 4.9,
    reviews: 80,
    images: [
      "gallery/tajmahal_1.jpg",
      "gallery/tajmahal_2.jpg",
      "gallery/tajmahal_3.jpg",
    ],
    host: {
      name: "Amit",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2018",
      reviews: 80,
      verified: true,
    },
    type: "Suite",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description: "Luxury suite with a direct view of the Taj Mahal.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-coffee", name: "Kitchen" },
      { icon: "fas fa-car", name: "Free parking" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  109: {
    id: 109,
    title: "Agra Heritage Homestay",
    location: "Agra, Uttar Pradesh",
    price: 180,
    rating: 4.5,
    reviews: 33,
    images: [
      "gallery/agra_3.jpg",
      "gallery/agra_4.jpg",
    ],
    host: {
      name: "Sana",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2022",
      reviews: 33,
      verified: true,
    },
    type: "Homestay",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    description: "Experience Agra's culture in this cozy heritage homestay.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
  110: {
    id: 110,
    title: "Yamuna Riverside Villa",
    location: "Agra, Uttar Pradesh",
    price: 290,
    rating: 4.7,
    reviews: 51,
    images: [
      "gallery/yamuna_1.jpg",
      "gallery/yamuna_2.jpg",
      "gallery/yamuna_3.jpg",
    ],
    host: {
      name: "Rakesh",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2017",
      reviews: 51,
      verified: true,
    },
    type: "Villa",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: "Elegant villa on the banks of Yamuna, close to the Taj Mahal.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-water", name: "River view" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 1:00 PM - 8:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  201: {
    id: 201,
    title: "Victoria Memorial View Apartment",
    location: "Kolkata, West Bengal",
    price: 260,
    rating: 4.8,
    reviews: 58,
    images: [
      "gallery/kolkata_1.jpg",
      "gallery/kolkata_2.jpg",
      "gallery/kolkata_3.jpg",
    ],
    host: {
      name: "Sourav",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2020",
      reviews: 58,
      verified: true,
    },
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description: "Modern apartment with stunning views of Victoria Memorial, central Kolkata.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-elevator", name: "Elevator" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 2:00 PM - 9:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  202: {
    id: 202,
    title: "Howrah Bridge Riverside Suite",
    location: "Kolkata, West Bengal",
    price: 320,
    rating: 4.9,
    reviews: 73,
    images: [
      "gallery/howrah_1.jpg",
      "gallery/howrah_2.jpg",
      "gallery/howrah_3.jpg",
    ],
    host: {
      name: "Priyanka",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2019",
      reviews: 73,
      verified: true,
    },
    type: "Suite",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    description: "Elegant suite on the banks of the Hooghly, near Howrah Bridge.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-water", name: "River view" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
  203: {
    id: 203,
    title: "Park Street Heritage Home",
    location: "Kolkata, West Bengal",
    price: 210,
    rating: 4.7,
    reviews: 41,
    images: [
      "gallery/kolkata_3.jpg",
      "gallery/kolkata_1.jpg",
    ],
    host: {
      name: "Anindita",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2022",
      reviews: 41,
      verified: true,
    },
    type: "Heritage Home",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    description: "Charming heritage home in the heart of Park Street, Kolkata's cultural hub.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 1:00 PM - 8:00 PM", "Checkout: 10:00 AM", "No smoking", "No parties or events"],
  },
  13: {
    id: 13,
    title: "Hyderabad Property",
    location: "Hyderabad, Telangana",
    price: 300,
    rating: 4.7,
    reviews: 100,
    images: [
      "gallery/hyderabad_1.jpg",
      "gallery/hyderabad_2.jpg",
    ],
    host: {
      name: "Rajesh",
      avatar: "gallery/avatar_3.jpeg",
      joinDate: "2019",
      reviews: 100,
      verified: true,
    },
    type: "Entire property",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Experience the vibrant culture and history of Hyderabad. This property is located in the heart of the city, close to major attractions.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 3:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No parties or events"],
  },
  14: {
    id: 14,
    title: "Hitech City Apartment",
    location: "Hyderabad, Telangana",
    price: 200,
    rating: 4.6,
    reviews: 80,
    images: [
      "gallery/hitech_1.jpg",
      "gallery/hitech_2.jpg",
    ],
    host: {
      name: "Priya",
      avatar: "gallery/avatar_2.jpeg",
      joinDate: "2020",
      reviews: 80,
      verified: true,
    },
    type: "Entire apartment",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Stay in the heart of Hyderabad's tech hub! This modern apartment is close to major IT companies and the HITEC City.",
    amenities: [
      { icon: "fas fa-wifi", name: "Free WiFi" },
      { icon: "fas fa-city", name: "City view" },
      { icon: "fas fa-car", name: "Free parking" },
      { icon: "fas fa-coffee", name: "Kitchen" },
    ],
    rules: ["Check-in: 4:00 PM - 11:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets"],
  },
}

// Reviews with Indian names
const reviews = [
  {
    id: 1,
    user: "Amit Sharma",
    avatar: "gallery/avatar_3.jpeg",
    rating: 5,
    date: "March 2024",
    comment:
      "Absolutely stunning property! The ocean views were breathtaking and the host was amazing. Would definitely stay here again.",
  },
  {
    id: 2,
    user: "Priya Singh",
    avatar: "gallery/avatar_2.jpeg",
    rating: 5,
    date: "February 2024",
    comment:
      "Perfect location and beautifully decorated. The kitchen was well-equipped and the beach access was incredible.",
  },
  {
    id: 3,
    user: "Rahul Verma",
    avatar: "gallery/avatar_3.jpeg",
    rating: 4,
    date: "January 2024",
    comment:
      "Great stay overall. The property was clean and exactly as described. Minor issue with WiFi but the host resolved it quickly.",
  },
]

let currentImageIndex = 0
let currentProperty = null
let isLiked = false

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadProperty()
  setupBookingForm()
  setupGalleryModal()
})

// Load property details
function loadProperty() {
  const urlParams = new URLSearchParams(window.location.search)
  const propertyId = urlParams.get("id") || "1"

  currentProperty = propertyData[propertyId]

  if (!currentProperty) {
    document.body.innerHTML = '<div class="container"><h1>Property not found</h1></div>'
    return
  }

  // Update page content
  document.getElementById("propertyTitle").textContent = currentProperty.title
  document.getElementById("propertyLocation").textContent = currentProperty.location
  document.getElementById("propertyRating").textContent = currentProperty.rating
  document.getElementById("reviewsCount").textContent = `(${currentProperty.reviews} reviews)`

  // Update main image
  document.getElementById("mainImage").src = currentProperty.images[0]

  // Create image indicators
  createImageIndicators()

  // Update host info
  document.getElementById("hostTitle").textContent = `${currentProperty.type} hosted by ${currentProperty.host.name}`
  document.getElementById("propertySpecs").textContent =
    `${currentProperty.guests} guests · ${currentProperty.bedrooms} bedrooms · ${currentProperty.bathrooms} bathrooms`
  document.getElementById("hostAvatar").src = currentProperty.host.avatar

  // Update description
  document.getElementById("propertyDescription").textContent = currentProperty.description

  // Load amenities
  loadAmenities()

  // Load rules
  loadRules()

  // Load reviews
  loadReviews()

  // Update booking card
  updateBookingCard()
}

// Create image indicators
function createImageIndicators() {
  const indicatorsContainer = document.getElementById("imageIndicators")
  indicatorsContainer.innerHTML = ""

  currentProperty.images.forEach((_, index) => {
    const indicator = document.createElement("div")
    indicator.className = `indicator ${index === 0 ? "active" : ""}`
    indicator.onclick = () => goToImage(index)
    indicatorsContainer.appendChild(indicator)
  })
}

// Navigate to specific image
function goToImage(index) {
  currentImageIndex = index
  document.getElementById("mainImage").src = currentProperty.images[index]

  // Update indicators
  document.querySelectorAll(".indicator").forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index)
  })
}

// Navigate to previous image
function previousImage() {
  const newIndex = (currentImageIndex - 1 + currentProperty.images.length) % currentProperty.images.length
  goToImage(newIndex)
}

// Navigate to next image
function nextImage() {
  const newIndex = (currentImageIndex + 1) % currentProperty.images.length
  goToImage(newIndex)
}

// Toggle like status
function toggleLike() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = parseInt(urlParams.get('id'));
  if (!propertyId) return;
  let favs = JSON.parse(localStorage.getItem('favouriteProperties') || '[]');
  if (favs.includes(propertyId)) {
    favs = favs.filter(id => id !== propertyId);
  } else {
    favs.push(propertyId);
  }
  localStorage.setItem('favouriteProperties', JSON.stringify(favs));
  // Optionally update the icon/UI
  const likeIcon = document.getElementById('likeIcon');
  if (likeIcon) {
    if (favs.includes(propertyId)) {
      likeIcon.classList.add('liked');
    } else {
      likeIcon.classList.remove('liked');
    }
  }
}

// Load amenities
function loadAmenities() {
  const amenitiesGrid = document.getElementById("amenitiesGrid")
  amenitiesGrid.innerHTML = ""

  currentProperty.amenities.forEach((amenity) => {
    const amenityElement = document.createElement("div")
    amenityElement.className = "amenity-item"
    amenityElement.innerHTML = `
            <i class="${amenity.icon} amenity-icon"></i>
            <span>${amenity.name}</span>
        `
    amenitiesGrid.appendChild(amenityElement)
  })
}

// Load rules
function loadRules() {
  const rulesList = document.getElementById("rulesList")
  rulesList.innerHTML = ""

  currentProperty.rules.forEach((rule) => {
    const ruleElement = document.createElement("li")
    ruleElement.textContent = rule
    rulesList.appendChild(ruleElement)
  })
}

// Load reviews
function loadReviews() {
  document.getElementById("reviewsTitle").textContent = `${currentProperty.rating} · ${currentProperty.reviews} reviews`

  const reviewsList = document.getElementById("reviewsList")
  reviewsList.innerHTML = ""

  reviews.forEach((review) => {
    const reviewElement = document.createElement("div")
    reviewElement.className = "review-item"
    reviewElement.innerHTML = `
            <img src="${review.avatar}" alt="${review.user}" class="review-avatar">
            <div class="review-content">
                <div class="review-header">
                    <span class="review-author">${review.user}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">
                    ${Array(review.rating).fill('<i class="fas fa-star star-filled"></i>').join("")}
                </div>
                <p class="review-text">${review.comment}</p>
            </div>
        `
    reviewsList.appendChild(reviewElement)
  })
}

// Update booking card
function updateBookingCard() {
  document.getElementById("priceAmount").textContent = `₹${currentProperty.price}`
  document.getElementById("bookingRating").textContent = currentProperty.rating
  document.getElementById("bookingReviews").textContent = `(${currentProperty.reviews})`
}

// Setup booking form
function setupBookingForm() {
  const checkInInput = document.getElementById("bookingCheckIn")
  const checkOutInput = document.getElementById("bookingCheckOut")
  const guestsInput = document.getElementById("bookingGuests")

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0]
  checkInInput.min = today
  checkOutInput.min = today

  // Update checkout minimum when checkin changes
  checkInInput.addEventListener("change", function () {
    checkOutInput.min = this.value
    calculateTotal()
  })

  checkOutInput.addEventListener("change", calculateTotal)
  guestsInput.addEventListener("change", calculateTotal)
}

// Calculate total price
function calculateTotal() {
  const checkIn = document.getElementById("bookingCheckIn").value
  const checkOut = document.getElementById("bookingCheckOut").value

  if (!checkIn || !checkOut) {
    document.getElementById("priceBreakdown").style.display = "none"
    return
  }

  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24))

  if (nights <= 0) {
    document.getElementById("priceBreakdown").style.display = "none"
    return
  }

  const subtotal = nights * currentProperty.price
  const cleaningFee = 50
  const serviceFee = Math.round(subtotal * 0.14)
  const total = subtotal + cleaningFee + serviceFee

  const breakdown = document.getElementById("priceBreakdown")
  breakdown.innerHTML = `
        <div class="breakdown-item">
            <span>₹${currentProperty.price} x ${nights} nights</span>
            <span>₹${subtotal}</span>
        </div>
        <div class="breakdown-item">
            <span>Cleaning fee</span>
            <span>₹${cleaningFee}</span>
        </div>
        <div class="breakdown-item">
            <span>Service fee</span>
            <span>₹${serviceFee}</span>
        </div>
        <div class="breakdown-total">
            <span>Total</span>
            <span>₹${total}</span>
        </div>
    `
  breakdown.style.display = "block"
}

// Make reservation
function makeReservation() {
  const checkIn = document.getElementById("bookingCheckIn").value
  const checkOut = document.getElementById("bookingCheckOut").value
  const guests = document.getElementById("bookingGuests").value

  if (!checkIn || !checkOut || !guests) {
    alert("Please fill in all booking details")
    return
  }

  // Simulate booking process
  alert("Booking request submitted! You will receive a confirmation email shortly.")
}

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previousImage()
  } else if (e.key === "ArrowRight") {
    nextImage()
  }
})

// Modal for viewing all images
function setupGalleryModal() {
  const modal = document.getElementById("galleryModal")
  const grid = document.getElementById("galleryGrid")
  if (!modal || !grid) return
  // Close modal on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGalleryModal()
  })
}

function openGalleryModal() {
  const modal = document.getElementById("galleryModal")
  const grid = document.getElementById("galleryGrid")
  if (!modal || !grid || !currentProperty) return
  grid.innerHTML = ""
  currentProperty.images.forEach((img, i) => {
    const image = document.createElement("img")
    image.src = img
    image.alt = `Property photo ${i+1}`
    image.onclick = () => {
      goToImage(i)
      closeGalleryModal()
    }
    grid.appendChild(image)
  })
  modal.classList.add("open")
  document.body.style.overflow = "hidden"
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal")
  if (!modal) return
  modal.classList.remove("open")
  document.body.style.overflow = "auto"
}
