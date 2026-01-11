import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    service: 'strategy',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', business: '', email: '', service: 'strategy', message: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pt-20 pb-20 md:pt-28">
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Let's start the conversation.
              </h1>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Ready to bring clarity to your marketing? Fill out the form, and we'll be in touch within 24 hours to schedule a quick discovery call. We take the hard work out of it.
              </p>
              
              <div className="space-y-8 mb-12">
                <ContactInfo 
                  icon={Mail} 
                  label="Email us" 
                  value="hello@workhorse.com.au" 
                />
                <ContactInfo 
                  icon={Phone} 
                  label="Call us" 
                  value="+61 (0) 412 345 678" 
                />
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 flex gap-4 items-start">
                 <div className="mt-1 flex-shrink-0 text-green-700">
                   <CheckCircle2 size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-slate-900 mb-1">Our promise</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     We don't employ high-pressure sales tactics. Our goal is to see if we're the right partner to help you grow. If we're not, we'll tell you. We value personal connection.
                   </p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-10">
              
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thanks for reaching out. We'll be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-medium text-slate-900 underline hover:text-slate-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white focus:ring-0 transition-all outline-none text-slate-900"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white focus:ring-0 transition-all outline-none text-slate-900"
                      placeholder="Acme Co."
                      value={formState.business}
                      onChange={(e) => setFormState({...formState, business: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white focus:ring-0 transition-all outline-none text-slate-900"
                      placeholder="jane@acme.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                    <div className="relative">
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white focus:ring-0 transition-all outline-none text-slate-900 appearance-none cursor-pointer"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                      >
                        <option value="strategy">Marketing Strategy</option>
                        <option value="advertising">Digital Advertising</option>
                        <option value="social">Social Media</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      {/* Custom arrow */}
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white focus:ring-0 transition-all outline-none text-slate-900 resize-none"
                      placeholder="Tell us a bit about your goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-lg text-slate-900 font-semibold">{value}</p>
    </div>
  </div>
);
