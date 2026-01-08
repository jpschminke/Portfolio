'use client';

import { useEffect, useRef, useState } from 'react';

export default function AikonDetail11Section() {
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
    <section ref={sectionRef} id="aikon-detail-11" className="bg-white relative size-full text-black" data-name="MacBook Pro 14' - 46" data-node-id="241:195">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-nowrap top-[192px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="622:5314" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Conception</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[305px] text-[20px] text-black top-[348px] w-[869px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:207" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        The early wireframes already showed the core structure:
      </p>
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[180px] leading-[60px] left-[306px] text-[24px] text-black top-[454px] w-[450px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:209" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">left column: style parameters</p>
        <p className="mb-0">center: canvas</p>
        <p>right: history / prompt log</p>
      </div>
    </section>
  );
}

