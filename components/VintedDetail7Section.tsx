'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251123At1619311 = "/images/portfolio - images/Screenshot 2025-11-23 at 16.19.31 1.png";

export default function VintedDetail7Section() {
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
    <section ref={sectionRef} id="vinted-detail-7" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 28" data-node-id="219:435">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[20px] left-[306px] text-[40px] text-black text-nowrap top-[183px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:444" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">UI Design</p>
        <p>&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[20px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[223px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="583:5176" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Visual Direction
      </p>
      <p className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[305px] not-italic text-[#767676] text-[14px] top-[812px] w-[900px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:453" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Based on our mood board (inspirational, sustainable, smart), we developed a modern aesthetic with a focus on clarity and an editorial look.
      </p>
      <div className={`absolute bg-[#1e1e1e] h-[527px] left-[306px] top-[264px] w-[900px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="224:665" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <div className={`absolute h-[478px] left-[496px] top-[282px] w-[512px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-23 at 16.19.31 1" data-node-id="219:450" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full w-full object-contain" src={imgScreenshot20251123At1619311} loading="eager" />
        </div>
      </div>
      <div className={`absolute bg-[#1e1e1e] h-[14px] left-[496px] top-[746px] w-[25px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="224:667" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <div className={`absolute bg-[#1e1e1e] h-[117px] left-[679px] top-[658px] w-[153px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="577:5164" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
    </section>
  );
}
