'use client';

import { useEffect, useRef, useState } from 'react';

const imgAikonLogo1 = "http://localhost:3845/assets/10108350cac914ae298fca691e9dbdb058077dd3.png";

export default function AikonDetail2Section() {
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
    <section ref={sectionRef} id="aikon-detail-2" className="bg-white relative size-full" data-name="MacBook Pro 14' - 36" data-node-id="241:48">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[195px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:58" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Aikon
      </p>
      <div className={`absolute left-[568px] size-[376px] top-[303px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Aikon_Logo 1" data-node-id="241:61" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAikonLogo1} loading="eager" crossOrigin="anonymous" />
      </div>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[305px] text-[#767676] text-[14px] text-justify top-[796px] w-[831px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="241:57" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">Aikon is an AI-powered icon generator tool that enables designers to quickly, consistently, and stylistically create missing icons.</p>
        <p>The tool analyzes existing icon sets, automatically recognizes stroke weight, rounding, and level of detail, and generates matching new icons at the push of a button.</p>
      </div>
    </section>
  );
}

