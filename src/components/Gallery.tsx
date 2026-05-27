import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Camera, ChevronLeft, ChevronRight, X, Maximize2, Instagram } from 'lucide-react';

interface GalleryProps {
  lang: 'es' | 'en';
}

export default function Gallery({ lang }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const content = {
    es: {
      tag: 'CULTURA COOPERATIVA',
      title: 'El latido del club.',
      subtitle: 'Momentos sin filtrar capturados por nuestra comunidad de surfistas y fotógrafos locales en la costa atlántica.',
      tabs: {
        all: 'Ver Todo',
        surfing: 'Olas & Acción',
        community: 'Familia & Clanes',
        nature: 'El Santuario',
        lifestyle: 'Esencia Surf'
      },
      instagramCta: 'Sigue la marea',
      ofLabel: 'de'
    },
    en: {
      tag: 'COOPERATIVE CULTURE',
      title: 'The pulse of the club.',
      subtitle: 'Raw, unfiltered snapshots captured by our community of local surfers, coaches, and photographers on Galicia’s Atlantic sands.',
      tabs: {
        all: 'Show All',
        surfing: 'Waves & Action',
        community: 'Family & Tribe',
        nature: 'The Sanctuary',
        lifestyle: 'Surf Essences'
      },
      instagramCta: 'Follow the tide',
      ofLabel: 'of'
    }
  };

  const current = content[lang];

  // Filtering images based on active tab category
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    let nextIdx = lightboxIndex;
    if (direction === 'next') {
      nextIdx = (lightboxIndex + 1) % GALLERY_ITEMS.length;
    } else {
      nextIdx = (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    }
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#ffffff] border-t border-slate-100 overflow-hidden">
      
      {/* Outer ambient subtle water reflection lights */}
      <div className="absolute bottom-1/4 right-0 w-[30vh] h-[30vh] rounded-full bg-slate-50/50 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title track & Filter menu */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#38bdf8] font-bold tracking-[0.3em] uppercase mb-4 block">
              {current.tag}
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6 uppercase">
              {current.title}
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              {current.subtitle}
            </p>
          </div>

          <a
            href="https://www.instagram.com/patrissurf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-4 rounded-none border border-slate-200 hover:border-[#38bdf8] bg-slate-50 hover:bg-[#38bdf8]/5 text-slate-800 hover:text-[#38bdf8] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 self-start shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>{current.instagramCta}</span>
          </a>
        </div>

        {/* Tab Selection (Geometric sharp categories) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-8 mb-12">
          {Object.entries(current.tabs).map(([key, label]) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-none font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 relative ${
                  active ? 'text-white animate-none' : 'text-slate-500 hover:text-[#020617]'
                }`}
              >
                <span className="relative z-10">{label}</span>
                {active && (
                  <motion.span
                    layoutId="activeGalleryFilter"
                    className="absolute inset-0 bg-[#38bdf8] rounded-none z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Masonry Bento Grid with Geometric sharp structures */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-bento-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-none bg-[#ffffff] border border-slate-200 aspect-[4/3] shadow-sm"
              >
                {/* Visual wrap with zoom transitions */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform grayscale-[15%] group-hover:grayscale-0 filter"
                  />
                </div>

                {/* Dark Vignette Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                  <div className="flex items-center space-x-2 text-[#38bdf8] text-[10px] font-mono tracking-widest uppercase mb-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>
                  <p className="font-sans text-xs text-white leading-relaxed font-light">
                    {item.caption}
                  </p>
                </div>

                {/* Micro Expand Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-none bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5 text-white/80" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Extreme Visual Lightbox Slide System */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 shadow-2xl" id="lightbox-backdrop">
            
            {/* Deep Glass overlay backing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-[#020617]/98 backdrop-blur-xl"
            />

            {/* Micro noise system to anchor film look */}
            <div className="absolute inset-0 grain-overlay z-10 pointer-events-none" />

            {/* Header Control overlay bar */}
            <div className="absolute top-6 left-0 w-full z-20 px-6 flex items-center justify-between pointer-events-none">
              <div className="flex flex-col text-left pointer-events-auto">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                  PATRIS SURF GALLERY
                </span>
                <span className="font-sans text-xs text-white font-medium">
                  {lightboxIndex + 1} {current.ofLabel} {GALLERY_ITEMS.length}
                </span>
              </div>
              
              <button
                onClick={() => setLightboxIndex(null)}
                className="pointer-events-auto p-3 rounded-none hover:bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Primary Visual Block */}
            <div className="relative w-full max-w-5xl aspect-video max-h-[70vh] flex items-center justify-center z-10">
              
              {/* Navigation trigger left */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 p-4 rounded-none bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#38bdf8] transition-all z-20 focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center pointer-events-none p-4 select-none"
                >
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                    alt={GALLERY_ITEMS[lightboxIndex].caption}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain rounded-none border border-white/10 shadow-2.5xl pointer-events-auto"
                  />
                </motion.div>
               </AnimatePresence>

              {/* Navigation trigger right */}
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 p-4 rounded-none bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#38bdf8] transition-all z-20 focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 max-w-xl text-center mt-6 p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#38bdf8] block mb-2 font-bold">
                #{GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-white/85 max-w-md mx-auto">
                "{GALLERY_ITEMS[lightboxIndex].caption}"
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
