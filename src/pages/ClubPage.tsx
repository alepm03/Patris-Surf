import About from '../components/About';
import { useLang } from '../context/LangContext';

export default function ClubPage() {
  const { lang } = useLang();
  return <About lang={lang} />;
}
