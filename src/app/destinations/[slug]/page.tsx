import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Globe, Clock, DollarSign, ChevronRight, ArrowRight } from 'lucide-react';
import { getDestination, getToursForDestination, destinations } from '@/lib/data';
import TourCard from '@/components/shared/TourCard';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return destinations.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  return { title: dest ? `${dest.name}, ${dest.country}` : 'Destination Not Found' };
}

export default async function DestinationDetailsPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const tours = getToursForDestination(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <img src={destination.heroImage} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-4">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <ChevronRight size={14} />
              <Link href="/destinations" className="hover:text-amber-400">Destinations</Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">{destination.name}</span>
            </nav>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-2">{destination.continent}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{destination.name}</h1>
            <p className="flex items-center gap-2 text-slate-200 mt-2 text-lg">
              <MapPin size={16} className="text-amber-400" /> {destination.country}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <section>
              <span className="section-label">About This Destination</span>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Discover {destination.name}</h2>
              <p className="text-slate-600 leading-relaxed text-base">{destination.longDescription}</p>
            </section>

            {/* Highlights */}
            <section className="bg-amber-50 rounded-2xl p-7 border border-amber-100">
              <h2 className="text-xl font-bold text-slate-800 mb-5">Top Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {destination.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                    <span className="text-slate-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            {destination.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-5">Gallery</h2>
                <div className="grid grid-cols-3 gap-3">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''} h-40 md:h-52`}>
                      <img src={img} alt={`${destination.name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tours */}
            <section>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="section-label">Available Packages</span>
                  <h2 className="text-2xl font-bold text-slate-800">Tours to {destination.name}</h2>
                </div>
                <Link href="/tours" className="btn-dark text-sm">All Tours <ArrowRight size={14} /></Link>
              </div>
              {tours.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {tours.map(t => <TourCard key={t.slug} tour={t} />)}
                </div>
              ) : (
                <div className="text-center py-10 bg-slate-50 rounded-2xl">
                  <p className="text-slate-400">No tours available for this destination yet.</p>
                  <Link href="/contact" className="mt-3 inline-block text-amber-500 font-medium hover:underline">Request a custom tour</Link>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-5 text-lg">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium tracking-wide">Best Time to Visit</p>
                    <p className="text-slate-800 font-semibold text-sm mt-0.5">{destination.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium tracking-wide">Language</p>
                    <p className="text-slate-800 font-semibold text-sm mt-0.5">{destination.language}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium tracking-wide">Currency</p>
                    <p className="text-slate-800 font-semibold text-sm mt-0.5">{destination.currency}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium tracking-wide">Timezone</p>
                    <p className="text-slate-800 font-semibold text-sm mt-0.5">{destination.timezone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Count */}
            <div className="bg-amber-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-1">{destination.tourCount}</div>
              <div className="text-amber-100">Tours Available</div>
              <Link href="/tours" className="mt-4 inline-block bg-white text-amber-600 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-amber-50 transition-colors">
                View All Tours
              </Link>
            </div>

            {/* Need Help */}
            <div className="bg-slate-800 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-2">Need Help Planning?</h4>
              <p className="text-slate-300 text-sm mb-4">Our destination experts can craft a custom itinerary just for you.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                Talk to an Expert
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
