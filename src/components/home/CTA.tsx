'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
              {t('title')}
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-8 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none">Download on the</div>
                  <div className="text-xl font-bold leading-none">App Store</div>
                </div>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-8 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105">
                <Play className="h-6 w-6 fill-primary" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none">Get it on</div>
                  <div className="text-xl font-bold leading-none">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="mt-12">
              <button className="text-accent font-bold hover:underline underline-offset-8 transition-all">
                {t('button_owner')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
