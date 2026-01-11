import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Megaphone, Compass, MessageSquare, ArrowRight, Check } from 'lucide-react';

export const Services = () => {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* Grid Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 fixed"
           style={{
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />

      {/* Intro */}
      <section className="bg-white/50 backdrop-blur-sm pt-20 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight font-serif"
          >
            Marketing services <br/> built to last.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            No flash-in-the-pan tactics. Just consistent, clear, and revenue-focused marketing engines. Taking the hard work off your plate so you can focus on your business.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24">
          
          <ServiceBlock 
            icon={Megaphone}
            title="Digital Advertising"
            description="Stop wasting budget on clicks that don't convert. Building high-intent campaigns on Google and Social that target your ideal clients when they're ready to buy. Continuously optimising for better returns."
            features={[
              "Google Ads (Search & Display)",
              "Facebook & Instagram Ads",
              "Retargeting Campaigns",
              "Conversion Tracking Setup"
            ]}
            accentColor="bg-pink-100"
            borderColor="border-slate-900"
            iconColor="text-pink-600"
            align="left"
          />

          <ServiceBlock 
            icon={Compass}
            title="Marketing & Brand Strategy"
            description="Tactics without strategy is just noise. Helping define exactly who you are, who you serve, and how to reach them—giving you a playbook for long-term decisions. Finding the centre of your brand's story."
            features={[
              "Brand Positioning & Messaging",
              "Customer Persona Development",
              "Content Strategy Roadmaps",
              "Competitor Analysis"
            ]}
            accentColor="bg-cyan-100"
            borderColor="border-slate-900"
            iconColor="text-cyan-600"
            align="right"
          />

          <ServiceBlock 
            icon={MessageSquare}
            title="Social Media Strategy"
            description="You don't need to be everywhere. You just need to be where your customers are. Creating consistent, value-driven content that builds trust and authority. Connect on a personal level."
            features={[
              "Platform Management (LinkedIn, IG)",
              "Content Creation & Scheduling",
              "Community Engagement",
              "Monthly Performance Reporting"
            ]}
            accentColor="bg-green-100"
            borderColor="border-slate-900"
            iconColor="text-green-700"
            align="left"
          />

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t-2 border-slate-900 border-dashed">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            That's normal. Most partnerships start with a simple conversation to diagnose the gap between where you are and where you want to be.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-transparent hover:border-slate-900 hover:bg-white hover:text-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            Book a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

const ServiceBlock = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  accentColor, 
  borderColor,
  iconColor,
  align = 'left' 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[],
  accentColor: string,
  borderColor: string,
  iconColor: string,
  align?: 'left' | 'right'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-1 w-full">
        <div className={`p-10 md:p-12 rounded-3xl ${accentColor} border-2 ${borderColor} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
          
          <div className={`w-16 h-16 rounded-2xl bg-white border-2 border-slate-900 flex items-center justify-center mb-8 ${iconColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
            <Icon size={32} strokeWidth={2} />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">{title}</h3>
          <p className="text-slate-800 text-lg leading-relaxed mb-8 font-medium opacity-90">
            {description}
          </p>

          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white border border-slate-900 flex items-center justify-center ${iconColor}`}>
                  <Check size={12} strokeWidth={4} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Visual / Context side */}
      <div className="flex-1 hidden md:flex items-center justify-center">
         <div className="relative p-8 w-full max-w-sm">
            <div className={`absolute inset-0 ${accentColor} opacity-20 blur-3xl rounded-full`} />
            {/* Abstract Wireframe Representation */}
            <div className="relative z-10 grid gap-4 bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-slate-900 rotate-3 transition-transform hover:rotate-0">
              <div className="flex items-center gap-4 mb-4">
                 <div className={`w-10 h-10 rounded-full ${accentColor} border-2 border-slate-900 flex items-center justify-center ${iconColor}`}>
                    <Icon size={18} />
                 </div>
                 <div className="h-3 w-24 bg-slate-200 rounded-full" />
              </div>
              <div className="space-y-3">
                <div className="w-full h-3 bg-slate-100 rounded-full" />
                <div className="w-5/6 h-3 bg-slate-100 rounded-full" />
                <div className="w-4/6 h-3 bg-slate-100 rounded-full" />
              </div>
              <div className="mt-4 pt-4 border-t-2 border-dashed border-slate-200 flex justify-between">
                 <div className="w-16 h-3 bg-slate-200 rounded-full" />
                 <div className={`w-6 h-6 rounded-full ${accentColor} border-2 border-slate-900`} />
              </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};
