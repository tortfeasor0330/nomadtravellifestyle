import Link from 'next/link';
import { ArrowRight, Home, Map, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80)' }}
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-xl mx-auto">
        <div className="text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 leading-none mb-2">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">You&apos;ve Wandered Off the Map</h1>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Looks like this page has gone exploring without us. Let&apos;s get you back to a known destination.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/tours" className="btn-outline-white">
            <Map size={18} /> Browse Tours
          </Link>
          <Link href="/contact" className="btn-outline-white">
            <Phone size={18} /> Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left border border-white/20">
          <h3 className="font-semibold text-amber-400 mb-4 text-sm uppercase tracking-wider">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Bali Cultural Tour', href: '/tours/bali-cultural-immersion' },
              { label: 'Santorini Island Hop', href: '/tours/santorini-island-hopping' },
              { label: 'All Destinations', href: '/destinations' },
              { label: 'Travel Blog', href: '/blog' },
              { label: 'About NomadTravel', href: '/about' },
              { label: 'Contact Us', href: '/contact' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-slate-200 hover:text-amber-400 transition-colors py-1.5">
                <ArrowRight size={12} className="text-amber-500" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
