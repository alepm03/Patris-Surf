const SPONSORS = [
  { name: 'Gobierno Vasco', sub: 'Gizarte Politika' },
  { name: 'CaixaProinfancia', sub: 'Programa Social' },
  { name: 'Ayuntamiento de Donostia', sub: 'San Sebastian' },
  { name: 'Fundacion La Caixa', sub: 'Accion Social' },
  { name: 'Kutxa Fundazioa', sub: 'Fundacion Local' },
  { name: 'Gobierno Vasco', sub: 'Empleo y Politicas Sociales' },
];

export default function SponsorTicker() {
  const items = [...SPONSORS, ...SPONSORS];

  return (
    <div className="w-full bg-slate-950 border-t border-slate-800 overflow-hidden py-4 select-none">
      <div className="flex items-center gap-0 animate-marquee" style={{ width: 'max-content' }}>
        {items.map((s, i) => (
          <div key={i} className="flex items-center shrink-0">
            <div className="flex items-center gap-3 px-10">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                {s.sub}
              </span>
              <span className="font-display font-black text-xs uppercase tracking-widest text-white/80">
                {s.name}
              </span>
            </div>
            <span className="text-[#3de5bd] text-xs font-mono opacity-40">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
