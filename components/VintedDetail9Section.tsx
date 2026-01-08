'use client';

import { useEffect, useRef, useState } from 'react';

export default function VintedDetail9Section() {
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
    <section ref={sectionRef} id="vinted-detail-9" className="bg-[#5e00b6] relative w-full h-full" data-name="MacBook Pro 14' - 29" data-node-id="219:459">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-nowrap text-white top-[210px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:468" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0 text-[40px]">UI Design</p>
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Color Choice
        </p>
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[32px] text-white top-[453px] w-[889px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="219:474" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        The new purple color #5E00B6 gives the brand a distinctive, fresh, and recognizable visual identity.
      </p>
    </section>
  );
}
