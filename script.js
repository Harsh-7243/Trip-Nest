// Property data
const featuredProperties = [
  {
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
    host: "Sarah",
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    category: "beachfront",
    description: "Experience the magic of Goa in this luxurious beachfront villa. Enjoy private beach access, Goan cuisine, and vibrant nightlife just steps away. Perfect for families or groups seeking sun, sand, and serenity on India's most famous coast.",
  },
  {
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
    host: "Mike",
    type: "Entire cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    category: "cabins",
    description: "Nestled in the Himalayas, this cozy Manali cabin offers breathtaking mountain views, apple orchards, and easy access to Solang Valley adventures. Enjoy bonfires, snow-capped peaks, and Himachali hospitality.",
  },
  {
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
    host: "Emma",
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    category: "city",
    description: "Stay in the heart of Mumbai! This modern apartment is close to Marine Drive, Gateway of India, and the best street food. Enjoy city views and the vibrant energy of Maharashtra's capital.",
  },
  {
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
    host: "David",
    type: "Entire house",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    category: "city",
    description: "Live like royalty in Jaipur! This heritage townhouse is near Hawa Mahal and City Palace. Enjoy Rajasthani decor, rooftop views, and traditional cuisine in the Pink City.",
  },
  {
    id: 5,
    title: "Jaisalmer Desert Oasis",
    location: "Jaisalmer, Rajasthan",
    price: 380,
    rating: 4.8,
    reviews: 94,
    images: [
      "gallery/jaisalmer_1.jpg",
      "gallery/jaisalmer_2.jpg",
    ],
    host: "Lisa",
    type: "Entire house",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    category: "luxury",
    description: "Stay in a luxury oasis on the edge of the Thar Desert! Enjoy camel safaris, Rajasthani folk music, and starry nights near Jaisalmer Fort.",
  },
  {
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
    host: "John",
    type: "Entire cottage",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    category: "countryside",
    description: "Wake up to the misty hills of Nainital! This lakefront cottage offers boating, nature walks, and easy access to Mall Road and Naina Devi Temple.",
  },
  {
    id: 7,
    title: "Bangalore Urban Loft",
    location: "Bangalore, Karnataka",
    price: 210,
    rating: 4.8,
    reviews: 112,
    images: [
      "gallery/banglore_1.jpg",
      "gallery/banglore_2.jpg",
    ],
    host: "Olivia",
    type: "Entire loft",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    category: "city",
    description: "Enjoy Bangalore's cosmopolitan vibe in this chic loft. Walk to MG Road, sample South Indian cuisine, and relax in a modern, airy space.",
  },
  {
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
    host: "Ethan",
    type: "Entire house",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    category: "countryside",
    description: "Surround yourself with tea gardens and misty hills in Munnar! This rustic farmhouse is perfect for nature lovers and those seeking Kerala's tranquility.",
  },
  {
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
    host: "Priya",
    type: "Entire bungalow",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    category: "beachfront",
    description: "Wake up to the sound of waves in this charming Puducherry bungalow. Stroll the French Quarter, visit Auroville, and relax on the sandy beaches of Tamil Nadu.",
  },
  {
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
    host: "Lukas",
    type: "Entire studio",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    category: "city",
    description: "Explore Delhi's rich history from this modern studio. Walk to India Gate, Connaught Place, and enjoy the flavors of Old Delhi nearby.",
  },
  {
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
    host: "Ayu",
    type: "Entire treehouse",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    category: "unique",
    description: "Live among the treetops in Wayanad! This unique treehouse offers jungle views, bamboo interiors, and a true Kerala adventure.",
  },
  {
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
    host: "Fatima",
    type: "Entire penthouse",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    category: "luxury",
    description: "Enjoy royal luxury in Udaipur! This penthouse has panoramic views of Lake Pichola, rooftop pool, and is close to City Palace and Jag Mandir.",
  },
  // Hyderabad
  {
    id: 101,
    title: "Hyderabad Charminar Retreat",
    location: "Hyderabad, Telangana",
    price: 220,
    rating: 4.7,
    reviews: 54,
    images: [
      "gallery/hyderabad_1.jpg",
      "gallery/hyderabad_2.jpg",
    ],
    host: "Aarav",
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    category: "city",
    description: "Stay near the iconic Charminar and enjoy Hyderabadi cuisine and culture!",
  },
  {
    id: 102,
    title: "Hitech City Luxe Flat",
    location: "Hyderabad, Telangana",
    price: 340,
    rating: 4.8,
    reviews: 67,
    images: [
      "gallery/hitech_1.jpg",
      "gallery/hitech_2.jpg",
    ],
    host: "Priya",
    type: "Flat",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    category: "city",
    description: "Modern flat in Hitech City, perfect for business and leisure travelers.",
  },
  // Chennai
  {
    id: 103,
    title: "Marina Beach House",
    location: "Chennai, Tamil Nadu",
    price: 260,
    rating: 4.6,
    reviews: 48,
    images: [
      "gallery/marina_1.jpg",
      "gallery/marina_2.jpg",
    ],
    host: "Lakshmi",
    type: "House",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    category: "beachfront",
    description: "Walk to Marina Beach and enjoy the best of Chennai's coast!",
  },
  {
    id: 104,
    title: "Chennai City Studio",
    location: "Chennai, Tamil Nadu",
    price: 180,
    rating: 4.5,
    reviews: 39,
    images: [
      "gallery/chennai_1.jpg",
      "gallery/chennai_2.jpg",
      "gallery/chennai_3.jpg",
    ],
    host: "Ravi",
    type: "Studio",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    category: "city",
    description: "Cozy studio in the heart of Chennai, close to shopping and dining.",
  },
  // Shimla
  {
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
    host: "Meera",
    type: "Cottage",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    category: "countryside",
    description: "Charming cottage with panoramic views of the Shimla hills.",
  },
  {
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
    host: "Rohit",
    type: "Apartment",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    category: "city",
    description: "Modern apartment steps from Shimla's famous Mall Road.",
  },
  {
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
    host: "Anjali",
    type: "Villa",
    guests: 7,
    bedrooms: 3,
    bathrooms: 3,
    category: "countryside",
    description: "Spacious villa surrounded by pine forests, perfect for families.",
  },
  // Agra
  {
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
    host: "Amit",
    type: "Suite",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    category: "luxury",
    description: "Luxury suite with a direct view of the Taj Mahal.",
  },
  {
    id: 109,
    title: "Agra Heritage Homestay",
    location: "Agra, Uttar Pradesh",
    price: 180,
    rating: 4.5,
    reviews: 33,
    images: [
      "gallery/agra_1.jpg",
      "gallery/agra_2.jpg",
    ],
    host: "Sana",
    type: "Homestay",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    category: "unique",
    description: "Experience Agra's culture in this cozy heritage homestay.",
  },
  {
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
    host: "Rakesh",
    type: "Villa",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    category: "luxury",
    description: "Elegant villa on the banks of Yamuna, close to the Taj Mahal.",
  },
  // Kolkata
  {
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
    host: "Sourav",
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    category: "city",
    description: "Modern apartment with stunning views of Victoria Memorial, central Kolkata.",
  },
  {
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
    host: "Priyanka",
    type: "Suite",
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    category: "city",
    description: "Elegant suite on the banks of the Hooghly, near Howrah Bridge.",
  },
  {
    id: 203,
    title: "Park Street Heritage Home",
    location: "Kolkata, West Bengal",
    price: 210,
    rating: 4.7,
    reviews: 41,
    images: [
      "gallery/kolkata_1.jpg",
      "gallery/kolkata_3.jpg",
    ],
    host: "Anindita",
    type: "Heritage Home",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    category: "unique",
    description: "Charming heritage home in the heart of Park Street, Kolkata's cultural hub.",
  },
]

