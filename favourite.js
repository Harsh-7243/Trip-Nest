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
      "gallery/goa_beach_1.jpeg",
      "gallery/goa_beach_2.jpeg",
      "gallery/goa_beach_3.jpeg",
      "gallery/goa_beach_4.jpeg",
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
      "gallery/manali_1.jpg",
      "gallery/manali_2.jpg",
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
      "gallery/mumbai_2.jpg",
      "gallery/mumbai_4.jpg",
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
      "gallery/jaipur_1.jpg",
      "gallery/jaipur_2.jpg",
      "gallery/jaipur_3.jpg",
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
      "gallery/jaisalmer_1.jpg",
      "gallery/jaisalmer_2.jpg",
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
      "gallery/nainital_1.jpeg",
      "gallery/nainital_2.jpg",
      "gallery/nainital_3.jpg",
      "gallery/nainital_4.jpeg",
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
      "gallery/banglore_1.jpg",
      "gallery/banglore_2.jpg",
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
      "gallery/munnar_1.jpg",
      "gallery/munnar_2.jpg",
      "gallery/munnar_3.jpg",
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
      "gallery/puducherry_1.jpg",
      "gallery/puducherry_2.jpg",
      "gallery/puducherry_3.jpg",
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
      "gallery/delhi_1.jpg",
      "gallery/delhi_2.jpg",
      "gallery/delhi_3.jpg",
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
      "gallery/waynad_1.jpg",
      "gallery/waynad_2.jpeg",
      "gallery/waynad_3.jpg",
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
      "gallery/udaipur_1.jpeg",
      "gallery/udaipur_2.jpeg",
      "gallery/udaipur_3.jpeg",
    ],
  },
  {
    id: 13,
    title: "Hyderabad Property",
    location: "Hyderabad, Telangana",
    price: 300,
    rating: 4.8,
    reviews: 150,
    images: [
      "gallery/hyderabad_1.jpg",
      "gallery/hyderabad_2.jpg",
    ],
  },
  {
    id: 14,
    title: "Hitech City Property",
    location: "Hyderabad, Telangana",
    price: 250,
    rating: 4.7,
    reviews: 120,
    images: [
      "gallery/hitech_1.jpg",
      "gallery/hitech_2.jpg",
    ],
  },
  {
    id: 15,
    title: "Chennai Property",
    location: "Chennai, Tamil Nadu",
    price: 200,
    rating: 4.8,
    reviews: 100,
    images: [
      "gallery/chennai_1.jpg",
      "gallery/chennai_2.jpg",
      "gallery/chennai_3.jpg",
    ],
  },
  {
    id: 16,
    title: "Shimla Property",
    location: "Shimla, Himachal Pradesh",
    price: 300,
    rating: 4.9,
    reviews: 100,
    images: [
      "gallery/shimla_1.jpg",
      "gallery/shimla_2.jpg",
      "gallery/shimla_3.jpg",
    ],
  },
  {
    id: 17,
    title: "Yamuna Property",
    location: "Yamuna, Uttar Pradesh",
    price: 200,
    rating: 4.8,
    reviews: 100,
    images: [
      "gallery/yamuna_1.jpg",
      "gallery/yamuna_2.jpg",
      "gallery/yamuna_3.jpg",
    ],
  },
  {
    id: 18,
    title: "Taj Mahal Property",
    location: "Agra, Uttar Pradesh",
    price: 500,
    rating: 4.9,
    reviews: 100,
    images: [
      "gallery/tajmahal_1.jpg",
      "gallery/tajmahal_2.jpg",
      "gallery/tajmahal_3.jpg",
    ],
  },
  {
    id: 19,
    title: "Howrah Property",
    location: "Howrah, West Bengal",
    price: 200,
    rating: 4.8,
    reviews: 100,
    images: [
      "gallery/howrah_1.jpg",
      "gallery/howrah_2.jpg",
      "gallery/howrah_3.jpg",
    ],
  },
  {
    id: 20,
    title: "Pine View",
    location: "Somewhere, Somewhere",
    price: 150,
    rating: 4.7,
    reviews: 80,
    images: [
      "gallery/pineview.jpg",
      "gallery/pineview_1.jpg",
      "gallery/pineview_2.jpg",
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