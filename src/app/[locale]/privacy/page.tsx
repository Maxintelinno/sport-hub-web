'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Shield, ChevronLeft, Calendar, Mail, Globe, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const sections = [
    { title: t('intro_title'), content: t('intro_content') },
    { title: t('data_collect_title'), content: t('data_collect_content'), list: t.raw('data_collect_list') },
    { title: t('purpose_title'), content: t('purpose_content'), list: t.raw('purpose_list') },
    { title: t('disclosure_title'), content: t('disclosure_content'), list: t.raw('disclosure_list') },
    { title: t('retention_title'), content: t('retention_content'), list: t.raw('retention_list') },
    { title: t('security_title'), content: t('security_content'), list: t.raw('security_list') },
    { title: t('rights_title'), content: t('rights_content'), list: t.raw('rights_list') },
    { title: t('cookies_title'), content: t('cookies_content'), list: t.raw('cookies_list') },
    { title: t('changes_title'), content: t('changes_content') },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-[#0B3D2E] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {t('back_to_home')}
            </Link>

            {/* In-page Language Toggle */}
            <div className="bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/20 flex items-center gap-1">
              <button
                onClick={() => handleLanguageChange('th')}
                className={cn(
                  "px-4 py-1.5 rounded-xl text-sm font-bold transition-all",
                  locale === 'th' ? "bg-accent text-[#0B3D2E] shadow-lg" : "text-white/70 hover:text-white"
                )}
              >
                ภาษาไทย
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={cn(
                  "px-4 py-1.5 rounded-xl text-sm font-bold transition-all",
                  locale === 'en' ? "bg-accent text-[#0B3D2E] shadow-lg" : "text-white/70 hover:text-white"
                )}
              >
                English
              </button>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
              <Shield className="h-8 w-8 text-accent" />
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

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <h2 className="text-2xl font-bold text-[#0B3D2E] mb-6 flex items-center gap-4">
                    <span className="w-1 h-8 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {section.title}
                  </h2>
                  
                  <div className="pl-5 border-l-2 border-gray-100 group-hover:border-accent/30 transition-colors">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6 whitespace-pre-wrap">
                      {section.content}
                    </p>
                    
                    {section.list && Array.isArray(section.list) && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.list.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B3D2E]/5 p-10 rounded-[2.5rem] border border-[#0B3D2E]/10"
              >
                <h2 className="text-2xl font-bold text-[#0B3D2E] mb-8 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-accent" />
                  {t('contact_title')}
                </h2>
                <p className="text-gray-600 mb-6 font-medium whitespace-pre-wrap">
                  {t('contact_content')}
                </p>
                <div className="flex items-center gap-2 text-[#0B3D2E] font-bold">
                  <Globe className="h-5 w-5" />
                  <span>www.sporthub.in.th</span>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{t('last_updated')}</span>
              </div>
              <Link 
                href="/" 
                className="font-bold text-[#0B3D2E] hover:text-accent transition-colors"
              >
                {t('back_to_home')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
