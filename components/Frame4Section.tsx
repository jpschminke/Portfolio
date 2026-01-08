'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const imgAikonLogo1 = "http://localhost:3845/assets/10108350cac914ae298fca691e9dbdb058077dd3.png";

export default function Frame4Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility every time the section enters/leaves the viewport
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
    <section ref={sectionRef} id="frame-4" className="bg-white relative size-full" data-name="MacBook Pro 14' - 62" data-node-id="293:509">
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[794px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="595:5239" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Aikon
      </p>
      <Link href="/aikon" className={`absolute bg-black h-[36px] left-[1053px] rounded-[8px] shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] top-[799px] w-[164px] flex items-center justify-center cursor-pointer no-underline transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="595:5241" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-nowrap text-white whitespace-pre m-0" data-node-id="595:5242" style={{ fontVariationSettings: "'wdth' 100" }}>
          View Project
        </p>
      </Link>
      <div className={`absolute h-[459px] left-[525px] rounded-[20px] top-[221px] w-[461px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Aikon_Logo 1" data-node-id="293:520" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[112.11%] left-[-6.15%] max-w-none top-[-4.9%] w-[111.54%]" src={imgAikonLogo1} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
}

