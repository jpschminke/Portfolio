import Frame1Section from '@/components/Frame1Section';
import Frame2Section from '@/components/Frame2Section';
import Frame3Section from '@/components/Frame3Section';
import Frame4Section from '@/components/Frame4Section';
import Frame7Section from '@/components/Frame7Section';
import Frame5Section from '@/components/Frame5Section';
import Frame6Section from '@/components/Frame6Section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full flex flex-col items-center">
        <div id="home-section-1" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame1Section />
        </div>
        <div id="home-section-2" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame2Section />
        </div>
        <div id="work-section-1" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame3Section />
        </div>
        <div id="work-section-2" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame4Section />
        </div>
        <div id="work-section-3" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame7Section />
        </div>
        <div id="about-section-1" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame5Section />
        </div>
        <div id="contact-section-1" className="w-[1512px] h-[982px] relative snap-start snap-always">
          <Frame6Section />
        </div>
      </div>
    </main>
  );
}

