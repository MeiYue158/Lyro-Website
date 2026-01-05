import { ContactHeroSection } from './components/ContactHeroSection';
import { ContactInfoSection } from './components/ContactInfoSection';
import { FooterSection } from '../home/components/FooterSection';
import { CursorGlow } from '../home/components/CursorGlow';
import Aurora from '../home/components/Aurora';

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Aurora Background */}
      <div className="fixed inset-0 z-0">
        <Aurora 
          colorStops={['#ed66ff', '#b19eef', '#5227ff']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>
      
      {/* Global Effects */}
      <CursorGlow />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10">
          <ContactHeroSection />
          <ContactInfoSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}