import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Handshake, Sprout, Lightbulb, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import FounderPhoto from '../../assets/Founder.image.jpeg'; // ✅ Add your local image here

export const About = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl -translate-y-1/2 opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-200 rounded-full blur-3xl translate-y-1/3 opacity-40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8 font-serif"
          >
            Not a flashy agency. <br />
            <span className="text-pink-500 italic">Just a dedicated partner.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto"
          >
            Workhorse was built on a simple premise: small businesses deserve marketing support that is personal, strategic, and genuinely cares about the outcome.
          </motion.p>

          {/* New Pink Slide-in Line */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-2xl text-pink-500 font-bold leading-relaxed max-w-2xl mx-auto mt-4"
          >
            Let’s create cool sh*t for your business.
          </motion.p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {/* Founder Text */}
            <div className="flex-1 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-200 p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-pink-500 relative"
              >
                <div className="absolute -top-6 -left-4 text-yellow-300 pointer-events-none rotate-12">
                  <Star size={60} fill="currentColor" strokeWidth={1.5} className="text-pink-500" />
                </div>

                <div className="relative z-10 pt-4">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Hello, I'm Becc.</h3>
                  <div className="space-y-4 text-slate-900 leading-relaxed text-lg">
                    <p>
                      I started Workhorse to help small businesses thrive. I noticed so many owners getting lost in the noise of "growth hacks" and expensive agency retainers that didn't deliver.
                    </p>
                    <p>
                      Not a flashy agency, and that's by design. The goal is to connect with you on a personal level, understand the unique pulse of your business, and do the heavy lifting required to get you seen.
                    </p>
                    <p>
                      The mission is simple: <strong>take the hard work out of marketing so you can focus on what you do best.</strong>
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-pink-500 flex items-center gap-3">
                    <span className="font-handwriting text-3xl text-slate-900 font-medium italic">Becc</span>
                    <span className="text-sm text-slate-900 uppercase tracking-wider font-bold border-2 border-pink-500 px-2 py-1 rounded-md bg-yellow-100">Founder</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Founder Image */}
            <div className="flex-1 order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
                <div className="aspect-square rounded-[3rem] border-2 border-pink-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative flex items-center justify-center">
                  <img
                    src={FounderPhoto}
                    alt="Becc - Founder"
                    className="object-cover w-full h-full rounded-[3rem]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-yellow-50 border-y-2 border-pink-500 border-dashed">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Values that drive us</h2>
            <p className="text-xl text-slate-900">
              Belief in sustainable growth, clear communication, and relationships that last longer than a single campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={Handshake}
              title="Personal Connection"
              description="No hiding behind dashboards. Just getting to know you, your team, and your vision."
              color="bg-yellow-200"
              iconColor="text-pink-500"
              borderColor="border-pink-500"
              delay={0.1}
            />
            <ValueCard 
              icon={Target}
              title="Clarity & Focus"
              description="Marketing shouldn't be confusing. Stripping away the jargon to focus on clear, actionable strategies."
              color="bg-yellow-200"
              iconColor="text-pink-500"
              borderColor="border-pink-500"
              delay={0.2}
            />
            <ValueCard 
              icon={Sprout}
              title="Sustainable Growth"
              description="Building systems designed for the long haul, not just quick wins that fade away."
              color="bg-yellow-200"
              iconColor="text-pink-500"
              borderColor="border-pink-500"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Motto / Philosophy */}
      <section className="py-20 md:py-32 bg-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fde68a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="inline-block p-4 rounded-full bg-white mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-pink-500 text-slate-900">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-serif">
              "Taking the hard work out of marketing so you can focus on what you do best."
            </h2>
            <p className="text-xl text-slate-900 mb-10 max-w-2xl mx-auto font-medium">
              This isn't just a tagline. It's the filter for every decision. If it adds stress without adding value, it’s not done.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-100 text-slate-900 font-bold hover:bg-yellow-200 hover:border-pink-500 border-2 border-pink-500 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,192,203,0.5)] hover:-translate-y-1"
            >
              Work with Becc
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description, color, iconColor, borderColor, delay }: { icon: any; title: string; description: string; color: string; iconColor: string; borderColor: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay }}
    className={`p-8 rounded-3xl ${color} ${borderColor} border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-300`}
  >
    <div className={`w-14 h-14 rounded-2xl bg-white border-2 ${borderColor} flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${iconColor}`}>
      <Icon size={28} strokeWidth={2} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
    <p className="text-slate-900 leading-relaxed font-medium opacity-95">{description}</p>
  </motion.div>
);
