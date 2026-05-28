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

      {/* Abstract Glowing Accent Lights */}
      <div className="absolute top-1/3 right-0 w-[30vw] h-[30vw] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[25vw] h-[25vw] rounded-full bg-slate-100/30 blur-[120px] pointer-events-none" />

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
                className="absolute -top-6 -left-6 px-5 py-3 rounded-none bg-[#04f3af] text-white font-display font-medium text-xs tracking-widest uppercase shadow-xl z-20 hidden sm:flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Est. 2014</span>
              </motion.div>
            </div>
          </div>

          {/* Right Block: Content area */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Header Track */}
            <span className="font-mono text-xs text-[#04f3af] font-semibold tracking-[0.3em] uppercase mb-4 block">
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
              whileInView={{ borderLeftColor: '#04f3af' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="border-l-[3px] pl-6 py-1 mb-6"
            >
              <p className="font-serif italic text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-3">
                {current.quote}
              </p>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#04f3af] font-bold block">
                — {current.quoteAuthor}
              </span>
            </motion.div>

          </div>

        </div>

        {/* Feature/Core Values Horizontal bento-like listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-slate-100 pt-16" id="about-values">
          {current.values.map((val, i) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                key={i}
                className="p-8 rounded-none bg-white border border-slate-100 shadow-sm hover:border-[#04f3af]/40 hover:shadow-md transition-all duration-300 group text-left"
              >
                <div className="h-10 w-10 border border-[#04f3af] flex items-center justify-center mb-6 group-hover:bg-[#04f3af] group-hover:text-white text-[#04f3af] transition-colors rounded-none">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
