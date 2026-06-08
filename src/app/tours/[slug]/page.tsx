import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock, Users, Star, MapPin, CheckCircle, XCircle,
  Calendar, Award, ArrowRight, ChevronRight
} from 'lucide-react';
import { getTour, tours } from '@/lib/data';
import TourCard from '@/components/shared/TourCard';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return tours.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  return { title: tour?.title ?? 'Tour Not Found' };
}

export default async function TourDetailsPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const related = tours.filter(t => t.slug !== slug && t.destinationSlug === tour.destinationSlug).slice(0, 3);

  const diffColor = { Easy: 'bg-emerald-100 text-emerald-700', Moderate: 'bg-amber-100 text-amber-700', Challenging: 'bg-red-100 text-red-700' }[tour.difficulty];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-4">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/tours" className="hover:text-amber-400 transition-colors">Tours</Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">{tour.title}</span>
            </nav>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${diffColor} mb-3 inline-block`}>{tour.difficulty}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-slate-200 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-400" />{tour.destination}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-400" />{tour.duration}</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-amber-400" />{tour.groupSize}</span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                {tour.rating} <span className="text-slate-400">({tour.reviews} reviews)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Tour Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">{tour.description}</p>
            </section>

            {/* Highlights */}
            <section className="bg-amber-50 rounded-2xl p-7 border border-amber-100">
              <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Award size={20} className="text-amber-500" /> Tour Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tour.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-amber-500 shrink-0" />
                    <span className="text-slate-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            {tour.gallery.length > 1 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-5">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tour.gallery.map((img, i) => (
                    <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Itinerary</h2>
              <div className="space-y-4">
                {tour.itinerary.map((day) => (
                  <details key={day.day} className="group bg-white border border-slate-200 rounded-xl overflow-hidden" open={day.day === 1}>
                    <summary className="flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                      <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {day.day}
                      </div>
                      <h3 className="font-semibold text-slate-800">{day.title}</h3>
                      <ChevronRight size={16} className="ml-auto text-slate-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {day.description}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Included / Excluded */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-500" /> Included
                </h3>
                <ul className="space-y-2">
                  {tour.included.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <XCircle size={18} className="text-red-400" /> Not Included
                </h3>
                <ul className="space-y-2">
                  {tour.excluded.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <XCircle size={14} className="text-red-400 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar Booking Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              <div className="bg-slate-800 p-5 text-white">
                <div className="flex items-end gap-2 mb-1">
                  {tour.originalPrice && (
                    <span className="text-slate-400 line-through text-sm">${tour.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-3xl font-bold text-amber-400">${tour.price.toLocaleString()}</span>
                </div>
                <p className="text-slate-300 text-sm">Per person · All-inclusive</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 font-medium uppercase tracking-wide">Duration</label>
                    <p className="font-semibold text-slate-800 mt-1 flex items-center gap-1"><Clock size={14} className="text-amber-500" />{tour.duration}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-medium uppercase tracking-wide">Group Size</label>
                    <p className="font-semibold text-slate-800 mt-1 flex items-center gap-1"><Users size={14} className="text-amber-500" />{tour.groupSize}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-medium uppercase tracking-wide">Difficulty</label>
                    <p className={`font-semibold mt-1 text-sm px-2 py-0.5 rounded-full inline-block ${diffColor}`}>{tour.difficulty}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-medium uppercase tracking-wide">Rating</label>
                    <p className="font-semibold text-slate-800 mt-1 flex items-center gap-1">
                      <Star size={14} className="fill-amber-400 text-amber-400" />{tour.rating}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wide block mb-2">Select Date</label>
                  <input type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wide block mb-2">Number of Travelers</label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    {[1,2,3,4,5,6].map(n => <option key={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                  </select>
                </div>

                <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                  <Calendar size={16} /> Book This Tour
                </Link>
                <Link href="/contact" className="block text-center border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium py-3 rounded-full text-sm transition-colors">
                  Ask a Question
                </Link>

                <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                  <CheckCircle size={12} className="text-emerald-500" /> Free cancellation up to 30 days before departure
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Tours */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="section-label">You Might Also Like</span>
                <h2 className="section-title">Similar Tours</h2>
              </div>
              <Link href="/tours" className="btn-dark">All Tours <ArrowRight size={16} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(t => <TourCard key={t.slug} tour={t} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
