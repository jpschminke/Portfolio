'use client';

import { useEffect, useRef, useState } from 'react';

const imgImage3 = "/images/portfolio - images/image 2.png";
const imgVector = "/images/portfolio - images/Isabella UX Interview.png";

export default function AikonDetail7Section() {
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
    <section ref={sectionRef} id="aikon-detail-7" className="bg-white relative size-full" data-name="MacBook Pro 14' - 43" data-node-id="241:159">
      <div className={`absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] left-[305px] text-[0px] text-black text-nowrap top-[128px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="618:5288" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="mb-0">
          <span className="text-[40px]">Research and Insights</span>
          <span className="text-[48px]"> </span>
        </p>
        <p className="text-[48px]">&nbsp;</p>
      </div>
      <p className={`absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[45px] left-[306px] text-[#767676] text-[20px] text-nowrap top-[188px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="618:5289" style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        Problem Sketch
      </p>
      <div className={`absolute flex h-[540px] items-center justify-center left-[305px] top-[264px] w-[864px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ "--transform-inner-width": "540", "--transform-inner-height": "864", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-white border border-[#767676] border-solid h-[864px] overflow-clip relative w-[540px]" data-name="Isabella UX Interview" data-node-id="293:564">
            <div className="absolute flex h-[108.076px] items-center justify-center left-[95px] top-[706.92px] w-[23.298px]" style={{ "--transform-inner-width": "108", "--transform-inner-height": "23" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <div className="font-['Inter:Thin',sans-serif] font-thin h-[23.298px] leading-[normal] not-italic relative text-[0px] text-[13px] text-black w-[108.076px]" data-node-id="293:565">
                  <p className="mb-0">Occupation</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal">UX/UI Designer</p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[334px] items-center justify-center left-[185px] top-[481px] w-[208px]" style={{ "--transform-inner-width": "334", "--transform-inner-height": "213" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <div className="font-['Inter:Thin','Noto_Sans:Light',sans-serif] font-thin leading-[normal] not-italic relative text-[0px] text-[11px] text-black w-[334px]" data-node-id="293:566">
                  <p className="mb-0">Pain points when working with icons</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Difficult search for suitable icons in libraries`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Icons often lack current icons (modern devices, etc.)`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Inconsistencies within icon sets.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	• Icons are often not optimized for small sizes.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">⸻</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Needs and requirements</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">
                    {" "}
                    <span>{`•	Intuitive and easily navigable icon libraries.`}</span>
                  </p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Modern icons for new use cases.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`•	Easier integration of icons into existing design systems.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[296px] items-center justify-center left-[185px] top-[62px] w-[312px]" style={{ "--transform-inner-width": "296", "--transform-inner-height": "301" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <div className="font-['Inter:Thin','Noto_Sans:Light',sans-serif] font-thin leading-[normal] not-italic relative text-[0px] text-[11px] text-black w-[296px]" data-node-id="293:567">
                  <p className="mb-0">Attitude toward AI in the design process</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Openness to AI, but creative final control remains with the designer.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	AI is perceived as supportive assistance, not as a replacement.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">⸻</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Current trends in UX/UI design</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Modularization and stronger structuring of design systems.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Growing demand for flexible, adaptable assets.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Increasing acceptance of AI tools for routine tasks in design.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">⸻</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Wish list for an ideal icon set generator</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Intelligent filtering by style, theme, and size.`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light mb-0">{`	•	Directly adjustable icons (stroke weight, details, dimensions).`}</p>
                  <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light">{`	•	Seamless integration into existing design software (e.g., Figma, Sketch).`}</p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[155.319px] items-center justify-center left-[32px] top-[659.68px] w-[21px]" style={{ "--transform-inner-width": "155", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative text-[#1e1e1e] text-[14px] tracking-[-0.154px] w-[155.319px]" data-node-id="293:568">
                  Average/Persona
                </p>
              </div>
            </div>
            <div className="absolute flex inset-[calc(7.29%-1px)_calc(76.85%-1px)_calc(82.06%-1px)_calc(6.11%-1px)] items-center justify-center">
              <div className="flex-none rotate-[270deg] size-[92px]">
                <div className="relative size-full" data-name="Vector" data-node-id="293:569">
                  <img alt="" className="block max-w-none size-full" src={imgVector} loading="eager" />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[141px] items-center justify-center left-[18px] top-[38px] w-[135px]" style={{ "--transform-inner-width": "141", "--transform-inner-height": "135" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <div className="h-[135px] relative w-[141px]" data-name="image 3" data-node-id="618:5286">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
