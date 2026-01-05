import { DemoHeroSection } from './components/DemoHeroSection';
import { DemoWalkthroughSection } from './components/DemoWalkthroughSection';
import { DemoFormSection } from './components/DemoFormSection';
import { CursorGlow } from '../home/components/CursorGlow';
import Aurora from '../home/components/Aurora';
import { FooterSection } from '../home/components/FooterSection';

export default function DemoPage() {
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
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <DemoHeroSection />
        
        {/* Black overlay for sections below hero */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="relative z-10">
            <DemoWalkthroughSection />
            <DemoFormSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
}