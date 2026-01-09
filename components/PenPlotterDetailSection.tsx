'use client';

const imgScreenshot20260107At151918Removebg1 = "/images/portfolio - images/Screenshot_2026-01-07_at_15.19.18-removebg 1.png";

export default function PenPlotterDetailSection() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('penplotter-detail-2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="penplotter-detail" className="bg-white relative w-full h-full overflow-hidden" data-name="MacBook Pro 14' - 90" data-node-id="735:6234">
      <div className="absolute h-[601px] left-[412px] top-[152px] w-[687px] overflow-hidden" data-name="Screenshot_2026-01-07_at_15.19.18-removebg 1" data-node-id="779:6400">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.08%] left-[-26.72%] max-w-none top-[-0.04%] w-[160.06%]" src={imgScreenshot20260107At151918Removebg1} loading="eager" />
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