let currentProperties = [...featuredProperties]
const currentImageIndexes = {}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadProperties()
  initializeImageCarousels()
  updateAllFavouritesUI()
  const favNav = document.getElementById('favouritesNav')
  if (favNav) {
    favNav.addEventListener('click', (e) => {
      e.preventDefault()
      showingFavourites = !showingFavourites
      if (showingFavourites) {
        showFavouritesOnly()
        favNav.classList.add('active-fav')
        favNav.innerHTML = '<i class="fas fa-heart"></i> Favourites (On)'
      } else {
        loadProperties()
        favNav.classList.remove('active-fav')
        favNav.innerHTML = '<i class="fas fa-heart"></i> Favourites'
      }
    })
  }
})

// Load properties into the carousel
function loadProperties() {
  const grid = document.getElementById("propertiesGrid")
  if (!grid) return
  grid.innerHTML = ""
  let toShow = currentProperties
  if (!window.showingMoreProperties) {
    toShow = currentProperties.slice(0, 6)
  }
  toShow.forEach((property) => {
    const propertyCard = createPropertyCard(property)
    grid.appendChild(propertyCard)
  })
}

// Create property card element
function createPropertyCard(property) {
  const card = document.createElement("div")
  card.className = "property-card tripnest-style"
  card.onclick = () => goToProperty(property.id)

  currentImageIndexes[property.id] = 0

  card.innerHTML = `
    <div class="property-image-container">
      <img src="${property.images[0]}" alt="${property.title}" class="property-image tripnest-img" id="image-${property.id}">
      <div class="guest-fav-badge">Guest favourite</div>
      <button class="like-button" onclick="event.stopPropagation(); toggleFavourite(${property.id})" title="Add to favourites">
        <i class="fas fa-heart like-icon" id="like-${property.id}"></i>
      </button>
      ${property.images.length > 1 ? `
        <button class="image-nav-button prev-button" onclick="event.stopPropagation(); changeImage(${property.id}, -1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="image-nav-button next-button" onclick="event.stopPropagation(); changeImage(${property.id}, 1)">
          <i class="fas fa-chevron-right"></i>
        </button>
      ` : ""}
    </div>
    <div class="property-info tripnest-info-row">
      <div class="info-main-row">
        <span class="property-title">${property.title}</span>
        <span class="property-price">₹${property.price}<span class="price-period"> night</span></span>
        <span class="rating-info"><i class="fas fa-star star-filled"></i> ${property.rating}</span>
      </div>
      <div class="property-location">${property.location}</div>
    </div>
  `
  setTimeout(() => updateFavouriteUI(property.id), 0);
  return card
}

