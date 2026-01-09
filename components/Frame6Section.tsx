'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const imgImage13 = "/images/portfolio - images/image 11.png";

export default function Frame6Section() {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Let's chat.";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    const section = document.getElementById('frame-6');
    if (!section) return;

    // Check initial visibility
    const rect = section.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInitiallyVisible) {
      setIsVisible(true);
      setDisplayedText('');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setDisplayedText(''); // Reset text when section becomes visible
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText(''); // Clear text when not visible
      return;
    }

    // Small delay to ensure observer has settled
    let typingInterval: NodeJS.Timeout | null = null;
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
          }
        }
      }, typingSpeed);
    }, 50);

    return () => {
      clearTimeout(startDelay);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
      setDisplayedText(''); // Clear text on cleanup
    };
  }, [isVisible, fullText]);

  return (
    <section id="frame-6" className="bg-white relative size-full" data-name="MacBook Pro 14' - 89" data-node-id="689:6093">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-1/2 text-[74px] text-black top-[411px] whitespace-pre translate-x-[-50%]" data-node-id="689:6094" style={{ fontVariationSettings: "'wdth' 100", width: '318px', marginLeft: '-16px' }}>
        {isVisible && (
          <>
            {displayedText}
            {displayedText === fullText && (
              <span className="cursor-blink">|</span>
            )}
          </>
        )}
      </p>
      <Link href="/contact" className={`group absolute border border-black border-solid h-[53px] left-1/2 rounded-[32px] top-[536px] w-[220px] flex items-center justify-center gap-[12px] translate-x-[-50%] pl-[8px] cursor-pointer no-underline transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="689:6099" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Thin',sans-serif] font-[1] leading-[normal] text-[24px] text-black m-0 whitespace-nowrap" data-node-id="689:6097" style={{ fontVariationSettings: "'wdth' 100" }}>
          Talk to me
        </p>
        <div className="relative size-[26px] flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px]" data-name="image 13" data-node-id="744:6336">
          <img alt="" className="block max-w-none size-full" src={imgImage13} loading="eager" />
        </div>
      </Link>
    </section>
  );
}
