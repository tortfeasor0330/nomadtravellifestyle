'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Phone, Mail, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Tours',
    href: '/tours',
    children: [
      { label: 'All Tours', href: '/tours' },
      { label: 'Cultural Tours', href: '/tours?category=Cultural' },
      { label: 'Adventure Tours', href: '/tours?category=Adventure' },
      { label: 'Luxury Tours', href: '/tours?category=Luxury' },
    ],
  },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'All Destinations', href: '/destinations' },
      { label: 'Asia', href: '/destinations?continent=Asia' },
      { label: 'Europe', href: '/destinations?continent=Europe' },
      { label: 'Africa', href: '/destinations?continent=Africa' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={12} /> +1 (234) 567-890
            </a>
            <a href="mailto:hello@nomadtravel.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail size={12} /> hello@nomadtravel.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe size={12} />
            <span>USD | English</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-800">Nomad</span>
                <span className="text-xl font-bold text-amber-500">Travel</span>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest leading-none">Explore The World</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-amber-500 font-medium text-sm transition-colors rounded-lg hover:bg-amber-50"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className="mt-0.5" />}
                  </Link>
                  {link.children && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-amber-500 hover:bg-amber-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm py-2.5">
                Book a Tour
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 text-slate-700 hover:text-amber-500 font-medium rounded-lg hover:bg-amber-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-slate-500 hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Book a Tour
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
