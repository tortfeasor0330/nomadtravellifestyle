import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string }

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  image?: string;
  overlay?: 'dark' | 'medium' | 'light';
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  image = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80',
  overlay = 'dark',
}: PageHeaderProps) {
  const overlayClass = {
    dark: 'from-slate-900/90 to-slate-800/70',
    medium: 'from-slate-800/80 to-slate-700/50',
    light: 'from-slate-700/60 to-slate-600/30',
  }[overlay];

  return (
    <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`} />

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="section-label text-amber-400">{subtitle}</span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h1>

          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 mt-4 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight size={14} className="text-slate-400" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-slate-300 hover:text-amber-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-amber-400 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
