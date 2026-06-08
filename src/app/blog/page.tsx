import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogCard from '@/components/shared/BlogCard';
import { blogPosts, blogCategories } from '@/lib/data';
import { Search } from 'lucide-react';

export const metadata: Metadata = { title: 'Travel Blog' };

const tags = ['Bali', 'Safari', 'Greece', 'Japan', 'Solo Travel', 'Budget Travel', 'Packing', 'Sustainable', 'Luxury', 'Adventure'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHeader
        title="Travel Blog"
        subtitle="Stories & Inspiration"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        {featured && (
          <div className="mb-12">
            <span className="section-label">Featured Article</span>
            <div className="h-80 md:h-[420px]">
              <BlogCard post={featured} variant="featured" />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Post Grid */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogCategories.map(cat => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${cat === 'All' ? 'bg-amber-500 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-500'}`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {rest.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-7">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Search Articles</h3>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {blogCategories.slice(1).map(cat => (
                  <li key={cat}>
                    <span className="flex items-center justify-between text-sm text-slate-600 hover:text-amber-500 cursor-pointer transition-colors py-1">
                      {cat}
                      <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {blogPosts.filter(p => p.category === cat).length}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-slate-100 hover:bg-amber-100 hover:text-amber-600 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map(post => (
                  <BlogCard key={post.slug} post={post} variant="compact" />
                ))}
              </div>
            </div>

            {/* Newsletter Promo */}
            <div className="bg-amber-500 rounded-2xl p-6 text-white text-center">
              <h4 className="font-bold text-lg mb-2">Travel Inspiration Weekly</h4>
              <p className="text-amber-100 text-sm mb-4">Get our best articles, deals & destination guides delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" className="w-full bg-white/20 backdrop-blur placeholder:text-amber-200 text-white px-4 py-2.5 rounded-xl text-sm border border-white/30 focus:outline-none mb-3" />
              <button className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-slate-800 transition-colors">
                Subscribe Free
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
