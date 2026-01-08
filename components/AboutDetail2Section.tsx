'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutDetail2Section() {
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

  const fadeInClass = `transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`;
  const fadeInStyle = { transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' };

  return (
    <section ref={sectionRef} id="about-detail-2" className="bg-white relative size-full" data-name="MacBook Pro 14' - 88" data-node-id="687:6060" style={{ width: '1512px', height: '982px' }}>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] left-[1176px] text-[48px] text-black text-nowrap top-[254px] whitespace-pre ${fadeInClass}`} data-node-id="698:6113" style={{ fontVariationSettings: "'wdth' 100", transform: 'translateY(-50%)', ...fadeInStyle }}>
        Skills
      </p>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] left-[1172px] text-[48px] text-black text-nowrap top-[411px] whitespace-pre ${fadeInClass}`} data-node-id="689:6085" style={{ fontVariationSettings: "'wdth' 100", transform: 'translateY(-50%)', ...fadeInStyle }}>Tools </p>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] left-[1172px] text-[48px] text-black text-nowrap top-[582px] whitespace-pre ${fadeInClass}`} data-node-id="698:6115" style={{ fontVariationSettings: "'wdth' 100", transform: 'translateY(-50%)', ...fadeInStyle }}>
        AI Tools
      </p>
      <p className={`absolute font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] left-[1172px] text-[48px] text-black text-nowrap top-[747px] whitespace-pre ${fadeInClass}`} data-node-id="698:6117" style={{ fontVariationSettings: "'wdth' 100", transform: 'translateY(-50%)', ...fadeInStyle }}>
        CV
      </p>
      
      {/* Skills Section */}
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[212px] w-[118px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6181" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6180" style={{ fontVariationSettings: "'wdth' 100" }}>
          UX Research
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[253px] rounded-[32px] top-[212px] w-[159px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6189" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6188" style={{ fontVariationSettings: "'wdth' 100" }}>
          Usability Testing
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[425px] rounded-[32px] top-[212px] w-[143px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6187" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6186" style={{ fontVariationSettings: "'wdth' 100" }}>
          User Interview
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[263px] w-[151px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6183" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6182" style={{ fontVariationSettings: "'wdth' 100" }}>
          User Research
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[284px] rounded-[32px] top-[263px] w-[181px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6185" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6184" style={{ fontVariationSettings: "'wdth' 100" }}>
          Interaction Mapping
        </p>
      </div>
      
      {/* Tools Section */}
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[369px] w-[86px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6161" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6160" style={{ fontVariationSettings: "'wdth' 100" }}>
          Figma
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[224px] rounded-[32px] top-[369px] w-[159px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6164" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6163" style={{ fontVariationSettings: "'wdth' 100" }}>
          Adobe Cloud
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[420px] w-[86px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6167" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6166" style={{ fontVariationSettings: "'wdth' 100" }}>
          Notion
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[224px] rounded-[32px] top-[420px] w-[100px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6170" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6169" style={{ fontVariationSettings: "'wdth' 100" }}>
          Blender
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[340px] rounded-[32px] top-[420px] w-[92px] flex items-center justify-center ${fadeInClass}`} data-node-id="704:6173" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="704:6172" style={{ fontVariationSettings: "'wdth' 100" }}>
          Coding
        </p>
      </div>
      
      {/* AI Tools Section */}
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[540px] w-[86px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6194" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6193" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cursor
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[221px] rounded-[32px] top-[540px] w-[102px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6202" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6201" style={{ fontVariationSettings: "'wdth' 100" }}>
          Chat GPT
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[336px] rounded-[32px] top-[538px] w-[92px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6200" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6199" style={{ fontVariationSettings: "'wdth' 100" }}>
          Lovable
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[122px] rounded-[32px] top-[591px] w-[86px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6196" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6195" style={{ fontVariationSettings: "'wdth' 100" }}>
          Co-Pilot
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[221px] rounded-[32px] top-[591px] w-[115px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6198" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6197" style={{ fontVariationSettings: "'wdth' 100" }}>
          Perplexity
        </p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[346px] rounded-[32px] top-[591px] w-[96px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6205" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6204" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gemini
        </p>
      </div>
      
      {/* CV Section */}
      <div className={`absolute border border-black border-solid h-[33px] left-[121px] rounded-[32px] top-[704px] w-[336px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6217" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6215" style={{ fontVariationSettings: "'wdth' 100" }}>03 2024 HfG/ Schwäbisch Gmünd</p>
      </div>
      <div className={`absolute border border-black border-solid h-[33px] left-[121px] rounded-[32px] top-[758px] w-[336px] flex items-center justify-center ${fadeInClass}`} data-node-id="708:6211" style={fadeInStyle}>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[normal] text-[16px] text-black text-center m-0 whitespace-nowrap" data-node-id="708:6210" style={{ fontVariationSettings: "'wdth' 100" }}>
          2023 High School Diploma
        </p>
      </div>
    </section>
  );
}
