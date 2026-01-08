import AboutDetail1Section from '@/components/AboutDetail1Section';
import AboutDetail2Section from '@/components/AboutDetail2Section';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full flex flex-col items-center">
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <AboutDetail1Section />
        </div>
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <AboutDetail2Section />
        </div>
      </div>
    </main>
  );
}

