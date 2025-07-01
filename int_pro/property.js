// Property data (same as in script.js but with more details)
const propertyData = {
  1: {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Sarah",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      joinDate: "2019",
      reviews: 89,
      verified: true,
    },
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Escape to this stunning beachfront villa with panoramic ocean views. This luxurious property features modern amenities, a private beach access, and breathtaking sunsets. Perfect for families or groups looking for an unforgettable coastal getaway.",
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
}

const reviews = [
  {
    id: 1,
    user: "John D.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    date: "March 2024",
    comment:
      "Absolutely stunning property! The ocean views were breathtaking and Sarah was an amazing host. Would definitely stay here again.",
  },
  {
    id: 2,
    user: "Emily R.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    date: "February 2024",
    comment:
      "Perfect location and beautifully decorated. The kitchen was well-equipped and the beach access was incredible.",
  },
  {
    id: 3,
    user: "Michael S.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    date: "January 2024",
    comment:
      "Great stay overall. The property was clean and exactly as described. Minor issue with WiFi but Sarah resolved it quickly.",
  },
]

let currentImageIndex = 0
let currentProperty = null
let isLiked = false

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadProperty()
  setupBookingForm()
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
  isLiked = !isLiked
  const likeIcon = document.getElementById("likeIcon")
  likeIcon.style.color = isLiked ? "#ff385c" : "#666"
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
  document.getElementById("priceAmount").textContent = `$${currentProperty.price}`
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
            <span>$${currentProperty.price} x ${nights} nights</span>
            <span>$${subtotal}</span>
        </div>
        <div class="breakdown-item">
            <span>Cleaning fee</span>
            <span>$${cleaningFee}</span>
        </div>
        <div class="breakdown-item">
            <span>Service fee</span>
            <span>$${serviceFee}</span>
        </div>
        <div class="breakdown-total">
            <span>Total</span>
            <span>$${total}</span>
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
