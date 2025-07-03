// TripNest Chatbot Logic
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

function showChatbot() {
  chatbotWindow.style.display = 'flex';
  chatbotInput.focus();
}
function hideChatbot() {
  chatbotWindow.style.display = 'none';
}
chatbotToggle.addEventListener('click', showChatbot);
chatbotClose.addEventListener('click', hideChatbot);

// Close on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideChatbot();
});

// Simple FAQ/response system
const FAQ = [
  { q: /price|cost|charge|fee/i, a: "TripNest offers a range of properties at various price points. You can filter by price on the search page!" },
  { q: /cancel|refund/i, a: "You can cancel bookings from your profile. Refunds depend on the property's cancellation policy." },
  { q: /host|become.*host/i, a: "To become a host, click 'Become a Host' in the navbar and follow the steps to list your property." },
  { q: /prime|membership/i, a: "TripNest Prime offers exclusive benefits! See the 'Prime' page for all membership options." },
  { q: /favourite|like|save/i, a: "Click the heart icon on any property to add it to your Favourites. View them anytime from the Favourites page." },
  { q: /login|signup|sign up|register/i, a: "You can log in or sign up using the buttons in the navbar. Your profile and bookings are saved securely." },
  { q: /airbnb/i, a: "TripNest is inspired by Airbnb, offering unique stays and experiences across India!" },
  { q: /support|help|contact/i, a: "For further help, email us at support@tripnest.com or use this chatbot for quick answers." },
  { q: /book|booking|reserve/i, a: "To book a property, select your dates and guests, then click 'Book Now' on the property page." },
  { q: /profile|account/i, a: "Access your profile by clicking your avatar in the navbar. Edit your info, view bookings, and more!" },
  { q: /edit.*profile|change.*profile|update.*profile/i, a: "You can edit your name, email, phone, location, gender, date of birth, and bio from your profile page. Click the pen icon next to each field to edit." },
  { q: /change.*photo|profile.*picture|avatar/i, a: "To change your profile picture, click the camera icon on your profile page and upload a new photo." },
  { q: /prime.*benefit|prime.*plan|prime.*feature/i, a: "Prime members get extra discounts, early access to new properties, priority support, free cancellation on select stays, and special deals. Plans: Monthly (₹199), Yearly (₹1,499), Family (₹2,499/year, up to 4 members), Student (₹99/month)." },
  { q: /cancel.*prime|prime.*cancel/i, a: "You can cancel your Prime membership anytime from your account settings. No hidden fees." },
  { q: /early access/i, a: "Prime members receive email notifications and app alerts for early access to new property listings." },
  { q: /family.*plan/i, a: "Yes, the Family plan covers up to 4 members. Each gets their own account benefits." },
  { q: /payment.*method/i, a: "We accept all major credit/debit cards, UPI, and net banking for Prime membership and bookings." },
  { q: /host.*stat|dashboard|host.*feature/i, a: "As a host, you can view your total revenue, bookings, properties, and average rating. Use the Host Dashboard to manage properties, bookings, and earnings." },
  { q: /add.*property|list.*property/i, a: "Go to the Host Dashboard and click 'Add New Property' in the Quick Actions section to list a new property." },
  { q: /favourite.*property|save.*property/i, a: "Click the heart icon on any property to save it to your Favourites. View all your favourites from the Favourites page." },
  { q: /search.*property|find.*property|filter|sort/i, a: "Use the search bar to enter your destination, dates, and guests. Filter by price, property type, and amenities like WiFi, pool, or kitchen. Sort results by price or rating." },
  { q: /currency|rupee|indian rupee|₹/i, a: "All prices and revenue on TripNest are shown in Indian Rupees (₹)." },
  { q: /back.*button|navigation/i, a: "Every main page has a modern floating back button for easy navigation." },
  { q: /accessibility|keyboard|screen reader/i, a: "TripNest is designed to be accessible, with keyboard navigation and screen reader support." },
  { q: /testimonial|review|prime.*feedback/i, a: "Our members love Prime! For example: 'TripNest Prime saved me thousands on my family trip. The support is top-notch!' - Anjali, Mumbai" },
  { q: /amenit(y|ies)|pool|wifi|kitchen|parking|hot tub|gym/i, a: "You can filter properties by amenities such as WiFi, kitchen, parking, pool, hot tub, and gym in the search filters sidebar." },
  { q: /sort.*price|sort.*rating/i, a: "Sort search results by price (low to high or high to low) or by highest rated using the sort dropdown on the search page." },
  { q: /how to log out|logout/i, a: "To log out, click your profile avatar in the navbar and use the logout button in the dropdown." },
  { q: /how to become a member|join prime/i, a: "Go to the Prime Membership page and choose a plan to join. You can select Monthly, Yearly, Family, or Student plans." },
  { q: /how to contact support|customer support/i, a: "For help, email support@tripnest.com or use this chatbot for quick answers." },
];

