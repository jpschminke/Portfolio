'use client';

import { useEffect, useRef, useState } from 'react';

export default function AikonDetail12Section() {
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
    <section ref={sectionRef} id="aikon-detail-12" className="bg-white relative size-full" data-name="MacBook Pro 14' - 47" data-node-id="241:230">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:239" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">UI Design</p>
        <p>&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[305px] text-[32px] text-[color:var(--black,#000000)] top-[473px] tracking-[-0.32px] w-[981px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:247" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        The UI was designed for clarity, precision, and systematicity –<br />
        fitting for the tool character.
      </p>
    </section>
  );
}

