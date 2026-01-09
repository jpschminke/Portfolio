'use client';

import { useEffect, useRef, useState } from 'react';

const imgLine2 = "/images/portfolio - images/image 2.png";

export default function VintedDetail6Section() {
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
    <section ref={sectionRef} id="vinted-detail-6" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 27" data-node-id="219:394">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-black top-[299px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:409" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0 text-[40px]">Conception</p>
        <p className="text-[#767676] text-[20px]">Design Process</p>
      </div>
      <p className={`absolute font-['Helvetica_Neue:Bold',sans-serif] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] not-italic text-[20px] text-black top-[462px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:413" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{`Through Crazy 8's, the `}</span>
        <span className="text-[#5e00b6]" style={{ fontVariationSettings: "'wdth' 100" }}>
          key functions
        </span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{` emerged:`}</span>
      </p>
      <div className={`absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[65px] left-[305px] not-italic text-[24px] text-black top-[517px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:415" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">– new scroll/swipe story function</p>
        <p className="mb-0">{`– optimized filters & categories`}</p>
        <p>– revised listing flow (with Smart Pricing)</p>
      </div>
    </section>
  );
}
