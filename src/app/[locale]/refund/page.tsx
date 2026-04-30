'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { RotateCcw, ChevronLeft, Calendar, List, ArrowUp, Clock, BadgePercent } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function RefundPage() {
  const t = useTranslations('Refund');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = [
    { id: 'overview', title: t('overview_title'), content: t('overview_content') },
    { id: 'timeframes', title: t('timeframes_title'), list: t.raw('timeframes_list') },
    { id: 'methods', title: t('methods_title'), content: t('methods_content') },
    { id: 'rules', title: t('rules_title'), list: t.raw('rules_list') },
    { id: 'failure', title: t('failure_title'), content: t('failure_content') },
    { id: 'system_cancel', title: t('system_cancel_title'), content: t('system_cancel_content') },
    { id: 'abuse', title: t('abuse_title'), content: t('abuse_content') },
    { id: 'final_rights', title: t('final_rights_title'), content: t('final_rights_content') },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -70% 0px' }
    );

    window.addEventListener('scroll', handleScroll);
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F2937] antialiased">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-xl hover:bg-gray-50 transition-all text-[#0B3D2E] group">
              <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
            </Link>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-6 w-6 text-[#0B3D2E]" />
              <h1 className="text-xl font-black tracking-tight text-[#0B3D2E]">{t('title')}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-1 rounded-xl flex items-center gap-1 border border-gray-200/50">
              {['th', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                    locale === l ? "bg-[#0B3D2E] text-white shadow-sm" : "text-gray-500 hover:text-[#0B3D2E]"
                  )}
                >
                  {l === 'th' ? 'ไทย' : 'EN'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 hidden lg:block">
            <div className="sticky top-32 bg-white p-6 rounded-[2rem] shadow-md border border-gray-100 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0B3D2E]/20 scrollbar-track-transparent">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B3D2E]/60 mb-6 flex items-center gap-2">
                <List className="h-4 w-4" />
                สารบัญ
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 font-medium",
                      activeSection === section.id
                        ? "bg-[#0B3D2E]/5 text-[#0B3D2E] font-bold border-l-4 border-[#0B3D2E]"
                        : "text-gray-500 hover:text-[#0B3D2E] hover:bg-gray-50"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100/50">
            {/* Content Blocks */}
            <div className="space-y-16">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-black text-[#0B3D2E] tracking-tight mb-4">
                    {section.title}
                  </h2>

                  <div className="pl-6 border-l-2 border-gray-100 hover:border-[#0B3D2E]/30 transition-colors">
                    {section.content && (
                      <p className="text-gray-600 leading-relaxed text-[1.05rem] font-medium whitespace-pre-wrap">
                        {section.content}
                      </p>
                    )}
                    
                    {section.id === 'timeframes' && section.list && Array.isArray(section.list) && (
                      <div className="mt-6 grid grid-cols-1 gap-4">
                        {section.list.map((item: string, i: number) => {
                          const parts = item.split('→');
                          const time = parts[0]?.trim();
                          const refund = parts[1]?.trim();
                          
                          return (
                            <div 
                              key={i} 
                              className={cn(
                                "flex items-center justify-between p-5 rounded-[1.5rem] border font-medium transition-all",
                                i === 0 ? "bg-green-50/40 border-green-100 text-green-900" : 
                                i === 1 ? "bg-amber-50/40 border-amber-100 text-amber-900" : 
                                "bg-red-50/40 border-red-100 text-red-900"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 shrink-0" />
                                <span className="text-base font-semibold">{time}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-xl shadow-sm border border-inherit/30">
                                <BadgePercent className="h-4 w-4 text-[#0B3D2E]" />
                                <span className="text-sm font-bold text-[#0B3D2E]">{refund}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {section.id !== 'timeframes' && section.list && Array.isArray(section.list) && (
                      <ul className="grid grid-cols-1 gap-3 mt-4">
                        {section.list.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/20 hover:bg-gray-50 transition-all font-medium text-gray-700 text-[0.95rem]">
                            <div className="w-2 h-2 bg-[#0B3D2E] rounded-full mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-40 shadow-2xl p-4 flex justify-center items-center">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">มีผลบังคับใช้: 24 เมษายน 2569</span>
          </div>
          <Link
            href="/"
            className="w-full md:w-auto text-center bg-[#0B3D2E] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#07281E] transition-all shadow-lg hover:shadow-xl active:scale-98"
          >
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 bg-white text-[#0B3D2E] border border-gray-200 p-3.5 rounded-full shadow-xl hover:shadow-2xl"
        >
          <ArrowUp className="h-5 w-5 font-bold" />
        </button>
      )}
    </div>
  );
}
