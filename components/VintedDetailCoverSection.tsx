'use client';

const imgMockup32 = "/images/portfolio - images/Mockup_3 2.png";

export default function VintedDetailCoverSection() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('vinted-detail');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="vinted-detail-cover" className="bg-white relative w-full h-full overflow-hidden" data-name="MacBook Pro 14' - 76" data-node-id="595:5227">
      <div className="absolute h-[696px] left-[234px] top-[89px] w-[1043px] overflow-hidden" data-name="Mockup_3 2" data-node-id="595:5229">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMockup32} loading="eager" />
        </div>
      </div>
      <button
        onClick={handleScrollDown}
        className="group absolute left-1/2 bottom-[150px] translate-x-[-50%] bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        aria-label="Scroll to next section"
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
