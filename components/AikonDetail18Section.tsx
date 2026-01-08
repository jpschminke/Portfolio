'use client';

import { useEffect, useRef, useState } from 'react';

const imgVerlauf11 = "http://localhost:3845/assets/72f78d0a726b5d42eb778bc6c9e676028967109c.png";

export default function AikonDetail18Section() {
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
    <section ref={sectionRef} id="aikon-detail-18" className="bg-white relative size-full" data-name="MacBook Pro 14' - 53" data-node-id="241:330">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[304px] text-[40px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5351" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Final Prototype
      </p>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5352" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Generate Variants
      </p>
      <div className={`absolute border border-[var(--portfolio,#d9d9d9)] border-solid h-[521px] left-[305px] top-[264px] w-[927px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Verlauf-1 1" data-node-id="305:1203" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerlauf11} loading="eager" crossOrigin="anonymous" />
      </div>
    </section>
  );
}
