import Contact from '../components/Contact';
import { useLang } from '../context/LangContext';

export default function ContactoPage() {
  const { lang } = useLang();
  return <Contact lang={lang} />;
}
