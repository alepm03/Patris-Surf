import { createContext, useContext, useState } from 'react';

interface LangContextType {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
