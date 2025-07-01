// Search page functionality

const searchResults = [
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
    amenities: ["WiFi", "Kitchen", "Parking", "Pool"],
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
    amenities: ["WiFi", "Kitchen", "Fireplace", "Hot tub"],
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
    amenities: ["WiFi", "Kitchen", "Gym", "Doorman"],
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
    amenities: ["WiFi", "Kitchen", "Parking", "Garden"],
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
    amenities: ["WiFi", "Kitchen", "Pool", "Spa"],
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
    amenities: ["WiFi", "Kitchen", "Dock", "Kayaks"],
  },
]

let filteredResults = [...searchResults]
let currentViewMode = "grid"
let filtersVisible = false
const currentImageIndexes = {}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadSearchParams()
  setupFilters()
  loadResults()
  updateResultsInfo()
})

// Load search parameters from URL
function loadSearchParams() {
  const urlParams = new URLSearchParams(window.location.search)

  const location = urlParams.get("location")
  const checkIn = urlParams.get("checkin")
  const checkOut = urlParams.get("checkout")
  const guests = urlParams.get("guests")

  if (location) document.getElementById("searchLocation").value = location
  if (checkIn) document.getElementById("checkIn").value = checkIn
  if (checkOut) document.getElementById("checkOut").value = checkOut
  if (guests) document.getElementById("guests").value = guests
}

// Setup filter controls
function setupFilters() {
  const minPriceSlider = document.getElementById("minPrice")
  const maxPriceSlider = document.getElementById("maxPrice")

  minPriceSlider.addEventListener("input", updatePriceLabels)
  maxPriceSlider.addEventListener("input", updatePriceLabels)
  minPriceSlider.addEventListener("change", applyFilters)
  maxPriceSlider.addEventListener("change", applyFilters)

  updatePriceLabels()
}

// Update price labels
function updatePriceLabels() {
  const minPrice = document.getElementById("minPrice").value
  const maxPrice = document.getElementById("maxPrice").value

  document.getElementById("minPriceLabel").textContent = `$${minPrice}`
  document.getElementById("maxPriceLabel").textContent = maxPrice == 1000 ? "$1000+" : `$${maxPrice}`
}

// Apply filters
function applyFilters() {
  const minPrice = Number.parseInt(document.getElementById("minPrice").value)
  const maxPrice = Number.parseInt(document.getElementById("maxPrice").value)
  const propertyType = document.getElementById("propertyTypeFilter").value

  // Get selected amenities
  const selectedAmenities = Array.from(document.querySelectorAll(".amenities-filters input:checked")).map(
    (input) => input.value,
  )

  filteredResults = searchResults.filter((property) => {
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice
    const matchesType = propertyType === "all" || property.type.toLowerCase().includes(propertyType)
    const matchesAmenities =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) =>
        property.amenities.some((propAmenity) => propAmenity.toLowerCase().includes(amenity.toLowerCase())),
      )

    return matchesPrice && matchesType && matchesAmenities
  })

  loadResults()
  updateResultsInfo()
}

// Sort results
function sortResults() {
  const sortBy = document.getElementById("sortSelect").value

  switch (sortBy) {
    case "price-low":
      filteredResults.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredResults.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredResults.sort((a, b) => b.rating - a.rating)
      break
    default:
      // Keep original order for recommended
      break
  }

  loadResults()
}

// Set view mode
function setViewMode(mode) {
  currentViewMode = mode

  // Update button states
  document.getElementById("gridView").classList.toggle("active", mode === "grid")
  document.getElementById("listView").classList.toggle("active", mode === "list")

  // Update grid class
  const resultsGrid = document.getElementById("resultsGrid")
  resultsGrid.classList.toggle("list-view", mode === "list")

  loadResults()
}

// Toggle filters visibility
function toggleFilters() {
  filtersVisible = !filtersVisible
  const sidebar = document.getElementById("filtersSidebar")
  sidebar.classList.toggle("active", filtersVisible)
}

// Load and display results
function loadResults() {
  const grid = document.getElementById("resultsGrid")
  grid.innerHTML = ""

  filteredResults.forEach((property) => {
    const propertyCard = createSearchPropertyCard(property)
    grid.appendChild(propertyCard)
  })
}

