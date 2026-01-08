'use client';

import { useEffect, useRef, useState } from 'react';

const imgImage11 = "http://localhost:3845/assets/f9f546b85207251a341593222fcbd1a000e815f9.png";

export default function PenPlotterDetail5Section() {
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
    <section ref={sectionRef} id="penplotter-detail-5" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 97" data-node-id="742:6286">
      <div className={`absolute h-[485px] left-[432px] top-[284px] w-[646px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="image 11" data-node-id="742:6284" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} loading="eager" crossOrigin="anonymous" />
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[432px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="742:6320" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Fabrication Process
      </p>
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[431px] text-[#767676] text-[14px] text-justify top-[792px] w-[649px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="804:6473" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Structural components were laser-cut from wood, providing a modular and easily adjustable construction. This approach enabled rapid iteration and hands-on experimentation throughout the build process.
      </p>
    </section>
  );
}
