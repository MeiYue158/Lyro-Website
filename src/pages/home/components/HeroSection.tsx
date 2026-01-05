
import Aurora from './Aurora';

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('products');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-7xl md:text-7xl font-extralight text-white mb-6 tracking-[0.1em] leading-tight text-center animate-fade-in">
          Real-time AI coordination for
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            medical transportation
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide opacity-90">
          Intelligent dispatch, time-based trip pooling, humanized AI voice coordination, and cancellation-aware rescheduling — built to keep routes running even when plans change.
        </p>

        <p className="text-sm text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Built for regulated, high-cancellation, multilingual transportation environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/demo"
            className="group relative bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10">Request a Demo</span>
          </a>
          <a 
            href="/contact"
            className="group relative bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}