'use client';

import { useEffect, useRef, useState } from 'react';

const imgScreenshot20251129At1422441 = "http://localhost:3845/assets/035a0412eb68cba4475bb6d7bf6db536b80b9046.png";

export default function AikonDetail14Section() {
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
    <section ref={sectionRef} id="aikon-detail-14" className="bg-white relative size-full" data-name="MacBook Pro 14' - 49" data-node-id="241:274">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[40px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5329" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        UI Design
      </p>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="625:5330" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Canvas (center)
      </p>
      <div className={`absolute border-[#d9d9d9] border-[0.75px] border-solid h-[492px] left-[921px] top-[295px] w-[418px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot 2025-11-29 at 14.22.44 1" data-node-id="301:1175" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251129At1422441} loading="eager" crossOrigin="anonymous" />
      </div>
      <div className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] h-[350px] leading-[0] left-[305px] text-[0px] text-black top-[410px] w-[494px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="301:1184" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="leading-[50px] mb-0 text-[16px]">Focus on:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[50px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              central workspace for the icon
            </span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[50px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              shows all generated variants in the selected style option
            </span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[50px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              enables targeted marking of individual areas for adjustment
            </span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[50px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              visual feedback occurs immediately after each change
            </span>
          </li>
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[50px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              forms the core of the creative and iterative process
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
