'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { FileText, ChevronLeft, Calendar, Mail, Globe, List, ArrowUp, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const t = useTranslations('Terms');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>('intro');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = [
    { id: 'intro', title: t('intro_title'), content: t('intro_content') },
    { id: 'data_usage', title: t('data_usage_title'), content: t('data_usage_content') },
    { id: 'otp', title: t('otp_title'), content: t('otp_content') },
    { id: 'account', title: t('account_title'), content: t('account_content') },
    { id: 'booking', title: t('booking_title'), content: t('booking_content') },
    { id: 'payment', title: t('payment_title'), content: t('payment_content') },
    { id: 'refund', title: t('refund_title'), content: t('refund_content') },
    { id: 'credit', title: t('credit_title'), content: t('credit_content') },
    { id: 'prohibited', title: t('prohibited_title'), content: t('prohibited_content') },
    { id: 'rights', title: t('rights_title'), content: t('rights_content') },
    { id: 'liability', title: t('liability_title'), content: t('liability_content') },
    { id: 'security', title: t('security_title'), content: t('security_content') },
    { id: 'consent', title: t('consent_title'), content: t('consent_content') },
    { id: 'updates', title: t('updates_title'), content: t('updates_content') },
    { id: 'law', title: t('law_title'), content: t('law_content') },
    { id: 'acceptance', title: t('acceptance_title'), content: t('acceptance_content') },
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

  const copyLinkToSection = (id: string) => {
    const url = `${window.location.origin}${pathname}#${id}`;
    navigator.clipboard.writeText(url);
    alert('Copied section link to clipboard!');
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
              <FileText className="h-6 w-6 text-[#0B3D2E]" />
              <h1 className="text-xl font-black tracking-tight text-[#0B3D2E]">{t('title')}</h1>
              <span className="text-xs font-bold bg-[#0B3D2E]/10 text-[#0B3D2E] px-2 py-1 rounded-md ml-2">
                {t('version') || 'v1.0'}
              </span>
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
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-80 shrink-0 hidden lg:block">
            <div className="sticky top-32 bg-white p-6 rounded-[2rem] shadow-md border border-gray-100 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0B3D2E]/20 scrollbar-track-transparent">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B3D2E]/60 mb-6 flex items-center gap-2">
                <List className="h-4 w-4" />
                สารบัญ (Contents)
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
            {/* Mobile TOC */}
            <div className="lg:hidden mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <label className="text-xs font-bold text-[#0B3D2E]/60 uppercase mb-2 block">ข้ามไปยังส่วนที่ต้องการ</label>
              <select 
                className="w-full p-3 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]"
                onChange={(e) => scrollToSection(e.target.value)}
                value={activeSection || ''}
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

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
                  className="group scroll-mt-24"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-black text-[#0B3D2E] tracking-tight">
                      {section.title}
                    </h2>
                    <button
                      onClick={() => copyLinkToSection(section.id)}
                      className="opacity-0 group-hover:opacity-100 text-xs font-semibold text-gray-400 hover:text-[#0B3D2E] transition-opacity px-2 py-1 rounded-lg bg-gray-50"
                    >
                      คัดลอกลิงก์
                    </button>
                  </div>

                  <div className="pl-6 border-l-2 border-gray-100 group-hover:border-[#0B3D2E]/30 transition-colors">
                    {section.content && (
                      <p className="text-gray-600 leading-relaxed text-[1.05rem] whitespace-pre-wrap font-medium">
                        {section.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Acceptance Section (Final) */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="bg-[#0B3D2E]/5 p-6 rounded-3xl border border-[#0B3D2E]/10 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-[#0B3D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B3D2E] mb-1">ความรับผิดชอบในการใช้งาน</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    การใช้บริการอย่างต่อเนื่องหมายถึงการยินยอมปฏิบัติตามเงื่อนไขล่าสุดทุกประการ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-40 shadow-2xl p-4 flex justify-center items-center">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{t('last_updated')}</span>
          </div>
          <Link
            href="/privacy"
            className="w-full md:w-auto text-center bg-[#0B3D2E] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#07281E] transition-all shadow-lg hover:shadow-xl active:scale-98"
          >
            อ่านนโยบายความเป็นส่วนตัว
          </Link>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 bg-white text-[#0B3D2E] border border-gray-200 p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="h-5 w-5 font-bold" />
        </button>
      )}
    </div>
  );
}
