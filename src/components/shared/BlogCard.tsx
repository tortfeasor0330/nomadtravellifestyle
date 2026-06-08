import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/data';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/blog/${post.slug}`} className="group relative rounded-2xl overflow-hidden shadow-xl block h-full min-h-[380px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 gradient-bottom" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold mt-3 leading-snug group-hover:text-amber-300 transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 text-slate-300 text-sm mt-3">
            <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/blog/${post.slug}`} className="group flex gap-4 items-start">
        <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div>
          <p className="text-xs text-amber-500 font-semibold mb-1">{post.category}</p>
          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-amber-500 transition-colors line-clamp-2">{post.title}</h4>
          <p className="text-xs text-slate-500 mt-1">{post.date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-4 text-slate-500 text-xs mb-3">
          <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
        </div>
        <h3 className="font-bold text-slate-800 text-base group-hover:text-amber-500 transition-colors leading-snug line-clamp-2 mb-2">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
          <img src={post.authorImage} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
          <span className="text-xs text-slate-600 font-medium">{post.author}</span>
          <span className="ml-auto text-amber-500 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
