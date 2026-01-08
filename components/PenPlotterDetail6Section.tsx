'use client';

import { useEffect, useRef, useState } from 'react';

const imgImage8 = "http://localhost:3845/assets/1b98f56131356aa48c329b5c5e56e5c7d7d68c33.png";

export default function PenPlotterDetail6Section() {
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
    <section ref={sectionRef} id="penplotter-detail-6" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 94" data-node-id="742:6262">
      <div className={`absolute h-[485px] left-[433px] top-[284px] w-[648px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="image 8" data-node-id="742:6266" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} loading="eager" crossOrigin="anonymous" />
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[433px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="742:6322" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Mechanical Assembly
      </p>
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[431px] text-[#767676] text-[14px] text-justify top-[792px] w-[649px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="804:6475" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        The motors were mounted directly onto the wooden structure, forming the physical joints of the drawing arm. Their placement directly influenced movement behavior and drawing characteristics.
      </p>
    </section>
  );
}
