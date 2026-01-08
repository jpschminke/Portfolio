'use client';

import { useEffect, useRef, useState } from 'react';

export default function VintedDetail4Section() {
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
    <section ref={sectionRef} id="vinted-detail-4" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 23" data-node-id="208:280">
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[260px] text-[24px] text-black text-justify top-[723px] w-[894px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:294" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <span className="font-['SF_Pro:Light',sans-serif] font-[274.315]" style={{ fontVariationSettings: "'wdth' 100" }}>
          T
        </span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          hese insights formed the core of our
        </span>{" "}
        <span className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[#5e00b6]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Value Proposition
        </span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          :
        </span>
      </p>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[49px] leading-[normal] left-[260px] text-[36px] text-black top-[315px] w-[218px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:295" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Pain Points
      </p>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[49px] leading-[normal] left-[853px] text-[36px] text-black top-[315px] w-[126px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:296" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Needs
      </p>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[259px] leading-[30px] left-[260px] text-[16px] text-black top-[349px] w-[450px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:297" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`cluttered search & chaotic filters`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">lack of transparency → low trust</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">poor presentation: few images, unclear item conditions</p>
        <p className="mb-0">&nbsp;</p>
        <p>cumbersome communication between sellers and buyers</p>
      </div>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[272px] leading-[30px] left-[853px] text-[16px] text-black top-[349px] w-[398px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:298" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">precise, fast search</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">higher-quality product presentation</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">clear and fair buyer protection communication</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`storytelling & inspiration`}</p>
      </div>
      <p className={`absolute font-['Helvetica_Neue:Bold',sans-serif] h-[41px] leading-[25px] left-[853px] not-italic text-[64px] text-black text-justify top-[229px] w-[39px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:300" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        +
      </p>
      <div className={`absolute bg-black h-[7px] left-[260px] top-[246px] w-[33px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:302" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
    </section>
  );
}
