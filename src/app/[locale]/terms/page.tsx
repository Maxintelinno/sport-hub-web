'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { FileText, ChevronLeft, Calendar, Mail, Globe, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const t = useTranslations('Terms');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'section-1', title: t('intro_title'), content: t('intro_content') },
    { id: 'section-2', title: t('registration_title'), list: t.raw('registration_list') },
    { id: 'section-3', title: t('booking_title'), list: t.raw('booking_list') },
    { id: 'section-4', title: t('payment_title'), list: t.raw('payment_list') },
    { id: 'section-5', title: t('cancellation_title'), content: t('cancellation_content'), list: t.raw('cancellation_list') },
    { id: 'section-6', title: t('credits_title'), list: t.raw('credits_list') },
    { id: 'section-7', title: t('misconduct_title'), content: t('misconduct_content'), list: t.raw('misconduct_list'), footer: t('misconduct_footer') },
    { id: 'section-8', title: t('roles_title'), list: t.raw('roles_list') },
    { id: 'section-9', title: t('liability_title'), list: t.raw('liability_list') },
    { id: 'section-10', title: t('suspension_title'), content: t('suspension_content'), list: t.raw('suspension_list'), footer: t('suspension_footer') },
    { id: 'section-11', title: t('changes_title'), content: t('changes_content') },
    { id: 'section-12', title: t('law_title'), content: t('law_content') },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-[#0B3D2E] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {t('back_to_home')}
            </Link>

            <div className="bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/20 flex items-center gap-1">
              {['th', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={cn(
                    "px-4 py-1.5 rounded-xl text-sm font-bold transition-all",
                    locale === l ? "bg-accent text-[#0B3D2E] shadow-lg" : "text-white/70 hover:text-white"
                  )}
                >
                  {l === 'th' ? 'ภาษาไทย' : 'English'}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl font-light">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:w-80 shrink-0 hidden lg:block">
            <div className="sticky top-32 bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#0B3D2E] mb-6 flex items-center gap-2">
                <List className="h-5 w-5 text-accent" />
                {t('toc_title')}
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 font-medium",
                      activeSection === section.id
                        ? "bg-white text-[#0B3D2E] shadow-sm border border-gray-100 translate-x-1"
                        : "text-gray-500 hover:text-[#0B3D2E] hover:bg-white/50"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Sections */}
          <div className="flex-1 max-w-4xl">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-12 bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#0B3D2E] mb-4 flex items-center gap-2">
                <List className="h-5 w-5 text-accent" />
                {t('toc_title')}
              </h3>
              <select 
                className="w-full p-4 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                onChange={(e) => scrollToSection(e.target.value)}
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-24">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <h2 className="text-3xl font-bold text-[#0B3D2E] mb-8 flex items-center gap-4">
                    <span className="w-1.5 h-10 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {section.title}
                  </h2>
                  
                  <div className="pl-6 border-l-2 border-gray-100 group-hover:border-accent/30 transition-colors">
                    {section.content && (
                      <p className="text-gray-600 leading-relaxed text-lg mb-8 whitespace-pre-wrap">
                        {section.content}
                      </p>
                    )}
                    
                    {section.list && (
                      <div className="grid grid-cols-1 gap-4">
                        {section.list.map((item: string, i: number) => (
                          <div key={i} className="flex items-start gap-4 bg-gray-50/50 p-5 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-sm font-bold text-accent">
                              {i + 1}
                            </div>
                            <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.footer && (
                      <p className="mt-8 text-accent font-bold text-lg bg-accent/5 px-6 py-4 rounded-2xl inline-block">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                id="contact"
                className="bg-[#0B3D2E] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h2 className="text-3xl font-black mb-8 relative z-10">
                  {t('contact_title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                      <Mail className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 mb-1 font-medium">Email Support</p>
                      <p className="text-xl font-bold">support@sporthub.in.th</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                      <Globe className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 mb-1 font-medium">Official Website</p>
                      <p className="text-xl font-bold">www.sporthub.in.th</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Final Footer */}
            <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">{t('last_updated')}</span>
              </div>
              <div className="flex items-center gap-8">
                <Link 
                  href="/privacy" 
                  className="text-gray-500 hover:text-[#0B3D2E] font-bold transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/" 
                  className="bg-[#0B3D2E] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#14532d] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {t('back_to_home')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
