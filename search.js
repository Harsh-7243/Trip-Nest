// Redesigned TripNest Search Results JS

const allProperties = [
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
    type: "villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      { icon: "fas fa-wifi", name: "wifi" },
      { icon: "fas fa-car", name: "parking" },
      { icon: "fas fa-tv", name: "tv" },
      { icon: "fas fa-coffee", name: "kitchen" },
      { icon: "fas fa-swimming-pool", name: "pool" },
      { icon: "fas fa-dumbbell", name: "gym" },
    ],
    description: "Experience the magic of Goa in this luxurious beachfront villa. Enjoy private beach access, Goan cuisine, and vibrant nightlife just steps away. Perfect for families or groups seeking sun, sand, and serenity on India's most famous coast.",
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.8,
    reviews: 89,
    images: [
      "gallery/mumbai_2.jpg",
      "gallery/mumbai_4.jpg",
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
      "gallery/jaipur_1.jpg",
      "gallery/jaipur_2.jpg",
      "gallery/jaipur_3.jpg",
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
      "gallery/nainital_1.jpeg",
      "gallery/nainital_2.jpg",
      "gallery/nainital_3.jpg",
      "gallery/nainital_4.jpeg",
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
      "gallery/banglore_1.jpg",
      "gallery/banglore_2.jpg",
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
      "gallery/munnar_1.jpg",
      "gallery/munnar_2.jpg",
      "gallery/munnar_3.jpg",
    ],
    host: "John",
    type: "Entire cottage",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "Dock", "Kayaks"],
  },
]

let currentProperties = [...allProperties]
let viewMode = 'grid'

function performSearch() {
  const location = document.getElementById('searchLocation').value.trim().toLowerCase()
  const guests = parseInt(document.getElementById('guests').value) || 1
  // Filter by location and guests
  currentProperties = allProperties.filter(p =>
    (!location || p.location.toLowerCase().includes(location)) &&
    (!guests || p.guests >= guests)
  )
  renderResults()
}

function setViewMode(mode) {
  viewMode = mode
  document.getElementById('gridView').classList.toggle('active', mode === 'grid')
  document.getElementById('listView').classList.toggle('active', mode === 'list')
  renderResults()
}

function sortResults() {
  const sort = document.getElementById('sortSelect').value
  if (sort === 'price-low') currentProperties.sort((a, b) => a.price - b.price)
  else if (sort === 'price-high') currentProperties.sort((a, b) => b.price - a.price)
  else if (sort === 'rating') currentProperties.sort((a, b) => b.rating - a.rating)
  else currentProperties.sort((a, b) => b.rating - a.rating) // Default: recommended
  renderResults()
}

function applyFilters() {
  // Example: filter by property type and amenities
  const type = document.getElementById('propertyTypeFilter').value
  const amenities = Array.from(document.querySelectorAll('.amenity-filter input:checked')).map(cb => cb.value)
  const minPrice = parseInt(document.getElementById('minPrice').value) || 0
  const maxPrice = parseInt(document.getElementById('maxPrice').value) || 1000
  currentProperties = allProperties.filter(p => {
    let match = true
    if (type !== 'all' && (!p.type || !p.type.toLowerCase().includes(type))) match = false
    if (p.price < minPrice || p.price > maxPrice) match = false
    if (amenities.length) {
      const propAmenities = (p.amenities || []).map(a => a.name.toLowerCase())
      if (!amenities.every(a => propAmenities.includes(a))) match = false
    }
    return match
  })
  renderResults()
}

function toggleFilters() {
  document.getElementById('filtersSidebar').classList.toggle('open')
}

function renderResults() {
  const grid = document.getElementById('resultsGrid')
  const title = document.getElementById('resultsTitle')
  const subtitle = document.getElementById('resultsSubtitle')
  grid.innerHTML = ''
  if (currentProperties.length === 0) {
    title.textContent = 'No results found'
    subtitle.textContent = 'Try adjusting your filters or search criteria.'
    grid.innerHTML = `<div style="text-align:center;padding:2.5em 0;color:#888;font-size:1.2em;">No properties match your search.<br><span style='font-size:2.5em;'>😕</span></div>`
    return
  }
  title.textContent = `${currentProperties.length} properties found`
  subtitle.textContent = 'Choose your perfect stay from our curated selection.'
  currentProperties.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = 'search-property-card' + (viewMode === 'list' ? ' list-view' : '')
    card.tabIndex = 0
    card.setAttribute('role', 'button')
    card.setAttribute('aria-label', p.title + ', ' + p.location)
    card.onclick = () => goToProperty(p.id)
    card.onkeydown = e => { if (e.key === 'Enter') goToProperty(p.id) }
    card.innerHTML = `
            <div class="property-image-container">
        <img src="${(p.images && p.images[0]) || '/placeholder.svg'}" alt="${p.title}" class="property-image">
            </div>
            <div class="property-info">
        <div class="property-title">${p.title}</div>
        <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
        <div class="property-specs">${p.guests} guests · ${p.bedrooms} bedrooms · ${p.bathrooms} baths</div>
        <div class="property-price">₹${p.price} <span style="color:#888;font-weight:400;">/ night</span></div>
        <div class="property-rating"><i class="fas fa-star"></i> ${p.rating} <span style="color:#888;font-weight:400;">(${p.reviews} reviews)</span></div>
            </div>
        `
    card.style.animation = `fadeInCard 0.5s ${i * 0.04}s both`
    grid.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // Load all properties (replace with your data source)
  // allProperties = ...
  performSearch()
  document.getElementById('gridView').onclick = () => setViewMode('grid')
  document.getElementById('listView').onclick = () => setViewMode('list')
  document.getElementById('sortSelect').onchange = sortResults
  document.getElementById('propertyTypeFilter').onchange = applyFilters
  document.querySelectorAll('.amenity-filter input').forEach(cb => cb.onchange = applyFilters)
  document.getElementById('minPrice').oninput = applyFilters
  document.getElementById('maxPrice').oninput = applyFilters
  if (!document.querySelector('.floating-back-btn')) {
    const btn = document.createElement('button');
    btn.className = 'floating-back-btn';
    btn.title = 'Back to Home';
    btn.onclick = function() { window.location.href = 'index.html'; };
    btn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    document.body.appendChild(btn);
  } else {
    document.body.appendChild(document.querySelector('.floating-back-btn'));
  }
})

function goToProperty(id) {
  window.location.href = `property.html?id=${id}`
}

// Animation for cards
const style = document.createElement('style')
style.innerHTML = `
@keyframes fadeInCard {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: none; }
}`
document.head.appendChild(style)
