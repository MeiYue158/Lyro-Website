import { useState, useEffect, useRef } from 'react';

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const capabilities = [
    {
      title: 'AI Dispatch & Time-Based Trip Pooling',
      description: 'Lyro plans routes across time windows, not just the next ride.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20route%20optimization%20system%20displaying%20multiple%20medical%20transport%20routes%20on%20digital%20map%20interface%20with%20time%20windows%20and%20trip%20pooling%20visualization%2C%20modern%20dispatch%20center%20with%20purple%20accent%20lighting%2C%20clean%20professional%20technology%20environment%20showing%20automated%20scheduling%20algorithms%20at%20work%2C%20realistic%20photography&width=1000&height=600&seq=lyro-ai-dispatch-pooling-001&orientation=landscape',
      features: [
        'Automatically pools compatible trips',
        'Accounts for built-in buffer times between medical visits',
        'Optimizes routes by distance, timing, vehicle type, and availability',
        'Plans sequences, not isolated jobs',
        'When conditions change, the system recalculates — drivers don\'t'
      ]
    },
    {
      title: 'Humanized AI Voice Coordination',
      description: 'Human uncertainty becomes a system signal.',
      image: 'https://readdy.ai/api/search-image?query=AI%20voice%20assistant%20interface%20with%20sound%20wave%20visualization%20and%20multilingual%20communication%20icons%2C%20modern%20smartphone%20or%20tablet%20displaying%20friendly%20voice%20call%20interface%20with%20purple%20gradient%20design%2C%20natural%20human-like%20interaction%20technology%2C%20clean%20professional%20setup%20showing%20automated%20passenger%20confirmation%20system%2C%20realistic%20photography&width=1000&height=600&seq=lyro-voice-coordination-002&orientation=landscape',
      features: [
        'Calls passengers before pickup to confirm availability',
        'Sends arrival notifications automatically',
        'Handles simple voice-based confirmations or cancellations',
        'Reduces manual driver calling and large call center dependency',
        'Voice experience designed to sound natural, familiar, and human',
        'AI handles routine reminders. Humans step in only when needed'
      ]
    },
    {
      title: 'Cancellation-Aware Rescheduling',
      description: 'Cancellations don\'t have to break the day.',
      image: 'https://readdy.ai/api/search-image?query=Real-time%20route%20rescheduling%20system%20showing%20dynamic%20route%20adaptation%20on%20digital%20display%2C%20medical%20transportation%20fleet%20management%20interface%20with%20automatic%20reassignment%20visualization%2C%20purple%20and%20blue%20interface%20showing%20time%20gaps%20being%20filled%20with%20new%20orders%2C%20modern%20dispatch%20technology%20center%2C%20realistic%20photography&width=1000&height=600&seq=lyro-cancellation-rescheduling-003&orientation=landscape',
      features: [
        'Detects cancellations and no-shows immediately',
        'Identifies newly available time gaps',
        'Re-evaluates nearby compatible orders in real time',
        'Reassigns drivers to reduce empty miles and idle time',
        'Instead of collapsing an entire route, the system adapts — automatically'
      ]
    },
    {
      title: 'Multilingual & Real-World Ready',
      description: 'Lyro is built for real operating conditions, not ideal ones.',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20group%20of%20medical%20transportation%20drivers%20and%20passengers%20from%20different%20ethnic%20backgrounds%20communicating%20through%20multilingual%20AI%20system%2C%20modern%20medical%20transport%20vehicles%20with%20digital%20translation%20interface%2C%20inclusive%20healthcare%20transportation%20environment%20showing%20language%20diversity%20support%2C%20realistic%20professional%20photography&width=1000&height=600&seq=lyro-multilingual-ready-004&orientation=landscape',
      features: [
        'Multilingual passenger and driver support',
        'Multi-accent voice understanding',
        'Language barriers handled at the system level',
        'Designed for drivers with diverse backgrounds',
        'If it works here, it works anywhere'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          const absoluteBottom = absoluteTop + rect.height;
          
          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCapability = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="products" className="relative py-20">
      {/* Sticky Header with Progress */}
      <div className="sticky top-20 z-20 py-8 mb-12 bg-gradient-to-b from-black/90 via-black/80 to-transparent backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extralight text-white text-center tracking-[0.05em] mb-8">
            Core Capabilities
          </h2>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-3">
            {capabilities.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCapability(index)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  index === activeIndex 
                    ? 'w-16 bg-purple-400' 
                    : 'w-8 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to capability ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Capability Sections - Natural Scroll */}
      <div className="space-y-32">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center"
          >
            <div className="container mx-auto px-6 py-20">
              <div className="max-w-6xl mx-auto">
                {/* Number Badge */}
                <div 
                  className="flex items-center justify-center mb-8 transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.3,
                    transform: activeIndex === index ? 'scale(1)' : 'scale(0.9)'
                  }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-purple-400/50 flex items-center justify-center">
                    <span className="text-3xl font-light text-purple-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-5xl md:text-6xl font-light text-white text-center mb-8 tracking-wide leading-tight transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.5,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {capability.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-2xl md:text-3xl text-gray-300 text-center mb-12 font-light leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.5,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {capability.description}
                </p>

                {/* Image */}
                <div 
                  className="w-full h-80 rounded-2xl overflow-hidden mb-12 transition-all duration-700 delay-200"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.3,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <img 
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {capability.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10"
                      style={{
                        opacity: activeIndex === index ? 1 : 0.3,
                        transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: activeIndex === index ? `${idx * 100 + 300}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-lg font-light leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
