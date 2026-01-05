export function DemoWalkthroughSection() {
  const walkthroughItems = [
    {
      title: 'How Lyro plans time-based routes and trip sequences',
      icon: 'ri-route-line'
    },
    {
      title: 'How AI voice coordination reduces no-shows and manual calls',
      icon: 'ri-phone-line'
    },
    {
      title: 'How cancellations are absorbed without collapsing driver routes',
      icon: 'ri-refresh-line'
    },
    {
      title: 'How drivers receive clear, updated instructions in real time',
      icon: 'ri-notification-3-line'
    },
    {
      title: 'How the system adapts — without human dispatch intervention',
      icon: 'ri-cpu-line'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-light text-white mb-12 text-center">
            A demo will walk you through:
          </h3>
          
          <div className="space-y-6">
            {walkthroughItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${item.icon} text-2xl text-purple-300`}></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-200 font-light leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}