'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, TrendingUp, BarChart3, Wallet } from 'lucide-react';
import Image from 'next/image';

export default function ForOwners() {
  const t = useTranslations('ForOwners');

  const features = [
    { text: t('feature1'), icon: <TrendingUp className="h-6 w-6 text-accent" /> },
    { text: t('feature2'), icon: <Wallet className="h-6 w-6 text-accent" /> },
    { text: t('feature3'), icon: <BarChart3 className="h-6 w-6 text-accent" /> },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              {t('title')}
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              เรามีเครื่องมือที่จะช่วยให้คุณบริหารจัดการสนามกีฬาได้อย่างมืออาชีพ และเพิ่มโอกาสในการทำกำไร
            </p>
            
            <div className="space-y-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-16 px-10 rounded-2xl">
              {t('cta')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 glass shadow-2xl rounded-[2rem] p-4 border-white/20">
              <div className="bg-white rounded-3xl overflow-hidden aspect-[16/10] relative">
                 <div className="p-8 text-primary">
                    <div className="flex justify-between items-center mb-8">
                       <h4 className="font-bold text-xl">Owner Dashboard</h4>
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                       {[1,2,3].map(i => (
                          <div key={i} className="h-24 bg-gray-50 rounded-2xl p-4">
                             <div className="w-8 h-8 rounded-lg bg-primary/10 mb-2" />
                             <div className="h-3 w-16 bg-gray-200 rounded-full mb-2" />
                             <div className="h-5 w-12 bg-primary/20 rounded-full" />
                          </div>
                       ))}
                    </div>
                    <div className="h-48 bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                       <div className="flex gap-2 items-end h-full">
                          {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                             <div key={i} className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: `${h}%` }} />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
