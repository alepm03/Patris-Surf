import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SponsorTicker from './SponsorTicker';
import Footer from './Footer';
import { useLang } from '../context/LangContext';

export default function Layout() {
  const { lang } = useLang();

  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] font-sans antialiased text-slate-900 selection:bg-[#04f3af]/20 selection:text-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.06),transparent_40%)] pointer-events-none" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <SponsorTicker />
      <Footer lang={lang} />
    </div>
  );
}
