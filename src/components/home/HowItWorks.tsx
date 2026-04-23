'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Calendar, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    {
      title: t('step1_title'),
      desc: t('step1_desc'),
      icon: <Search className="h-10 w-10" />,
    },
    {
      title: t('step2_title'),
      desc: t('step2_desc'),
      icon: <Calendar className="h-10 w-10" />,
    },
    {
      title: t('step3_title'),
      desc: t('step3_desc'),
      icon: <CheckCircle className="h-10 w-10" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            3 ขั้นตอนง่ายๆ ในการเริ่มจองสนามโปรดของคุณ
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute top-[48px] left-0 w-full h-1 bg-primary/10 z-0 origin-left" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary mb-8 border-8 border-gray-50 group hover:bg-primary hover:text-white transition-all duration-500 cursor-default"
                >
                  {step.icon}
                </motion.div>
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-6 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
