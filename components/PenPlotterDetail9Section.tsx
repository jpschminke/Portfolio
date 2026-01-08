'use client';

import { useEffect, useRef, useState } from 'react';

const imgImage12 = "http://localhost:3845/assets/dbe651670ee912f9ac2909ab758b3fe018cfc1dd.png";

export default function PenPlotterDetail9Section() {
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
    <section ref={sectionRef} id="penplotter-detail-9" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 98" data-node-id="742:6312">
      <div className={`absolute h-[487px] left-[431px] top-[282px] w-[649px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="image 12" data-node-id="742:6316" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} loading="eager" crossOrigin="anonymous" />
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[431px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="742:6328" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Functional Prototype
      </p>
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[431px] text-[#767676] text-[14px] text-justify top-[792px] w-[649px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="804:6481" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        The final prototype combines digital control, mechanical structure, and physical drawing into a compact, functional system—serving as an exploration of how machines can create imperfect, expressive marks.
      </p>
    </section>
  );
}
