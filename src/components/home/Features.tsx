'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CreditCard, Search, ShieldCheck } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      title: t('f1_title'),
      desc: t('f1_desc'),
      icon: <Search className="h-8 w-8 text-primary" />,
      color: 'bg-green-50',
    },
    {
      title: t('f2_title'),
      desc: t('f2_desc'),
      icon: <Calendar className="h-8 w-8 text-primary" />,
      color: 'bg-blue-50',
    },
    {
      title: t('f3_title'),
      desc: t('f3_desc'),
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      color: 'bg-orange-50',
    },
    {
      title: t('f4_title'),
      desc: t('f4_desc'),
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      color: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1.5 bg-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-xl shadow-gray-100 hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem] overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col h-full items-start">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
