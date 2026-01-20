import { FooterSection } from '../home/components/FooterSection';
import { CursorGlow } from '../home/components/CursorGlow';
import Aurora from '../home/components/Aurora';

export default function PrivacyPage() {
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
      
      {/* Content */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-extralight text-white mb-6 leading-tight tracking-[0.05em]">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Lyro ("we", "our", or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect personal information when you interact with our services.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Information We Collect
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      We may collect personal information including, but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-gray-300 leading-relaxed font-light ml-4">
                      <li>Name</li>
                      <li>Phone number</li>
                      <li>Email address</li>
                      <li>Trip-related or service-related information</li>
                    </ul>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      How We Use Information
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      Personal information is used to:
                    </p>
                    <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-gray-300 leading-relaxed font-light ml-4">
                      <li>Provide and operate our transportation coordination services</li>
                      <li>Send service-related communications, including SMS messages such as trip confirmations, updates, reminders, and responses to customer inquiries</li>
                      <li>Improve service quality and reliability</li>
                    </ul>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      SMS Communications
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      If you provide your phone number, you may receive SMS messages related to our services.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      These messages may include service updates, appointment or trip confirmations, reminders, and customer support communications.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      You may opt out of SMS messages at any time by replying <strong className="text-white font-normal">STOP</strong>.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Message and data rates may apply.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Mobile Information & SMS Data
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      We are committed to protecting your privacy.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      Mobile information, including phone numbers and SMS message data, <strong className="text-white font-normal">will not be shared with third parties for marketing or promotional purposes under any circumstances</strong>.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      We do not sell, rent, or disclose consumer mobile information to external organizations for their independent use, <strong className="text-white font-normal">including with user consent</strong>, except as necessary to operate and provide our services (for example, messaging carriers, infrastructure providers, or compliance-related vendors).
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Strict internal policies and technical safeguards are in place to prevent unauthorized access, misuse, or unauthorized sharing of user information.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Data Sharing
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      We do not sell or share personal information with third parties for marketing purposes.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Information may be shared only as necessary to operate our services, fulfill user requests, comply with legal obligations, or protect the security and integrity of our systems.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Data Security
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, use, alteration, or disclosure.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Contact
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      If you have questions about this Privacy Policy or our messaging practices, please contact us at:
                    </p>
                    <p className="text-lg text-white leading-relaxed font-light mb-8">
                      <a href="mailto:lyro@lyroride.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                        lyro@lyroride.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}
