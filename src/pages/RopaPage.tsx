import Shop from '../components/Shop';
import { useLang } from '../context/LangContext';

export default function RopaPage() {
  const { lang } = useLang();
  return <Shop lang={lang} />;
}
