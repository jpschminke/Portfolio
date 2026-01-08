'use client';

const imgAikonLogo1 = "http://localhost:3845/assets/10108350cac914ae298fca691e9dbdb058077dd3.png";

export default function AikonDetailCoverSection() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('aikon-detail');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="aikon-detail-cover" className="bg-white relative w-full h-full overflow-hidden" data-name="MacBook Pro 14' - 62" data-node-id="293:509">
      <div className="absolute h-[459px] left-[525px] rounded-[20px] top-[221px] w-[461px] overflow-hidden" data-name="Aikon_Logo 1" data-node-id="293:520">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[112.11%] left-[-6.15%] max-w-none top-[-4.9%] w-[111.54%]" src={imgAikonLogo1} loading="eager" crossOrigin="anonymous" />
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
