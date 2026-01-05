export function ValueSection() {
  const roles = [
    {
      title: 'For Drivers',
      image: 'https://readdy.ai/api/search-image?query=East%20Asian%20Chinese%20male%20medical%20transportation%20driver%20in%20his%2030s%20sitting%20in%20modern%20medical%20transport%20vehicle%20driver%20seat%2C%20wearing%20professional%20uniform%20with%20company%20badge%2C%20warm%20friendly%20smile%2C%20black%20hair%2C%20Asian%20facial%20features%2C%20clean%20professional%20medical%20van%20interior%20with%20medical%20equipment%20visible%20in%20background%2C%20natural%20daylight%20through%20windshield%2C%20realistic%20professional%20photography%2C%20sharp%20focus%20on%20driver%20face%20and%20upper%20body&width=800&height=600&seq=lyro-chinese-driver-realistic-v2&orientation=landscape',
      benefits: [
        'Less waiting and empty miles',
        'No manual calling or guessing',
        'Clear, predictable workflows',
        'More consistent daily earnings'
      ]
    },
    {
      title: 'For Operators',
      image: 'https://readdy.ai/api/search-image?query=Transportation%20operations%20manager%20working%20at%20modern%20dispatch%20center%20with%20multiple%20monitors%20showing%20route%20optimization%20and%20fleet%20management%20systems%2C%20professional%20office%20environment%2C%20clean%20desk%20setup%20with%20technology%2C%20realistic%20photography%20style%20with%20bright%20professional%20lighting&width=800&height=600&seq=lyro-operator-value-002&orientation=landscape',
      benefits: [
        'Fewer no-shows',
        'Higher fleet utilization',
        'Less manual rescheduling',
        'Lower operational overhead'
      ]
    },
    {
      title: 'For Partners & Healthcare Providers',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20provider%20and%20medical%20staff%20coordinating%20patient%20transportation%20at%20modern%20hospital%20facility%2C%20professional%20medical%20environment%20with%20clean%20corridors%2C%20healthcare%20professionals%20in%20medical%20attire%20discussing%20patient%20care%2C%20realistic%20photography%20style%20with%20bright%20clinical%20lighting&width=800&height=600&seq=lyro-healthcare-value-003&orientation=landscape',
      benefits: [
        'More reliable patient transportation',
        'Faster discharge and return coordination',
        'Better on-time performance for recurring visits',
        'Compliance-first, configurable workflows'
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-[0.05em]">
            Value by Role
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img 
                  src={role.image} 
                  alt={role.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-6 tracking-wide text-center">
                  {role.title}
                </h3>
                <ul className="space-y-4">
                  {role.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 font-light">
                      <span className="text-purple-400 mr-3 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}