import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

export function LanguageSelector() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  useEffect(() => {
    const path = window.location.pathname;
    setLanguage(path.startsWith('/es') ? 'es' : 'en');
  }, []);

  const switchLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    const newPath = lang === 'en' ? '/' : '/es';
    window.location.href = newPath;
  }

  return (
    <div 
      className="fixed bottom-4 right-4 bg-[#001324] border border-[var(--accent)] rounded-lg overflow-hidden fade-in p-2"
    >
      <div className="flex items-center space-x-2">
        <Globe size={14} className="text-[var(--accent)]" />
        <button 
          onClick={() => switchLanguage('en')}
          className={`px-2 py-1 text-sm ${
            language === 'en' 
              ? 'bg-[var(--accent)] text-[#000813]' 
              : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
          } transition-colors`}
        >
          EN
        </button>
        <button 
          onClick={() => switchLanguage('es')}
          className={`px-2 py-1 text-sm ${
            language === 'es' 
              ? 'bg-[var(--accent)] text-[#000813]' 
              : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
          } transition-colors`}
        >
          ES
        </button>
      </div>
    </div>
  )
}

