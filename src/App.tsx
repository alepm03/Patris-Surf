import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AnnualActivities from './components/AnnualActivities';
import SchoolHolidays from './components/SchoolHolidays';
import SocialImpact from './components/SocialImpact';
import Shop from './components/Shop';
import Collaborations from './components/Collaborations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section on scrolling to update Navbar Spring indicators dynamically
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'annual',
      'holidays',
      'social',
      'shop',
      'collaborations',
      'gallery',
      'contact'
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Target middle chunk of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] font-sans antialiased text-slate-900 selection:bg-[#38bdf8]/20 selection:text-[#020617]" id="main-app-node">
      
      {/* Embedded abstract background noise to enrich texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.06),transparent_40%)] pointer-events-none" />

      {/* Floating Header */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Core brand experiences and stories flow */}
      <main id="main-content-flow">
        
        {/* Fullscreen Video Hero banner */}
        <Hero lang={lang} />

        {/* Narrative Split Story */}
        <About lang={lang} />

        {/* Annual Activities Program */}
        <AnnualActivities lang={lang} />

        {/* School Holiday Camps */}
        <SchoolHolidays lang={lang} />

        {/* Social Impact, Inclusion, and Adaptive Programs */}
        <SocialImpact lang={lang} />

        {/* Streetwear Lifestyle Shop */}
        <Shop lang={lang} />

        {/* Official institutional collaborations and certifications */}
        <Collaborations lang={lang} />

        {/* Masonry filter picture gallery */}
        <Gallery lang={lang} />

        {/* Checkout inquiry booking forms with Interactive Dark Map */}
        <Contact lang={lang} />

      </main>

      {/* Signature copyright footer board */}
      <Footer lang={lang} />

    </div>
  );
}
