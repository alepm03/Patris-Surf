import Hero from '../components/Hero';
import About from '../components/About';
import SocialImpact from '../components/SocialImpact';
import { useLang } from '../context/LangContext';

export default function HomePage() {
  const { lang } = useLang();
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <SocialImpact lang={lang} />
    </>
  );
}
