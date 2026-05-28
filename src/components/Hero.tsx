import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  lang: 'es' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    es: {
      tag: 'Est. 2014 — Playa de la Zurriola',
      titleLine1: 'MUCHO MÁS QUE',
      titleLine2: 'SURFING.',
      titleLine3: 'Una forma de vivir',
      titleLine4: 'EL OCÉANO.',
      tagline: 'Entidad social sin ánimo de lucro en el corazón de Donostia. Enseñamos surf mientras construimos integración, valores y respeto por el mar en Gipuzkoa.',
      ctaPrimary: 'Explorar Actividades',
      scroll: 'Deslizar para sumergirse'
    },
    en: {
      tag: 'Est. 2014 — Zurriola Beach',
      titleLine1: 'MORE THAN',
      titleLine2: 'SURFING.',
      titleLine3: 'A way of living',
      titleLine4: 'THE OCEAN.',
      tagline: 'Non-profit surf club at the heart of Donostia - San Sebastián. Teaching surfing while building social inclusion, values, and respect for the sea across Gipuzkoa.',
      ctaPrimary: 'Explore Activities',
      scroll: 'Scroll to submerge'
    }
  };

  const current = content[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#ffffff]"
    >
      {/* Background radial gradient overlaying visual flow */}
      <div className="absolute inset-0 ocean-gradient z-0 pointer-events-none" />

      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/2722903.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.85] scale-x-[-1]"
        />
        {/* Refined gradient: less white-washout, preserves image drama */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/80 via-[#ffffff]/30 to-transparent" />
      </div>

      {/* Floating accent light panels */}
      <div className="absolute -bottom-20 -left-20 w-[45vw] h-[45vw] max-w-[500px] bg-[#3de5bd] blur-[140px] opacity-18 rounded-full pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[35vw] h-[35vw] max-w-[400px] bg-[#cdefe4] blur-[120px] opacity-30 rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl flex flex-col justify-center text-left">

          {/* Minimal line subtitle bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-[#3de5bd]"></span>
            <span className="text-[#3de5bd] text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
              {current.tag}
            </span>
          </motion.div>

          {/* Large editorial layout title */}
          <h1 className="editorial-title text-[#020617] uppercase text-left mb-8 select-none leading-[0.85] font-black">
            <span className="block">{current.titleLine1}</span>
            <span className="block text-outline my-1">{current.titleLine2}</span>
            <span className="block font-serif italic text-slate-500 font-light tracking-wide lowercase my-2">
              {current.titleLine3}
            </span>
            <span className="block text-[#020617]">{current.titleLine4}</span>
          </h1>

          {/* Small narrative description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base text-slate-600 leading-relaxed font-light max-w-xl mb-10"
          >
            {current.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/actividades"
              className="px-8 py-5 bg-[#3de5bd] text-[#020617] font-display font-medium uppercase tracking-widest text-xs rounded-none hover:bg-[#020617] hover:text-white transition-all duration-300 text-center shadow-sm inline-block"
            >
              {current.ctaPrimary}
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Wave divider — smooth organic transition to next section */}
      <div className="absolute bottom-[56px] sm:bottom-[57px] inset-x-0 overflow-hidden z-15 pointer-events-none leading-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0,28 C180,50 360,8 540,28 C720,48 900,10 1080,28 C1260,46 1350,22 1440,28 L1440,56 L0,56 Z"
            fill="#f8fafc"
            fillOpacity="0.6"
          />
          <path
            d="M0,36 C240,14 480,52 720,36 C960,20 1200,50 1440,36 L1440,56 L0,56 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Micro Metrics Horizontal Bar at very bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-[#cdefe4]/20 border-t border-[#3de5bd]/20 backdrop-blur-sm z-20 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-mono text-slate-500">
          <div className="flex items-center gap-8">
            <div>
              <span className="uppercase text-[9px] tracking-widest block text-slate-400 font-bold">THE SWELL</span>
              <span className="font-semibold text-[#020617]">2.5ft @ 10s NW</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div>
              <span className="uppercase text-[9px] tracking-widest block text-slate-400 font-bold">WATER TEMP</span>
              <span className="font-semibold text-[#020617]">16°C — Cantábrico</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div>
              <span className="uppercase text-[9px] tracking-widest block text-slate-400 font-bold">SPOT COORDS</span>
              <span className="font-semibold text-[#020617]">43.3194° N, 1.9802° W</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3de5bd] animate-pulse"></span>
            <span className="uppercase tracking-widest text-[9px] text-[#020617]/40">{current.scroll}</span>
            <ChevronDown className="w-4 h-4 text-[#3de5bd]" />
          </div>
        </div>
      </div>
    </section>
  );
}
