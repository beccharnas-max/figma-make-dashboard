import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Megaphone, Compass, MessageSquare, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export const Home = () => {
  const { scrollY } = useScroll();
  const gradientOpacity = useTransform(scrollY, [0, 500], [0, 1]);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
        {/* Abstract Floating Shapes (Sticker Vibe) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 md:right-20 text-yellow-400 opacity-80 -z-10"
        >
          <Star size={120} fill="currentColor" className="text-yellow-400" />
        </motion.div>

        <div className="absolute top-40 left-10 md:left-20 -z-10">
           <div className="w-16 h-16 bg-pink-400 rounded-full blur-xl opacity-60" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-900 shadow-sm mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-900 tracking-wide">ACCEPTING NEW CLIENTS</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight font-serif"
            >
              Marketing that works <br/>
              <span className="italic font-light text-slate-700">as hard as you do.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Strategic digital advertising and brand management for small businesses. Taking the hard work out so you can focus on the rest.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                to="/services" 
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <span className="w-3 h-3 bg-pink-400 rounded-full mr-3" />
                View Services
              </Link>
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]"
              >
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3" />
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Separator */}
      <div className="w-full bg-yellow-300 border-y-2 border-slate-900 overflow-hidden py-3 rotate-1 scale-105 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lg font-bold text-slate-900 mx-8 uppercase tracking-widest flex items-center gap-4">
              Strategy First <Star size={16} fill="black" /> Calm Authority <Star size={16} fill="black" /> Sustainable Growth <Star size={16} fill="black" />
            </span>
          ))}
        </div>
      </div>

      {/* Services / What We Do */}
      <section className="py-24 md:py-32 relative bg-white">
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Built for growth</h2>
            <p className="text-slate-600 text-xl">
              Focusing on the three pillars that actually drive revenue for small service businesses. No fluff, just consistent effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard 
              image="https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              title="Digital Advertising"
              description="Targeted paid media campaigns that turn clicks into qualified enquiries. Optimising for revenue, not vanity metrics."
              delay={0.1}
              color="bg-pink-100"
              btnColor="bg-pink-400"
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1612200116836-dd1f35662adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              title="Marketing Strategy"
              description="Clear positioning and roadmaps to help you stop guessing. Finding the centre of your brand's value."
              delay={0.2}
              color="bg-cyan-100"
              btnColor="bg-cyan-400"
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1759215524472-1b0686fdbd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              title="Social Media"
              description="Consistent, on-brand content that builds community without chasing every fleeting trend."
              delay={0.3}
              color="bg-green-100"
              btnColor="bg-green-500"
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-slate-50 border-y-2 border-slate-900 border-dashed relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}
        />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                For business owners who value <span className="text-pink-500 italic">clarity over chaos</span>.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                You’re time-poor but ambition-rich. You know marketing is essential, but you don't have the hours to learn every new algorithm change or program.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl shadow-sm rotate-2">
                    <span className="text-3xl">🤝</span>
                 </div>
                 <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl shadow-sm -rotate-2">
                    <span className="text-3xl">📈</span>
                 </div>
                 <div className="p-4 bg-white border-2 border-slate-900 rounded-2xl shadow-sm rotate-1">
                    <span className="text-3xl">💡</span>
                 </div>
              </div>
            </div>
            
            <div className="grid gap-6">
              {[
                "Service-based businesses ready to scale",
                "Founders looking for a long-term partner",
                "Brands that want to build real trust",
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center border border-green-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-bold text-slate-900">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-yellow-100 rounded-[2.5rem] p-10 md:p-20 text-center max-w-4xl mx-auto relative border-2 border-slate-900 border-dashed">
             
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2 bg-pink-400 border-2 border-slate-900 rounded-full text-white font-bold tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
               LETS WORK TOGETHER
             </div>

             <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-serif">
               Ready to get to work?
             </h2>
             <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
               Here to help you thrive. Let's discuss where your business is today and where you want it to be tomorrow.
             </p>
             <Link 
               to="/contact" 
               className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-transparent hover:border-slate-900 hover:bg-white hover:text-slate-900 shadow-xl"
             >
               Start a Conversation <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const ServiceCard = ({ 
  image,
  title, 
  description, 
  delay = 0,
  color,
  btnColor
}: { 
  image: string,
  title: string, 
  description: string, 
  delay?: number,
  color: string,
  btnColor: string
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className="group flex flex-col h-full rounded-3xl border-2 border-slate-900 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
  >
    <div className="h-56 overflow-hidden border-b-2 border-slate-900 border-dashed relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
    </div>
    
    <div className={`${color} p-8 flex-grow flex flex-col justify-between`}>
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
        <p className="text-slate-800 leading-relaxed font-medium opacity-90 mb-8">{description}</p>
      </div>
      
      <div className="flex justify-center">
        <button className="bg-white border-2 border-slate-900 rounded-full px-6 py-2.5 font-bold text-slate-900 text-sm flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-colors w-full justify-center">
          <span className={`w-3 h-3 ${btnColor} rounded-full`} />
          Learn More
        </button>
      </div>
    </div>
  </motion.div>
);
