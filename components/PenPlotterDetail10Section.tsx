'use client';

import { useEffect, useRef, useState } from 'react';

export default function PenPlotterDetail10Section() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation state first
            setShouldAnimate(false);
            setIsVisible(false);
            // Then start animation after a brief moment
            setTimeout(() => {
              setShouldAnimate(true);
              setIsVisible(true);
            }, 50);
          } else {
            // Reset everything when section leaves viewport
            setShouldAnimate(false);
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="penplotter-detail-10" className="bg-white leading-[0] relative w-full h-full text-black" data-name="MacBook Pro 14' - 104" data-node-id="237:5">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[40px] text-nowrap top-[295px] whitespace-pre transition-opacity duration-[3000ms] ease-out ${shouldAnimate && isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="237:14" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">Learnings</p>
        <p>&nbsp;</p>
      </div>
      <div 
        ref={textRef}
        className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[305px] text-[32px] top-[385px] w-[889px] transition-opacity duration-[3000ms] ease-out ${shouldAnimate && isVisible ? 'opacity-100' : 'opacity-0'}`} 
        data-node-id="237:18" 
        style={{ transitionDelay: shouldAnimate && isVisible ? '950ms' : '0ms', fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <p className="mb-0">This project demonstrated how mechanical systems can produce expressive, organic results when we embrace imperfection rather than striving for perfect precision.</p>
        <p>Working with physical materials, motors, and code taught me the importance of iterative prototyping and the value of hands-on experimentation in mechatronic design.</p>
      </div>
    </section>
  );
}

