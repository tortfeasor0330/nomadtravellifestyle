'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in ms before revealing (on top of stagger) */
  delay?: number;
  /**
   * When true, the wrapper itself is NOT revealed — instead every
   * direct child with class `scroll-reveal` is revealed in sequence
   * with 110ms between each one.
   */
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (stagger) {
          const targets = el.querySelectorAll<HTMLElement>('.scroll-reveal');
          targets.forEach((child, i) => {
            setTimeout(() => child.classList.add('is-visible'), delay + i * 110);
          });
        } else {
          setTimeout(() => el.classList.add('is-visible'), delay);
        }

        observer.unobserve(el);
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    <div
      ref={ref}
      className={stagger ? className : `scroll-reveal ${className}`}
    >
      {children}
    </div>
  );
}
