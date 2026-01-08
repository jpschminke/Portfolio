import ContactDetailSection from '@/components/ContactDetailSection';
import ContactDetail2Section from '@/components/ContactDetail2Section';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full flex flex-col items-center">
        <div className="w-[1512px] h-[982px] relative snap-start snap-always">
          <ContactDetailSection />
        </div>
        <div className="w-[1512px] h-[1300px] relative snap-start snap-always">
          <ContactDetail2Section />
        </div>
      </div>
    </main>
  );
}

