// Full property data (copied from script.js)
const allProperties = [
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
  },
];

function getFavourites() {
  return JSON.parse(localStorage.getItem('favouriteProperties') || '[]');
}
function setFavourites(favs) {
  localStorage.setItem('favouriteProperties', JSON.stringify(favs));
}
function removeFavourite(propertyId) {
  let favs = getFavourites();
  favs = favs.filter(id => id !== propertyId);
  setFavourites(favs);
  renderFavourites();
  showToast('Removed from favourites');
}
function goToProperty(propertyId) {
  window.location.href = `property.html?id=${propertyId}`;
}
function renderFavourites() {
  const grid = document.getElementById('favouritesGrid');
  if (!grid) return;
  const favIds = getFavourites();
  const favProps = allProperties.filter(p => favIds.includes(p.id));
  grid.innerHTML = '';
  if (favProps.length === 0) {
    grid.innerHTML = '<div class="no-favourites-msg">You have no favourite properties yet.<br>Click the heart on a property to add it here!</div>';
    return;
  }
  favProps.forEach((property, idx) => {
    const card = document.createElement('div');
    card.className = 'fav-property-card fade-in';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${property.title}`);
    card.style.animationDelay = `${idx * 0.05}s`;
    card.innerHTML = `
      <img src="${property.images[0]}" alt="${property.title}" class="fav-property-image">
      <button class="fav-remove-btn" title="Remove from favourites" data-id="${property.id}">
        <i class="fas fa-trash fav-remove-icon"></i>
      </button>
      <div class="fav-property-info">
        <div class="fav-property-title">${property.title}</div>
        <div class="fav-property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</div>
        <div class="fav-property-price">₹${property.price} <span style="color:#64748b;font-weight:400;">/ night</span></div>
        <div class="fav-property-rating"><i class="fas fa-star"></i> ${property.rating}</div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.fav-remove-btn')) return;
      goToProperty(property.id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        goToProperty(property.id);
      }
    });
    grid.appendChild(card);
  });
  // Event delegation for remove buttons
  grid.querySelectorAll('.fav-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'));
      removeFavourite(id);
    });
  });
}
function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<i class="fas fa-trash"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => document.body.removeChild(toast), 350);
  }, 1800);
}
// Fade-in animation
const style = document.createElement('style');
style.innerHTML = `
.fade-in { opacity: 0; transform: translateY(10px); animation: fadeInUp 0.5s forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: none; } }
.toast-message {
  position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
  background: #fff0f5; color: #e63963; border-radius: 16px; padding: 1rem 2rem;
  box-shadow: 0 4px 24px rgba(230,57,99,0.13);
  font-size: 1.1em; font-weight: 600; z-index: 9999;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
  display: flex; align-items: center; gap: 0.7em;
}
.toast-message.show { opacity: 1; pointer-events: auto; }
`;
document.head.appendChild(style);

window.removeFavourite = removeFavourite;
document.addEventListener('DOMContentLoaded', renderFavourites); 