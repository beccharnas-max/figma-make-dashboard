// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react';

// Images
import Photo1 from "../../assets/pexels-canvastudio-3194524.jpg";
import Photo2 from "../../assets/pexels-nietjuhart-35521670.jpg";
import Photo3 from "../../assets/pexels-olly-3761509.jpg";

export const Home = () => {
  const { scrollY } = useScroll();
  const bgColor = useTransform(scrollY, [0, 600], ['#ffffff', '#ffe6f0']);
  const yHero = useTransform(scrollY, [0, 600], [0, 120]);

  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeText, setFadeText] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  useEffect(() => {
    // Step 1: Bounce in dot (handled by initial animation)
    // Step 2: Wait 1.5s
    const timerTextFade = setTimeout(() => setFadeText(true), 1500);
    // Step 3: Fade out overlay a little after text fades
    const timerOverlayFade = setTimeout(() => setFadeOverlay(true), 2500); 
    // Step 4: Remove overlay completely after fade
    const timerOverlayRemove = setTimeout(() => setShowOverlay(false), 3500);

    return () => {
      clearTimeout(timerTextFade);
      clearTimeout(timerOverlayFade);
      clearTimeout(timerOverlayRemove);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >

      {/* =========================
          PRELOAD / CINEMATIC OVERLAY
      ========================== */}
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          animate={{ opacity: fadeOverlay ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-logo font-black text-black tracking-tight"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeText ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            Workhorse
            <motion.span
              className="inline-block text-pink-500"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
            >
              .
            </motion.span>
          </motion.h1>
        </motion.div>
      )}

      {/* =========================
          HERO (crossfade under overlay)
      ========================== */}
      <motion.section
        style={{ y: yHero }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5, // slightly after overlay starts fading
          duration: 1.2
        }}
        className="relative pt-20 pb-24 md:pt-32 md:pb-36"
      >
        <div className="container mx-auto px-6 md:px-12 text-center">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-900 shadow-sm mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-slate-900 tracking-wide">
              ACCEPTING NEW CLIENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight font-serif">
            Marketing that works <br />
            <span className="italic font-light text-slate-700">
              as hard as you do.
            </span>
          </h1>

          {/* Hero copy */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Strategy-led marketing that actually moves the needle.
            <br />
            We build the system. Run the engine. Keep it working.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <span className="w-3 h-3 bg-pink-400 rounded-full mr-3" />
              View Services
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:-translate-y-1 transition-transform border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            >
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3" />
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>

      {/* =========================
          MARQUEE
      ========================== */}
      <div className="relative w-full overflow-hidden py-4 -rotate-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-lg font-bold text-slate-900 mx-8 uppercase tracking-widest flex items-center gap-4 bg-yellow-200 px-4 py-2 rounded-lg border-2 border-pink-500 shadow-md"
            >
              Strategy First <Star size={16} fill="pink" />
              Calm Authority <Star size={16} fill="pink" />
              Sustainable Growth <Star size={16} fill="pink" />
            </span>
          ))}
        </div>
      </div>

      {/* =========================
          SERVICES
      ========================== */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">

          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Built for growth
            </h2>
            <p className="text-slate-600 text-xl">
              No fluff. Just consistent, strategic marketing that compounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard image={Photo1} title="Clicks and Conversions"
              description="Targeted paid social ads across Instagram and Facebook that turns clicks into qualified enquiries."
              delay={0.1}
            />
            <ServiceCard image={Photo2} title="Big ideas, smart strategy"
              description="Campaigns strategy & marketing that makes a difference! Positioning and clarity so you stop guessing and start executing."
              delay={0.2}
            />
            <ServiceCard image={Photo3} title="Brand on your side"
              description="A trusted brand partner that builds and maintains your brand's presence & reputation."
              delay={0.3}
            />
          </div>

        </div>
      </section>
    </motion.div>
  );
};


/* =================================
   SERVICE CARD
================================= */
const ServiceCard = ({
  image,
  title,
  description,
  delay = 0
}: {
  image: string;
  title: string;
  description: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group flex flex-col rounded-3xl border-2 border-pink-500 overflow-hidden shadow-md hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all"
  >
    <div className="h-64 md:h-72 overflow-hidden border-b-2 border-dashed border-slate-900">
      <img src={image} alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>

    <div className="bg-yellow-200 p-8 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
        <p className="text-slate-900 leading-relaxed font-medium mb-8">{description}</p>
      </div>

      <Link
        to="/services"
        className="border-2 border-pink-500 bg-yellow-100 rounded-full px-6 py-2.5 font-bold text-sm text-center hover:scale-105 transition-transform"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);
