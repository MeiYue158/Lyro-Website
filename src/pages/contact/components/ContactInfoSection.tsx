export function ContactInfoSection() {
  const contactInfo = [
    {
      icon: 'ri-user-line',
      label: 'Name',
      value: 'Vivian Zhang',
      link: null
    },
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'Lyro@lyroride.com',
      link: 'mailto:Lyro@lyroride.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '650-714-7952',
      link: 'tel:650-714-7952'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-4">
                Contact
              </h3>
              <p className="text-gray-300 font-light">
                We typically respond within one business day.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30 flex-shrink-0">
                    <i className={`${info.icon} text-2xl text-purple-300`}></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1 font-light">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-lg text-white font-light hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white font-light">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-2xl p-8 text-center">
              <p className="text-gray-200 font-light leading-relaxed">
                Lyro is designed for complex, regulated transportation environments —<br />
                and conversations start the same way our system works:<br />
                <span className="text-white font-normal">clearly, directly, and human-first.</span>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 font-light mb-6">
              Prefer to schedule a demo right away?
            </p>
            <a 
              href="/demo"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:from-purple-600 hover:to-indigo-600 whitespace-nowrap cursor-pointer"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}