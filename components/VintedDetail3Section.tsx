'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251122At1623551 = "/images/portfolio - images/Screenshot 2025-11-22 at 16.23.55 1.png";

export default function VintedDetail3Section() {
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
    <section ref={sectionRef} id="vinted-detail-3" className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full h-full" data-name="MacBook Pro 14' - 22" data-node-id="208:263">
      <p className={`absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] left-[305px] not-italic text-[#767676] text-[14px] text-justify top-[825px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:272" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        We started with an in-depth competitive analysis (GOAT, Grailed, Vestiaire Collective), surveys, and twelve interviews.
      </p>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[203px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="208:273" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>{`Research and Insights `}</p>
      <div className={`absolute border-[#d9d9d9] border-[0.75px] border-solid h-[536px] left-[305px] top-[264px] w-[895px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-22 at 16.23.55 1" data-node-id="203:126" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full w-full object-contain" src={imgScreenshot20251122At1623551} loading="eager" />
        </div>
      </div>
    </section>
  );
}
