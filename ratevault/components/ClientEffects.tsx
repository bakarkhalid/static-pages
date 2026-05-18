'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global side effects: header shadow on scroll, reveal-on-scroll for .reveal elements.
 * Re-runs on route changes so client-side navigation picks up newly rendered .reveal nodes.
 */
export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Sticky header shadow once scrolled
    const header = document.querySelector('.site-header');
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal-on-scroll via IntersectionObserver
    const reveals = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
