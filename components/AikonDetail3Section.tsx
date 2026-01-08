'use client';

import { useEffect, useRef, useState } from 'react';

const imgImage2 = "http://localhost:3845/assets/c5d74e3dadcc7a03934cb2f2d383dfedf1336ef0.png";

export default function AikonDetail3Section() {
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
    <section ref={sectionRef} id="aikon-detail-3" className="bg-white relative size-full" data-name="MacBook Pro 14' - 39" data-node-id="241:90">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[210px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:99" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Research and Insights</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[270px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="606:5272" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Problem Sketch
      </p>
      <p className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[305px] not-italic text-[#767676] text-[14px] text-justify top-[811px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:103" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Already the first ideation phase revealed clear problem areas: inconsistent icon sets, missing icons for new devices, and high time investment for post-processing.
      </p>
      <div className={`absolute h-[302px] left-[273px] top-[387px] w-[929px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="image 2" data-node-id="568:5141" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} loading="eager" crossOrigin="anonymous" />
      </div>
    </section>
  );
}
