'use client';

import { useEffect, useRef, useState } from 'react';

const imgDsc00690 = "http://localhost:3845/assets/5159aae446ce01bbbd93166ce68eafe644b57291.png";
const imgEducationAboutMe2 = "http://localhost:3845/assets/e737e99b97010099cf915ef20d7dd53f729c1aa1.png";

export default function AboutDetail1Section() {
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
    <section ref={sectionRef} id="about-detail-1" className="bg-white relative w-full h-full overflow-visible" data-name="MacBook Pro 14' - 87" data-node-id="687:6053" style={{ width: '1512px', height: '982px' }}>
      <div className={`absolute h-[516px] left-[249px] rounded-[10px] top-[143px] w-[412px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="DSC00690" data-node-id="698:6121" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-23.07%] max-w-none top-0 w-[166.71%]" src={imgDsc00690} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
      <div className={`absolute h-[490px] left-[806px] rounded-bl-[10px] rounded-br-[10px] top-[169px] w-[412px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Education About me 2" data-node-id="708:6207" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[10px] rounded-br-[10px]">
          <img alt="" className="absolute h-full left-[-9.47%] max-w-none top-0 w-[118.93%]" src={imgEducationAboutMe2} loading="eager" crossOrigin="anonymous" />
        </div>
      </div>
      <div className={`absolute bg-[#eaebf0] h-[26px] left-[806px] rounded-tl-[10px] rounded-tr-[10px] top-[143px] w-[412px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="708:6209" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <p className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[250px] text-[24px] text-black text-justify text-nowrap top-[702px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="733:6219" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Jasper Schminke:
      </p>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[20px] left-[249px] text-[14px] text-black text-justify top-[756px] w-[504px] z-10 transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="685:6028" style={{ fontVariationSettings: "'wdth' 100", color: '#000000', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        I was born in Bavaria and grew up in the United States, becoming bilingual along the way. These experiences shaped my perspective on people, cultures, and communication from an early age. Curiosity is a core part of my personality and shows in my love for traveling, discovering new places, and exploring different cuisines.
      </p>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[20px] left-[808px] text-[14px] text-black text-justify top-[756px] w-[478px] z-10 transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="733:6220" style={{ fontVariationSettings: "'wdth' 100", color: '#000000', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        I now live in Schwäbisch Gmünd, where I am currently studying Interaction Design (B.A.) at the Hochschule für Gestaltung in my fourth semester. Physical activity, especially strength training and running, helps me stay focused and clear-minded. I have always been driven to invent, explore ideas, and turn concepts into reality.
      </p>
    </section>
  );
}
