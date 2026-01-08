'use client';

import { useEffect, useRef, useState } from 'react';

const imgMockup11 = "http://localhost:3845/assets/d9e4b08f98b66aa070d8494ba3b0fd3c220f3cf1.png";

export default function VintedDetail2Section() {
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
    <section ref={sectionRef} id="vinted-detail-2" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 14" data-node-id="203:86">
      <p className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[305px] not-italic text-[#767676] text-[14px] text-justify top-[812px] w-[901px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="203:96" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        For the course Application Design 1, we developed a thorough redesign of the Vinted app. While Vinted is a well-established platform, we identified several weaknesses in its information architecture and user experience. Our goal was to create a clearer structure, build greater trust within the buying process, and offer more inspiring content—without compromising the platform's accessibility.
      </p>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="203:105" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Vinted Redesign
      </p>
      <div className={`absolute h-[527px] left-[305px] top-[264px] w-[901px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Mockup_1 1" data-node-id="208:251" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.04%] left-0 max-w-none top-[-4.38%] w-[100.01%]" src={imgMockup11} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
}
