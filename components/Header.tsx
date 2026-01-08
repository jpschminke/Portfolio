'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isPurpleSection, setIsPurpleSection] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(false);
  const [isWorkSection, setIsWorkSection] = useState(false);
  const [isAboutSection, setIsAboutSection] = useState(false);
  const [isContactSection, setIsContactSection] = useState(false);
  const [isFirstVintedSection, setIsFirstVintedSection] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home
      router.push('/');
      // Scroll to top after navigation (small delay to ensure page is loaded)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, scroll to first section
      const firstSection = document.getElementById('home-section-1');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home
      router.push('/');
      // Scroll to first section after navigation
      setTimeout(() => {
        const firstSection = document.getElementById('home-section-1');
        if (firstSection) {
          firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Check if first Vinted section is visible (to hide header)
  useEffect(() => {
    if (pathname !== '/vinted') {
      setIsFirstVintedSection(false);
      return;
    }

    const checkFirstSection = () => {
      const firstSection = document.getElementById('vinted-detail');
      if (!firstSection) {
        setTimeout(checkFirstSection, 50);
        return;
      }

      const rect = firstSection.getBoundingClientRect();
      const headerHeight = 100;
      // Check if first section is visible and at the top
      const isVisible = rect.top <= headerHeight && rect.bottom > headerHeight;
      setIsFirstVintedSection(isVisible);
    };

    const scrollHandler = () => {
      const firstSection = document.getElementById('vinted-detail');
      if (!firstSection) return;
      
      const rect = firstSection.getBoundingClientRect();
      const headerHeight = 100;
      const isVisible = rect.top <= headerHeight && rect.bottom > headerHeight;
      setIsFirstVintedSection(isVisible);
    };

    setTimeout(checkFirstSection, 0);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('scrollend', scrollHandler);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollHandler();
          } else {
            setIsFirstVintedSection(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const observeSection = () => {
      const firstSection = document.getElementById('vinted-detail');
      if (firstSection) {
        observer.observe(firstSection);
      } else {
        setTimeout(observeSection, 50);
      }
    };
    observeSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scrollend', scrollHandler);
    };
  }, [pathname]);

  // Check for purple section (Vinted detail 9)
  useEffect(() => {
    // Only check for purple section on /vinted page
    if (pathname !== '/vinted') {
      setIsPurpleSection(false);
      return;
    }

    // Wait for DOM to be ready
    const checkPurpleSection = () => {
      const purpleSection = document.getElementById('vinted-detail-9-section');
      if (!purpleSection) {
        // Section not found yet, try again after a short delay
        setTimeout(checkPurpleSection, 50);
        return;
      }

      const rect = purpleSection.getBoundingClientRect();
      const headerHeight = 100;
      
      // Section is active if it's visible and its top is at or below the header
      // More lenient: check if section top is within reasonable range of header
      const isActive = rect.top <= headerHeight + 100 && rect.bottom > headerHeight;
      
      setIsPurpleSection(isActive);
    };

    // Check immediately and on scroll
    const scrollHandler = () => {
      const purpleSection = document.getElementById('vinted-detail-9-section');
      if (!purpleSection) return;
      
      const rect = purpleSection.getBoundingClientRect();
      const headerHeight = 100;
      const isActive = rect.top <= headerHeight + 100 && rect.bottom > headerHeight;
      setIsPurpleSection(isActive);
    };

    // Initial check with small delay to ensure DOM is ready
    setTimeout(checkPurpleSection, 0);

    // Check on scroll
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('scrollend', scrollHandler);

    // Also use IntersectionObserver as backup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollHandler();
          } else {
            setIsPurpleSection(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe purple section when it becomes available
    const observeSection = () => {
      const purpleSection = document.getElementById('vinted-detail-9-section');
      if (purpleSection) {
        observer.observe(purpleSection);
      } else {
        setTimeout(observeSection, 50);
      }
    };
    observeSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scrollend', scrollHandler);
    };
  }, [pathname]);

  // Check for active section in navigation menu
  useEffect(() => {
    if (pathname !== '/') {
      // On project pages (vinted, aikon, etc.), Work section should be active
      // On about page, About section should be active
      setIsHomeSection(false);
      setIsWorkSection(pathname === '/vinted' || pathname === '/aikon' || pathname === '/penplotter');
      setIsAboutSection(pathname === '/about');
      setIsContactSection(pathname === '/contact');
      return;
    }

    const checkActiveSection = () => {
      const headerHeight = 100;
      const scrollY = window.scrollY || window.pageYOffset;
      // Use an earlier trigger point (30% from top) that works for both directions
      // This will trigger BEFORE scroll-snap completes for both scrolling up and down
      const triggerPoint = scrollY + headerHeight + (window.innerHeight - headerHeight) * 0.3;
      
      // Get all sections
      const homeSection1 = document.getElementById('home-section-1');
      const homeSection2 = document.getElementById('home-section-2');
      const workSection1 = document.getElementById('work-section-1');
      const workSection2 = document.getElementById('work-section-2');
      const aboutSection1 = document.getElementById('about-section-1');
      const contactSection1 = document.getElementById('contact-section-1');

      // Get section absolute positions using getBoundingClientRect
      const getSectionTop = (el: HTMLElement | null) => {
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return rect.top + scrollY;
      };

      // Determine which section contains the trigger point (check from bottom to top)
      let activeSection: 'home' | 'work' | 'about' | 'contact' = 'home';
      
      if (contactSection1 && triggerPoint >= getSectionTop(contactSection1)) {
        activeSection = 'contact';
      } else if (aboutSection1 && triggerPoint >= getSectionTop(aboutSection1)) {
        activeSection = 'about';
      } else if (workSection1 && triggerPoint >= getSectionTop(workSection1)) {
        activeSection = 'work';
      } else {
        activeSection = 'home';
      }

      // Update states immediately
      setIsHomeSection(activeSection === 'home');
      setIsWorkSection(activeSection === 'work');
      setIsAboutSection(activeSection === 'about');
      setIsContactSection(activeSection === 'contact');
    };

    // Initial check with small delay to ensure DOM is ready
    setTimeout(checkActiveSection, 0);

    // Check on scroll with requestAnimationFrame for smooth updates
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          checkActiveSection();
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', checkActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', checkActiveSection);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);


  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isPurpleSection ? 'bg-[#5e00b6]' : 'bg-white'} ${isFirstVintedSection ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ height: '100px' }}>
      <div className="relative w-full h-full flex justify-center">
        <div className="relative w-[1512px] h-full">
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className={`absolute font-['SF_Pro:Semibold',sans-serif] font-[520] leading-[normal] text-[20px] cursor-pointer no-underline ${isPurpleSection ? 'text-white' : 'text-black'} hover:opacity-80 transition-opacity`} 
            data-node-id="281:447" 
            style={{ fontVariationSettings: "'wdth' 100", top: '50%', left: '40px', transform: 'translateY(-50%)' }}
          >
            <p className="mb-0">JASPER</p>
            <p className="mb-0">SCHMINKE</p>
          </Link>
          <div className="absolute contents top-[41px]" data-node-id="281:448" style={{ right: '80px' }}>
            <div className={`absolute content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[500] gap-[20px] items-center leading-[normal] text-[16px] ${isPurpleSection ? 'text-white' : 'text-black'} top-[41px] right-0`} data-node-id="281:449">
              <Link 
                href="/"
                onClick={handleHomeClick}
                className="relative shrink-0 w-[72px] cursor-pointer hover:opacity-80"
                data-node-id="281:450"
                style={{ 
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isHomeSection ? 0 : 1,
                    fontWeight: 400
                  }}
                >
                  Home
                </span>
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isHomeSection ? 1 : 0,
                    fontWeight: 600
                  }}
                >
                  Home
                </span>
              </Link>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  const workSection = document.getElementById('work-section-1');
                  if (pathname === '/') {
                    if (workSection) {
                      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  } else {
                    router.push('/');
                    setTimeout(() => {
                      const workSection = document.getElementById('work-section-1');
                      if (workSection) {
                        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }
                }}
                className="relative shrink-0 w-[72px] cursor-pointer hover:opacity-80"
                data-node-id="281:451"
                style={{ 
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isWorkSection ? 0 : 1,
                    fontWeight: 400
                  }}
                >
                  Work
                </span>
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isWorkSection ? 1 : 0,
                    fontWeight: 600
                  }}
                >
                  Work
                </span>
              </Link>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about-section-1');
                  if (pathname === '/') {
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  } else {
                    router.push('/');
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about-section-1');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }
                }}
                className="relative shrink-0 w-[62px] cursor-pointer hover:opacity-80"
                data-node-id="281:452"
                style={{ 
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isAboutSection ? 0 : 1,
                    fontWeight: 400
                  }}
                >
                  About
                </span>
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isAboutSection ? 1 : 0,
                    fontWeight: 600
                  }}
                >
                  About
                </span>
              </Link>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact-section-1');
                  if (pathname === '/') {
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  } else {
                    router.push('/');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact-section-1');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }
                }}
                className="relative shrink-0 w-[95px] cursor-pointer hover:opacity-80"
                data-node-id="281:453"
                style={{ 
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isContactSection ? 0 : 1,
                    fontWeight: 400
                  }}
                >
                  Contact
                </span>
                <span 
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isContactSection ? 1 : 0,
                    fontWeight: 600
                  }}
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

