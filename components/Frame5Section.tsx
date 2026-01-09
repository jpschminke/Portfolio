'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const imgImg50691 = "/images/portfolio - images/IMG_5069 1.png";
const imgImg8059 = "/images/portfolio - images/IMG_1419 2.png";
const imgImg14191 = "/images/portfolio - images/IMG_1419 2.png";
const imgImg94211 = "/images/portfolio - images/IMG_9421 1.png";
const imgImage13 = "/images/portfolio - images/image 11.png";

const carouselImages = [
  { src: imgImg50691, className: "absolute h-[130.33%] left-[-0.01%] max-w-none top-[-8.76%] w-[100.01%]" },
  { src: imgImg8059, className: "absolute h-[129.66%] left-[-0.03%] max-w-none top-[-8.06%] w-[100.07%]" },
  { src: imgImg14191, className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" },
  { src: imgImg94211, className: "absolute h-[147.33%] left-[-0.25%] max-w-none top-[-20.57%] w-[113.53%]" },
];

export default function Frame5Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(2); // Start with IMG_1419 1 (last image)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility every time the section enters/leaves the viewport
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

  // Carousel auto-advance
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="frame-5" className="bg-white relative size-full" data-name="MacBook Pro 14' - 100" data-node-id="782:6420">
      <div className={`absolute h-[600px] left-[464px] top-[138px] w-[584px] transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-name="Carousel Container" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              alt=""
              className={`${image.className} absolute transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              src={image.src}
              loading="eager"
             
            />
          ))}
        </div>
      </div>
      <p 
        className={`absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[464px] text-[34px] text-black text-nowrap top-[800px] whitespace-pre transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        data-node-id="782:6437" 
        style={{ fontVariationSettings: "'wdth' 100", transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        Hi, I'm Jasper
      </p>
      <Link href="/about" className={`group absolute border border-black border-solid h-[36px] left-[884px] rounded-[18px] top-[800px] w-[164px] flex items-center justify-center gap-[12px] pl-[12px] cursor-pointer no-underline transition-opacity duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-node-id="782:6438" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-none text-[16px] text-nowrap text-black whitespace-pre m-0 flex items-center" data-node-id="782:6439" style={{ fontVariationSettings: "'wdth' 100" }}>
          About me
        </p>
        <div className="relative h-[20px] w-[20px] flex-shrink-0 flex items-center transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px]" data-name="image 13" data-node-id="744:6336">
          <img alt="" className="block max-w-none size-full" src={imgImage13} loading="eager" />
        </div>
      </Link>
    </section>
  );
}
