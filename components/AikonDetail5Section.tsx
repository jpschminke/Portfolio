'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20250428At1241431 = "/images/portfolio - images/Screenshot 2025-04-28 at 12.41.43 1.png";

export default function AikonDetail5Section() {
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
    <section ref={sectionRef} id="aikon-detail-5" className="bg-white relative size-full" data-name="MacBook Pro 14' - 42" data-node-id="241:148">
      <div className={`absolute h-[540px] left-[305px] top-[200px] w-[864px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-04-28 at 12.41.43 1" data-node-id="293:535" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250428At1241431} loading="eager" />
      </div>
      <p className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[305px] not-italic text-[#767676] text-[14px] text-justify top-[765px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="293:537" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        In the interviews (e.g., Stephanie, Isabella, Maxime, Christoph), designers confirmed the biggest pain points:
      </p>
    </section>
  );
}