// Create search property card
function createSearchPropertyCard(property) {
  const card = document.createElement("div")
  card.className = `search-property-card ${currentViewMode === "list" ? "list-view" : ""}`
  card.onclick = () => goToProperty(property.id)

  currentImageIndexes[property.id] = 0

  if (currentViewMode === "list") {
    card.innerHTML = `
            <div class="property-image-container">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image" id="search-image-${property.id}">
                <button class="like-button" onclick="event.stopPropagation(); toggleSearchLike(${property.id})">
                    <i class="fas fa-heart like-icon" id="search-like-${property.id}"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-header">
                    <div>
                        <h3 class="property-title">${property.title}</h3>
                        <p class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}
                        </p>
                    </div>
                    <div class="rating-info">
                        <i class="fas fa-star star-filled"></i>
                        <span>${property.rating}</span>
                        <span>(${property.reviews})</span>
                    </div>
                </div>
                <p class="property-specs">
                    ${property.type} · ${property.guests} guests · ${property.bedrooms} bedrooms · ${property.bathrooms} bathrooms
                </p>
                <p class="property-host">Hosted by ${property.host}</p>
                <div class="property-amenities">
                    ${property.amenities
                      .slice(0, 4)
                      .map((amenity) => `<span class="amenity-badge">${amenity}</span>`)
                      .join("")}
                </div>
                <div class="property-price">
                    <span class="price-amount">$${property.price}</span>
                    <span class="price-period"> night</span>
                </div>
            </div>
        `
  } else {
    card.innerHTML = `
            <div class="property-image-container">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image" id="search-image-${property.id}">
                <button class="like-button" onclick="event.stopPropagation(); toggleSearchLike(${property.id})">
                    <i class="fas fa-heart like-icon" id="search-like-${property.id}"></i>
                </button>
                ${
                  property.images.length > 1
                    ? `
                    <button class="image-nav-button prev-button" onclick="event.stopPropagation(); changeSearchImage(${property.id}, -1)">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="image-nav-button next-button" onclick="event.stopPropagation(); changeSearchImage(${property.id}, 1)">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                `
                    : ""
                }
            </div>
            <div class="property-info">
                <div class="property-header">
                    <h3 class="property-title">${property.title}</h3>
                    <div class="rating-info">
                        <i class="fas fa-star star-filled"></i>
                        <span>${property.rating}</span>
                    </div>
                </div>
                <p class="property-location">${property.location}</p>
                <p class="property-host">Hosted by ${property.host}</p>
                <p class="property-price">
                    <span class="price-amount">$${property.price}</span>
                    <span class="price-period"> night</span>
                </p>
            </div>
        `
  }

  return card
}

// Change search property image
function changeSearchImage(propertyId, direction) {
  const property = searchResults.find((p) => p.id === propertyId)
  if (!property) return

  const currentIndex = currentImageIndexes[propertyId]
  const newIndex = (currentIndex + direction + property.images.length) % property.images.length

  currentImageIndexes[propertyId] = newIndex

  const imageElement = document.getElementById(`search-image-${propertyId}`)
  if (imageElement) {
    imageElement.src = property.images[newIndex]
  }
}

// Toggle like for search results
function toggleSearchLike(propertyId) {
  const likeIcon = document.getElementById(`search-like-${propertyId}`)
  if (likeIcon) {
    likeIcon.classList.toggle("liked")
  }
}

// Update results info
function updateResultsInfo() {
  const urlParams = new URLSearchParams(window.location.search)
  const location = urlParams.get("location")
  const checkIn = urlParams.get("checkin")
  const checkOut = urlParams.get("checkout")
  const guests = urlParams.get("guests")

  const title = `${filteredResults.length} stays${location ? ` in ${location}` : ""}`
  const subtitle = []

  if (checkIn && checkOut) {
    subtitle.push(`${checkIn} - ${checkOut}`)
  }
  if (guests) {
    subtitle.push(`${guests} guests`)
  }

  document.getElementById("resultsTitle").textContent = title
  document.getElementById("resultsSubtitle").textContent = subtitle.join(" · ")
}

// Perform search
function performSearch() {
  const location = document.getElementById("searchLocation").value
  const checkIn = document.getElementById("checkIn").value
  const checkOut = document.getElementById("checkOut").value
  const guests = document.getElementById("guests").value

  // Update URL with new search parameters
  const params = new URLSearchParams()
  if (location) params.append("location", location)
  if (checkIn) params.append("checkin", checkIn)
  if (checkOut) params.append("checkout", checkOut)
  if (guests) params.append("guests", guests)

  window.history.pushState({}, "", `search.html?${params.toString()}`)

  // Update results info
  updateResultsInfo()
}

// Navigate to property page
function goToProperty(propertyId) {
  window.location.href = `property.html?id=${propertyId}`
}
