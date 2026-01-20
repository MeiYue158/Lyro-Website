import { FooterSection } from '../home/components/FooterSection';
import { CursorGlow } from '../home/components/CursorGlow';
import Aurora from '../home/components/Aurora';

export default function TermsPage() {
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
                  Terms and Conditions
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                  Effective Date: January 2026
                </p>
              </div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      By opting in to receive SMS messages from <strong className="text-white font-normal">Lyro Inc.</strong> ("Lyro," "we," "us," or "our"), you agree to these Terms and Conditions ("Terms").
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      SMS Messaging Terms
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      By providing your phone number and opting in, you agree to receive SMS messages from Lyro Inc. related to customer care and service communications. Message frequency may vary. On average, you may receive 1–2 messages per month. Message and data rates may apply.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      To stop receiving SMS messages, reply STOP or UNSUBSCRIBE at any time.
                      For help or more information, reply HELP.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      For details on how your information is handled, please review our Privacy Policy:
                    </p>
                    <p className="text-lg text-white leading-relaxed font-light mb-8">
                      <a href="https://lyro-website-axyx.vercel.app/privacy" className="text-purple-300 hover:text-purple-200 transition-colors">
                        https://lyro-website-axyx.vercel.app/privacy
                      </a>
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      1. SMS Messaging Service
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      By providing your mobile phone number through our online forms or other opt-in methods, you consent to receive <strong className="text-white font-normal">SMS text messages from Lyro Inc.</strong> related to customer care and service communications.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      These messages are <strong className="text-white font-normal">customer care messages</strong> and not sent for third-party marketing purposes.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      2. Message Frequency
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      Message frequency may vary based on your interaction with our services.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      On average, you may receive 1–2 messages per month.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      Lyro Inc. reserves the right to change message frequency at any time.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Carriers are not liable for delayed or undelivered messages.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      3. Message and Data Rates
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      <strong className="text-white font-normal">Message and data rates may apply</strong> depending on your mobile carrier and service plan.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Lyro Inc. is not responsible for any charges incurred from your mobile carrier.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      4. Opt-Out Instructions
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      You may opt out of receiving SMS messages at any time by replying:
                    </p>
                    <ul className="list-disc list-inside space-y-3 mb-4 text-lg text-gray-300 leading-relaxed font-light ml-4">
                      <li><strong className="text-white font-normal">STOP</strong> or <strong className="text-white font-normal">UNSUBSCRIBE</strong> — to unsubscribe from future messages</li>
                    </ul>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      After opting out, you may receive a single confirmation message acknowledging your request.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      5. Help and Customer Support
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      For assistance, reply:
                    </p>
                    <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-gray-300 leading-relaxed font-light ml-4">
                      <li><strong className="text-white font-normal">HELP</strong> — to any SMS message</li>
                    </ul>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      You may also contact our support team directly at:
                    </p>
                    <p className="text-lg text-white leading-relaxed font-light mb-8">
                      <a href="mailto:lyro@lyroride.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                        lyro@lyroride.com
                      </a>
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      6. Privacy Policy
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      Your personal information, including mobile information and SMS data, is handled in accordance with our Privacy Policy.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      Please review our Privacy Policy here:
                    </p>
                    <p className="text-lg text-white leading-relaxed font-light mb-8">
                      <a href="https://lyro-website-axyx.vercel.app/privacy" className="text-purple-300 hover:text-purple-200 transition-colors">
                        https://lyro-website-axyx.vercel.app/privacy
                      </a>
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      7. Liability Disclaimer
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Lyro Inc. is not responsible for any charges, errors, delays, or undelivered messages caused by mobile carriers or third-party service providers.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      8. Modifications
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      We may update these Terms from time to time. Continued participation in our SMS messaging program constitutes acceptance of any updated Terms.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      9. Contact Information
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      For questions regarding these Terms and Conditions, please contact:
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
