// Enhanced Host Dashboard Functionality

// Sample data with Indian properties
const hostProperties = [
  {
    id: 1,
    title: "Goa Beachfront Villa",
    location: "Goa, India",
    price: 450,
    rating: 4.9,
    reviews: 127,
    bookings: 89,
    revenue: 40050,
    image: "gallery/goa_beach_1.jpeg",
    status: "active",
    lastBooking: "2024-03-15",
    occupancy: 85,
  },
  {
    id: 2,
    title: "Manali Mountain Cabin",
    location: "Manali, Himachal Pradesh",
    price: 280,
    rating: 4.8,
    reviews: 89,
    bookings: 67,
    revenue: 18760,
    image: "gallery/manali_1.jpg",
    status: "active",
    lastBooking: "2024-03-18",
    occupancy: 72,
  },
  {
    id: 3,
    title: "Jaipur Heritage Townhouse",
    location: "Jaipur, Rajasthan",
    price: 320,
    rating: 4.9,
    reviews: 156,
    bookings: 94,
    revenue: 30080,
    image: "gallery/jaipur_1.jpg",
    status: "active",
    lastBooking: "2024-03-20",
    occupancy: 78,
  },
]

const recentBookings = [
  {
    id: 1,
    guest: "Amit Sharma",
    property: "Goa Beachfront Villa",
    checkIn: "2024-03-25",
    checkOut: "2024-03-28",
    amount: 1350,
    status: "confirmed",
    guestAvatar: "gallery/avatar_1.jpeg",
  },
  {
    id: 2,
    guest: "Priya Singh",
    property: "Manali Mountain Cabin",
    checkIn: "2024-03-30",
    checkOut: "2024-04-02",
    amount: 840,
    status: "pending",
    guestAvatar: "gallery/avatar_2.jpeg",
  },
  {
    id: 3,
    guest: "Rahul Verma",
    property: "Jaipur Heritage Townhouse",
    checkIn: "2024-04-05",
    checkOut: "2024-04-08",
    amount: 960,
    status: "confirmed",
    guestAvatar: "gallery/avatar_3.jpeg",
  },
  {
    id: 4,
    guest: "Neha Patel",
    property: "Goa Beachfront Villa",
    checkIn: "2024-04-10",
    checkOut: "2024-04-13",
    amount: 1350,
    status: "confirmed",
    guestAvatar: "gallery/avatar_4.jpeg",
  },
]

let activeTab = "overview"
let currentStats = {}
let avatarChanged = false;

// Initialize the page with animations
document.addEventListener("DOMContentLoaded", () => {
  initializeDashboard()
  setupEventListeners()
  startStatsAnimation()
  const btn = document.querySelector('.floating-back-btn');
  if (btn) {
    console.log('Floating back button is present and should be visible.');
    btn.style.display = 'block';
    btn.style.opacity = '1';
  } else {
    alert('Floating back button is NOT present in the DOM!');
  }
})

function initializeDashboard() {
  loadStats()
  loadOverviewContent()
  loadPropertiesContent()
  loadBookingsContent()
  loadEarningsContent()
  
  // Add loading animation
  document.body.classList.add('loaded')
}

function setupEventListeners() {
  // Quick action buttons
  document.querySelectorAll('.quick-action-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.currentTarget.querySelector('span').textContent
      handleQuickAction(action)
    })
  })
}

// Enhanced stats loading with animations
function loadStats() {
  const totalRevenue = hostProperties.reduce((sum, property) => sum + property.revenue, 0)
  const totalBookings = hostProperties.reduce((sum, property) => sum + property.bookings, 0)
  const averageRating = hostProperties.reduce((sum, property) => sum + property.rating, 0) / hostProperties.length
  const totalProperties = hostProperties.length

  currentStats = {
    revenue: totalRevenue,
    bookings: totalBookings,
    properties: totalProperties,
    rating: averageRating
  }

  // Animate stats
  animateValue("totalRevenue", 0, totalRevenue, 1000, (value) => `₹${value.toLocaleString()}`)
  animateValue("totalBookings", 0, totalBookings, 1000, (value) => value.toLocaleString())
  animateValue("totalProperties", 0, totalProperties, 1000, (value) => value.toLocaleString())
  animateValue("avgRating", 0, averageRating, 1000, (value) => value.toFixed(1))
}

function animateValue(elementId, start, end, duration, formatter) {
  const element = document.getElementById(elementId)
  if (!element) return

  const startTime = performance.now()
  
  function updateValue(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = start + (end - start) * easeOutQuart
    
    element.textContent = formatter(currentValue)
    
    if (progress < 1) {
      requestAnimationFrame(updateValue)
    }
  }
  
  requestAnimationFrame(updateValue)
}

