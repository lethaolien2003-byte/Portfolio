import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppLanguage, translateText, subscribeTranslationUpdates } from '../services/translationService.ts';

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  toggleLanguage: () => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const PREFERRED_LANG_KEY = 'tali_portfolio_lang_preference';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    try {
      const saved = localStorage.getItem(PREFERRED_LANG_KEY);
      if (saved === 'en' || saved === 'vi') return saved;
    } catch {
      // ignore
    }
    return 'vi';
  });

  const [, setTick] = useState<number>(0);

  // Lắng nghe khi có bản dịch tự động mới tải xong ngầm
  useEffect(() => {
    const unsubscribe = subscribeTranslationUpdates(() => {
      setTick(prev => prev + 1);
    });
    return unsubscribe;
  }, []);

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(PREFERRED_LANG_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = (text: string): string => {
    return translateText(text, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
