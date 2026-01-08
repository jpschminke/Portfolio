'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20250425At1630321 = "http://localhost:3845/assets/0e4b93dfa4b894d46a5be72ca8d3a1e32c55dad7.png";

export default function AikonDetail4Section() {
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
    <section ref={sectionRef} id="aikon-detail-4" className="bg-white relative size-full" data-name="MacBook Pro 14' - 40" data-node-id="241:107">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[125px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="606:5273" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Research and Insights</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[185px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="606:5274" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Problem Sketch
      </p>
      <div className={`absolute h-[540px] left-[305px] top-[264px] w-[863.738px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-04-25 at 16.30.32 1" data-node-id="279:428" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250425At1630321} loading="eager" crossOrigin="anonymous" />
      </div>
    </section>
  );
}