// Enhanced tab switching with smooth transitions
function switchTab(tabName) {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")
  
  // Update active tab button
  tabButtons.forEach((button) => {
    button.classList.remove("active")
  })
  event.target.classList.add("active")

  // Hide all tab contents with fade out
  tabContents.forEach((content) => {
    content.style.opacity = '0'
    content.classList.remove("active")
  })

  // Show selected tab with fade in
  setTimeout(() => {
    const activeContent = document.getElementById(tabName)
    activeContent.classList.add("active")
    activeContent.style.opacity = '1'
  }, 150)

  activeTab = tabName
  
  // Load content based on tab
  switch(tabName) {
    case 'overview':
      loadOverviewContent()
      break
    case 'properties':
      loadPropertiesContent()
      break
    case 'bookings':
      loadBookingsContent()
      break
    case 'earnings':
      loadEarningsContent()
      break
  }
}

// Enhanced overview content
function loadOverviewContent() {
  loadRecentBookings()
  updateQuickActions()
}

function loadRecentBookings() {
  const container = document.getElementById("recentBookings")
  if (!container) return
  
  container.innerHTML = ""

  recentBookings.slice(0, 4).forEach((booking, index) => {
    const bookingElement = createBookingElement(booking, true)
    bookingElement.style.animationDelay = `${index * 0.1}s`
    container.appendChild(bookingElement)
  })
}

function updateQuickActions() {
  const container = document.querySelector('.quick-actions')
  if (!container) return
  container.innerHTML = `
    <a class="quick-action-button" href="add-property.html">
      <i class="fas fa-plus"></i>
      <span>Add New Property</span>
    </a>
    <button class="quick-action-button" type="button">
      <i class="fas fa-calendar"></i>
      <span>Manage Calendar</span>
    </button>
    <button class="quick-action-button" type="button">
      <i class="fas fa-dollar-sign"></i>
      <span>Update Pricing</span>
    </button>
    <a class="quick-action-button" href="analytics.html">
      <i class="fas fa-chart-line"></i>
      <span>View Analytics</span>
    </a>
  `
}

// Enhanced booking element creation
function createBookingElement(booking, isRecent = false) {
  const bookingDiv = document.createElement("div")
  bookingDiv.className = "booking-item"
  bookingDiv.style.animation = 'fadeIn 0.5s ease forwards'

  const statusColors = {
    confirmed: '#10b981',
    pending: '#f59e0b',
    cancelled: '#ef4444'
  }

  bookingDiv.innerHTML = `
    <div class="booking-guest-info">
      <div class="guest-avatar">
        <img src="${booking.guestAvatar}" alt="${booking.guest}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <i class="fas fa-user" style="display: none;"></i>
      </div>
      <div class="guest-details">
        <h4>${booking.guest}</h4>
        <p><i class="fas fa-home"></i> ${booking.property}</p>
        <p><i class="fas fa-calendar"></i> ${formatDate(booking.checkIn)} - ${formatDate(booking.checkOut)}</p>
      </div>
    </div>
    <div class="booking-amount">
      <p class="amount-value">₹${booking.amount.toLocaleString()}</p>
      <span class="booking-status status-${booking.status}" style="background: ${statusColors[booking.status]}20; color: ${statusColors[booking.status]}">
        ${booking.status}
      </span>
      ${!isRecent && booking.status === "pending" ? `
        <div class="booking-actions">
          <button class="action-btn" onclick="viewBookingDetails(${booking.id})">View Details</button>
          <button class="action-btn approve" onclick="approveBooking(${booking.id})">Approve</button>
        </div>
      ` : ""}
    </div>
  `

  return bookingDiv
}

// Enhanced properties content
function loadPropertiesContent() {
  const container = document.getElementById("hostPropertiesGrid")
  if (!container) return
  
  container.innerHTML = ""

  hostProperties.forEach((property, index) => {
    const propertyElement = createHostPropertyElement(property)
    propertyElement.style.animationDelay = `${index * 0.1}s`
    container.appendChild(propertyElement)
  })
}

function createHostPropertyElement(property) {
  const propertyDiv = document.createElement("div")
  propertyDiv.className = "host-property-card"
  propertyDiv.style.animation = 'fadeIn 0.5s ease forwards'

  const occupancyColor = property.occupancy > 80 ? '#10b981' : property.occupancy > 60 ? '#f59e0b' : '#ef4444'

  propertyDiv.innerHTML = `
    <img src="${property.image || 'gallery/goa_beach_1.jpeg'}" alt="${property.title}" class="host-property-image">
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
          <p>₹${property.price}</p>
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
          <p>₹${property.revenue.toLocaleString()}</p>
        </div>
        <div class="stat-item">
          <p>Occupancy</p>
          <p style="color: ${occupancyColor}">${property.occupancy}%</p>
        </div>
        <div class="stat-item">
          <p>Last Booking</p>
          <p>${formatDate(property.lastBooking)}</p>
        </div>
      </div>
      
      <div class="host-property-actions">
        <button class="property-action-btn edit" onclick="editProperty(${property.id})">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="property-action-btn calendar" onclick="manageCalendar(${property.id})">
          <i class="fas fa-calendar"></i> Calendar
        </button>
        <button class="property-action-btn delete" onclick="deleteProperty(${property.id})">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  `

  return propertyDiv
}

