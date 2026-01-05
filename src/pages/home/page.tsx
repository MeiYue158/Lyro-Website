
import { HeroSection } from './components/HeroSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ProductSection } from './components/ProductSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ValueSection } from './components/ValueSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { CursorGlow } from './components/CursorGlow';
import Aurora from './components/Aurora';

export default function HomePage() {
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
        <HeroSection />
        
        {/* Black overlay for sections below hero */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="relative z-10">
            <ShowcaseSection />
            <AboutSection />
            <ProductSection />
            <ProjectsSection />
            <ValueSection />
            <ContactSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
}
