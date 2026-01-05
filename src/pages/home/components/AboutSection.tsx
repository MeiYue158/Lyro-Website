export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/32d7f7418ce3413ad3e64223c8d300af.png"
              alt="Lyro AI Coordination System"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-extralight text-white mb-8 leading-tight tracking-[0.05em]">
              What <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Lyro</span> Does
            </h3>
            <p className="text-gray-300 text-2xl leading-relaxed font-light mb-6">
              Lyro coordinates transportation before problems happen
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-12">
              Lyro is not a traditional dispatch tool. It is an AI-powered coordination layer that connects orders, drivers, and human behavior in real time. Instead of managing single trips, Lyro plans and adapts entire sequences of work.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('products')}
                className="group relative bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 whitespace-nowrap cursor-pointer"
              >
                <span className="relative z-10">Explore Core Capabilities</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
