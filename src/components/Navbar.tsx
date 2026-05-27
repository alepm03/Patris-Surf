import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Compass, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  activeSection: string;
}

export default function Navbar({ lang, setLang, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    es: [
      { id: 'home', label: 'Inicio', href: '#home' },
      { id: 'about', label: 'El Club', href: '#about' },
      { id: 'annual', label: 'Actividades', href: '#annual' },
      { id: 'shop', label: 'Ropa', href: '#shop' },
      { id: 'gallery', label: 'Lifestyle', href: '#gallery' },
      { id: 'contact', label: 'Contacto/Reservas', href: '#contact' },
    ],
    en: [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'about', label: 'The Club', href: '#about' },
      { id: 'annual', label: 'Activities', href: '#annual' },
      { id: 'shop', label: 'Shop', href: '#shop' },
      { id: 'gallery', label: 'Lifestyle', href: '#gallery' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ]
  };

  const currentLinks = navLinks[lang];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="group flex items-center space-x-3 relative z-50"
            id="nav-logo"
          >
            <Logo className="w-9.5 h-9.5" />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-lg tracking-wider uppercase leading-none text-[#020617] transition-colors duration-300">
                PATRIS <span className="text-[#38bdf8]">SURF</span>
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] -mt-0.5 text-slate-500 transition-colors duration-300">
                Playa de la Zurriola
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {currentLinks.map((link) => {
                const isActive = activeSection === link.id || (link.id === 'annual' && activeSection === 'holidays');
                return (
                  <li key={link.id} className="relative">
                    <a
                      href={link.href}
                      className={`font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-350 relative py-1 ${
                        isActive
                          ? 'text-[#38bdf8]'
                          : 'text-slate-600 hover:text-[#020617]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-[#38bdf8]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1.5 border-l border-slate-200/80 pl-6">
              <button
                onClick={() => setLang('es')}
                className={`text-[10px] font-mono font-bold tracking-widest px-2 py-1 rounded-none transition-all ${
                  lang === 'es'
                    ? 'bg-[#38bdf8] text-white'
                    : 'text-slate-400 hover:text-slate-800'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-[10px] font-mono font-bold tracking-widest px-2 py-1 rounded-none transition-all ${
                  lang === 'en'
                    ? 'bg-[#38bdf8] text-white'
                    : 'text-slate-400 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Booking CTA */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-none bg-[#38bdf8] text-white font-display font-bold text-xs tracking-widest uppercase hover:bg-[#020617] transition-all duration-300 shadow-sm"
            >
              {lang === 'es' ? 'COMIENZA' : 'JOIN NOW'}
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center space-x-4 md:hidden relative z-50">
            {/* Quick lang switch for mobile */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`text-xs font-mono rounded px-2.5 py-1.5 border transition-all ${
                isOpen 
                  ? 'text-white/70 border-white/20 hover:border-[#38bdf8] hover:text-[#38bdf8]' 
                  : 'text-slate-600 border-slate-200 hover:border-[#38bdf8] hover:text-[#38bdf8] bg-white/80'
              }`}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-none transition-colors focus:outline-none ${
                isOpen 
                  ? 'text-white hover:bg-white/5' 
                  : 'text-slate-800 hover:text-[#38bdf8] hover:bg-slate-100/50'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-navy/98 z-40 md:hidden flex flex-col justify-center px-8"
          >
            {/* Background elements */}
            <div className="absolute inset-x-0 top-0 overflow-hidden h-[400px] pointer-events-none opacity-20">
              <svg className="absolute w-[200%] h-full text-brand-cyan/30 -translate-x-1/4 -translate-y-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 C30,40 70,60 100,50 L100,0 L0,0 Z" fill="currentColor" />
              </svg>
            </div>

            <nav className="relative z-10 flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-3 border-b border-white/5 pb-4 mb-4"
              >
                <Logo className="w-8.5 h-8.5" />
                <span className="font-display font-black text-lg tracking-wider text-white">
                  PATRIS <span className="text-[#38bdf8]">SURF</span>
                </span>
              </motion.div>

              <ul className="flex flex-col space-y-5">
                {currentLinks.map((link, i) => (
                  <motion.li
                    initial={{ x: -25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    key={link.id}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display font-black text-2xl tracking-widest uppercase text-white hover:text-[#38bdf8] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-white/5 flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-3 text-white/50 text-xs font-mono">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>Playa de la Zurriola, Donostia, Gipuzkoa</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center rounded-none bg-[#38bdf8] text-white font-display font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  {lang === 'es' ? 'APUNTARSE AHORA' : 'RESERVE SWELL'}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
