import Link from 'next/link';
import {
  Search, MapPin, Calendar, Users, Star, ArrowRight, Shield, Award,
  Headphones, Globe, CheckCircle, Play
} from 'lucide-react';
import TourCard from '@/components/shared/TourCard';
import DestinationCard from '@/components/shared/DestinationCard';
import BlogCard from '@/components/shared/BlogCard';
import { tours, destinations, blogPosts } from '@/lib/data';

const stats = [
  { value: '15K+', label: 'Happy Travelers' },
  { value: '120+', label: 'Tour Packages' },
  { value: '60+', label: 'Destinations' },
  { value: '15', label: 'Years Experience' },
];

const features = [
  { icon: Shield, title: 'Safe & Secure', desc: 'Your safety is our top priority. All tours are insured and vetted.' },
  { icon: Award, title: 'Award Winning', desc: 'Recognized as the Best Travel Agency for 5 consecutive years.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Our travel experts are available around the clock to assist you.' },
  { icon: Globe, title: 'Global Network', desc: 'Local partners in 60+ countries ensure authentic experiences.' },
];

const testimonials = [
  {
    name: 'Jessica M.',
    location: 'New York, USA',
    tour: 'Bali Cultural Immersion',
    rating: 5,
    text: "Absolutely the trip of a lifetime. Our guide was knowledgeable, the accommodations were stunning, and every detail was perfectly organized. I've already booked my next trip with NomadTravel!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    name: 'David K.',
    location: 'London, UK',
    tour: 'Kenya Safari Adventure',
    rating: 5,
    text: "Witnessing the Great Migration was surreal. The small group size made it so personal and the camp staff were incredible. Worth every penny and more. Can't recommend highly enough.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    name: 'Maria S.',
    location: 'Melbourne, Australia',
    tour: 'Classic Inca Trail',
    rating: 5,
    text: 'The Inca Trail was challenging but unforgettable. Arriving at the Sun Gate at sunrise with Machu Picchu spread out below was a moment I will carry forever. NomadTravel made it magical.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
];

export default function HomePage() {
  const featuredTours = tours.filter(t => t.featured).slice(0, 4);
  const featuredDestinations = destinations.slice(0, 6);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=85)' }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              Discover The World With Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Next<br />
              <span className="text-amber-400">Adventure</span><br />
              Starts Here
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed">
              Handcrafted journeys to the world&apos;s most breathtaking destinations. Travel with expert guides, small groups, and lasting memories.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/tours" className="btn-primary">
                Explore Tours <ArrowRight size={18} />
              </Link>
              <button className="btn-outline-white">
                <Play size={16} className="fill-white" /> Watch Our Story
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400">{s.value}</div>
                  <div className="text-slate-300 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH BAR ─────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 mb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Destination</p>
                <input className="w-full text-sm text-slate-700 bg-transparent focus:outline-none mt-0.5 placeholder:text-slate-400" placeholder="Where to go?" />
              </div>
            </div>
            <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <Calendar size={18} className="text-amber-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Travel Date</p>
                <input type="date" className="w-full text-sm text-slate-700 bg-transparent focus:outline-none mt-0.5" />
              </div>
            </div>
            <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <Users size={18} className="text-amber-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Travelers</p>
                <select className="w-full text-sm text-slate-700 bg-transparent focus:outline-none mt-0.5">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3-5 People</option>
                  <option>6+ People</option>
                </select>
              </div>
            </div>
            <Link href="/tours" className="btn-primary justify-center text-sm py-3">
              <Search size={16} /> Search Tours
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED DESTINATIONS ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">Top Picks</span>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="text-slate-500 mt-2 max-w-md">From tropical islands to ancient ruins — explore our hand-picked destinations around the globe.</p>
          </div>
          <Link href="/destinations" className="btn-dark shrink-0 self-start md:self-auto">
            All Destinations <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Why NomadTravel</span>
              <h2 className="section-title mb-5">We Make Every Journey Extraordinary</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                With over 15 years of experience crafting unforgettable journeys, we go beyond standard tours to create deeply personal travel experiences that change how you see the world.
              </p>
              <ul className="space-y-4 mb-8">
                {['Small groups of max 16 people', 'Expert local guides in every destination', 'Sustainable & responsible tourism', '24/7 emergency support worldwide'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100 group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                    <Icon size={22} className="text-amber-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED TOURS ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">Must-Try Experiences</span>
            <h2 className="section-title">Our Featured Tours</h2>
            <p className="text-slate-500 mt-2 max-w-md">Thoughtfully designed itineraries that balance adventure, culture, and relaxation.</p>
          </div>
          <Link href="/tours" className="btn-dark shrink-0 self-start md:self-auto">
            All Tours <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      {/* ─── PROMO BANNER ───────────────────────────────────────── */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80)' }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <span className="section-label text-amber-400">Limited Time Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get 20% Off Your First Trip</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            New to NomadTravel? Use code <span className="text-amber-400 font-bold">NOMAD20</span> at checkout and save on any tour booked before December 31st.
          </p>
          <Link href="/tours" className="btn-primary text-base">
            Claim Your Discount <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">Traveler Reviews</span>
            <h2 className="section-title mb-3">What Our Guests Say</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              <span className="text-slate-600 ml-2 font-semibold">4.9 / 5 from 2,400+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                    <p className="text-xs text-amber-500 font-medium mt-0.5">{t.tour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG POSTS ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">Travel Stories</span>
            <h2 className="section-title">From Our Travel Blog</h2>
            <p className="text-slate-500 mt-2 max-w-md">Inspiration, tips, and guides from our team of passionate travel writers.</p>
          </div>
          <Link href="/blog" className="btn-dark shrink-0 self-start md:self-auto">
            All Articles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ─── PARTNERS ───────────────────────────────────────────── */}
      <section className="py-14 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-8">Trusted By Leading Travel Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {['Airbnb', 'Booking.com', 'Expedia', 'TripAdvisor', 'Viator', 'GetYourGuide'].map((partner) => (
              <span key={partner} className="text-slate-600 font-bold text-lg">{partner}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
