'use client';

import { useEffect, useRef, useState } from 'react';

export default function AikonDetail6Section() {
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
    <section ref={sectionRef} id="aikon-detail-6" className="bg-white leading-[0] relative size-full" data-name="MacBook Pro 14' - 41" data-node-id="241:119">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[171px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="606:5280" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Research and Insights</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[231px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="606:5281" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Pain Points
      </p>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[259px] leading-[0] left-[305px] text-[0px] text-[20px] text-black top-[304px] w-[450px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:145" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="leading-[30px] mb-0">&nbsp;</p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[55px] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          difficult search in libraries
        </p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[55px] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          missing modern icons
        </p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[55px] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          inconsistencies between sets
        </p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[55px] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          no efficient filtering
        </p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          manual post-processing as time drain
        </p>
      </div>
      <div className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[306px] not-italic text-[#767676] text-[14px] top-[681px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="293:571" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">This resulted in a precise persona:</p>
        <p>The professional UX/UI designer who seeks a consistent, efficient tool that brings together style fidelity and AI.</p>
      </div>
    </section>
  );
}

