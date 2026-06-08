import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import DestinationCard from '@/components/shared/DestinationCard';
import { destinations } from '@/lib/data';

export const metadata: Metadata = { title: 'Destinations' };

const continents = ['All', 'Asia', 'Europe', 'South America', 'Africa'];

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        title="Our Destinations"
        subtitle="Explore The World"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Continent filter (static in Server Component — could be client component for filtering) */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {continents.map(c => (
            <span
              key={c}
              className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${c === 'All' ? 'bg-amber-500 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500'}`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Asia */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-amber-500 rounded-full inline-block" />
            Asia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {destinations.filter(d => d.continent === 'Asia').map(dest => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>

        {/* Europe */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-amber-500 rounded-full inline-block" />
            Europe
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {destinations.filter(d => d.continent === 'Europe').map(dest => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>

        {/* South America */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-amber-500 rounded-full inline-block" />
            South America
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {destinations.filter(d => d.continent === 'South America').map(dest => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>

        {/* Africa */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-amber-500 rounded-full inline-block" />
            Africa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {destinations.filter(d => d.continent === 'Africa').map(dest => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Quote Banner */}
      <section className="bg-slate-800 py-16 mt-10">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <p className="text-xl md:text-2xl italic text-slate-300 leading-relaxed">
            &ldquo;The world is a book, and those who do not travel read only one page.&rdquo;
          </p>
          <p className="text-amber-400 font-semibold mt-4">— Saint Augustine</p>
        </div>
      </section>
    </>
  );
}
