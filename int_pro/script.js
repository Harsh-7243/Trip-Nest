// Property data
const featuredProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
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
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
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
  },
  {
    id: 3,
    title: "Modern City Apartment",
    location: "New York, NY",
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
  },
  {
    id: 4,
    title: "Historic Townhouse",
    location: "Boston, Massachusetts",
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
  },
  {
    id: 5,
    title: "Desert Oasis",
    location: "Scottsdale, Arizona",
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
  },
  {
    id: 6,
    title: "Lakefront Cottage",
    location: "Lake Tahoe, California",
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
  },
  {
    id: 7,
    title: "Chic Urban Loft",
    location: "Chicago, Illinois",
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
  },
  {
    id: 8,
    title: "Rustic Farmhouse",
    location: "Nashville, Tennessee",
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
  },
  {
    id: 9,
    title: "Seaside Bungalow",
    location: "Goa, India",
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
  },
  {
    id: 10,
    title: "Modern Studio",
    location: "Berlin, Germany",
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
  },
  {
    id: 11,
    title: "Tropical Treehouse",
    location: "Bali, Indonesia",
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
  },
  {
    id: 12,
    title: "Luxury Penthouse",
    location: "Dubai, UAE",
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
  },
]

let currentProperties = [...featuredProperties]
const currentImageIndexes = {}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadProperties()
  initializeImageCarousels()
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
  card.className = "property-card airbnb-style"
  card.onclick = () => goToProperty(property.id)

  currentImageIndexes[property.id] = 0

  card.innerHTML = `
    <div class="property-image-container">
      <img src="${property.images[0]}" alt="${property.title}" class="property-image airbnb-img" id="image-${property.id}">
      <div class="guest-fav-badge">Guest favourite</div>
      <button class="like-button" onclick="event.stopPropagation(); toggleLike(${property.id})">
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
    <div class="property-info airbnb-info-row">
      <div class="info-main-row">
        <span class="property-title">${property.title}</span>
        <span class="property-price">₹${property.price}<span class="price-period"> night</span></span>
        <span class="rating-info"><i class="fas fa-star star-filled"></i> ${property.rating}</span>
      </div>
      <div class="property-location">${property.location}</div>
    </div>
  `
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
function toggleLike(propertyId) {
  const likeIcon = document.getElementById(`like-${propertyId}`)
  if (likeIcon) {
    likeIcon.classList.toggle("liked")
  }
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
