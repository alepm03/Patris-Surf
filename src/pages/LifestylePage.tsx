import Gallery from '../components/Gallery';
import { useLang } from '../context/LangContext';

export default function LifestylePage() {
  const { lang } = useLang();
  return <Gallery lang={lang} />;
}
