import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const LanguageContext = createContext();

/**
 * LanguageProvider - Optimized to prevent unnecessary re-renders
 * Uses useMemo to memoize the context value so consumers only re-render
 * when language actually changes, not when parent re-renders
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // 'en' or 'zh'

  // Memoize toggleLanguage to ensure it doesn't change on every render
  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  // Memoize context value - only recreated when language changes
  // This prevents all consumers from re-rendering unnecessarily
  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
