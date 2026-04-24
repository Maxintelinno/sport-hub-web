'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronRight, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Layout,
  CreditCard,
  XCircle,
  ShieldCheck,
  User
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = useMemo(() => {
    const allQuestions = [
      { id: 'q1', category: 'booking', q: t('questions.q1'), a: t('questions.a1') },
      { id: 'q2', category: 'booking', q: t('questions.q2'), a: t('questions.a2') },
      { id: 'q3', category: 'booking', q: t('questions.q3'), a: t('questions.a3') },
      { id: 'q4', category: 'booking', q: t('questions.q4'), a: t('questions.a4') },
      { id: 'q5', category: 'payment', q: t('questions.q5'), a: t('questions.a5') },
      { id: 'q6', category: 'payment', q: t('questions.q6'), a: t('questions.a6') },
      { id: 'q7', category: 'payment', q: t('questions.q7'), a: t('questions.a7') },
      { id: 'q8', category: 'cancellation', q: t('questions.q8'), a: t('questions.a8') },
      { id: 'q9', category: 'cancellation', q: t('questions.q9'), a: t('questions.a9') },
      { id: 'q10', category: 'cancellation', q: t('questions.q10'), a: t('questions.a10') },
      { id: 'q11', category: 'cancellation', q: t('questions.q11'), a: t('questions.a11') },
      { id: 'q12', category: 'owner', q: t('questions.q12'), a: t('questions.a12') },
      { id: 'q13', category: 'owner', q: t('questions.q13'), a: t('questions.a13') },
      { id: 'q14', category: 'owner', q: t('questions.q14'), a: t('questions.a14') },
      { id: 'q15', category: 'owner', q: t('questions.q15'), a: t('questions.a15') },
      { id: 'q16', category: 'security', q: t('questions.q16'), a: t('questions.a16') },
      { id: 'q17', category: 'security', q: t('questions.q17'), a: t('questions.a17') },
      { id: 'q18', category: 'security', q: t('questions.q18'), a: t('questions.a18') },
      { id: 'q19', category: 'security', q: t('questions.q19'), a: t('questions.a19') },
    ];

    return allQuestions.filter(item => {
      const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [t, searchQuery, activeCategory]);

  const categories = [
    { id: 'all', label: t('categories.all'), icon: Layout },
    { id: 'booking', label: t('categories.booking'), icon: HelpCircle },
    { id: 'payment', label: t('categories.payment'), icon: CreditCard },
    { id: 'cancellation', label: t('categories.cancellation'), icon: XCircle },
    { id: 'owner', label: t('categories.owner'), icon: User },
    { id: 'security', label: t('categories.security'), icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B3D2E] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light">
              {t('subtitle')}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-accent transition-colors" />
              </div>
              <Input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white focus:text-[#0B3D2E] focus:placeholder:text-gray-400 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50/50 min-h-[600px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="bg-transparent h-auto gap-3 flex flex-nowrap min-w-max">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className={cn(
                        "px-6 py-3 rounded-2xl border-2 transition-all gap-2 h-auto data-[state=active]:bg-[#0B3D2E] data-[state=active]:text-white data-[state=active]:border-[#0B3D2E]",
                        "bg-white border-gray-100 text-gray-500 hover:border-accent/30"
                      )}
                    >
                      <cat.icon className="h-4 w-4" />
                      <span className="font-bold">{cat.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* FAQ List */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
              <AnimatePresence mode="wait">
                {faqData.length > 0 ? (
                  <motion.div
                    key={activeCategory + searchQuery}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Accordion className="w-full">
                      {faqData.map((item, index) => (
                        <AccordionItem 
                          key={item.id} 
                          value={item.id}
                          className="border-b border-gray-50 last:border-0 px-6 md:px-10 py-2 group"
                        >
                          <AccordionTrigger className="hover:no-underline py-6 text-left group">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
                                <HelpCircle className="h-5 w-5" />
                              </div>
                              <span className="text-lg font-bold text-[#0B3D2E] group-hover:text-accent transition-colors">
                                {item.q}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 text-lg leading-relaxed pl-12 pb-8 pr-4">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                      <Search className="h-10 w-10" />
                    </div>
                    <p className="text-xl font-bold text-gray-400">
                      {t('not_found')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-[#0B3D2E] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  {t('cta_title')}
                </h2>
                <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                  {t('cta_subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-5 bg-accent text-[#0B3D2E] rounded-2xl font-black text-lg hover:bg-white transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 group"
                  >
                    {t('cta_button')}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/"
                    className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                  >
                    {t('back_home')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
