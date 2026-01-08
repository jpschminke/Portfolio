import PenPlotterDetailSection from '@/components/PenPlotterDetailSection';
import PenPlotterDetail2Section from '@/components/PenPlotterDetail2Section';
import PenPlotterDetail3Section from '@/components/PenPlotterDetail3Section';
import PenPlotterDetail4Section from '@/components/PenPlotterDetail4Section';
import PenPlotterDetail5Section from '@/components/PenPlotterDetail5Section';
import PenPlotterDetail6Section from '@/components/PenPlotterDetail6Section';
import PenPlotterDetail7Section from '@/components/PenPlotterDetail7Section';
import PenPlotterDetail8Section from '@/components/PenPlotterDetail8Section';
import PenPlotterDetail9Section from '@/components/PenPlotterDetail9Section';
import PenPlotterDetail10Section from '@/components/PenPlotterDetail10Section';

export default function PenPlotterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full flex flex-col items-center">
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetailSection />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail2Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail3Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail4Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail5Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail6Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail7Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail8Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail9Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <PenPlotterDetail10Section />
        </div>
      </div>
    </main>
  );
}

