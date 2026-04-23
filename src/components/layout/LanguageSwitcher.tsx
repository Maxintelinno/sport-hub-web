'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    console.log('SWITCHING LANGUAGE TO:', newLocale);
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale as any });
  };

  const languages = [
    { code: 'th', label: 'TH', name: t('lang_th') },
    { code: 'en', label: 'EN', name: t('lang_en') },
    { code: 'zh', label: '中文', name: t('lang_zh') },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/20 active:scale-95"
        style={{ color: 'inherit' }}
      >
        <Globe className="h-5 w-5" />
        <span className="font-bold text-sm">{locale.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-3 w-48 bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-[999] border border-gray-100 animate-in fade-in zoom-in duration-200"
          style={{ position: 'absolute', top: '100%', right: 0 }}
        >
          <div className="p-2 bg-gray-50/50">
            <p className="text-[10px] font-bold text-gray-400 px-3 py-1 uppercase tracking-widest">Select Language</p>
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLanguageChange(lang.code);
                }}
                className={`w-full text-left px-4 py-3 text-sm rounded-xl mb-1 last:mb-0 flex items-center justify-between transition-all ${
                  locale === lang.code 
                    ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20' 
                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm">{lang.name}</span>
                  <span className={`text-[10px] ${locale === lang.code ? 'text-white/70' : 'text-gray-400'}`}>{lang.label}</span>
                </div>
                {locale === lang.code && (
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
