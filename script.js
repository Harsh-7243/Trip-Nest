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
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    ],
    host: "Fatima",
    type: "Entire penthouse",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    category: "luxury",
    description: "Enjoy royal luxury in Udaipur! This penthouse has panoramic views of Lake Pichola, rooftop pool, and is close to City Palace and Jag Mandir.",
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
  currentProperties.forEach((property) => {
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

// Filter by category
function filterByCategory(category) {
  if (category === "all") {
    currentProperties = [...featuredProperties]
  } else {
    currentProperties = featuredProperties.filter((property) => property.category === category)
  }
  loadProperties()
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
