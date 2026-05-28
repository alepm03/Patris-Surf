import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = {
    es: [
      { path: '/', label: 'Inicio' },
      { path: '/actividades', label: 'Actividades' },
      { path: '/ropa', label: 'Ropa' },
      { path: '/lifestyle', label: 'Lifestyle' },
      { path: '/contacto', label: 'Contacto' },
    ],
    en: [
      { path: '/', label: 'Home' },
      { path: '/actividades', label: 'Activities' },
      { path: '/ropa', label: 'Shop' },
      { path: '/lifestyle', label: 'Lifestyle' },
      { path: '/contacto', label: 'Contact' },
    ],
  };

  const currentLinks = navLinks[lang];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 relative z-50">
            <Logo className="w-9.5 h-9.5" />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-lg tracking-wider uppercase leading-none text-[#020617]">
                PATRIS <span className="text-[#3de5bd]">SURF</span>
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] -mt-0.5 text-slate-500">
                Surfing the system
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {currentLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <li key={link.path} className="relative">
                    <Link
                      to={link.path}
                      className={`font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-350 relative py-1 ${active ? 'text-[#3de5bd]' : 'text-slate-600 hover:text-[#020617]'
                        }`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-[#3de5bd]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language switcher */}
            <div className="flex items-center space-x-1.5 border-l border-slate-200/80 pl-6">
              {(['es', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[10px] font-mono font-bold tracking-widest px-2 py-1 rounded-none transition-all ${lang === l ? 'bg-[#3de5bd] text-[#020617]' : 'text-slate-400 hover:text-slate-800'
                    }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contacto"
              className="px-6 py-2.5 rounded-none bg-[#3de5bd] text-[#020617] font-display font-bold text-xs tracking-widest uppercase hover:bg-[#020617] hover:text-white transition-all duration-300 shadow-sm"
            >
              {lang === 'es' ? 'COMIENZA' : 'JOIN NOW'}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center space-x-4 md:hidden relative z-50">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`text-xs font-mono rounded px-2.5 py-1.5 border transition-all ${isOpen
                  ? 'text-white/70 border-white/20 hover:border-[#3de5bd] hover:text-[#3de5bd]'
                  : 'text-slate-600 border-slate-200 hover:border-[#3de5bd] hover:text-[#3de5bd] bg-white/80'
                }`}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-none transition-colors focus:outline-none ${isOpen
                  ? 'text-white hover:bg-white/5'
                  : 'text-slate-800 hover:text-[#3de5bd] hover:bg-slate-100/50'
                }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-navy/98 z-40 md:hidden flex flex-col justify-center px-8"
          >
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
                  PATRIS <span className="text-[#3de5bd]">SURF</span>
                </span>
              </motion.div>

              <ul className="flex flex-col space-y-5">
                {currentLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ x: -25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display font-black text-2xl tracking-widest uppercase transition-colors ${isActive(link.path) ? 'text-[#3de5bd]' : 'text-white hover:text-[#3de5bd]'
                        }`}
                    >
                      {link.label}
                    </Link>
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
                  <MapPin className="w-4 h-4 text-[#3de5bd]" />
                  <span>Playa de la Zurriola, Donostia, Gipuzkoa</span>
                </div>
                <Link
                  to="/contacto"
                  className="w-full py-4 text-center rounded-none bg-[#3de5bd] text-[#020617] font-display font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#020617] transition-all"
                >
                  {lang === 'es' ? 'APUNTARSE AHORA' : 'JOIN NOW'}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
