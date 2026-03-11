// All imports must be first
import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { Star, Instagram, Youtube } from 'lucide-react';

// Then define your component
export default function SheMeansBusiness() {
  const { scrollY } = useScroll();
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    return scrollY.onChange((y) => {
      if (y > 60) setBgColor('bg-pink-50');
      else setBgColor('bg-white');
    });
  }, [scrollY]);

  return (
    <div className={`w-full transition-colors duration-500 ${bgColor}`}>
      {/* Hero */}
      <section className="pt-24 pb-28 md:pt-32 md:pb-36 text-center max-w-4xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-widest text-sm font-bold text-pink-600 mb-6"
        >
          Signature Series
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold font-serif text-slate-900 mb-8 leading-tight"
        >
          She Means Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Follow my journey as I build from the ground up, sharing lessons, wins, and experiments along the way. Learn with me as the test pilot.
        </motion.p>
      </section>

      {/* Social Feed / Content */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-pink-50 border-2 border-pink-400 rounded-2xl shadow-lg hover:bg-pink-100 transition-colors"
          >
            <Instagram size={28} className="text-pink-600" />
            <span className="font-bold text-pink-700">Instagram Shorts</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-pink-50 border-2 border-pink-400 rounded-2xl shadow-lg hover:bg-pink-100 transition-colors"
          >
            <Youtube size={28} className="text-pink-600" />
            <span className="font-bold text-pink-700">YouTube Shorts</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