// --- Property Data for Chatbot ---
const chatbotProperties = [
  {
    id: 1,
    title: "Goa Beachfront Villa",
    location: "Goa, India",
    price: 450,
    description: "Experience the magic of Goa in this luxurious beachfront villa. Enjoy private beach access, Goan cuisine, and vibrant nightlife just steps away.",
    season: "Winter (Nov-Feb)",
    attractions: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls", "Goan Carnival"]
  },
  {
    id: 2,
    title: "Manali Mountain Cabin",
    location: "Manali, Himachal Pradesh",
    price: 280,
    description: "Nestled in the Himalayas, this cozy Manali cabin offers breathtaking mountain views, apple orchards, and easy access to Solang Valley adventures.",
    season: "Summer (Mar-Jun), Winter (Dec-Feb)",
    attractions: ["Solang Valley", "Rohtang Pass", "Hidimba Temple", "Old Manali"]
  },
  {
    id: 3,
    title: "Mumbai City Apartment",
    location: "Mumbai, Maharashtra",
    price: 180,
    description: "Stay in the heart of Mumbai! This modern apartment is close to Marine Drive, Gateway of India, and the best street food.",
    season: "Winter (Nov-Feb)",
    attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach"]
  },
  {
    id: 4,
    title: "Jaipur Heritage Townhouse",
    location: "Jaipur, Rajasthan",
    price: 320,
    description: "Live like royalty in Jaipur! This heritage townhouse is near Hawa Mahal and City Palace.",
    season: "Winter (Nov-Feb)",
    attractions: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"]
  },
  {
    id: 5,
    title: "Jaisalmer Desert Oasis",
    location: "Jaisalmer, Rajasthan",
    price: 380,
    description: "Stay in a luxury oasis on the edge of the Thar Desert! Enjoy camel safaris, Rajasthani folk music, and starry nights.",
    season: "Winter (Nov-Feb)",
    attractions: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Desert Festival"]
  },
  {
    id: 6,
    title: "Nainital Lake Cottage",
    location: "Nainital, Uttarakhand",
    price: 250,
    description: "Wake up to the misty hills of Nainital! This lakefront cottage offers boating, nature walks, and easy access to Mall Road.",
    season: "Summer (Mar-Jun), Autumn (Sep-Nov)",
    attractions: ["Naini Lake", "Naina Devi Temple", "Snow View Point", "Mall Road"]
  },
  {
    id: 7,
    title: "Bangalore Urban Loft",
    location: "Bangalore, Karnataka",
    price: 210,
    description: "Enjoy Bangalore's cosmopolitan vibe in this chic loft. Walk to MG Road, sample South Indian cuisine, and relax in a modern, airy space.",
    season: "Winter (Nov-Feb)",
    attractions: ["Lalbagh Botanical Garden", "Cubbon Park", "MG Road", "Bangalore Palace"]
  },
  {
    id: 8,
    title: "Munnar Rustic Farmhouse",
    location: "Munnar, Kerala",
    price: 175,
    description: "Surround yourself with tea gardens and misty hills in Munnar! This rustic farmhouse is perfect for nature lovers.",
    season: "Monsoon (Jun-Sep), Winter (Oct-Feb)",
    attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Anamudi Peak"]
  },
  {
    id: 9,
    title: "Puducherry Seaside Bungalow",
    location: "Puducherry, India",
    price: 120,
    description: "Wake up to the sound of waves in this charming Puducherry bungalow. Stroll the French Quarter, visit Auroville, and relax on the sandy beaches.",
    season: "Winter (Nov-Feb)",
    attractions: ["Promenade Beach", "Auroville", "French Quarter", "Paradise Beach"]
  },
  {
    id: 10,
    title: "Delhi Modern Studio",
    location: "Delhi, India",
    price: 160,
    description: "Explore Delhi's rich history from this modern studio. Walk to India Gate, Connaught Place, and enjoy the flavors of Old Delhi nearby.",
    season: "Winter (Nov-Feb), Spring (Feb-Mar)",
    attractions: ["India Gate", "Red Fort", "Qutub Minar", "Connaught Place"]
  },
  {
    id: 11,
    title: "Wayanad Tropical Treehouse",
    location: "Wayanad, Kerala",
    price: 300,
    description: "Live among the treetops in Wayanad! This unique treehouse offers jungle views, bamboo interiors, and a true Kerala adventure.",
    season: "Monsoon (Jun-Sep), Winter (Oct-Feb)",
    attractions: ["Edakkal Caves", "Banasura Sagar Dam", "Wayanad Wildlife Sanctuary", "Chembra Peak"]
  },
  {
    id: 12,
    title: "Udaipur Luxury Penthouse",
    location: "Udaipur, Rajasthan",
    price: 600,
    description: "Enjoy royal luxury in Udaipur! This penthouse has panoramic views of Lake Pichola, rooftop pool, and is close to City Palace and Jag Mandir.",
    season: "Winter (Nov-Feb)",
    attractions: ["Lake Pichola", "City Palace", "Jag Mandir", "Fateh Sagar Lake"]
  },
  {
    id: 105,
    title: "Shimla Hilltop Cottage",
    location: "Shimla, Himachal Pradesh",
    price: 270,
    description: "Charming cottage with panoramic views of the Shimla hills.",
    season: "Summer (Mar-Jun), Winter (Dec-Feb)",
    attractions: ["Mall Road", "Jakhoo Temple", "The Ridge", "Kufri"]
  },
  {
    id: 106,
    title: "Mall Road View Apartment",
    location: "Shimla, Himachal Pradesh",
    price: 210,
    description: "Modern apartment steps from Shimla's famous Mall Road.",
    season: "Summer (Mar-Jun), Winter (Dec-Feb)",
    attractions: ["Mall Road", "Christ Church", "Scandal Point", "Green Valley"]
  },
  {
    id: 107,
    title: "Pine View Villa",
    location: "Shimla, Himachal Pradesh",
    price: 320,
    description: "Spacious villa surrounded by pine forests, perfect for families.",
    season: "Summer (Mar-Jun), Winter (Dec-Feb)",
    attractions: ["Mashobra", "Annandale", "Tara Devi Temple", "Chadwick Falls"]
  },
  {
    id: 108,
    title: "Taj Mahal View Suite",
    location: "Agra, Uttar Pradesh",
    price: 350,
    description: "Luxury suite with a direct view of the Taj Mahal.",
    season: "Winter (Nov-Feb)",
    attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"]
  },
  {
    id: 109,
    title: "Agra Heritage Homestay",
    location: "Agra, Uttar Pradesh",
    price: 180,
    description: "Experience Agra's culture in this cozy heritage homestay.",
    season: "Winter (Nov-Feb)",
    attractions: ["Taj Mahal", "Itmad-ud-Daula", "Kinari Bazaar", "Akbar's Tomb"]
  },
  {
    id: 110,
    title: "Yamuna Riverside Villa",
    location: "Agra, Uttar Pradesh",
    price: 290,
    description: "Elegant villa on the banks of Yamuna, close to the Taj Mahal.",
    season: "Winter (Nov-Feb)",
    attractions: ["Yamuna River", "Taj Mahal", "Agra Fort", "Jama Masjid"]
  },
  {
    id: 201,
    title: "Victoria Memorial View Apartment",
    location: "Kolkata, West Bengal",
    price: 260,
    description: "Modern apartment with stunning views of Victoria Memorial, central Kolkata.",
    season: "Winter (Nov-Feb), Spring (Feb-Mar)",
    attractions: ["Victoria Memorial", "Eden Gardens", "Indian Museum", "St. Paul's Cathedral"]
  },
  {
    id: 202,
    title: "Howrah Bridge Riverside Suite",
    location: "Kolkata, West Bengal",
    price: 320,
    description: "Elegant suite on the banks of the Hooghly, near Howrah Bridge.",
    season: "Winter (Nov-Feb), Spring (Feb-Mar)",
    attractions: ["Howrah Bridge", "Prinsep Ghat", "Belur Math", "Flower Market"]
  },
  {
    id: 203,
    title: "Park Street Heritage Home",
    location: "Kolkata, West Bengal",
    price: 210,
    description: "Charming heritage home in the heart of Park Street, Kolkata's cultural hub.",
    season: "Winter (Nov-Feb), Spring (Feb-Mar)",
    attractions: ["Park Street", "New Market", "Birla Planetarium", "Mother House"]
  },
];

