'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const imgMockup32 = "/images/portfolio - images/Mockup_3 2.png";

export default function Frame3Section() {
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
    <section ref={sectionRef} id="frame-3" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 76" data-node-id="595:5227">
      <p 
        className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[794px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        data-node-id="595:5228" 
        style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        Vinted Redesign
      </p>
      <div className={`absolute h-[696px] left-[234px] top-[89px] w-[1043px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Mockup_3 2" data-node-id="595:5229" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMockup32} loading="eager" />
      </div>
      <Link href="/vinted" className={`absolute bg-black h-[36px] left-[1053px] rounded-[8px] shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] top-[799px] w-[164px] flex items-center justify-center cursor-pointer no-underline transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="595:5230" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-nowrap text-white whitespace-pre m-0" data-node-id="595:5231" style={{ fontVariationSettings: "'wdth' 100" }}>
          View Project
        </p>
      </Link>
    </section>
  );
}

