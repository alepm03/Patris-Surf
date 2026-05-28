import { motion } from 'motion/react';
import { Sparkles, Heart, Earth, Users } from 'lucide-react';

interface AboutProps {
  lang: 'es' | 'en';
}

export default function About({ lang }: AboutProps) {
  const content = {
    es: {
      sectionTitle: 'QUIÉNES SOMOS',
      mainHeading: 'Una entidad con espíritu juvenil e integrador en el corazón de Donostia.',
      introText1: 'PATRIS es una entidad con espíritu juvenil e integrador que busca enseñar todos los aspectos que envuelven la práctica del surf en San Sebastián. Trabajamos el deporte y los hábitos de vida saludable a nivel individual y colectivo, el respeto y cuidado del medio ambiente y la integración de colectivos vulnerables de todo Gipuzkoa.',
      introText2: 'El objetivo de PATRIS SURF es ofrecer una práctica deportiva socio-educativa sin que existan impedimentos, minimizando los obstáculos materiales y económicos para poner en práctica el proyecto con las mayores garantías y accesibilidad posibles. Se trata de un proyecto innovador dentro de la Comunidad Autónoma Vasca.',
      quote: '"El deporte es un universal cultural, de cuya práctica pueden derivar actitudes y valores como la cooperación, la autonomía, el diálogo, el respeto, la responsabilidad o la creatividad."',
      quoteAuthor: 'PATRIS SURF — Entidad Deportiva Gobierno Vasco nº CD0005912',
      values: [
        {
          icon: Heart,
          title: 'Integración Social',
          desc: 'Trabajamos la integración de colectivos vulnerables de todo Gipuzkoa, con sesiones especiales para menores y grupos en riesgo de exclusión social. Las actividades cuentan con un componente innovador cada vez más consolidado.'
        },
        {
          icon: Users,
          title: 'Deporte y Salud',
          desc: 'Fomentamos los hábitos de vida saludable a nivel individual y colectivo. Combinamos entrenamientos técnicos en el agua y en tierra con seguimiento personalizado para cada participante.'
        },
        {
          icon: Earth,
          title: 'Conciencia Ambiental',
          desc: 'Educamos en el respeto y cuidado del medio ambiente marino. Organizamos jornadas mensuales de limpieza en la Zurriola abiertas a toda la ciudadanía.'
        }
      ]
    },
    en: {
      sectionTitle: 'WHO WE ARE',
      mainHeading: 'A youth-driven, inclusive entity at the heart of Donostia.',
      introText1: 'PATRIS is a youth-driven inclusive entity dedicated to teaching all aspects of surfing in San Sebastián. We work on sports practice and healthy living habits, both individually and collectively, respect for the environment, and the integration of vulnerable groups across Gipuzkoa.',
      introText2: "PATRIS SURF's goal is to offer socio-educational sports practice without barriers, minimising material and economic obstacles to ensure the highest possible accessibility for everyone. It is an innovative project within the Basque Country.",
      quote: '"Sport is a cultural universal, from whose practice attitudes and values such as cooperation, autonomy, dialogue, respect, responsibility, and creativity can emerge."',
      quoteAuthor: 'PATRIS SURF — Basque Government Sports Registry nº CD0005912',
      values: [
        {
          icon: Heart,
          title: 'Social Integration',
          desc: 'We work towards the integration of vulnerable groups across Gipuzkoa, with special sessions for minors and people at risk of social exclusion. Our activities carry an increasingly consolidated innovative component.'
        },
        {
          icon: Users,
          title: 'Sport & Wellbeing',
          desc: 'We promote healthy living habits at both individual and collective levels, combining in-water and on-land training with personalised follow-up for each participant.'
        },
        {
          icon: Earth,
          title: 'Environmental Care',
          desc: 'We educate in respect for the marine environment. Every last Sunday of the month we organise open beach clean-up sessions at La Zurriola, available to all citizens.'
        }
      ]
    }
  };

  const current = content[lang];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#ffffff] overflow-hidden">

      {/* Abstract Glowing Accent Lights — corporate mint palette */}
      <div className="absolute top-1/3 right-0 w-[30vw] h-[30vw] rounded-full bg-[#cdefe4]/50 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[25vw] h-[25vw] rounded-full bg-[#cdefe4]/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Split Section Layout: Visual Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Block: Imagery collage with raw linear/sharp styling */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 order-last lg:order-first" id="about-imagery">
            <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] select-none">

              {/* Backing structural geometric line grid */}
              <div className="absolute -inset-4 border border-slate-200/50 rounded-none pointer-events-none" />

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-none overflow-hidden shadow-xl border border-slate-200"
              >
                <video
                  src="/Video Project 1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Badge Overlay */}
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-6 -left-6 px-5 py-3 rounded-none bg-[#3de5bd] text-[#020617] font-display font-medium text-xs tracking-widest uppercase shadow-xl z-20 hidden sm:flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#020617]" />
                <span>Est. 2014</span>
              </motion.div>
            </div>
          </div>

          {/* Right Block: Content area */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Header Track */}
            <span className="font-mono text-xs text-[#3de5bd] font-semibold tracking-[0.3em] uppercase mb-4 block">
              {current.sectionTitle}
            </span>

            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] leading-tight mb-8">
              {current.mainHeading}
            </h2>

            {/* Paragraph System */}
            <div className="space-y-6 font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-2xl mb-10">
              <p>{current.introText1}</p>
              <p>{current.introText2}</p>
            </div>

            {/* Editorial blockquote */}
            <motion.div
              initial={{ borderLeftColor: 'rgba(0,0,0,0.05)' }}
              whileInView={{ borderLeftColor: '#3de5bd' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="border-l-[3px] pl-6 py-1 mb-6"
            >
              <p className="font-serif italic text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-3">
                {current.quote}
              </p>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#3de5bd] font-bold block">
                — {current.quoteAuthor}
              </span>
            </motion.div>

          </div>

        </div>

        {/* ===== ASYMMETRIC PHOTO BENTO — Values ===== */}
        <div className="mt-24 border-t border-slate-100 pt-16" id="about-values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[560px]">

            {/* ── Card 1: LARGE (2 cols) — Integración Social ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="md:col-span-2 relative overflow-hidden group cursor-default min-h-[300px] md:h-full"
            >
              <img
                src="/IMG_5103-scaled.jpg"
                alt={current.values[0].title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              {/* Dark gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-[#020617]/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/25 to-transparent" />
              {/* Mint accent lines */}
              <div className="absolute top-0 right-0 w-[2px] h-24 bg-[#3de5bd]" />
              <div className="absolute bottom-0 left-0 w-24 h-[2px] bg-[#3de5bd]/50" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#3de5bd] font-bold tracking-[0.4em] uppercase">01</span>
                  <div className="h-8 w-8 border border-[#3de5bd]/60 flex items-center justify-center text-[#3de5bd]">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
                    {current.values[0].title}
                  </h3>
                  <p className="font-sans text-sm text-white/75 md:opacity-0 md:group-hover:opacity-100 font-light leading-relaxed max-w-md md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-500">
                    {current.values[0].desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Right column: two stacked cards ── */}
            <div className="md:col-span-1 flex flex-col gap-2">

              {/* Card 2 — Deporte y Salud */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="flex-1 relative overflow-hidden group cursor-default min-h-[220px]"
              >
                <img
                  src="/pexels-chelsey-horne-757133-scaled.jpg"
                  alt={current.values[1].title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#3de5bd] font-bold tracking-[0.4em]">02</span>
                    <div className="h-7 w-7 border border-[#3de5bd]/60 flex items-center justify-center text-[#3de5bd]">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-tight leading-none mb-2">
                      {current.values[1].title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 md:opacity-0 md:group-hover:opacity-100 font-light leading-relaxed md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                      {current.values[1].desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — Conciencia Ambiental */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex-1 relative overflow-hidden group cursor-default min-h-[220px]"
              >
                <img
                  src="/Playa-Zurriola.jpg"
                  alt={current.values[2].title}
                  className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent" />
                {/* Subtle mint tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#3de5bd]/8" />
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#3de5bd]" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#3de5bd] font-bold tracking-[0.4em]">03</span>
                    <div className="h-7 w-7 border border-[#3de5bd]/60 flex items-center justify-center text-[#3de5bd]">
                      <Earth className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-tight leading-none mb-2">
                      {current.values[2].title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 md:opacity-0 md:group-hover:opacity-100 font-light leading-relaxed md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                      {current.values[2].desc}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
