'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251129At1426121 = "http://localhost:3845/assets/d4ab84c6b977be69a355e5d32d02cdd87fcae3c3.png";

export default function AikonDetail15Section() {
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
    <section ref={sectionRef} id="aikon-detail-15" className="bg-white relative size-full" data-name="MacBook Pro 14' - 50" data-node-id="241:288">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[40px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5334" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        UI Design
      </p>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5335" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        History (right)
      </p>
      <div className={`absolute border-[#d9d9d9] border-[0.75px] border-solid h-[602px] left-[989px] top-[240px] w-[276px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-29 at 14.26.12 1" data-node-id="301:1187" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.29%] left-[-0.72%] max-w-none top-[-0.23%] w-[101.09%]" src={imgScreenshot20251129At1426121} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[289px] leading-[0] left-[306px] text-[14px] text-black top-[383px] w-[469px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="301:1189" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="leading-[50px] mb-0">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[50px]">shows all generated variants chronologically</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[50px]">documents each prompt step transparently</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[50px]">makes changes to the icon traceable at any time</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[50px]">Example: "flower" → "with a leaf" → "in a pot"</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
