'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppPreview() {
  const t = useTranslations('AppPreview');

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 flex justify-center">
              <Image
                src="/app-preview-v2.png"
                alt="App Preview"
                width={500}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(20,83,45,0.2)]"
                priority
              />
            </div>
            {/* Background shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[80px] z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('subtitle')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4')
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
               <div className="h-14 w-40 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-900 transition-colors">
                  <span className="font-bold">App Store</span>
               </div>
               <div className="h-14 w-40 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-900 transition-colors">
                  <span className="font-bold">Play Store</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
