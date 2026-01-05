
export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 leading-tight tracking-[0.05em]">
            Coordinate transportation — before problems happen
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed font-light mb-12">
            Lyro brings intelligence to dispatch, communication, and recovery, so medical transportation runs with fewer surprises and more certainty.
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
      </div>
    </section>
  );
}