import AnnualActivities from '../components/AnnualActivities';
import SchoolHolidays from '../components/SchoolHolidays';
import { useLang } from '../context/LangContext';

export default function ActividadesPage() {
  const { lang } = useLang();
  return (
    <>
      <AnnualActivities lang={lang} />
      <SchoolHolidays lang={lang} />
    </>
  );
}
