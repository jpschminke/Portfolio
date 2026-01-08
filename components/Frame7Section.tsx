'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const imgScreenshot20260107At151918Removebg1 = "http://localhost:3845/assets/faed24438e1ad156a2ac9f5819204f2d22e3a129.png";

export default function Frame7Section() {
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
    <section ref={sectionRef} id="frame-7" className="bg-white relative size-full" data-name="MacBook Pro 14' - 90" data-node-id="735:6234">
      <div className={`absolute h-[601px] left-[412px] top-[152px] w-[687px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Screenshot_2026-01-07_at_15.19.18-removebg 1" data-node-id="779:6400" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.08%] left-[-26.72%] max-w-none top-[-0.04%] w-[160.06%]" src={imgScreenshot20260107At151918Removebg1} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[305px] text-[40px] text-black text-nowrap top-[794px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="735:6236" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Pen Plotter
      </p>
      <Link href="/penplotter" className={`absolute bg-black h-[36px] left-[1053px] rounded-[8px] shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] top-[799px] w-[164px] flex items-center justify-center cursor-pointer no-underline transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="735:6237" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-nowrap text-white whitespace-pre m-0" data-node-id="735:6238" style={{ fontVariationSettings: "'wdth' 100" }}>
          View Project
        </p>
      </Link>
    </section>
  );
}

