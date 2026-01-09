'use client';

import { useEffect, useState } from 'react';

const imgImg00281Bw1 = "/images/portfolio - images/IMG_0028_1_BW 1.png";

export default function Frame1Section() {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = 'Hey there.';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    const section = document.getElementById('frame-1');
    if (!section) return;

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
    if (!isVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [isVisible, fullText]);

  return (
    <section id="frame-1" className="bg-white relative w-full h-full" data-name="MacBook Pro 14' - 57" data-node-id="281:445">
      <div className="absolute font-['SF_Pro:Medium',sans-serif] font-[500] h-[80px] leading-[normal] left-[1116px] text-[64px] text-black top-[475px] w-[330px]" data-node-id="281:446" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          {displayedText}
          {displayedText === fullText && (
            <span className="cursor-blink">|</span>
          )}
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute h-[702px] left-[80px] top-[164px] w-[575px]" data-name="IMG_0028_1:BW 1" data-node-id="552:5121">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.16%] left-[-64.89%] max-w-none top-[-7.02%] w-[226.93%] object-cover" src={imgImg00281Bw1} loading="eager" />
        </div>
      </div>
    </section>
  );
}

