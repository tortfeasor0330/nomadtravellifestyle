import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Band */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-slate-900 text-2xl font-bold">Get Travel Inspiration</h3>
            <p className="text-slate-800 mt-1">Subscribe to our newsletter for exclusive deals and travel tips.</p>
          </div>
          <form className="flex w-full md:w-auto gap-0 rounded-full overflow-hidden shadow-xl max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 text-slate-800 bg-white focus:outline-none text-sm"
            />
            <button className="bg-slate-900 text-white px-6 py-3.5 font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Nomad</span>
                <span className="text-xl font-bold text-amber-400">Travel</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Crafting extraordinary travel experiences since 2010. We believe every journey has the power to transform your perspective on the world.
            </p>
            <div className="flex items-center gap-3">
              {['f', 'in', 'tw', 'yt'].map((label, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-slate-300 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'All Tours', href: '/tours' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'Travel Blog', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Top Destinations</h4>
            <ul className="space-y-3">
              {[
                { label: 'Bali, Indonesia', href: '/destinations/bali-indonesia' },
                { label: 'Santorini, Greece', href: '/destinations/santorini-greece' },
                { label: 'Machu Picchu, Peru', href: '/destinations/machu-picchu-peru' },
                { label: 'Tokyo, Japan', href: '/destinations/tokyo-japan' },
                { label: 'Maasai Mara, Kenya', href: '/destinations/safari-kenya' },
                { label: 'Maldives', href: '/destinations/maldives' },
              ].map((dest) => (
                <li key={dest.href}>
                  <Link href={dest.href} className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span>123 Wanderer Street, Suite 400, San Francisco, CA 94105</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone size={16} className="text-amber-400" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@nomadtravel.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail size={16} className="text-amber-400" />
                  hello@nomadtravel.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-slate-800 rounded-xl p-4">
              <p className="text-xs text-slate-400 mb-1">Customer Support Hours</p>
              <p className="text-white text-sm font-medium">Mon – Fri: 9am – 6pm PST</p>
              <p className="text-slate-400 text-xs mt-1">Weekend: 10am – 4pm PST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NomadTravel. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
