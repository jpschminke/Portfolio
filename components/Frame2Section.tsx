'use client';

import { useEffect, useRef, useState } from 'react';

export default function Frame2Section() {
  const statementRef = useRef<HTMLDivElement>(null);
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

    if (statementRef.current) {
      observer.observe(statementRef.current);
    }

    return () => {
      if (statementRef.current) {
        observer.unobserve(statementRef.current);
      }
    };
  }, []);

  return (
    <section id="frame-2" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 60" data-node-id="291:482">
      <div 
        ref={statementRef}
        className="absolute font-['SF_Pro:Medium',sans-serif] font-[500] leading-[normal] left-[80px] text-[32px] text-black top-[451px] right-[49px]"
        data-node-id="291:483" 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className={`mb-0 ${shouldAnimate ? 'transition-opacity duration-[3000ms] ease-out' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
          {`I think design shapes how we live — `}
        </p>
        <p className={`mb-0 ${shouldAnimate ? 'transition-opacity duration-[3000ms] ease-out' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: shouldAnimate && isVisible ? '950ms' : '0ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
          when it's driven by clarity and empathy, it creates a future that feels human and intentional.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </section>
  );
}

