import { motion } from 'motion/react';
import { Heart, Sparkles, Smile, Handshake, ShieldCheck } from 'lucide-react';

interface SocialImpactProps {
  lang: 'es' | 'en';
}

export default function SocialImpact({ lang }: SocialImpactProps) {
  const content = {
    es: {
      tag: 'COMPROMISO SOCIAL',
      title: 'El mar cura. El mar une. El mar libera.',
      subtitle: 'Patris Surf nació con la convicción de que el deporte debe ser accesible para todos. Trabajamos la integración de colectivos vulnerables de Gipuzkoa, minimizando los obstáculos materiales y económicos para acceder al surf.',
      storytellerHeading: 'Integrando colectivos vulnerables a través del surf en Donostia.',
      storytellerText1: 'Se han detectado grupos de población con dificultades para acceder a la práctica del surf: menores y grupos de personas en riesgo de exclusión social. El objetivo de PATRIS SURF es ofrecer una práctica deportiva socio-educativa sin impedimentos, con las mayores garantías de accesibilidad posibles.',
      storytellerText2: 'Nuestros/as monitores/as y voluntarios/as están formados/as en Primeros Auxilios, Socorrismo Acuático, EHSF, Real Federación Española de Surf, Entrenamiento Personal y Funcional, Educación Social, Magisterio y otras titulaciones. Ofrecemos acompañamiento y enseñanza de iniciación adaptada a cada usuario/a.',
      pillars: [
        {
          icon: Heart,
          title: 'Surf Adaptado',
          desc: 'Sesiones de surf especialmente adaptadas a las necesidades de cada participante, con monitores especializados en diversidad funcional y colectivos vulnerables de Gipuzkoa.'
        },
        {
          icon: Smile,
          title: 'Integración Juvenil',
          desc: 'Fomento del deporte saludable para jóvenes en riesgo de exclusión social, inculcando valores de cooperación, respeto, autonomía y responsabilidad a través del surf.'
        },
        {
          icon: Handshake,
          title: 'Haz una Donación',
          desc: 'Con tu aportación, Patris desarrolla proyectos sociales a favor de colectivos vulnerables. Las donaciones están sujetas a la Ley 49/2002 de Incentivos Fiscales al Mecenazgo.'
        },
        {
          icon: ShieldCheck,
          title: 'Hazte Voluntario/a',
          desc: 'Ayuda a desarrollar nuestros proyectos sociales y participa en nuestras actividades sociales y medioambientales. Contacta con nosotros para más información.'
        }
      ],
      quote: '"El deporte es un universal cultural, de cuya práctica pueden derivar actitudes y valores como la cooperación, la autonomía, el diálogo, el respeto, la responsabilidad o la creatividad."',
      quoteAuthor: 'PATRIS SURF'
    },
    en: {
      tag: 'SOCIAL COMMITMENT',
      title: 'The sea heals. The sea unites. The sea frees.',
      subtitle: 'Patris Surf was born with the conviction that sport must be accessible to everyone. We work towards the integration of vulnerable groups in Gipuzkoa, minimising material and economic barriers to accessing surfing.',
      storytellerHeading: 'Integrating vulnerable groups through surfing in Donostia.',
      storytellerText1: 'Groups of people face difficulties accessing surfing: minors and groups at risk of social exclusion. The goal of PATRIS SURF is to offer socio-educational sports practice without barriers, with the highest possible guarantees of accessibility for everyone.',
      storytellerText2: 'Our instructors and volunteers are trained in First Aid, Water Lifeguarding, the Royal Spanish Surf Federation, Personal and Functional Training, Social Education, Primary Teaching, and other qualifications. We provide accompaniment and introductory teaching adapted to each user.',
      pillars: [
        {
          icon: Heart,
          title: 'Adaptive Surfing',
          desc: 'Surf sessions specially adapted to the needs of each participant, with instructors specialised in functional diversity and vulnerable groups across Gipuzkoa.'
        },
        {
          icon: Smile,
          title: 'Youth Integration',
          desc: 'Promoting healthy sport for young people at risk of social exclusion, instilling values of cooperation, respect, autonomy, and responsibility through surfing.'
        },
        {
          icon: Handshake,
          title: 'Make a Donation',
          desc: 'With your contribution, Patris develops social projects for vulnerable groups. Donations are subject to Law 49/2002 on tax incentives for patronage in Spain.'
        },
        {
          icon: ShieldCheck,
          title: 'Become a Volunteer',
          desc: 'Help develop our social projects and take part in our social and environmental activities. Get in touch with us for more information.'
        }
      ],
      quote: '"Sport is a cultural universal, from whose practice attitudes and values such as cooperation, autonomy, dialogue, respect, responsibility, and creativity can emerge."',
      quoteAuthor: 'PATRIS SURF'
    }
  };

  const current = content[lang];

  return (
    <section id="social" className="relative py-24 md:py-32 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-left">
      <div className="absolute top-1/2 left-1/4 w-[45vw] h-[45vw] rounded-full bg-slate-50/50 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs text-[#04f3af] font-bold tracking-[0.3em] uppercase mb-4 block">
            {current.tag}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#020617] mb-6 uppercase leading-none">
            {current.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-2xl">
            {current.subtitle}
          </p>
        </div>

        {/* Documentary split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-slate-100 pb-20">

          {/* Left storytelling col (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#020617] uppercase tracking-tight">
              {current.storytellerHeading}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {current.storytellerText1}
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {current.storytellerText2}
            </p>

            {/* Quote Blockquote */}
            <div className="pt-6 border-l-2 border-[#04f3af] pl-6 italic font-serif text-slate-800 text-sm sm:text-base leading-relaxed">
              <p>"{current.quote}"</p>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#04f3af] font-bold block mt-3">
                — {current.quoteAuthor}
              </span>
            </div>
          </div>

          {/* Right graphic/illustration col (Col 6) */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full max-w-[500px] mx-auto overflow-hidden border border-slate-200 shadow-sm group">
            <div className="absolute inset-0 bg-slate-900/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
            <img
              src="/IMG_5103-scaled.jpg"
              alt="Community adaptive surfing inclusion"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale-[10%]"
            />

            {/* Stamp Badge */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#04f3af] text-white border border-[#04f3af]/20 rounded-none">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="font-mono text-[8px] font-bold uppercase tracking-wider">
                {lang === 'es' ? '100% ADAPTADO' : '100% ADAPTED'}
              </span>
            </div>
          </div>
        </div>

        {/* Pillars of Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20" id="social-pillars-deck">
          {current.pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-none bg-white border border-slate-200 hover:border-[#04f3af] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-dashed border-[#04f3af]/50 flex items-center justify-center text-[#04f3af] mb-6 rounded-none">
                    <PillarIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-black text-base text-[#020617] uppercase tracking-tight mb-3">
                    {pillar.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-500 font-light leading-relaxed mt-2 animate-none">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
