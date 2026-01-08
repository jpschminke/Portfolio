'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251129At1418161 = "http://localhost:3845/assets/89b5d3689952c779422df72ea343af1855cb6a20.png";

export default function AikonDetail13Section() {
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
    <section ref={sectionRef} id="aikon-detail-13" className="bg-white relative size-full" data-name="MacBook Pro 14' - 48" data-node-id="241:256">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[40px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5319" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        UI Design
      </p>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5320" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Style Panel (left)
      </p>
      <div className={`absolute border-[#d9d9d9] border-[0.75px] border-solid h-[603px] left-[989px] top-[239px] w-[278px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-29 at 14.18.16 1" data-node-id="301:1170" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.4%] left-[-0.52%] max-w-none top-[-0.38%] w-[100.52%]" src={imgScreenshot20251129At1418161} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
      <div className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] h-[289px] leading-[50px] left-[305px] text-[0px] text-black top-[396px] w-[450px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="301:1171" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0 text-[16px]">Control via:</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal mb-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          – level of detail
        </p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal mb-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          – stroke weight
        </p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal mb-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          – rounding
        </p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          – style types (Outline / Filled / Pixel / Round / 3D)
        </p>
      </div>
    </section>
  );
}

