import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Experience } from '../types';
import { Check, ChevronRight, X, AlertCircle } from 'lucide-react';

interface ExperiencesProps {
  lang: 'es' | 'en';
}

export default function Experiences({ lang }: ExperiencesProps) {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [activeLevel, setActiveLevel] = useState<string>('all');

  const content = {
    es: {
      tag: 'EXPERIENCIAS DE SURF',
      title: 'Elige tu deslizamiento.',
      description: 'Programas de mar minuciosamente diseñados tanto para iniciarte de forma segura como para optimizar tu biomecánica en olas potentes.',
      levelLabel: 'Nivel:',
      durationLabel: 'Duración:',
      priceLabel: 'Inversión:',
      spotsLabel: 'Ratios:',
      ctaLearnMore: 'Sumergirse en Info',
      ctaBook: 'Reservar esta Sesión',
      includedHeader: 'Qué incluye este pase:',
      equipmentNote: 'Brindamos neoprenos Rip Curl / Billabong limpios y tablas adaptadas a tu flotabilidad.',
      levels: {
        all: 'Ver Todo',
        beginner: 'Iniciación',
        intermediate: 'Intermedio',
        advanced: 'Avanzado'
      },
      inclusionSeal: '100% Inclusivo • Adaptado a todas las realidades corporales y cognitivas'
    },
    en: {
      tag: 'OUR EXPERIENCES',
      title: 'Select your glide.',
      description: 'Meticulously crafted ocean curricula designed for secure beach introductions or sharpening high-performance rail carves.',
      levelLabel: 'Level:',
      durationLabel: 'Duration:',
      priceLabel: 'Investment:',
      spotsLabel: 'Ratio:',
      ctaLearnMore: 'Submerge for Info',
      ctaBook: 'Secure this Session',
      includedHeader: "What's included in this pass:",
      equipmentNote: 'Clean, premium Rip Curl/Billabong wetsuits and customized volume boards provided.',
      levels: {
        all: 'View All',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
      },
      inclusionSeal: '100% Inclusive • Adapted to all bodily & cognitive pathfinders'
    }
  };

  const current = content[lang];

  // Filtering based on levels
  const filteredExperiences = EXPERIENCES.filter(exp => {
    if (activeLevel === 'all') return true;
    if (activeLevel === 'beginner') return exp.level === 'Beginner' || exp.level === 'All Levels';
    if (activeLevel === 'advanced') return exp.level === 'Advanced';
    return true;
  });

  const getIncludedList = (id: string, currentLang: 'es' | 'en') => {
    const lists: Record<string, Record<'es' | 'en', string[]>> = {
      'surf-lessons': {
        es: ['Seguro integral deportivo civil', 'Licra distintiva de club', '2 Horas de entrenamiento práctico', 'Tablas soft-deck y traje Rip Curl', 'Uso de vestuarios de club'],
        en: ['Complete sports liability insurance', 'High-visibility school vest', '2 Hours tactical ocean-coaching', 'Soft-deck boards and Rip Curl wetsuits', 'Club locker room accessibility']
      },
      'surf-camps': {
        es: ['Alojamiento coastal Eco-Lodge', 'Pensión completa (comida orgánica)', 'Yoga y preparación kinésica diaria', 'Análisis de video nocturno', 'Regalos de bienvenida exclusivos'],
        en: ['Eco-Lodge beachfront accommodation', 'Full organic board (locally sourced)', 'Daily beachside flow yoga & mobility', 'In-depth night video analysis sessions', 'Special welcome pack & dry-bag']
      },
      'kids-surf': {
        es: ['Coach certificado de juego acuático', 'Grupos híper-reducidos (1 a 4)', 'Educación marina y ecología lúdica', 'Tablas de alta flotabilidad ultra-blandas', 'Medalla Fin de Safari de Olas'],
        en: ['Coaches certified in physical education', 'Micro-ratios (max 4 per instructor)', 'Marine literacy & sand play workshops', 'Extra wide soft-deck safety foamies', 'Custom Wave Safari survival medal']
      },
      'advanced-coaching': {
        es: ['Grabación con teleobjetivo 4K', 'Análisis biomecánico cuadro a cuadro', 'Taller de dinámica de tablas (Swell)', 'Análisis de posicionamiento táctico', 'Consejos de patrocinio deportivo'],
        en: ['High-res 4K telephoto video shoot', 'Frame-by-frame biomechanical critique', 'Surfboard volume & rail workshop', 'Tactical beach-break reading drills', 'Competitive surf sponsorship strategies']
      },
      'group-experiences': {
        es: ['Monitores formados en surf adaptativo', 'Material personalizado de flotabilidad', 'Dinámicas de confianza mutua en grupo', 'Fotos de acción de alta definición', 'Picnic de mar al finalizar'],
        en: ['Specialized adaptive surf specialists', 'Custom dynamic buoyancy gear & handles', 'High trust group marine activities', 'HD digital action photo package', 'Post-session warm coastal picnic']
      }
    };

    return lists[id]?.[currentLang] || [];
  };

  return (
    <section id="experiences" className="relative py-24 md:py-32 bg-[#f5fdf9] border-t border-[#cdefe4]/60 overflow-hidden">

      {/* Background Lighting Elements — mint glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#cdefe4]/25 blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block and Filter Deck */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#3de5bd] font-bold tracking-[0.3em] uppercase mb-4 block">
              {current.tag}
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6">
              {current.title}
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Premium Filter Switcher with Geometric sharp corners */}
          <div className="flex flex-wrap items-center bg-[#cdefe4]/30 border border-[#cdefe4] rounded-none p-1 self-start">
            {Object.entries(current.levels).map(([key, label]) => {
              const active = activeLevel === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveLevel(key)}
                  className={`px-5 py-2.5 rounded-none font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 relative ${
                    active ? 'text-[#020617]' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {active && (
                    <motion.span
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-[#3de5bd] rounded-none z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Grid Listing */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="experience-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                key={exp.id}
                className="group cursor-pointer flex flex-col h-full rounded-none bg-white border border-slate-200 hover:border-[#3de5bd]/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 text-left"
                onClick={() => setSelectedExp(exp)}
              >
                {/* Image Framing with zoom effect */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent z-10" />
                  <img
                    src={exp.image}
                    alt={exp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  />
                  
                  {/* Category Pill Overlays */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-none font-mono text-[9px] font-bold tracking-widest uppercase bg-slate-900 text-[#3de5bd] border border-[#3de5bd]/40 backdrop-blur-sm">
                      {exp.subtitle}
                    </span>
                  </div>

                  {/* Level text inside card */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#020617] bg-[#3de5bd] rounded-none px-2.5 py-1 backdrop-blur-md">
                      {exp.level}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl text-[#020617] mb-2 group-hover:text-[#3de5bd] transition-colors tracking-tight">
                    {exp.title}
                  </h3>
                  
                  <p className="font-sans text-xs md:text-sm text-slate-500 font-light leading-relaxed line-clamp-3 mb-6">
                    {exp.description}
                  </p>

                  {/* Pricing Key Metrics Row */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                        {current.priceLabel}
                      </span>
                      <span className="font-display font-bold text-xl text-[#3de5bd]">
                        {exp.price}
                      </span>
                    </div>

                    <div className="flex flex-col text-right">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                        {current.durationLabel}
                      </span>
                      <span className="font-sans text-xs text-slate-700 font-semibold">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Reveal detail hook */}
                  <div className="mt-4 pt-2 flex items-center text-xs font-mono font-bold tracking-wider text-slate-400 group-hover:text-[#3de5bd] transition-colors">
                    <span className="uppercase">{current.ctaLearnMore}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global inclusion stamp seal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-[10px] sm:text-xs font-mono tracking-widest text-slate-600 flex items-center justify-center gap-2 border border-slate-200 rounded-none py-4 px-6 bg-slate-50"
        >
          <div className="w-4 h-4 border border-[#3de5bd] rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#3de5bd] rounded-full animate-pulse"></div>
          </div>
          <span className="uppercase leading-relaxed">{current.inclusionSeal}</span>
        </motion.div>

      </div>

      {/* Modern Cinematic Modal overlay */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="details-modal">
            {/* Light glass cover backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-none bg-white border border-slate-200 shadow-2xl z-10"
            >
              {/* Image banner inside details modal */}
              <div className="relative w-full h-[200px] sm:h-[260px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10" />
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button Trigger */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-none bg-white/90 hover:bg-[#3de5bd] hover:text-white border border-slate-200 text-slate-800 transition-all z-20 focus:outline-none"
                  aria-label="Close Details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 z-20 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#3de5bd] font-bold bg-slate-900/90 border border-[#3de5bd]/40 px-3 py-1.5 rounded-none backdrop-blur-sm mb-2 inline-block">
                    {selectedExp.subtitle}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    {selectedExp.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 text-left">
                
                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {selectedExp.description}
                </p>

                {/* Sub Metadata Deck Grid */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-none bg-slate-50 border border-slate-200/80 mb-6">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                      {current.levelLabel}
                    </span>
                    <span className="font-sans text-xs text-slate-800 font-bold">
                      {selectedExp.level}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                      {current.durationLabel}
                    </span>
                    <span className="font-sans text-xs text-[#3de5bd] font-bold">
                      {selectedExp.duration}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                      {current.spotsLabel}
                    </span>
                    <span className="font-sans text-xs text-slate-800 font-bold">
                      {selectedExp.spots}
                    </span>
                  </div>
                </div>

                {/* What is included system */}
                <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-800 block mb-3">
                  {current.includedHeader}
                </span>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {getIncludedList(selectedExp.id, lang).map((item, id) => (
                    <li key={id} className="flex items-start space-x-2 text-xs text-slate-600 font-light">
                      <Check className="w-4 h-4 text-[#3de5bd] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center space-x-2 text-[10px] font-sans text-slate-400 border-t border-slate-100 pt-4 mb-6">
                  <AlertCircle className="w-3.5 h-3.5 text-[#3de5bd]" />
                  <span>{current.equipmentNote}</span>
                </div>

                {/* Booking triggers */}
                <div className="flex items-center justify-between gap-4 mt-6">
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block">
                      {lang === 'es' ? 'PRECIO TOTAL' : 'TOTAL RATE'}
                    </span>
                    <span className="font-display font-black text-2xl text-[#020617]">
                      {selectedExp.price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedExp(null)}
                    className="px-8 py-4 text-center rounded-none bg-[#3de5bd] text-[#020617] font-display font-bold text-xs tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>{current.ctaBook}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