// Enhanced bookings content
function loadBookingsContent() {
  const container = document.getElementById("allBookings")
  if (!container) return
  
  container.innerHTML = ""

  recentBookings.forEach((booking, index) => {
    const bookingElement = createBookingElement(booking, false)
    bookingElement.style.animationDelay = `${index * 0.1}s`
    container.appendChild(bookingElement)
  })
}

// Enhanced earnings content
function loadEarningsContent() {
  const totalRevenue = currentStats.revenue
  const monthlyRevenue = Math.round(totalRevenue * 0.3)
  const avgPerBooking = Math.round(totalRevenue / currentStats.bookings)
  
  animateValue("yearEarning", 0, totalRevenue, 1000, (value) => `₹${value.toLocaleString()}`)
  animateValue("avgEarning", 0, avgPerBooking, 1000, (value) => `₹${value.toLocaleString()}`)
  
  loadEarningsByProperty()
}

function loadEarningsByProperty() {
  const container = document.getElementById("earningsByProperty")
  if (!container) return
  
  container.innerHTML = ""

  hostProperties.forEach((property, index) => {
    const earningDiv = document.createElement("div")
    earningDiv.className = "earning-item"
    earningDiv.style.animation = 'fadeIn 0.5s ease forwards'
    earningDiv.style.animationDelay = `${index * 0.1}s`

    const percentage = Math.round((property.revenue / currentStats.revenue) * 100)

    earningDiv.innerHTML = `
      <div class="earning-property-info">
        <img src="${property.image || 'gallery/goa_beach_1.jpeg'}" alt="${property.title}" class="earning-property-image">
        <div>
          <h4>${property.title}</h4>
          <p>${property.location}</p>
        </div>
      </div>
      <div class="earning-details">
        <div class="earning-amount">₹${property.revenue.toLocaleString()}</div>
        <div class="earning-percentage">${percentage}% of total</div>
        <div class="earning-bookings">${property.bookings} bookings</div>
      </div>
    `

    container.appendChild(earningDiv)
  })
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  })
}

function handleQuickAction(action) {
  const messages = {
    'calendar': 'Calendar management feature coming soon!',
    'pricing': 'Pricing update feature coming soon!',
  }
  
  showNotification(messages[action] || 'Feature coming soon!', 'info')
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.classList.add('show')
  }, 100)
  
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Action handlers
function editProperty(propertyId) {
  showNotification(`Edit property ${propertyId} - Feature coming soon!`, 'info')
}

function manageCalendar(propertyId) {
  showNotification(`Manage calendar for property ${propertyId} - Feature coming soon!`, 'info')
}

function deleteProperty(propertyId) {
  if (confirm('Are you sure you want to delete this property?')) {
    showNotification('Property deleted successfully!', 'success')
    // Remove from array and reload
    const index = hostProperties.findIndex(p => p.id === propertyId)
    if (index > -1) {
      hostProperties.splice(index, 1)
      loadPropertiesContent()
      loadStats()
    }
  }
}

function viewBookingDetails(bookingId) {
  showNotification(`View booking ${bookingId} details - Feature coming soon!`, 'info')
}

function approveBooking(bookingId) {
  const booking = recentBookings.find(b => b.id === bookingId)
  if (booking) {
    booking.status = 'confirmed'
    showNotification('Booking approved successfully!', 'success')
    loadBookingsContent()
    loadOverviewContent()
  }
}

// Stats animation on page load
function startStatsAnimation() {
  setTimeout(() => {
    loadStats()
  }, 500)
}

avatarInput.onchange = function() {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarImg.src = e.target.result;
            editedUser.avatar = e.target.result;
            saveBar.style.display = 'flex';
            changesMade = true;
            avatarChanged = true;
        };
        reader.readAsDataURL(file);
    }
};

function saveChanges(e) {
    e.preventDefault();
    // Save if a field is being edited or avatar was changed
    if (!editingField && !avatarChanged) return;
    if (editingField) {
        const val = editEls[editingField].value;
        if (val !== user[editingField]) {
            editedUser[editingField] = val;
            changesMade = true;
        }
        if (editingField === 'dob') {
            editedUser.joined = val.split('-')[0] || user.joined;
        }
    }
    if (changesMade || avatarChanged) {
        user = { ...user, ...editedUser };
        localStorage.setItem('tripnestUser', JSON.stringify(user));
        showToast('Profile updated!');
    }
    avatarChanged = false; // reset
    renderView();
    if (avatarChanged) saveBar.style.display = 'flex';
}
