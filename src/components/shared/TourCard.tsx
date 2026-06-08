import Link from 'next/link';
import { Clock, Users, Star, ArrowRight, MapPin } from 'lucide-react';
import type { Tour } from '@/lib/data';

interface TourCardProps {
  tour: Tour;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function TourCard({ tour, variant = 'default' }: TourCardProps) {
  const difficultyColor = {
    Easy: 'bg-emerald-100 text-emerald-700',
    Moderate: 'bg-amber-100 text-amber-700',
    Challenging: 'bg-red-100 text-red-700',
  }[tour.difficulty];

  if (variant === 'horizontal') {
    return (
      <Link href={`/tours/${tour.slug}`} className="group flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative w-40 shrink-0 overflow-hidden">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider mb-1">{tour.category}</p>
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-amber-500 transition-colors line-clamp-2">{tour.title}</h3>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-slate-700">{tour.rating}</span>
            </div>
            <span className="text-amber-500 font-bold text-sm">From ${tour.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/tours/${tour.slug}`} className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 gradient-bottom opacity-60" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColor}`}>
            {tour.difficulty}
          </span>
          {tour.originalPrice && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">SALE</span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
          <MapPin size={12} />
          <span>{tour.destination}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="section-label">{tour.category}</span>
        <h3 className="font-bold text-slate-800 text-lg group-hover:text-amber-500 transition-colors leading-snug mb-3">
          {tour.title}
        </h3>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
          <span className="flex items-center gap-1.5"><Clock size={14} /> {tour.duration}</span>
          <span className="flex items-center gap-1.5"><Users size={14} /> {tour.groupSize}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={i < Math.floor(tour.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-200'}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500">({tour.reviews})</span>
          </div>
          <div className="text-right">
            {tour.originalPrice && (
              <span className="text-xs text-slate-400 line-through block">${tour.originalPrice.toLocaleString()}</span>
            )}
            <span className="text-amber-500 font-bold">From ${tour.price.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center text-amber-500 text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
          View Details <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
