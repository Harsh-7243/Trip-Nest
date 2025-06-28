// Host dashboard functionality

const hostProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 127,
    bookings: 89,
    revenue: 40050,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
    status: "active",
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.8,
    reviews: 89,
    bookings: 67,
    revenue: 18760,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
    status: "active",
  },
]

const recentBookings = [
  {
    id: 1,
    guest: "John Smith",
    property: "Luxury Beachfront Villa",
    checkIn: "2024-03-15",
    checkOut: "2024-03-18",
    amount: 1350,
    status: "confirmed",
  },
  {
    id: 2,
    guest: "Emily Johnson",
    property: "Cozy Mountain Cabin",
    checkIn: "2024-03-20",
    checkOut: "2024-03-23",
    amount: 840,
    status: "pending",
  },
  {
    id: 3,
    guest: "Michael Brown",
    property: "Luxury Beachfront Villa",
    checkIn: "2024-03-25",
    checkOut: "2024-03-28",
    amount: 1350,
    status: "confirmed",
  },
]

let activeTab = "overview"

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadStats()
  loadOverviewContent()
  loadPropertiesContent()
  loadBookingsContent()
  loadEarningsContent()
})

// Load statistics
function loadStats() {
  const totalRevenue = hostProperties.reduce((sum, property) => sum + property.revenue, 0)
  const totalBookings = hostProperties.reduce((sum, property) => sum + property.bookings, 0)
  const averageRating = hostProperties.reduce((sum, property) => sum + property.rating, 0) / hostProperties.length

  document.getElementById("totalRevenue").textContent = `$${totalRevenue.toLocaleString()}`
  document.getElementById("totalBookings").textContent = totalBookings
  document.getElementById("totalProperties").textContent = hostProperties.length
  document.getElementById("avgRating").textContent = averageRating.toFixed(1)
}

// Switch tabs
function switchTab(tabName) {
  // Update active tab button
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active")
  })
  event.target.classList.add("active")

  // Show/hide tab content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })
  document.getElementById(tabName).classList.add("active")

  activeTab = tabName
}

// Load overview content
function loadOverviewContent() {
  loadRecentBookings()
}

// Load recent bookings
function loadRecentBookings() {
  const container = document.getElementById("recentBookings")
  container.innerHTML = ""

  recentBookings.slice(0, 3).forEach((booking) => {
    const bookingElement = createBookingElement(booking, true)
    container.appendChild(bookingElement)
  })
}

// Create booking element
function createBookingElement(booking, isRecent = false) {
  const bookingDiv = document.createElement("div")
  bookingDiv.className = "booking-item"

  bookingDiv.innerHTML = `
        <div class="booking-guest-info">
            <div class="guest-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="guest-details">
                <h4>${booking.guest}</h4>
                <p>${booking.property}</p>
                <p>${booking.checkIn} - ${booking.checkOut}</p>
            </div>
        </div>
        <div class="booking-amount">
            <p class="amount-value">$${booking.amount}</p>
            <span class="booking-status status-${booking.status}">${booking.status}</span>
            ${
              !isRecent && booking.status === "pending"
                ? `
                <div class="booking-actions">
                    <button class="action-btn" onclick="viewBookingDetails(${booking.id})">View Details</button>
                    <button class="action-btn approve" onclick="approveBooking(${booking.id})">Approve</button>
                </div>
            `
                : ""
            }
        </div>
    `

  return bookingDiv
}

// Load properties content
function loadPropertiesContent() {
  const container = document.getElementById("hostPropertiesGrid")
  container.innerHTML = ""

  hostProperties.forEach((property) => {
    const propertyElement = createHostPropertyElement(property)
    container.appendChild(propertyElement)
  })
}

// Create host property element
function createHostPropertyElement(property) {
  const propertyDiv = document.createElement("div")
  propertyDiv.className = "host-property-card"

  propertyDiv.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="host-property-image">
        <div class="host-property-content">
            <div class="host-property-header">
                <div>
                    <h3 class="host-property-title">${property.title}</h3>
                    <div class="host-property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${property.location}
                    </div>
                </div>
                <span class="property-status">${property.status}</span>
            </div>
            
            <div class="host-property-stats">
                <div class="stat-item">
                    <p>Price per night</p>
                    <p>$${property.price}</p>
                </div>
                <div class="stat-item">
                    <p>Rating</p>
                    <p><i class="fas fa-star" style="color: #fbbf24;"></i> ${property.rating} (${property.reviews})</p>
                </div>
                <div class="stat-item">
                    <p>Bookings</p>
                    <p>${property.bookings}</p>
                </div>
                <div class="stat-item">
                    <p>Revenue</p>
                    <p>$${property.revenue.toLocaleString()}</p>
                </div>
            </div>
            
            <div class="host-property-actions">
                <button class="property-action-btn" onclick="editProperty(${property.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="property-action-btn" onclick="manageCalendar(${property.id})">
                    <i class="fas fa-calendar"></i> Calendar
                </button>
                <button class="property-action-btn delete" onclick="deleteProperty(${property.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `

  return propertyDiv
}

// Load bookings content
function loadBookingsContent() {
  const container = document.getElementById("allBookings")
  container.innerHTML = ""

  recentBookings.forEach((booking) => {
    const bookingElement = createBookingElement(booking, false)
    container.appendChild(bookingElement)
  })
}

// Load earnings content
function loadEarningsContent() {
  const totalRevenue = hostProperties.reduce((sum, property) => sum + property.revenue, 0)
  const totalBookings = hostProperties.reduce((sum, property) => sum + property.bookings, 0)

  document.getElementById("yearEarning").textContent = `$${totalRevenue.toLocaleString()}`
  document.getElementById("avgEarning").textContent = `$${Math.round(totalRevenue / totalBookings)}`

  loadEarningsByProperty()
}

// Load earnings by property
function loadEarningsByProperty() {
  const container = document.getElementById("earningsByProperty")
  container.innerHTML = ""

  hostProperties.forEach((property) => {
    const earningDiv = document.createElement("div")
    earningDiv.className = "earning-item"

    earningDiv.innerHTML = `
            <div class="earning-property-info">
                <img src="${property.image}" alt="${property.title}" class="earning-property-image">
                <div class="earning-property-details">
                    <h4>${property.title}</h4>
                    <p>${property.location}</p>
                    <p>${property.bookings} bookings</p>
                </div>
            </div>
            <div class="earning-amount-info">
                <p class="earning-total">$${property.revenue.toLocaleString()}</p>
                <p class="earning-label">Total revenue</p>
            </div>
        `

    container.appendChild(earningDiv)
  })
}

// Property management functions
function editProperty(propertyId) {
  alert(`Edit property ${propertyId} - This would open an edit form`)
}

function manageCalendar(propertyId) {
  alert(`Manage calendar for property ${propertyId} - This would open a calendar interface`)
}

function deleteProperty(propertyId) {
  if (confirm("Are you sure you want to delete this property?")) {
    alert(`Property ${propertyId} deleted - This would remove the property from the database`)
  }
}

// Booking management functions
function viewBookingDetails(bookingId) {
  alert(`View details for booking ${bookingId} - This would show detailed booking information`)
}

function approveBooking(bookingId) {
  if (confirm("Approve this booking?")) {
    // Update booking status
    const booking = recentBookings.find((b) => b.id === bookingId)
    if (booking) {
      booking.status = "confirmed"
      loadBookingsContent()
      loadRecentBookings()
    }
    alert("Booking approved successfully!")
  }
}
