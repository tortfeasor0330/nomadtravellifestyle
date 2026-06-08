import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowRight, ChevronRight } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/lib/data';
import BlogCard from '@/components/shared/BlogCard';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return { title: post?.title ?? 'Article Not Found' };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-4">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-amber-400">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-amber-400">{post.category}</span>
            </nav>
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase inline-block mb-3">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-5 mt-4 text-slate-300 text-sm">
              <span className="flex items-center gap-2">
                <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover border-2 border-amber-400" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article */}
          <article className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-amber-500 pl-5 mb-8 italic">
              {post.excerpt}
            </p>
            <div
              className="prose prose-slate prose-headings:font-bold prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-slate-600 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
              <span className="flex items-center gap-1.5 text-slate-500 text-sm"><Tag size={14} /> Tags:</span>
              {post.tags.map(tag => (
                <span key={tag} className="bg-slate-100 hover:bg-amber-100 hover:text-amber-600 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200">
              <span className="text-slate-500 text-sm font-medium">Share this article:</span>
              {[
                { label: 'Facebook', color: 'hover:bg-blue-600', char: 'f' },
                { label: 'Twitter / X', color: 'hover:bg-sky-500', char: 'x' },
                { label: 'LinkedIn', color: 'hover:bg-blue-700', char: 'in' },
              ].map(({ label, color, char }) => (
                <button key={label} title={label} className={`w-9 h-9 bg-slate-200 ${color} hover:text-white rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-slate-600`}>
                  {char}
                </button>
              ))}
            </div>

            {/* Author Card */}
            <div className="mt-10 bg-slate-50 rounded-2xl p-6 flex gap-5 items-start border border-slate-200">
              <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md shrink-0" />
              <div>
                <p className="text-xs text-amber-500 font-semibold uppercase tracking-wide mb-0.5">Written by</p>
                <h4 className="font-bold text-slate-800 text-lg">{post.author}</h4>
                <p className="text-slate-500 text-sm mt-1">Travel writer and adventure enthusiast. Passionate about authentic cultural experiences and sustainable travel.</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-7">
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 sticky top-24">
              <h3 className="font-bold text-slate-800 mb-4">More Articles</h3>
              <div className="space-y-4">
                {blogPosts.filter(p => p.slug !== slug).slice(0, 5).map(p => (
                  <BlogCard key={p.slug} post={p} variant="compact" />
                ))}
              </div>
              <Link href="/blog" className="mt-5 btn-primary w-full justify-center text-sm block text-center">
                All Articles <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="section-label">More in {post.category}</span>
                <h2 className="section-title">Related Articles</h2>
              </div>
              <Link href="/blog" className="btn-dark text-sm">All Articles <ArrowRight size={14} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => <BlogCard key={p.slug} post={p} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
