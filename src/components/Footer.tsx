import { Heart, ArrowUp, Instagram, Mail, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    es: {
      tagline: 'Entidad social sin ánimo de lucro dedicada a la integración a través del surf en Donostia desde 2014.',
      col1Header: 'Sede & Spot',
      col1Line1: 'Calle Usandizaga 7, Gros',
      col1Line2: 'Donostia / San Sebastián 20002',
      col1Line3: 'Gipuzkoa',
      col2Header: 'El Club',
      col2Links: [
        { label: 'El Club', href: '#about' },
        { label: 'Mareas Anuales', href: '#annual' },
        { label: 'Camps Escolares', href: '#holidays' },
        { label: 'Compromiso Social', href: '#social' },
        { label: 'Surf Wear Shop', href: '#shop' },
        { label: 'Alianzas / Colaboras', href: '#collaborations' }
      ],
      col3Header: 'Legal',
      col3Links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos & Reservas', href: '#' },
        { label: 'Compromiso Adaptativo', href: '#' }
      ],
      seal: 'Patris 2014 · Registro Entidades Deportivas Gobierno Vasco nº CD0005912',
      backTop: 'Volver arriba'
    },
    en: {
      tagline: 'Non-profit entity dedicated to integration through surfing in Donostia since 2014.',
      col1Header: 'Location & Spot',
      col1Line1: 'Calle Usandizaga 7, Gros',
      col1Line2: 'Donostia / San Sebastián 20002',
      col1Line3: 'Gipuzkoa',
      col2Header: 'The Club',
      col2Links: [
        { label: 'The Club', href: '#about' },
        { label: 'Annual Tides', href: '#annual' },
        { label: 'School Camps', href: '#holidays' },
        { label: 'Social Project', href: '#social' },
        { label: 'Surf Wear Shop', href: '#shop' },
        { label: 'Our Partners', href: '#collaborations' }
      ],
      col3Header: 'Legal',
      col3Links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Bookings', href: '#' },
        { label: 'Adaptive Pact', href: '#' }
      ],
      seal: 'Patris 2014 · Basque Government Sports Registry nº CD0005912',
      backTop: 'Top'
    }
  };

  const current = content[lang];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-100 pt-20 pb-12 overflow-hidden" id="footer-container">
      
      {/* Wave decoration on top of deck */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#04f3af]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main horizontal deck flow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-100">
          
          {/* Logo brand & statement */}
          <div className="md:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2.5">
              <Logo className="w-8.5 h-8.5" />
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-xl tracking-wider text-[#020617] uppercase leading-none">
                  PATRIS <span className="text-[#04f3af]">SURF</span>
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-400 -mt-0.5">
                  Playa de la Zurriola
                </span>
              </div>
            </a>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-light max-w-sm text-left">
              {current.tagline}
            </p>

            {/* Social media targets */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/patrissurf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-slate-50 hover:bg-[#04f3af]/5 border border-slate-200 hover:border-[#04f3af] flex items-center justify-center text-slate-500 hover:text-[#020617] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Patris-Surf-1476020292661175/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-slate-50 hover:bg-[#04f3af]/5 border border-slate-200 hover:border-[#04f3af] flex items-center justify-center text-slate-500 hover:text-[#020617] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/patrissurf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-slate-50 hover:bg-[#04f3af]/5 border border-slate-200 hover:border-[#04f3af] flex items-center justify-center text-slate-500 hover:text-[#020617] transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:patrissurf@gmail.com"
                className="w-10 h-10 rounded-none bg-slate-50 hover:bg-[#04f3af]/5 border border-slate-200 hover:border-[#04f3af] flex items-center justify-center text-slate-500 hover:text-[#020617] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Contacts metrics */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-[#020617] mb-6">
              {current.col1Header}
            </h4>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              <p>{current.col1Line1}</p>
              <p>{current.col1Line2}</p>
              <p className="font-semibold text-[#020617]">{current.col1Line3}</p>
            </div>
          </div>

          {/* Col 2: Internal routes */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-[#020617] mb-6">
              {current.col2Header}
            </h4>
            <ul className="space-y-3">
              {current.col2Links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-slate-500 hover:text-[#04f3af] transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal stuff */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-[#020617] mb-6">
              {current.col3Header}
            </h4>
            <ul className="space-y-3 text-left">
              {current.col3Links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-slate-500 hover:text-[#04f3af] transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom micro copyrights deck row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-10 gap-6">
          <div className="flex flex-col items-start space-y-1.5 text-left select-none">
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} PATRIS SURF CLUB.
            </span>
            <span className="font-sans text-[11px] text-slate-500 font-light flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#04f3af]" />
              {current.seal}
            </span>
          </div>

          {/* Scroll to top button trigger */}
          <button
            onClick={handleScrollTop}
            className="group flex items-center space-x-2 px-5 py-3 rounded-none bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-[#04f3af]/5 text-slate-500 hover:text-[#020617] font-mono text-[10px] uppercase tracking-widest transition-all"
            aria-label="Scroll Top"
          >
            <span className="font-bold">{current.backTop}</span>
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
