'use client';

import { useEffect, useRef, useState } from 'react';

export default function VintedDetail10Section() {
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
    <section ref={sectionRef} id="vinted-detail-10" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 30" data-node-id="219:478">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[45px] leading-[45px] left-[306px] text-[40px] text-black top-[170px] w-[142px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="224:656" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">Solution</p>
        <p>&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[20px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[223px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="587:5179" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Key Features
      </p>
      <div className={`absolute bg-black h-[540px] left-[306px] top-[264px] w-[900px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="224:662" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/VZ6TBSFuqaI?autoplay=1&loop=1&playlist=VZ6TBSFuqaI&mute=1&controls=1&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </section>
  );
}
