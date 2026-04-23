'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import * as gtag from '@/lib/gtag';

export default function Hero() {
  const t = useTranslations('Hero');

  const handleDownloadClick = () => {
    gtag.event({
      action: 'click_download',
      category: 'conversion',
      label: 'Hero Download Button',
    });
  };

  const handleOwnerClick = () => {
    gtag.event({
      action: 'click_owner_cta',
      category: 'engagement',
      label: 'Hero Owner Button',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Sports Field"
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block mb-2 text-sm font-bold tracking-widest text-accent uppercase">
              {t('tagline')}
            </span>
            <div className="w-20 h-1 bg-accent mb-8 rounded-full" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] font-extrabold">
              {t('headline')}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              {t('subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleDownloadClick}
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-16 px-10 rounded-2xl shadow-2xl shadow-accent/20 transition-all hover:scale-105"
              >
                {t('cta_app')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleOwnerClick}
                className="border-white/20 text-white hover:bg-white/10 font-bold text-lg h-16 px-10 rounded-2xl backdrop-blur-md transition-all"
              >
                <Link href="/owners">{t('cta_owner')}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
          >
            {[
              { label: 'Users', value: '50k+' },
              { label: 'Fields', value: '1,200+' },
              { label: 'Bookings', value: '250k+' },
              { label: 'Cities', value: '25+' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary-foreground/10 rounded-full blur-[100px]" />
    </section>
  );
}
