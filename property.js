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
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
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
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Emma",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
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
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    ],
    host: {
      name: "David",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
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
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Lisa",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
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
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    ],
    host: {
      name: "John",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
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
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Olivia",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
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
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Ethan",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
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
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Priya",
      avatar: "https://randomuser.me/api/portraits/women/80.jpg",
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
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Lukas",
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
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
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Ayu",
      avatar: "https://randomuser.me/api/portraits/women/99.jpg",
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
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
    ],
    host: {
      name: "Fatima",
      avatar: "https://randomuser.me/api/portraits/women/77.jpg",
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
}

// Reviews with Indian names
const reviews = [
  {
    id: 1,
    user: "Amit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    date: "March 2024",
    comment:
      "Absolutely stunning property! The ocean views were breathtaking and the host was amazing. Would definitely stay here again.",
  },
  {
    id: 2,
    user: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    date: "February 2024",
    comment:
      "Perfect location and beautifully decorated. The kitchen was well-equipped and the beach access was incredible.",
  },
  {
    id: 3,
    user: "Rahul Verma",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
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
