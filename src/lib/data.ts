export interface Tour {
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  rating: number;
  reviews: number;
  category: string;
  featured: boolean;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  continent: string;
  image: string;
  heroImage: string;
  gallery: string[];
  tourCount: number;
  description: string;
  longDescription: string;
  bestTime: string;
  language: string;
  currency: string;
  timezone: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    tourCount: 12,
    description: 'Island of Gods with stunning temples, rice terraces, and world-class beaches.',
    longDescription: 'Bali, the renowned Island of the Gods, captivates travelers with its unique blend of spiritual mysticism, lush landscapes, and vibrant arts scene. From the terraced rice paddies of Ubud to the surf breaks of Seminyak, every corner of this Indonesian paradise offers something extraordinary. Ancient Hindu temples perch atop volcanic mountains, colorful ceremonies fill village streets, and the warm hospitality of the Balinese people makes every visit unforgettable.',
    bestTime: 'April – October',
    language: 'Indonesian, Balinese',
    currency: 'Indonesian Rupiah (IDR)',
    timezone: 'UTC+8',
    highlights: ['Tanah Lot Temple', 'Ubud Rice Terraces', 'Mount Batur Sunrise', 'Seminyak Beach', 'Sacred Monkey Forest'],
  },
  {
    slug: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&q=80',
    ],
    tourCount: 8,
    description: 'Iconic white-washed villages perched on volcanic cliffs with breathtaking Aegean sunsets.',
    longDescription: 'Santorini, the jewel of the Cyclades, is one of the world\'s most photographed destinations. Its iconic blue-domed churches and whitewashed buildings cascade down volcanic cliffs above the deep-blue caldera. The island\'s dramatic landscape was shaped by one of the largest volcanic eruptions in history, creating the stunning crescent shape we see today.',
    bestTime: 'May – October',
    language: 'Greek',
    currency: 'Euro (EUR)',
    timezone: 'UTC+2',
    highlights: ['Oia Sunset', 'Caldera View', 'Akrotiri Archaeological Site', 'Red Beach', 'Wine Tasting'],
  },
  {
    slug: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    ],
    tourCount: 6,
    description: 'The legendary Incan citadel set high in the Andes, a UNESCO World Heritage Site.',
    longDescription: 'Machu Picchu, the "Lost City of the Incas," stands as one of humanity\'s greatest architectural achievements. Perched at 2,430 meters above sea level in the Cusco Region of Peru, this 15th-century Inca citadel features extraordinary stonework, agricultural terraces, and ceremonial temples—all set against a backdrop of dramatic mountain peaks.',
    bestTime: 'May – September',
    language: 'Spanish, Quechua',
    currency: 'Sol (PEN)',
    timezone: 'UTC-5',
    highlights: ['Sun Gate', 'Intihuatana Stone', 'Temple of the Sun', 'Inca Trail', 'Huayna Picchu Trek'],
  },
  {
    slug: 'tokyo-japan',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    ],
    tourCount: 10,
    description: 'A dazzling blend of ultra-modern and ancient, from neon-lit skyscrapers to historic temples.',
    longDescription: 'Tokyo, Japan\'s capital, merges the ultramodern with the traditional. Neon-lit skyscrapers tower above ancient Buddhist temples; cutting-edge fashion sits alongside centuries-old tea ceremonies. This city of 14 million people is a pulsing, vibrant destination that never sleeps.',
    bestTime: 'March – May, September – November',
    language: 'Japanese',
    currency: 'Yen (JPY)',
    timezone: 'UTC+9',
    highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Mount Fuji Day Trip', 'Tsukiji Market', 'Akihabara'],
  },
  {
    slug: 'safari-kenya',
    name: 'Kenya Safari',
    country: 'Kenya',
    continent: 'Africa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    ],
    tourCount: 7,
    description: 'Witness the Great Migration and Africa\'s Big Five on the vast savannahs of Kenya.',
    longDescription: 'Kenya offers some of the world\'s most dramatic wildlife experiences. The Maasai Mara National Reserve hosts the legendary Great Migration, where over 1.5 million wildebeest, zebras, and gazelles make their annual journey. But Kenya\'s wild heart extends far beyond the Mara.',
    bestTime: 'July – October',
    language: 'Swahili, English',
    currency: 'Kenyan Shilling (KES)',
    timezone: 'UTC+3',
    highlights: ['Great Migration', 'Big Five Safari', 'Masai Mara', 'Amboseli National Park', 'Mount Kenya'],
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80',
    ],
    tourCount: 5,
    description: 'Overwater bungalows, crystal-clear lagoons, and vibrant coral reefs in the Indian Ocean.',
    longDescription: 'The Maldives is the ultimate luxury escape — a necklace of 1,200 coral islands strung across the Indian Ocean. With some of the world\'s clearest waters, most diverse marine life, and iconic overwater bungalows, the Maldives redefines paradise.',
    bestTime: 'November – April',
    language: 'Dhivehi',
    currency: 'Maldivian Rufiyaa (MVR)',
    timezone: 'UTC+5',
    highlights: ['Overwater Villas', 'Snorkeling & Diving', 'Bioluminescent Beaches', 'Whale Shark Spotting', 'Island Hopping'],
  },
];

