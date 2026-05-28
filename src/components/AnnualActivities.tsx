import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Calendar, BookOpen, Compass } from 'lucide-react';

interface AnnualActivitiesProps {
  lang: 'es' | 'en';
}

export default function AnnualActivities({ lang }: AnnualActivitiesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const content = {
    es: {
      tag: 'ACTIVIDADES ANUALES',
      title: 'Actividades para todo el año.',
      subtitle: 'Nuestra actividad no se detiene. Ofrecemos entrenamientos de perfeccionamiento, programas de inclusión social, servicio de guarda-tablas y jornadas medioambientales durante todo el curso.',
      tabs: [
        {
          label: 'Entrenamientos para Surfistas',
          title: 'Perfeccionamiento Técnico y Físico',
          description: 'Programa orientado al perfeccionamiento técnico y físico del/a surfista, con un enfoque de rendimiento deportivo. Se combinan sesiones en playa y gimnasio —skate, running, TRX, Bosu, fuerza y movilidad— con entrenamientos en el agua apoyados en videograbación y análisis técnico.',
          details: [
            'Seguimiento anual y licencia federativa incluidos en el programa.',
            'Sesiones en playa y en gimnasio: skate, running, TRX, Bosu, fuerza y movilidad.',
            'Entrenamientos en el agua con videograbación y análisis técnico cuadro a cuadro.',
            'Preparación completa para optimizar el rendimiento. Desde 60€/mes por un entrenamiento semanal.'
          ],
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
          icon: Calendar
        },
        {
          label: 'Surf & Inclusión Social',
          title: 'Actividades Sociales "Surf & Inclusion"',
          description: 'Jornadas de surf con asociaciones, centros, pisos de menores y familias en intervención. Hacemos el surf accesible a colectivos vulnerables de todo Gipuzkoa, con sesiones trimestrales, semanales o mensuales adaptadas a cada grupo.',
          details: [
            'Jornadas trimestrales con asociaciones y centros de Gipuzkoa.',
            'Sesiones semanales o mensuales para jóvenes de recursos residenciales y familias en intervención.',
            'Monitores formados en educación social, socorrismo y surf adaptado.',
            'Material deportivo y equipamiento completo proporcionado por el club.'
          ],
          image: '/IMG_5103-scaled.jpg',
          icon: Shield
        },
        {
          label: 'Guarda-Tablas',
          title: 'Servicio de Guarda-Tablas del Club',
          description: 'Deja tu tabla y neopreno en nuestras instalaciones con total tranquilidad. Un servicio pensado para la comunidad surfera de Donostia en un ambiente amigable y familiar, con acceso completo a las instalaciones del club.',
          details: [
            'Precio desde 40€ al mes.',
            'Almacenamiento seguro de tabla y neopreno.',
            'Acceso a las instalaciones del Club con derecho de uso.',
            'Ambiente amigable y familiar en el corazón de Donostia.'
          ],
          image: '/pexels-chelsey-horne-757133-scaled.jpg',
          icon: BookOpen
        },
        {
          label: 'Medio Ambiente',
          title: 'Jornadas de Sensibilización en la Zurriola',
          description: 'Jornadas mensuales de sensibilización medioambiental y recogida de residuos en la playa de la Zurriola. Una actividad de carácter voluntario, abierta a toda la ciudadanía, para cuidar y concienciar sobre el entorno marino.',
          details: [
            'Actividad mensual de aproximadamente 2 horas de duración.',
            'Se celebra el último domingo de cada mes en la playa de la Zurriola.',
            'Abierto a toda la ciudadanía. Participación de carácter voluntario.',
            'Se proporciona todo el material necesario para la realización de la actividad.'
          ],
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
          icon: Compass
        }
      ]
    },
    en: {
      tag: 'ANNUAL ACTIVITIES',
      title: 'Activities throughout the year.',
      subtitle: 'Our work never stops. We offer technical training sessions, social inclusion programmes, a board-storage service, and environmental awareness days throughout the whole year.',
      tabs: [
        {
          label: 'Surf Training',
          title: 'Technical & Physical Performance',
          description: 'A programme focused on the technical and physical improvement of the surfer, with a sports performance approach. We combine beach and gym sessions — skate, running, TRX, Bosu, strength and mobility — with in-water training backed by video recording and technical analysis.',
          details: [
            'Annual follow-up and federated licence included in the programme.',
            'Beach and gym sessions: skate, running, TRX, Bosu, strength and mobility.',
            'In-water sessions with video recording and frame-by-frame technical analysis.',
            'Full preparation to optimise performance. From €60/month for one weekly session.'
          ],
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
          icon: Calendar
        },
        {
          label: 'Surf & Social Inclusion',
          title: 'Social Activities "Surf & Inclusion"',
          description: 'Surf sessions with associations, centres, youth residences, and families in intervention. We make surfing accessible to vulnerable groups across Gipuzkoa, with quarterly, weekly, or monthly sessions adapted to each group.',
          details: [
            'Quarterly sessions with associations and social centres across Gipuzkoa.',
            'Weekly or monthly sessions for young people from residential resources and families in intervention.',
            'Instructors trained in social education, lifeguarding, and adaptive surfing.',
            'All sports equipment and gear provided by the club.'
          ],
          image: '/IMG_5103-scaled.jpg',
          icon: Shield
        },
        {
          label: 'Board Storage',
          title: 'Club Board Storage Service',
          description: 'Leave your board and wetsuit at our facilities with total peace of mind. A service designed for the Donostia surf community in a friendly and family atmosphere, with full access to the club\'s facilities.',
          details: [
            'From €40 per month.',
            'Safe storage for board and wetsuit.',
            'Access to the Club\'s facilities with right of use.',
            'Friendly and family atmosphere in the heart of Donostia.'
          ],
          image: '/pexels-chelsey-horne-757133-scaled.jpg',
          icon: BookOpen
        },
        {
          label: 'Environment',
          title: 'Environmental Awareness at La Zurriola',
          description: 'Monthly environmental awareness and litter-picking sessions at La Zurriola beach. A voluntary, open-to-all activity to care for and raise awareness about the marine environment.',
          details: [
            'Monthly activity of approximately 2 hours.',
            'Held on the last Sunday of every month at La Zurriola beach.',
            'Open to all citizens. Voluntary participation.',
            'All necessary materials provided for the activity.'
          ],
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
          icon: Compass
        }
      ]
    }
  };

  const current = content[lang];
  const activeProgram = current.tabs[activeTab];
  const ActiveIcon = activeProgram.icon;

  return (
    <section id="annual" className="relative py-24 md:py-32 bg-[#fafafc] border-t border-slate-100 overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Block */}
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

        {/* Dynamic Horizontal Program Deck Switcher */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/60 pb-8 mb-12">
          {current.tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-none font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 relative ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeAnnualTabBg"
                    className="absolute inset-0 bg-[#04f3af] rounded-none z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel with cinematic split screen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Descriptive Content (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200 text-[#04f3af]">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#020617] uppercase tracking-tight">
                  {activeProgram.title}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 font-light leading-relaxed">
                {activeProgram.description}
              </p>

              {/* Precise bullet list details */}
              <div className="pt-4 space-y-3.5">
                {activeProgram.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#04f3af] rounded-none mt-2 shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-slate-500 font-light">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pre-book anchor trigger */}
              <div className="pt-6">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 group text-xs font-mono font-bold tracking-widest text-[#04f3af] uppercase hover:text-slate-800 transition-colors"
                >
                  <span>{lang === 'es' ? 'CONTACTAR E INSCRIBIRSE' : 'GET IN TOUCH & ENROL'}</span>
                  <span className="p-1 px-1.5 bg-slate-50 border border-slate-200 rounded-none group-hover:bg-[#04f3af] group-hover:border-[#04f3af] group-hover:text-white transition-colors">→</span>
                </Link>
              </div>
            </div>

            {/* Immersive Image Canvas (Col 5) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 aspect-[4/3] w-full max-w-[480px] mx-auto overflow-hidden border border-slate-200">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale-[10%]"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-brand-navy border border-slate-800 rounded-none">
                <Sparkles className="w-3.5 h-3.5 text-[#04f3af]" />
                <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                  {lang === 'es' ? 'MÉTODO DE CLUB' : 'CLUB METHODOLOGY'}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
