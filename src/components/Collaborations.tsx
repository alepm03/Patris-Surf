import { ShieldCheck, ArrowRight, Award, HelpCircle } from 'lucide-react';

interface CollaborationsProps {
  lang: 'es' | 'en';
}

export default function Collaborations({ lang }: CollaborationsProps) {
  const content = {
    es: {
      tag: 'ENTIDADES COLABORADORAS',
      title: 'Juntos por el impacto social.',
      subtitle: 'La labor de Patris Surf está respaldada por entidades institucionales y fundaciones sociales que hacen posible el acceso al surf de colectivos vulnerables en Gipuzkoa.',
      descBlockTitle: 'Entidades Colaboradoras',
      descBlockText: 'El apoyo de estas instituciones es fundamental para el desarrollo de nuestros programas sociales, deportivos y medioambientales. Patris Surf está registrada como entidad deportiva del Gobierno Vasco nº CD0005912.',
      learnMoreBtn: 'Colabora con Nosotros',
      partners: [
        {
          name: 'Gobierno Vasco',
          role: 'Gizarte Politika',
          type: 'Patrocinio Institucional',
          desc: 'Apoyo institucional del Gobierno Vasco a través del Departamento de Política Social, reconociendo el valor de la práctica deportiva inclusiva.'
        },
        {
          name: 'CaixaProinfancia',
          role: 'Programa Social',
          type: 'Financiación Social',
          desc: 'Programa de apoyo a la infancia y adolescencia en situación de vulnerabilidad social, cofinanciando actividades de integración a través del surf.'
        },
        {
          name: 'Ayuntamiento de Donostia',
          role: 'San Sebastián',
          type: 'Soporte Municipal',
          desc: 'Colaboración municipal del Ayuntamiento de San Sebastián / Donostia para el fomento de actividades deportivas y sociales en la ciudad.'
        },
        {
          name: 'Fundación La Caixa',
          role: 'Acción Social',
          type: 'Financiación',
          desc: 'Financiación de programas de inclusión social y desarrollo comunitario orientados a la infancia y juventud en riesgo de exclusión.'
        },
        {
          name: 'Kutxa Fundazioa',
          role: 'Fundación Local',
          type: 'Colaborador Vasco',
          desc: 'Entidad colaboradora de referencia en Gipuzkoa, comprometida con el bienestar social y el desarrollo comunitario a través del deporte.'
        },
        {
          name: 'Gobierno Vasco',
          role: 'Empleo y Políticas Sociales',
          type: 'Apoyo Institucional',
          desc: 'Departamento de Empleo y Políticas Sociales del Gobierno Vasco, respaldando el modelo de intervención socio-deportiva de Patris Surf.'
        }
      ]
    },
    en: {
      tag: 'COLLABORATING ENTITIES',
      title: 'Together for social impact.',
      subtitle: 'The work of Patris Surf is backed by institutional entities and social foundations that make surfing accessible to vulnerable groups in Gipuzkoa.',
      descBlockTitle: 'Collaborating Entities',
      descBlockText: 'The support of these institutions is fundamental to the development of our social, sports, and environmental programmes. Patris Surf is registered as a sports entity of the Basque Government nº CD0005912.',
      learnMoreBtn: 'Collaborate With Us',
      partners: [
        {
          name: 'Gobierno Vasco',
          role: 'Gizarte Politika',
          type: 'Institutional Patron',
          desc: 'Institutional support from the Basque Government through the Department of Social Policy, recognising the value of inclusive sport.'
        },
        {
          name: 'CaixaProinfancia',
          role: 'Social Programme',
          type: 'Social Funding',
          desc: 'Support programme for children and adolescents in socially vulnerable situations, co-funding integration activities through surfing.'
        },
        {
          name: 'Donostia City Council',
          role: 'San Sebastián',
          type: 'Municipal Support',
          desc: 'Municipal collaboration from the San Sebastián / Donostia City Council to promote sports and social activities in the city.'
        },
        {
          name: 'Fundación La Caixa',
          role: 'Social Action',
          type: 'Funding',
          desc: 'Funding for social inclusion and community development programmes aimed at children and young people at risk of exclusion.'
        },
        {
          name: 'Kutxa Fundazioa',
          role: 'Local Foundation',
          type: 'Basque Collaborator',
          desc: 'A key collaborating entity in Gipuzkoa, committed to social wellbeing and community development through sport.'
        },
        {
          name: 'Gobierno Vasco',
          role: 'Employment & Social Policies',
          type: 'Institutional Support',
          desc: 'Department of Employment and Social Policies of the Basque Government, backing the socio-sporting intervention model of Patris Surf.'
        }
      ]
    }
  };

  const current = content[lang];

  return (
    <section id="collaborations" className="relative py-24 md:py-32 bg-[#fafafc] border-t border-slate-100 overflow-hidden text-left">
      <div className="absolute top-1/2 left-1/3 w-[40vw] h-[40vw] rounded-full bg-slate-100/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Deck */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs text-[#3de5bd] font-bold tracking-[0.3em] uppercase mb-4 block">
            {current.tag}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6 uppercase">
            {current.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Info Grid Split: Storytelling block on left (Col 4) vs Aligned Partners on right (Col 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block description (Col 4) */}
          <div className="lg:col-span-4 p-8 bg-white border border-slate-250 hover:border-[#3de5bd]/40 shadow-xs flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="p-3 bg-[#3de5bd]/10 border border-[#3de5bd]/20 text-[#3de5bd] inline-block">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-[#020617] uppercase tracking-tight">
                {current.descBlockTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {current.descBlockText}
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3de5bd] hover:text-[#020617] transition-colors uppercase"
              >
                <span>{current.learnMoreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Block Grids (Col 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" id="partners-blocks-deck">
            {current.partners.map((p, idx) => (
              <div
                key={idx}
                className="p-6 bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-slate-350 shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-[#3de5bd] font-bold tracking-widest uppercase pb-1.5 block">
                      {p.type}
                    </span>
                    <Award className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <h4 className="font-display font-black text-lg text-[#020617] uppercase tracking-tight">
                    {p.name}
                  </h4>
                  <span className="font-sans text-[11px] text-slate-500 font-light block">
                    {p.role}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed mt-4 pt-4 border-t border-slate-100">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
