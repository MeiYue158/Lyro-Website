import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterSection } from '../home/components/FooterSection';
import { CursorGlow } from '../home/components/CursorGlow';
import Aurora from '../home/components/Aurora';

export default function SmsConsentPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (emailValue: string) => {
    if (!emailValue.trim()) {
      setEmailError('');
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailValue)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Please enter a valid email address');
      return false;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.trim()) {
      validateEmail(value);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim() || consent !== true) {
      setShowValidation(true);
      return;
    }

    if (email.trim() && !validateEmail(email)) {
      return;
    }

    // Frontend validation only - no backend submission
    console.log('Form data:', { name, phoneNumber, email, consent });
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setConsent(null);
    setSubmitted(false);
    setShowValidation(false);
    setEmailError('');
  };

  const isFormValid = phoneNumber.trim() !== '' && consent === true && !emailError;
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
                  SMS Communication Consent
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                  Lyro Inc.
                </p>
              </div>
            </div>
          </section>

          {/* SMS Consent Content */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
                  {submitted ? (
                    <div className="prose prose-invert max-w-none">
                      {/* Success State */}
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30">
                          <i className="ri-checkbox-circle-line text-5xl text-purple-300"></i>
                        </div>
                        <h2 className="text-4xl font-light text-white mb-4">
                          Submission Successful
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                          Thank you for consenting to receive SMS communications from Lyro Inc.
                        </p>
                      </div>

                      <hr className="border-white/10 my-12" />

                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-light text-white mb-4">Submission Summary</h3>
                        <div className="space-y-3 text-lg text-gray-300 leading-relaxed font-light">
                          <p>
                            <strong className="text-white font-normal">Phone Number:</strong> {phoneNumber}
                          </p>
                          {email.trim() && (
                            <p>
                              <strong className="text-white font-normal">Email:</strong> {email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={handleReset}
                          className="flex-1 py-4 px-6 rounded-xl text-base font-light bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                          Back to SMS Consent
                        </button>
                        <button
                          onClick={() => navigate('/')}
                          className="flex-1 py-4 px-6 rounded-xl text-base font-light bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all cursor-pointer"
                        >
                          Back to Home
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
                      Lyro Inc. uses SMS to communicate with drivers for operational purposes.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="block text-gray-300 font-light mb-2 text-lg">
                          Name <span className="text-gray-500">(optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-light focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 font-light mb-2 text-lg">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setShowValidation(false);
                          }}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-light focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                        />
                        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                          <p className="text-sm text-gray-300 leading-relaxed font-light mb-2">
                            By providing your phone number and submitting this form, you consent to receive customer care SMS messages from Lyro Inc. Message frequency may vary. On average, you may receive 1–2 messages per month. Message and data rates may apply.
                          </p>
                          <p className="text-sm text-gray-300 leading-relaxed font-light mb-2">
                            Text STOP or UNSUBSCRIBE to opt out. Text HELP for assistance.
                          </p>
                          <p className="text-sm text-gray-300 leading-relaxed font-light mb-1">
                            Privacy Policy:
                          </p>
                          <p className="text-sm text-purple-300 leading-relaxed font-light mb-2">
                            <a href="https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/privacy" className="hover:text-purple-200 transition-colors">
                              https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/privacy
                            </a>
                          </p>
                          <p className="text-sm text-gray-300 leading-relaxed font-light mb-1">
                            Terms & Conditions:
                          </p>
                          <p className="text-sm text-purple-300 leading-relaxed font-light">
                            <a href="https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/terms" className="hover:text-purple-200 transition-colors">
                              https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/terms
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 font-light mb-2 text-lg">
                          Email <span className="text-gray-500">(optional)</span>
                        </label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={() => email.trim() && validateEmail(email)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-light focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                        />
                        {emailError && (
                          <p className="mt-2 text-sm text-red-300 font-light">
                            {emailError}
                          </p>
                        )}
                      </div>
                    </div>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Consent to Receive SMS Messages
                    </h2>
                    
                    <div className="space-y-4 mb-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <label className="flex items-start gap-4 cursor-pointer">
                          <input
                            type="radio"
                            name="smsConsent"
                            checked={consent === true}
                            onChange={() => {
                              setConsent(true);
                              setShowValidation(false);
                            }}
                            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-400/50 focus:ring-2"
                          />
                          <span className="text-lg text-gray-300 leading-relaxed font-light">
                            Yes, I agree to receive text messages from <strong className="text-white font-normal">Lyro Inc.</strong> at the phone number provided.
                          </span>
                        </label>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <label className="flex items-start gap-4 cursor-pointer">
                          <input
                            type="radio"
                            name="smsConsent"
                            checked={consent === false}
                            onChange={() => {
                              setConsent(false);
                              setShowValidation(false);
                            }}
                            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-400/50 focus:ring-2"
                          />
                          <span className="text-lg text-gray-300 leading-relaxed font-light">
                            I do not wish to receive SMS messages from <strong className="text-white font-normal">Lyro Inc.</strong>
                          </span>
                        </label>
                      </div>
                    </div>

                    {consent === false && (
                      <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-sm text-gray-300 font-light">
                          SMS consent is required to submit this form.
                        </p>
                      </div>
                    )}

                    {showValidation && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-400/30 rounded-xl">
                        <p className="text-sm text-red-300 font-light">
                          Please provide your phone number and select a consent option to continue.
                        </p>
                      </div>
                    )}

                    <div className="mb-8">
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-4 px-6 rounded-xl text-base font-light transition-all duration-300 ${
                          isFormValid
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 cursor-pointer'
                            : 'bg-gray-700/50 text-gray-400 cursor-not-allowed opacity-50'
                        }`}
                      >
                        Submit
                      </button>
                    </div>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      SMS Disclosure Information
                    </h2>
                    
                    <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-xl p-6 mb-8">
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Types of messages:</strong> You may receive customer care SMS messages from Lyro Inc. related to customer care and service communications.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Message frequency:</strong> Message frequency may vary. On average, you may receive 1–2 messages per month.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Message and data rates may apply</strong> depending on your mobile carrier and service plan.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Consent is not a condition of purchase.</strong> You are not required to consent to receive SMS messages to use our services.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Reply STOP or UNSUBSCRIBE</strong> to unsubscribe from future messages at any time.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                        <strong className="text-white font-normal">Reply HELP</strong> for help or assistance with SMS messages.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        <strong className="text-white font-normal">Data sharing:</strong> We do not share your mobile opt-in information with third parties except as necessary to provide our services or as required by law.
                      </p>
                    </div>

                    <hr className="border-white/10 my-12" />

                    <h2 className="text-3xl font-light text-white mb-6 mt-12">
                      Additional Information
                    </h2>
                    
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                      For more information about how we handle your personal information and SMS data, please review our:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-gray-300 leading-relaxed font-light ml-4">
                      <li>
                        <a href="https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/privacy" className="text-purple-300 hover:text-purple-200 transition-colors">
                          https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/privacy
                        </a>
                      </li>
                      <li>
                        <a href="https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/terms" className="text-purple-300 hover:text-purple-200 transition-colors">
                          https://lyro-website-ayxy-git-main-meiyue158s-projects.vercel.app/terms
                        </a>
                      </li>
                    </ul>

                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
                      If you have questions about SMS communications or this consent form, please contact us at:
                    </p>
                    <p className="text-lg text-white leading-relaxed font-light mb-8">
                      <a href="mailto:lyro@lyroride.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                        lyro@lyroride.com
                      </a>
                    </p>
                  </form>
                  )}
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
