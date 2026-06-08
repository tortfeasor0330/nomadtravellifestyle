import Link from 'next/link';
import { MapPin, Compass } from 'lucide-react';
import type { Destination } from '@/lib/data';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-md card-hover block aspect-[3/4]"
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 gradient-bottom" />

      {/* Tour count badge */}
      <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
        {destination.tourCount} Tours
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Compass size={12} />
          {destination.continent}
        </div>
        <h3 className="text-white text-xl font-bold leading-tight group-hover:text-amber-300 transition-colors">
          {destination.name}
        </h3>
        <p className="flex items-center gap-1 text-slate-300 text-sm mt-1">
          <MapPin size={12} />
          {destination.country}
        </p>
        <p className="text-slate-300 text-xs mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {destination.description}
        </p>
      </div>
    </Link>
  );
}
