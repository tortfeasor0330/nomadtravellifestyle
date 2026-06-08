'use client';

import { useState } from 'react';
import { SlidersHorizontal, Search, Grid, List } from 'lucide-react';
import TourCard from '@/components/shared/TourCard';
import PageHeader from '@/components/layout/PageHeader';
import { tours, categories } from '@/lib/data';

const durations = ['Any Duration', '1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];
const difficulties = ['Any Difficulty', 'Easy', 'Moderate', 'Challenging'];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Any Difficulty');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = tours.filter(t => {
    const matchCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchDiff = selectedDifficulty === 'Any Difficulty' || t.difficulty === selectedDifficulty;
    const matchPrice = t.price <= maxPrice;
    const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchDiff && matchPrice && matchSearch;
  });

  return (
    <>
      <PageHeader
        title="All Tours"
        subtitle="Explore Our Packages"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tours' }]}
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tours or destinations..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <div className="flex border border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setViewMode('grid')} className={`p-3 ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'text-slate-500 hover:bg-slate-50'} transition-colors`}>
                <Grid size={16} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-3 ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'text-slate-500 hover:bg-slate-50'} transition-colors`}>
                <List size={16} />
              </button>
            </div>
            <span className="text-slate-500 text-sm">{filtered.length} tours found</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-amber-500 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-64 shrink-0 space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>$500</span>
                    <span className="font-bold text-amber-500">Up to ${maxPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map(d => (
                    <label key={d} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="difficulty"
                        checked={selectedDifficulty === d}
                        onChange={() => setSelectedDifficulty(d)}
                        className="accent-amber-500"
                      />
                      <span className="text-sm text-slate-600 group-hover:text-amber-500 transition-colors">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Duration</h3>
                <div className="space-y-2">
                  {durations.map(d => (
                    <label key={d} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-amber-500" />
                      <span className="text-sm text-slate-600 group-hover:text-amber-500 transition-colors">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Tour Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">No tours match your filters.</p>
                <button onClick={() => { setSelectedCategory('All'); setSelectedDifficulty('Any Difficulty'); setMaxPrice(5000); setSearchQuery(''); }} className="mt-4 text-amber-500 font-medium hover:underline">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filtered.map(tour => (
                  <TourCard key={tour.slug} tour={tour} variant={viewMode === 'list' ? 'horizontal' : 'default'} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