function findPropertyById(id) {
  return chatbotProperties.find(p => p.id === id);
}
function findPropertyByNameOrLocation(query) {
  query = query.toLowerCase();
  return chatbotProperties.find(p =>
    p.title.toLowerCase().includes(query) ||
    p.location.toLowerCase().includes(query)
  );
}

let chatbotContext = null; // Track what info the bot is waiting for

function getPropertyResponse(input) {
  // If context is set, use it to answer
  if (chatbotContext && chatbotContext.type === 'property_query') {
    const prop = findPropertyByNameOrLocation(input) || findPropertyById(Number(input));
    chatbotContext = null;
    if (prop) {
      return `Property: ${prop.title} \nLocation: ${prop.location}\nPrice: ₹${prop.price} per night\n${prop.description}\nBest season: ${prop.season}\nTop places to visit: ${prop.attractions.join(", ")}`;
    } else {
      return "Sorry, I couldn't find that property. Please provide a valid property name, location, or ID.";
    }
  }
  // If user asks about property, price, or places to visit but doesn't specify which
  if (/property|price|cost|charge|fee|places to visit|attractions|season|best time/i.test(input) && !findPropertyByNameOrLocation(input) && !/property\s*#?\d+/i.test(input)) {
    // Show a few sample properties with prices
    const samples = chatbotProperties.slice(0, 5).map(p => `• ${p.title} (${p.location}) — ₹${p.price}/night`).join('\n');
    chatbotContext = { type: 'property_query' };
    return `Here are some sample properties and their prices:\n${samples}\n\nPlease provide the property name, location, or ID you want to know about for more details.`;
  }
  // If user provides property info directly
  const idMatch = input.match(/property\s*#?(\d+)/i);
  if (idMatch) {
    const prop = findPropertyById(Number(idMatch[1]));
    if (prop) {
      return `Property #${prop.id}: ${prop.title} in ${prop.location}\nPrice: ₹${prop.price} per night\n${prop.description}\nBest season: ${prop.season}\nTop places to visit: ${prop.attractions.join(", ")}`;
    }
  }
  const prop = findPropertyByNameOrLocation(input);
  if (prop) {
    return `Property: ${prop.title} (ID: ${prop.id})\nLocation: ${prop.location}\nPrice: ₹${prop.price} per night\n${prop.description}\nBest season: ${prop.season}\nTop places to visit: ${prop.attractions.join(", ")}`;
  }
  return null;
}

function addMessage(text, sender = 'bot') {
  const msg = document.createElement('div');
  msg.className = 'chatbot-message ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'chatbot-bubble';
  bubble.textContent = text;
  msg.appendChild(bubble);
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(input) {
  // Try property-specific response first
  const propResp = getPropertyResponse(input);
  if (propResp) return propResp;
  // ... existing FAQ logic ...
  for (const item of FAQ) {
    if (item.q.test(input)) return item.a;
  }
  return "I'm here to help with any TripNest or Airbnb-like questions! Try asking about properties, pricing, places to visit, bookings, hosting, Prime, or more.";
}

chatbotForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = chatbotInput.value.trim();
  if (!userInput) return;
  addMessage(userInput, 'user');
  chatbotInput.value = '';
  setTimeout(() => {
    const response = getBotResponse(userInput);
    addMessage(response, 'bot');
  }, 600);
});

// Greet on open
chatbotToggle.addEventListener('click', function() {
  if (!chatbotMessages.hasChildNodes()) {
    setTimeout(() => {
      addMessage("Hi! 👋 I'm your TripNest assistant. Ask me anything about bookings, hosting, Prime, or more.");
    }, 400);
  }
}); 