// Change property image
function changeImage(propertyId, direction) {
  const property = featuredProperties.find((p) => p.id === propertyId)
  if (!property) return

  const currentIndex = currentImageIndexes[propertyId]
  const newIndex = (currentIndex + direction + property.images.length) % property.images.length

  currentImageIndexes[propertyId] = newIndex

  const imageElement = document.getElementById(`image-${propertyId}`)
  if (imageElement) {
    imageElement.src = property.images[newIndex]
  }
}

// Toggle like status
function toggleFavourite(propertyId) {
  let favs = getFavourites();
  if (favs.includes(propertyId)) {
    favs = favs.filter(id => id !== propertyId);
  } else {
    favs.push(propertyId);
  }
  setFavourites(favs);
  updateFavouriteUI(propertyId);
}

// Remove old filterByCategory and add filterByCity for city-based filtering
function filterByCity(city, btn) {
  document.querySelectorAll('.city-item').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Ripple
  if (btn) {
    const ripple = document.createElement('span');
    ripple.className = 'category-ripple';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  }
  // Filter properties by city
  if (city === 'all') {
    currentProperties = [...featuredProperties];
  } else {
    currentProperties = featuredProperties.filter(p => p.location.toLowerCase().includes(city.toLowerCase()));
  }
  loadProperties();
}

// Perform search
function performSearch() {
  const location = document.getElementById("searchLocation").value
  const checkIn = document.getElementById("checkIn").value
  const checkOut = document.getElementById("checkOut").value
  const guests = document.getElementById("guests").value

  // Build search URL
  const params = new URLSearchParams()
  if (location) params.append("location", location)
  if (checkIn) params.append("checkin", checkIn)
  if (checkOut) params.append("checkout", checkOut)
  if (guests) params.append("guests", guests)

  window.location.href = `search.html?${params.toString()}`
}

// Navigate to property page
function goToProperty(propertyId) {
  window.location.href = `property.html?id=${propertyId}`
}

// Initialize image carousels
function initializeImageCarousels() {
  // Auto-rotate images every 5 seconds
  setInterval(() => {
    featuredProperties.forEach((property) => {
      if (property.images.length > 1) {
        changeImage(property.id, 1)
      }
    })
  }, 5000)
}

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("search-input")) {
    performSearch()
  }
})

// Handle form submissions
document.addEventListener("submit", (e) => {
  if (e.target.closest(".search-bar")) {
    e.preventDefault()
    performSearch()
  }
})

// Persistent Favourites
function getFavourites() {
  return JSON.parse(localStorage.getItem('favouriteProperties') || '[]');
}
function setFavourites(favs) {
  localStorage.setItem('favouriteProperties', JSON.stringify(favs));
}
function isFavourite(propertyId) {
  return getFavourites().includes(propertyId);
}
function updateFavouriteUI(propertyId) {
  const likeIcon = document.getElementById(`like-${propertyId}`);
  if (likeIcon) {
    if (isFavourite(propertyId)) {
      likeIcon.classList.add('liked');
    } else {
      likeIcon.classList.remove('liked');
    }
  }
}

// On page load, update all favourite icons
function updateAllFavouritesUI() {
  getFavourites().forEach(updateFavouriteUI);
}

// Favourites navbar filter
let showingFavourites = false;
function showFavouritesOnly() {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const favIds = getFavourites();
  const favProps = featuredProperties.filter(p => favIds.includes(p.id));
  if (favProps.length === 0) {
    grid.innerHTML = '<div class="no-favourites-msg" style="padding:2rem;text-align:center;color:#e63963;font-size:1.2em;">You have no favourite properties yet.<br>Click the heart on a property to add it here!</div>';
    return;
  }
  favProps.forEach(property => {
    const propertyCard = createPropertyCard(property);
    grid.appendChild(propertyCard);
  });
}
