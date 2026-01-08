'use client';

import { useEffect, useRef, useState } from 'react';

export default function AikonDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="aikon-detail" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 35" data-node-id="239:34">
      <div className={`absolute h-[648px] left-[205px] top-[167px] w-[1102px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Aikon Video 1" data-node-id="241:47" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/i96_pLWptxI?autoplay=1&loop=1&playlist=i96_pLWptxI&mute=1&controls=1&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </section>
  );
}
