import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { blogPosts, blogCategories } from '@/lib/data';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Blog Archive' };

const years = ['2025', '2024', '2023'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function ArchivePage() {
  return (
    <>
      <PageHeader
        title="Blog Archive"
        subtitle="All Articles"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Archive' }]}
        image="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">All Articles</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-5 bg-white rounded-2xl shadow-md p-5 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2.5 py-1 rounded-full">{post.category}</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 group-hover:text-amber-500 transition-colors leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-amber-500 transition-colors shrink-0 mt-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Archive by Year */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Archive by Year</h3>
              <div className="space-y-2">
                {years.map(year => (
                  <div key={year} className="space-y-1">
                    <button className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors py-1">
                      {year}
                      <span className="bg-amber-50 text-amber-600 text-xs px-2 py-0.5 rounded-full">
                        {year === '2025' ? blogPosts.filter(p => p.date.includes('2025')).length : year === '2024' ? blogPosts.filter(p => p.date.includes('2024')).length : 0}
                      </span>
                    </button>
                    {year === '2025' && (
                      <div className="ml-4 space-y-1">
                        {months.slice(0, 3).map(month => (
                          <span key={month} className="block text-xs text-slate-500 hover:text-amber-500 cursor-pointer py-0.5 transition-colors">
                            — {month}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {blogCategories.slice(1).map(cat => {
                  const count = blogPosts.filter(p => p.category === cat).length;
                  return (
                    <li key={cat} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 hover:text-amber-500 cursor-pointer transition-colors">{cat}</span>
                      <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Back to Blog */}
            <Link href="/blog" className="btn-primary w-full justify-center block text-center">
              Back to Blog <ArrowRight size={16} className="inline ml-1" />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
