'use client';

import { useEffect, useRef, useState } from 'react';

export default function VintedDetail5Section() {
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
    <section ref={sectionRef} id="vinted-detail-5" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 24" data-node-id="208:322">
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[167px] text-[32px] text-[color:var(--black,#000000)] top-[448px] tracking-[-0.32px] w-[1179px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="587:5195" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <span className="font-['SF_Pro:Light',sans-serif] font-[274.315]" style={{ fontVariationSettings: "'wdth' 100" }}>
          An app that makes
        </span>
        <span>{` sustainable buying `}</span>
        <span className="font-['SF_Pro:Light',sans-serif] font-[274.315]" style={{ fontVariationSettings: "'wdth' 100" }}>
          and selling easier through
        </span>
        <span>{` intuitive features, smart recommendations, `}</span>
        <span className="font-['SF_Pro:Light',sans-serif] font-[274.315]" style={{ fontVariationSettings: "'wdth' 100" }}>
          and a
        </span>
        <span>{` trusted community.`}</span>
      </p>
    </section>
  );
}

