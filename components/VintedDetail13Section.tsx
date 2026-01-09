'use client';

import { useEffect, useRef, useState } from 'react';

const imgMockup51 = "/images/portfolio - images/Mockup_5 1.png";

export default function VintedDetail13Section() {
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
    <section ref={sectionRef} id="vinted-detail-13" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 75" data-node-id="591:5219">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[45px] leading-[45px] left-[306px] text-[40px] text-black top-[170px] w-[142px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="591:5221" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">Solution</p>
        <p>&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[20px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[223px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="591:5222" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Key Features
      </p>
      <div className={`absolute h-[527px] left-[306px] top-[264px] w-[925px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Mockup_5 1" data-node-id="591:5225" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.08%] left-0 max-w-none top-[-5.42%] w-[100.01%]" src={imgMockup51} loading="eager" />
        </div>
      </div>
      <div className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[305px] text-[#767676] text-[0px] text-[14px] top-[812px] w-[741px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="591:5220" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`3. Smart Feed & Trends`}</p>
        <p style={{ fontVariationSettings: "'wdth' 100" }}>Personalized trend cards, brand worlds, For You lists – combined with filter logic.</p>
      </div>
    </section>
  );
}
