import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sun, Shield, Users, Compass, Smile } from 'lucide-react';

interface SchoolHolidaysProps {
  lang: 'es' | 'en';
}

export default function SchoolHolidays({ lang }: SchoolHolidaysProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const content = {
    es: {
      tag: 'ACTIVIDADES VACACIONES ESCOLARES',
      title: 'Surf en cada vacación.',
      subtitle: 'Durante los recesos del calendario escolar ofrecemos programas de conciliación familiar, cursillos semanales y clases combinadas de surf y surf skate en la playa de la Zurriola, Donostia.',
      cards: [
        {
          id: 'conciliacion-familiar',
          badge: 'CONCILIACIÓN FAMILIAR',
          title: 'Actividades de Conciliación en Vacaciones',
          description: 'Colonias juveniles planificadas para las vacaciones escolares de navidad, semana santa y verano, con actividades deportivas, culturales, medioambientales y de ocio en San Sebastián.',
          perks: ['Lunes a viernes, 9:00 a 13:00', 'Navidad, Semana Santa y Verano', 'Actividades deportivas y culturales', 'Material incluido'],
          image: '/Captura de pantalla 2026-05-28 121506.png',
          accent: 'Navidad · Semana Santa · Verano'
        },
        {
          id: 'cursillos-semanales',
          badge: 'CURSILLOS DE SURF',
          title: 'Cursillos Semanales de Surf',
          description: 'Cursillos de una hora y media con todo el material incluido. Iniciación y perfeccionamiento durante las vacaciones escolares en la Zurriola. Inscripciones en Donostia Kirola (verano) o por correo electrónico.',
          perks: ['1h 30min por sesión', 'Horarios: 9:30 / 11:30 / 16:00', 'Todo el material incluido', 'Iniciación y perfeccionamiento'],
          image: '/Captura de pantalla 2026-05-28 121407.png',
          accent: 'Vacaciones escolares'
        },
        {
          id: 'surf-skate',
          badge: 'SURF & SURF SKATE',
          title: 'Cursillo Surf & Surf Skate',
          description: 'Cursos semanales de 3 horas combinando surf y surf skate. Una experiencia completa para aprender a dominar el deslizamiento dentro y fuera del agua. Material incluido.',
          perks: ['Lunes a viernes, 10:00 a 13:00', '3 horas de duración diaria', 'Surf + Surf Skate combinados', 'Material incluido'],
          image: '/Captura de pantalla 2026-05-28 121350.png',
          accent: 'Vacaciones escolares'
        }
      ],
      coexistencePromise: 'PERSONAL CUALIFICADO • Nuestros monitores y voluntarios están formados en Primeros Auxilios, Socorrismo Acuático, Educación Social, Real Federación Española de Surf y más.'
    },
    en: {
      tag: 'SCHOOL HOLIDAY ACTIVITIES',
      title: 'Surf every school break.',
      subtitle: 'During school holidays we offer family conciliation programmes, weekly surf courses, and combined surf and surf skate classes at La Zurriola beach in Donostia.',
      cards: [
        {
          id: 'conciliacion-familiar',
          badge: 'FAMILY CONCILIATION',
          title: 'Holiday Conciliation Activities',
          description: 'Youth camps planned for Christmas, Easter, and summer school holidays, featuring sports, cultural, environmental, and leisure activities in San Sebastián.',
          perks: ['Monday to Friday, 9:00 to 13:00', 'Christmas, Easter & Summer', 'Sports and cultural activities', 'All materials included'],
          image: '/Captura de pantalla 2026-05-28 121506.png',
          accent: 'Christmas · Easter · Summer'
        },
        {
          id: 'cursillos-semanales',
          badge: 'SURF COURSES',
          title: 'Weekly Surf Courses',
          description: 'One and a half hour sessions with all equipment included. Beginner and intermediate levels during school holidays at La Zurriola. Registration via Donostia Kirola (summer) or by email.',
          perks: ['1h 30min per session', 'Timetables: 9:30 / 11:30 / 16:00', 'All equipment included', 'Beginner & intermediate'],
          image: '/Captura de pantalla 2026-05-28 121407.png',
          accent: 'School holidays'
        },
        {
          id: 'surf-skate',
          badge: 'SURF & SURF SKATE',
          title: 'Surf & Surf Skate Course',
          description: 'Weekly 3-hour courses combining surfing and surf skating. A complete experience to master the slide in and out of the water. All equipment included.',
          perks: ['Monday to Friday, 10:00 to 13:00', '3 hours per day', 'Surf + Surf Skate combined', 'All materials included'],
          image: '/Captura de pantalla 2026-05-28 121350.png',
          accent: 'School holidays'
        }
      ],
      coexistencePromise: 'QUALIFIED STAFF • Our instructors and volunteers are trained in First Aid, Water Lifeguarding, Social Education, the Royal Spanish Surf Federation, and more.'
    }
  };

  const current = content[lang];

  return (
    <section id="holidays" className="relative py-24 md:py-32 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-left">
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] rounded-full bg-slate-100/30 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title Track */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs text-[#04f3af] font-bold tracking-[0.3em] uppercase mb-4 block">
            {current.tag}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6 uppercase">
            {current.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Dynamic Card Deck (Geometric layouts with premium hovers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" id="holiday-cards-deck">
          {current.cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative flex flex-col justify-between h-full rounded-none bg-white border border-slate-200 shadow-sm hover:border-[#04f3af]/55 hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                {/* Image background aspect */}
                <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/10 via-transparent to-transparent z-10" />
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="px-2.5 py-1 text-[8px] font-mono font-bold tracking-widest text-[#04f3af] bg-white border border-[#04f3af]/20 uppercase">
                      {card.accent}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#020617] uppercase tracking-tight mb-3 group-hover:text-[#04f3af] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Highlights/Perks Bullet System */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {card.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <Smile className="w-3.5 h-3.5 text-[#04f3af] shrink-0" />
                        <span className="font-sans text-[11px] text-slate-600 font-medium">
                          {perk}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#04f3af] transition-colors uppercase"
                    >
                      <span>{lang === 'es' ? 'Consultar plazas' : 'Check availability'}</span>
                      <Compass className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform animate-pulse" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cooperative Coexistence seal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center text-[10px] sm:text-xs font-mono tracking-widest text-slate-600 flex items-center justify-center gap-2.5 border border-slate-200/60 py-5 px-6 bg-slate-50"
        >
          <div className="w-5 h-5 bg-[#04f3af]/10 border border-[#04f3af] rounded-none flex items-center justify-center">
            <Sun className="w-3 h-3 text-[#04f3af] animate-spin" />
          </div>
          <span className="uppercase leading-relaxed">{current.coexistencePromise}</span>
        </motion.div>

      </div>
    </section>
  );
}
