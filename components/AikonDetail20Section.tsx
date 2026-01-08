'use client';

import { useEffect, useRef, useState } from 'react';

const img171 = "http://localhost:3845/assets/3ef52e83284ea1abf14add6c1ded49287c5414c0.png";

export default function AikonDetail20Section() {
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
    <section ref={sectionRef} id="aikon-detail-20" className="bg-white relative size-full" data-name="MacBook Pro 14' - 55" data-node-id="241:358">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[304px] text-[40px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5372" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Final Prototype
      </p>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] top-[188px] w-[118px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5373" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <span>{`Photo `}</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>→</span>
        <span>{` Icon`}</span>
      </p>
      <div className={`absolute border border-[var(--portfolio,#d9d9d9)] border-solid h-[520px] left-[304px] top-[265px] w-[925px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="17 1" data-node-id="305:1221" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img171} loading="eager" crossOrigin="anonymous" />
      </div>
    </section>
  );
}