export const tours: Tour[] = [
  {
    slug: 'bali-cultural-immersion',
    title: 'Bali Cultural Immersion',
    destination: 'Bali',
    destinationSlug: 'bali-indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    ],
    price: 1299,
    originalPrice: 1599,
    duration: '8 Days',
    groupSize: '12 People',
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 128,
    category: 'Cultural',
    featured: true,
    description: 'Immerse yourself in the rich spiritual and artistic culture of Bali. Visit ancient temples, learn traditional dance, and discover the secrets of Balinese cooking in this unforgettable 8-day journey.',
    highlights: ['Visit 5 UNESCO Heritage Sites', 'Traditional Cooking Class', 'Rice Terrace Trek', 'Temple Ceremony', 'Sunset at Tanah Lot'],
    itinerary: [
      { day: 1, title: 'Arrival in Denpasar', description: 'Welcome to Bali! Transfer to Ubud, check in, and enjoy a welcome dinner with traditional Balinese performance.' },
      { day: 2, title: 'Ubud Cultural Day', description: 'Visit the Sacred Monkey Forest, Ubud Palace, and traditional art markets. Evening cooking class.' },
      { day: 3, title: 'Rice Terrace Trek', description: 'Morning trek through the iconic Tegallalang rice terraces. Visit a traditional Balinese village.' },
      { day: 4, title: 'Mount Batur Sunrise', description: 'Pre-dawn hike to witness an incredible sunrise over the volcano and Lake Batur.' },
      { day: 5, title: 'Temple Circuit', description: 'Visit Pura Besakih (Mother Temple), Kehen Temple, and the Bat Cave Temple.' },
      { day: 6, title: 'Seminyak Beach', description: 'Transfer to Seminyak. Afternoon at leisure on the beach. Sunset cocktails.' },
      { day: 7, title: 'Tanah Lot & Uluwatu', description: 'Visit the iconic Tanah Lot sea temple and watch the Kecak fire dance at Uluwatu.' },
      { day: 8, title: 'Departure Day', description: 'Last morning at leisure. Transfer to Denpasar Airport for your onward journey.' },
    ],
    included: ['7 Nights accommodation', 'Daily breakfast', 'Airport transfers', 'Expert local guide', 'Temple entrance fees', 'Cooking class', 'Welcome dinner'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips & gratuities', 'Lunch & dinner (except welcome dinner)'],
  },
  {
    slug: 'santorini-island-hopping',
    title: 'Santorini & Cyclades Island Hop',
    destination: 'Santorini',
    destinationSlug: 'santorini-greece',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    ],
    price: 2199,
    duration: '10 Days',
    groupSize: '10 People',
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 94,
    category: 'Beach & Island',
    featured: true,
    description: 'Island-hop through the magical Cyclades, from the caldera cliffs of Santorini to the charming windmills of Mykonos. Experience the best of Greek island life.',
    highlights: ['Oia Sunset Viewing', 'Catamaran Cruise', 'Wine Tasting Tour', 'Ancient Akrotiri Tour', 'Mykonos Day Trip'],
    itinerary: [
      { day: 1, title: 'Arrival in Athens', description: 'Arrive in Athens, transfer to hotel. Evening orientation walk in Plaka.' },
      { day: 2, title: 'Athens to Santorini', description: 'Morning flight to Santorini. Arrive in Fira and check in to clifftop hotel. Caldera views at sunset.' },
      { day: 3, title: 'Oia & Northern Santorini', description: 'Explore the iconic village of Oia. Visit the Venetian Castle for the world-famous sunset.' },
      { day: 4, title: 'Catamaran Cruise', description: 'Full-day catamaran cruise around the caldera, hot springs, and volcanic islands. BBQ on board.' },
      { day: 5, title: 'Akrotiri & Wine Tour', description: 'Visit the Minoan ruins of Akrotiri and tour Santorini\'s acclaimed wineries.' },
      { day: 6, title: 'Ferry to Mykonos', description: 'Morning ferry to Mykonos. Explore the charming old town and famous windmills.' },
      { day: 7, title: 'Mykonos at Leisure', description: 'Free day to explore beaches, shops, and the vibrant nightlife of Mykonos.' },
      { day: 8, title: 'Day Trip to Delos', description: 'Archaeological day trip to the sacred island of Delos, UNESCO World Heritage Site.' },
      { day: 9, title: 'Return to Athens', description: 'Ferry back to Athens. Farewell dinner at a rooftop restaurant with Acropolis views.' },
      { day: 10, title: 'Departure', description: 'Free morning to explore Athens. Transfer to airport for departure.' },
    ],
    included: ['9 Nights accommodation', 'Daily breakfast', 'Inter-island ferry', 'Athens-Santorini flight', 'Catamaran cruise', 'Wine tasting', 'Expert guide'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Most meals'],
  },
  {
    slug: 'inca-trail-machu-picchu',
    title: 'Classic Inca Trail to Machu Picchu',
    destination: 'Machu Picchu',
    destinationSlug: 'machu-picchu-peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    ],
    price: 1799,
    duration: '7 Days',
    groupSize: '16 People',
    difficulty: 'Challenging',
    rating: 4.9,
    reviews: 215,
    category: 'Adventure',
    featured: true,
    description: 'Embark on the legendary 4-day Inca Trail, trekking through cloud forests, Andean highlands, and Inca ruins to emerge dramatically at the Sun Gate overlooking Machu Picchu.',
    highlights: ['4-Day Inca Trail Trek', 'Machu Picchu Full Tour', 'Sun Gate Sunrise', 'Cusco City Tour', 'Sacred Valley Visit'],
    itinerary: [
      { day: 1, title: 'Arrive in Cusco', description: 'Arrive in Cusco and acclimatize. Afternoon walking tour of the city\'s Inca and colonial heritage.' },
      { day: 2, title: 'Sacred Valley', description: 'Explore the Sacred Valley, visiting the Pisac market and Ollantaytambo fortress.' },
      { day: 3, title: 'Inca Trail Day 1', description: 'Trail begins! Trek from km 82 to Ayapata camp through diverse ecosystems.' },
      { day: 4, title: 'Inca Trail Day 2 - Dead Woman\'s Pass', description: 'The hardest day — climb to Dead Woman\'s Pass at 4,215m. Panoramic Andean views.' },
      { day: 5, title: 'Inca Trail Day 3 - Cloud Forest', description: 'Trek through cloud forest with views of snow-capped peaks and Inca ruins.' },
      { day: 6, title: 'Machu Picchu Dawn', description: 'Early morning push to the Sun Gate. First views of Machu Picchu at sunrise. Guided tour.' },
      { day: 7, title: 'Departure', description: 'Morning free at Machu Picchu. Afternoon train and bus back to Cusco. Farewell dinner.' },
    ],
    included: ['6 Nights accommodation', 'Inca Trail permit', 'Expert trekking guide', 'Porters', 'All meals on trail', 'Train from Aguas Calientes', 'Machu Picchu entrance'],
    excluded: ['International flights', 'Travel insurance', 'Sleeping bag (rental available)', 'Personal trekking gear'],
  },
  {
    slug: 'tokyo-highlights',
    title: 'Tokyo & Kyoto Highlights',
    destination: 'Tokyo',
    destinationSlug: 'tokyo-japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    ],
    price: 2499,
    duration: '12 Days',
    groupSize: '14 People',
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 176,
    category: 'Cultural',
    featured: true,
    description: 'Experience the perfect contrast of Japan\'s dazzling modernity in Tokyo and ancient elegance in Kyoto. From neon cityscapes to bamboo groves and traditional geisha culture.',
    highlights: ['Shibuya Crossing', 'Mount Fuji Day Trip', 'Arashiyama Bamboo Grove', 'Fushimi Inari Shrine', 'Tea Ceremony'],
    itinerary: [
      { day: 1, title: 'Arrive Tokyo', description: 'Land at Narita, take the Narita Express to your hotel. Evening walk in Shinjuku.' },
      { day: 2, title: 'Tokyo City Tour', description: 'Sensoji Temple, Harajuku, Shibuya Crossing, and Tokyo Skytree.' },
      { day: 3, title: 'Mount Fuji', description: 'Day trip to Mount Fuji and the Fuji Five Lakes region.' },
      { day: 4, title: 'Akihabara & Odaiba', description: 'Explore Tokyo\'s tech and pop culture districts. Teamlab digital art museum.' },
      { day: 5, title: 'Shinkansen to Kyoto', description: 'Bullet train to Kyoto. Afternoon at Nishiki Market and Gion District.' },
      { day: 6, title: 'Fushimi Inari & Arashiyama', description: 'Morning hike through Fushimi Inari\'s thousand torii gates. Afternoon in the bamboo grove.' },
      { day: 7, title: 'Golden Pavilion & Nijo Castle', description: 'Kinkakuji Temple and Nijo Castle with its Nightingale floors.' },
      { day: 8, title: 'Nara Day Trip', description: 'Visit Nara\'s friendly deer and Todaiji Temple with the Great Buddha.' },
      { day: 9, title: 'Osaka', description: 'Day trip to Osaka. Dotonbori street food crawl and Osaka Castle.' },
      { day: 10, title: 'Zen & Tea Culture', description: 'Meditation session at a Zen temple. Traditional matcha tea ceremony.' },
      { day: 11, title: 'Return to Tokyo', description: 'Shinkansen back to Tokyo. Farewell dinner at a traditional izakaya.' },
      { day: 12, title: 'Departure', description: 'Transfer to Narita Airport for your flight home.' },
    ],
    included: ['11 Nights hotel', 'Daily breakfast', 'Shinkansen pass (7 days)', 'Mount Fuji excursion', 'Tea ceremony', 'Expert guide'],
    excluded: ['International flights', 'Travel insurance', 'Most lunches & dinners'],
  },
  {
    slug: 'kenya-safari-adventure',
    title: 'Kenya Safari Adventure',
    destination: 'Kenya',
    destinationSlug: 'safari-kenya',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    ],
    price: 3299,
    duration: '9 Days',
    groupSize: '8 People',
    difficulty: 'Moderate',
    rating: 5.0,
    reviews: 87,
    category: 'Wildlife Safari',
    featured: true,
    description: 'Witness the dramatic spectacle of the Great Migration in the Maasai Mara and track the Big Five across Kenya\'s legendary game reserves in small-group luxury safari camps.',
    highlights: ['Great Migration Viewing', 'Big Five Game Drives', 'Maasai Village Visit', 'Hot Air Balloon Safari', 'Bush Breakfast'],
    itinerary: [
      { day: 1, title: 'Arrive Nairobi', description: 'Arrive at JKIA, transfer to boutique hotel. Evening briefing and welcome dinner.' },
      { day: 2, title: 'Fly to Maasai Mara', description: 'Morning flight to Maasai Mara. Afternoon game drive.' },
      { day: 3, title: 'Full Day Mara', description: 'Sunrise balloon safari over the Mara. Evening sundowner on the plains.' },
      { day: 4, title: 'Migration Viewing', description: 'Full day tracking the Great Migration along the Mara River.' },
      { day: 5, title: 'Maasai Village', description: 'Morning game drive. Afternoon visit to authentic Maasai village.' },
      { day: 6, title: 'Amboseli National Park', description: 'Drive to Amboseli. Afternoon game drive with views of Mount Kilimanjaro.' },
      { day: 7, title: 'Amboseli Full Day', description: 'Full day exploring Amboseli — famed for large elephant herds.' },
      { day: 8, title: 'Lake Nakuru', description: 'Drive to Lake Nakuru National Park. Flamingoes and rhino sanctuary.' },
      { day: 9, title: 'Return Nairobi & Departure', description: 'Morning game drive, then drive back to Nairobi for departure flight.' },
    ],
    included: ['8 Nights at luxury camps', 'All meals in the bush', 'All game drives', 'Hot air balloon safari', 'Park entry fees', 'Expert guide', 'Small aircraft transfers'],
    excluded: ['International flights', 'Travel insurance', 'Visa fees', 'Gratuities'],
  },
  {
    slug: 'maldives-luxury-escape',
    title: 'Maldives Luxury Island Escape',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80',
    ],
    price: 4199,
    originalPrice: 4999,
    duration: '7 Days',
    groupSize: '2 People',
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 63,
    category: 'Luxury',
    featured: false,
    description: 'Retreat to an overwater bungalow in the Maldives for the ultimate luxury escape. Crystal-clear turquoise lagoons, vibrant coral reefs, and unmatched privacy in paradise.',
    highlights: ['Overwater Villa Stay', 'Private Snorkeling Tour', 'Sunset Dolphin Cruise', 'Underwater Dining', 'Spa Treatment'],
    itinerary: [
      { day: 1, title: 'Arrive Malé', description: 'Land in Malé, speedboat transfer to your private island resort.' },
      { day: 2, title: 'Beach & Spa', description: 'Wake up above the Indian Ocean. Morning snorkeling, afternoon spa.' },
      { day: 3, title: 'Marine Life Adventure', description: 'Guided snorkeling with marine biologist. Shark and ray feeding spot.' },
      { day: 4, title: 'Island Hopping', description: 'Visit a local fishing village and uninhabited sandbanks.' },
      { day: 5, title: 'Sunset Dolphin Cruise', description: 'Sunset cruise to spot spinner dolphins. Underwater restaurant dinner.' },
      { day: 6, title: 'Day at Leisure', description: 'Your day, your way — beach, kayak, paddleboard, or simply relax.' },
      { day: 7, title: 'Departure', description: 'Final morning snorkel. Speedboat transfer to Malé for departure.' },
    ],
    included: ['6 Nights overwater villa', 'Full board meals', 'Speedboat transfers', 'Snorkeling gear', 'Dolphin cruise', 'Spa treatment'],
    excluded: ['International flights', 'Travel insurance', 'Alcohol & specialty drinks', 'Diving courses'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-time-visit-bali',
    title: 'The Best Time to Visit Bali: A Month-by-Month Guide',
    excerpt: 'Planning a trip to the Island of Gods? Here\'s everything you need to know about Bali\'s seasons, festivals, and the best time to visit for your travel style.',
    content: `
      <p>Bali is a year-round destination, but the best time to visit depends on what you're looking for. The island has two main seasons: the dry season (April to October) and the wet season (November to March).</p>
      <h2>Dry Season: April to October</h2>
      <p>This is peak season in Bali, and for good reason. The weather is sunny and warm, with minimal rainfall and low humidity. The months of July and August see the highest tourist numbers, so expect busier beaches and higher prices. April, May, and September are arguably the sweet spots — perfect weather with smaller crowds.</p>
      <h2>Wet Season: November to March</h2>
      <p>Don't let the "wet" label scare you off. The rain typically comes in short, intense bursts in the afternoon, leaving mornings clear and beautiful. Prices drop significantly, and you'll find the island more peaceful. This is also when rice paddies are at their lushest green.</p>
      <h2>Festival Highlights</h2>
      <p>Nyepi (Balinese New Year) usually falls in March and is one of the world's most unique events — the entire island goes silent for 24 hours. Galungan, celebrated every 210 days, fills the island with bamboo pole offerings and temple ceremonies.</p>
    `,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    category: 'Travel Tips',
    author: 'Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    date: 'March 15, 2025',
    readTime: '7 min read',
    tags: ['Bali', 'Travel Tips', 'Seasons', 'Indonesia'],
  },
  {
    slug: 'packing-list-safari',
    title: '10 Essential Items for Your African Safari Packing List',
    excerpt: 'From the right binoculars to the perfect camera lens, here\'s exactly what to pack for an unforgettable African safari experience.',
    content: `
      <p>Packing for an African safari requires some careful thought. Space is limited in safari vehicles and bush planes, the environment is challenging, and you want to be prepared without overpacking.</p>
      <h2>1. Neutral-Colored Clothing</h2>
      <p>Leave your bright whites and bold colors at home. Animals can be scared off by bright colors, and you'll want to blend into the environment. Khaki, tan, olive, and brown are your friends.</p>
      <h2>2. Binoculars</h2>
      <p>A good pair of binoculars is essential. We recommend 8x42 or 10x42 for the best balance of magnification and light-gathering ability.</p>
      <h2>3. Camera with Telephoto Lens</h2>
      <p>Animals are often viewed from a distance. A 100-400mm lens is ideal. Don't forget extra batteries and memory cards — charging opportunities may be limited.</p>
    `,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    category: 'Packing Guides',
    author: 'Marcus Rivera',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'February 28, 2025',
    readTime: '9 min read',
    tags: ['Safari', 'Packing', 'Africa', 'Kenya'],
  },
  {
    slug: 'hidden-gems-greece',
    title: 'Beyond Santorini: Greece\'s Hidden Island Gems',
    excerpt: 'While Santorini steals the spotlight, these lesser-known Greek islands offer authentic beauty, fewer crowds, and equally stunning scenery.',
    content: `
      <p>Greece has over 200 inhabited islands, yet most tourists flock to the same handful. Here are five hidden gems worth discovering.</p>
      <h2>Milos: The Volcanic Beauty</h2>
      <p>Known for the Venus de Milo statue, this Cycladic island features extraordinary beaches formed by volcanic activity — colorful sea caves, lunar landscapes, and fishing villages that look like they're from another era.</p>
      <h2>Ikaria: The Island of Longevity</h2>
      <p>Home to one of the world's Blue Zones, Ikaria's residents are among the longest-lived on earth. The island moves at its own pace — tavernas open late, festivals run through the night, and the wine flows freely.</p>
    `,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    category: 'Destinations',
    author: 'Elena Papadopoulos',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    date: 'January 20, 2025',
    readTime: '6 min read',
    tags: ['Greece', 'Islands', 'Hidden Gems', 'Mediterranean'],
  },
  {
    slug: 'solo-travel-safety-tips',
    title: 'Solo Travel Safety Tips: How to Explore the World Confidently',
    excerpt: 'Solo travel is one of life\'s most rewarding experiences. Here are our top tips to stay safe while making the most of your solo adventures.',
    content: `
      <p>Solo travel can be incredibly empowering. Here's how to do it safely and confidently.</p>
      <h2>Research Before You Go</h2>
      <p>Know the local customs, dress codes, and cultural sensitivities before arrival. Understanding local norms will help you blend in and avoid unwanted attention.</p>
      <h2>Share Your Itinerary</h2>
      <p>Always leave a copy of your travel plans with someone you trust at home. Check in regularly so someone knows where you are.</p>
    `,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    category: 'Travel Tips',
    author: 'Aisha Okonkwo',
    authorImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    date: 'January 5, 2025',
    readTime: '8 min read',
    tags: ['Solo Travel', 'Safety', 'Tips'],
  },
  {
    slug: 'japan-cherry-blossom-guide',
    title: 'Japan\'s Cherry Blossom Season: The Ultimate Guide',
    excerpt: 'Sakura season transforms Japan into a dreamlike wonderland. Here\'s how to plan your trip around the bloom forecast.',
    content: `
      <p>Cherry blossom season (sakura) is one of the most magical times to visit Japan. The delicate pink blooms typically appear from late March to early May, working their way northward from Kyushu to Hokkaido.</p>
      <h2>When to Go</h2>
      <p>Tokyo typically peaks in late March to early April. Kyoto follows a similar schedule. Hokkaido blooms in late April to early May.</p>
    `,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    category: 'Seasonal Guides',
    author: 'Kenji Tanaka',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: 'December 12, 2024',
    readTime: '10 min read',
    tags: ['Japan', 'Cherry Blossom', 'Spring', 'Tokyo', 'Kyoto'],
  },
  {
    slug: 'sustainable-travel-guide',
    title: 'How to Travel More Sustainably in 2025',
    excerpt: 'Travel is one of life\'s greatest joys — here\'s how to do it responsibly and reduce your environmental footprint without sacrificing the experience.',
    content: `
      <p>Sustainable travel is about making conscious choices that benefit the destinations you visit. Here's how to start.</p>
      <h2>Choose Direct Flights</h2>
      <p>Take-off and landing generate the most emissions. Direct flights are significantly more eco-friendly than routes with connections.</p>
    `,
    image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=80',
    category: 'Sustainable Travel',
    author: 'Emma Wilson',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    date: 'November 30, 2024',
    readTime: '7 min read',
    tags: ['Sustainable Travel', 'Eco-Tourism', 'Tips', 'Environment'],
  },
];

export const categories = ['All', 'Cultural', 'Adventure', 'Beach & Island', 'Wildlife Safari', 'Luxury'];
export const blogCategories = ['All', 'Travel Tips', 'Destinations', 'Packing Guides', 'Seasonal Guides', 'Sustainable Travel'];

export function getTour(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getToursForDestination(destinationSlug: string): Tour[] {
  return tours.filter(t => t.destinationSlug === destinationSlug);
}
