export function DemoAudienceSection() {
  const audiences = [
    {
      title: 'Medical transportation operators',
      icon: 'ri-hospital-line'
    },
    {
      title: 'NEMT / NFMT providers',
      icon: 'ri-ambulance-line'
    },
    {
      title: 'Healthcare partners coordinating patient movement',
      icon: 'ri-heart-pulse-line'
    },
    {
      title: 'Teams looking to reduce no-shows, idle time, and operational overhead',
      icon: 'ri-team-line'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-light text-white mb-12 text-center">
            Who this demo is for
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30 flex-shrink-0">
                    <i className={`ri ${audience.icon} text-2xl text-purple-300`}></i>
                  </div>
                  <p className="text-base text-gray-200 font-light leading-relaxed">
                    {audience.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}