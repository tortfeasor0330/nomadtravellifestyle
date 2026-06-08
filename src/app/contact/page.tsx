import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact Us' };

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 3-6 months in advance for popular tours, especially during peak seasons. Some tours fill up quickly!' },
  { q: 'What\'s included in the tour price?', a: 'Each tour listing details exactly what is and isn\'t included. Generally, accommodation, meals as specified, guide services, and listed activities are included.' },
  { q: 'Can I customize an itinerary?', a: 'Absolutely! Contact our team to discuss a private or custom tour tailored to your interests, dates, and budget.' },
  { q: 'What is your cancellation policy?', a: 'We offer free cancellation up to 30 days before departure. Between 30-14 days, a 50% refund is available. Within 14 days, no refund but transfers to another date are possible.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <span className="section-label">Send a Message</span>
            <h2 className="section-title mb-6">Tell Us About Your Dream Trip</h2>
            <p className="text-slate-500 mb-8">Whether you have a specific tour in mind or just need some inspiration, our travel experts are here to help. We typically respond within 24 hours.</p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">First Name *</label>
                  <input type="text" placeholder="John" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Last Name *</label>
                  <input type="text" placeholder="Smith" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 890" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Interested In</label>
                  <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white transition-colors">
                    <option>Select a tour category</option>
                    <option>Cultural Tours</option>
                    <option>Adventure Tours</option>
                    <option>Beach & Island</option>
                    <option>Wildlife Safari</option>
                    <option>Luxury Travel</option>
                    <option>Custom / Private Tour</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Preferred Travel Date</label>
                  <input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Number of Travelers</label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white transition-colors">
                  <option>1 Person (Solo)</option>
                  <option>2 People (Couple)</option>
                  <option>3-5 People (Small Group)</option>
                  <option>6-10 People</option>
                  <option>11+ People (Group)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Your Message *</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your dream destination, travel interests, budget, or any specific requirements..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none transition-colors"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="newsletter" className="mt-1 accent-amber-500" />
                <label htmlFor="newsletter" className="text-sm text-slate-600">
                  I would like to receive travel inspiration, deals, and updates from NomadTravel.
                </label>
              </div>
              <button type="submit" className="btn-primary text-base px-8 py-4">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact Info */}
            <div className="bg-slate-800 text-white rounded-2xl p-7">
              <h3 className="font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Our Office</p>
                    <p className="text-slate-300 text-sm mt-1">123 Wanderer Street, Suite 400<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <a href="tel:+1234567890" className="text-amber-400 text-sm mt-1 block hover:text-amber-300">+1 (234) 567-890</a>
                    <a href="tel:+18005551234" className="text-amber-400 text-sm hover:text-amber-300">+1 (800) 555-1234 (Toll-free)</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <a href="mailto:hello@nomadtravel.com" className="text-amber-400 text-sm mt-1 block hover:text-amber-300">hello@nomadtravel.com</a>
                    <a href="mailto:bookings@nomadtravel.com" className="text-amber-400 text-sm hover:text-amber-300">bookings@nomadtravel.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-slate-300 text-sm mt-1">Mon – Fri: 9am – 6pm PST</p>
                    <p className="text-slate-300 text-sm">Sat – Sun: 10am – 4pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle size={22} className="text-white" />
              </div>
              <h4 className="font-bold text-slate-800 mb-1">Prefer to Chat?</h4>
              <p className="text-slate-500 text-sm mb-4">Our team is available on live chat during business hours for quick answers.</p>
              <button className="btn-primary w-full justify-center text-sm">Start Live Chat</button>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Quick Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
                <h3 className="font-bold text-slate-800 mb-3">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="text-amber-500 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">123 Wanderer Street, San Francisco, CA</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-amber-500 font-semibold hover:underline text-sm">
              Open in Google Maps →
            </a>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </section>
    </>
  );
}
