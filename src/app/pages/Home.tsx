import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Megaphone, Compass, MessageSquare, ArrowRight, CheckCircle2, Star } from 'lucide-react';

// ✅ Correct imports for local images
import Photo1 from "../../assets/pexels-canvastudio-3194524.jpg";
import Photo2 from "../../assets/pexels-nietjuhart-35521670.jpg";
import Photo3 from "../../assets/pexels-olly-3761509.jpg";

export const Home = () => {
  const { scrollY } = useScroll();
  const gradientOpacity = useTransform(scrollY, [0, 500], [0, 1]);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
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
            {/* ServiceCard components */}
            <ServiceCard 
              image={Photo1}
              title="Digital Advertising"
              description="Targeted paid media campaigns that turn clicks into qualified enquiries. Optimising for revenue, not vanity metrics."
              delay={0.1}
              color="bg-pink-100"
              btnColor="bg-pink-400"
            />
            <ServiceCard 
              image={Photo2}
              title="Marketing Strategy"
              description="Clear positioning and roadmaps to help you stop guessing. Finding the centre of your brand's value."
              delay={0.2}
              color="bg-cyan-100"
              btnColor="bg-cyan-400"
            />
            <ServiceCard 
              image={Photo3}
              title="Social Media"
              description="Consistent, on-brand content that builds community without chasing every fleeting trend."
              delay={0.3}
              color="bg-green-100"
              btnColor="bg-green-500"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

// ✅ ServiceCard component with Learn More linking to /services
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
        <Link
          to="/services"
          className="bg-white border-2 border-slate-900 rounded-full px-6 py-2.5 font-bold text-slate-900 text-sm flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-colors w-full justify-center text-center"
        >
          <span className={`w-3 h-3 ${btnColor} rounded-full`} />
          Learn More
        </Link>
      </div>
    </div>
  </motion.div>
);
