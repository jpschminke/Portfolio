'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('contact-detail-2');
    if (nextSection) {
      const headerHeight = 100;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
    <section ref={sectionRef} id="contact-detail" className="bg-white relative size-full" data-name="MacBook Pro 14' - 79" data-node-id="628:5394">
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-[591px] text-[64px] text-black top-[237px] w-[330px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5395" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Contact me
      </p>
      <div className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[48px] left-[998px] text-[24px] text-nowrap text-black top-[491px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="628:5398" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <a href="mailto:jasper.schminke@hfg-gmuend.de" className="mb-0 block underline hover:opacity-80 transition-opacity no-underline font-['SF_Pro:Regular',sans-serif] font-normal" style={{ textDecoration: 'underline', fontVariationSettings: "'wdth' 100" }}>
          jasper.schminke@hfg-gmuend.de
        </a>
        <a href="tel:+4915129074546" className="mb-0 block underline hover:opacity-80 transition-opacity no-underline font-['SF_Pro:Regular',sans-serif] font-normal" style={{ textDecoration: 'underline', fontVariationSettings: "'wdth' 100" }}>
          +4915129074546
        </a>
        <a href="https://www.linkedin.com/in/jasper-schminke-0bb51139b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="block underline hover:opacity-80 transition-opacity no-underline font-['SF_Pro:Regular',sans-serif] font-normal" style={{ textDecoration: 'underline', fontVariationSettings: "'wdth' 100" }}>
          LinkedIn
        </a>
      </div>
      <div className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[48px] left-[106px] text-[24px] text-black top-[491px] w-[711px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="689:6103" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">I'm happy to connect and explore new opportunities.</p>
        <p className="mb-0">Don't hesitate to reach out.</p>
        <p>I'm currently looking for an internship starting in April 2026.</p>
      </div>
      <button
        onClick={handleScrollDown}
        className="group absolute left-1/2 bottom-[150px] translate-x-[-50%] bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        aria-label="Scroll to imprint section"
      >
        <svg
          className="transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px]"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#767676"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
