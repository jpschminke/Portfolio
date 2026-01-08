'use client';

import { useEffect, useRef, useState } from 'react';

const imgBildschirmfoto20250520Um1026061 = "http://localhost:3845/assets/a06129e320f74557e46f222a6823990eb5b0b9b3.png";

export default function AikonDetail8Section() {
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
    <section ref={sectionRef} id="aikon-detail-8" className="bg-white relative size-full" data-name="MacBook Pro 14' - 44" data-node-id="241:171">
      <div className={`absolute bg-[#2f2f2f] h-[541px] left-[305px] top-[264px] w-[863px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="299:757" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="622:5295" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Conception</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="622:5296" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Inspirations
      </p>
      <p className={`absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] left-[306px] not-italic text-[#767676] text-[14px] top-[823px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:181" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Initial interface inspirations (e.g., image upload, prompting, voice control) helped with domain definition.
      </p>
      <div className={`absolute h-[532px] left-[345px] top-[269px] w-[770px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Bildschirmfoto 2025-05-20 um 10.26.06 1" data-node-id="301:763" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.32%] left-0 max-w-none top-0 w-[100.39%]" src={imgBildschirmfoto20250520Um1026061} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
}

