export function ProjectsSection() {
  const beforeSteps = [
    { title: 'Manual Dispatch', desc: 'Dispatcher manually assigns orders to drivers' },
    { title: 'Static Routes', desc: 'Routes planned days in advance, no flexibility' },
    { title: 'Driver Calls', desc: 'Drivers manually call passengers to confirm' },
    { title: 'Cascade Failures', desc: 'One cancellation breaks the entire route' },
    { title: 'Manual Recovery', desc: 'Dispatcher scrambles to reassign trips' },
    { title: 'Wasted Time', desc: 'Empty miles, idle time, and frustrated drivers' }
  ];

  const afterSteps = [
    { title: 'AI Dispatch', desc: 'Orders automatically assigned with optimal pooling' },
    { title: 'Dynamic Routes', desc: 'Time-based planning with built-in flexibility' },
    { title: 'AI Voice Coordination', desc: 'Automated confirmation calls to passengers' },
    { title: 'Auto-Recalculation', desc: 'System adapts routes when changes occur' },
    { title: 'Smart Reassignment', desc: 'AI fills gaps with compatible nearby orders' },
    { title: 'Optimized Efficiency', desc: 'Less waiting, more earnings, better service' }
  ];

  const complexityFactors = [
    'High cancellation rates',
    'Strict regulatory requirements',
    'Language diversity',
    'Unpredictable human behavior'
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* How It Works - Comparison */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-[0.05em]">
            How It Works
          </h2>
          <p className="text-gray-400 text-xl mb-16 font-light">
            From manual chaos to intelligent coordination
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before - Traditional System */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <i className="ri-close-circle-line text-5xl text-red-400"></i>
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-red-300 mb-4 tracking-wide">
                    Traditional System
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 font-light">
                    Manual processes that break under pressure
                  </p>

                  {/* Image for Traditional System */}
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-8">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Stressed%20dispatcher%20working%20at%20cluttered%20desk%20with%20multiple%20phones%20and%20paper%20schedules%2C%20chaotic%20traditional%20dispatch%20office%20with%20manual%20route%20planning%20boards%20and%20sticky%20notes%20everywhere%2C%20frustrated%20office%20worker%20overwhelmed%20with%20paperwork%2C%20dim%20lighting%20showing%20stressful%20work%20environment%2C%20realistic%20photography&width=800&height=500&seq=lyro-traditional-chaos-001&orientation=landscape"
                      alt="Traditional Manual Dispatch System"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-6">
                    {beforeSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                            <span className="text-red-300 font-light">{index + 1}</span>
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="text-white font-medium mb-1">{step.title}</h4>
                            <p className="text-gray-400 text-sm font-light">{step.desc}</p>
                          </div>
                        </div>
                        {index < beforeSteps.length - 1 && (
                          <div className="ml-5 mt-3 mb-3 h-8 w-px bg-gradient-to-b from-red-500/30 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* After - Lyro System */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-5xl text-purple-400"></i>
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-purple-300 mb-4 tracking-wide">
                    With Lyro AI
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 font-light">
                    Intelligent coordination that adapts in real time
                  </p>

                  {/* Image for Lyro System */}
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-8">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Modern%20AI-powered%20dispatch%20center%20with%20clean%20organized%20workspace%2C%20large%20digital%20displays%20showing%20automated%20route%20optimization%20and%20real-time%20fleet%20tracking%2C%20professional%20operator%20monitoring%20intelligent%20transportation%20system%20with%20purple%20accent%20lighting%2C%20calm%20efficient%20work%20environment%20with%20advanced%20technology%2C%20realistic%20photography&width=800&height=500&seq=lyro-ai-efficiency-002&orientation=landscape"
                      alt="Lyro AI Intelligent Coordination System"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-6">
                    {afterSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                            <span className="text-purple-300 font-light">{index + 1}</span>
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="text-white font-medium mb-1">{step.title}</h4>
                            <p className="text-gray-400 text-sm font-light">{step.desc}</p>
                          </div>
                        </div>
                        {index < afterSteps.length - 1 && (
                          <div className="ml-5 mt-3 mb-3 h-8 w-px bg-gradient-to-b from-purple-400/30 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Arrow */}
          <div className="hidden lg:flex items-center justify-center mt-12">
            <div className="flex items-center gap-4">
              <div className="text-red-400 text-lg font-light">Manual & Reactive</div>
              <div className="w-16 h-16 flex items-center justify-center">
                <i className="ri-arrow-right-line text-4xl text-purple-400"></i>
              </div>
              <div className="text-purple-400 text-lg font-light">Intelligent & Proactive</div>
            </div>
          </div>
        </div>

        {/* Built for Real-World Complexity */}
        <div className="text-center max-w-4xl mx-auto mt-24">
          <h3 className="text-3xl md:text-4xl font-extralight text-white mb-6 tracking-[0.05em]">
            Built for Real-World Complexity
          </h3>
          <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
            Lyro is designed for environments with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {complexityFactors.map((factor, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-gray-300 font-light"
              >
                {factor}
              </div>
            ))}
          </div>

          <p className="text-xl text-purple-300 font-light italic">
            The system assumes things will change — and is built to respond when they do.
          </p>
        </div>
      </div>
    </section>
  );
}
