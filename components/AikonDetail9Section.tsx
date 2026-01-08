'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251129At1343291 = "http://localhost:3845/assets/992b898adeaedbf8aa718c234cc4cf8f984fccd5.png";

export default function AikonDetail9Section() {
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
    <section ref={sectionRef} id="aikon-detail-9" className="bg-white relative size-full" data-name="MacBook Pro 14' - 45" data-node-id="241:183">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="622:5302" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Conception</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="622:5303" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Wireframes
      </p>
      <div className={`absolute bg-black h-[541px] left-[306px] top-[269px] w-[863px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="299:759" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <div className={`absolute h-[511px] left-[381px] top-[284px] w-[714px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-29 at 13.43.29 1" data-node-id="299:761" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.01%] left-0 max-w-none top-[-0.99%] w-[101.4%]" src={imgScreenshot20251129At1343291} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
}

