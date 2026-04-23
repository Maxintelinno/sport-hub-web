import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Target, Flag, Rocket, Shield, Zap, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');
  const tCommon = useTranslations('CTA');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#14532d] pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Sports Culture"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#14532d] mb-8">
              {t('description_title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t('description_text')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="h-full border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-[#14532d] text-white p-10">
              <Target className="h-12 w-12 text-[#D4AF37] mb-6" />
              <h3 className="text-3xl font-bold mb-6">{t('vision_title')}</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {t('vision_desc')}
              </p>
            </div>

            <div className="h-full border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white p-10 border border-gray-100">
              <Flag className="h-12 w-12 text-[#14532d] mb-6" />
              <h3 className="text-3xl font-bold text-[#14532d] mb-6">{t('mission_title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37] shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg">{t('mission_item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37] shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg">{t('mission_item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37] shrink-0 mt-1" />
                  <span className="text-gray-600 text-lg">{t('mission_item3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#14532d] text-center mb-20">
            {t('story_title')}
          </h2>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
            
            <div className="space-y-20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="p-8 bg-white rounded-3xl shadow-xl max-w-sm ml-auto mr-0">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#14532d] mb-4">
                      <Zap />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{t('story_step1_title')}</h4>
                    <p className="text-gray-500">{t('story_step1_desc')}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#14532d] border-4 border-white shadow-lg z-10 items-center justify-center text-white text-sm font-bold">1</div>
                <div className="md:w-1/2" />
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="p-8 bg-white rounded-3xl shadow-xl max-w-sm mr-auto ml-0">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#14532d] mb-4">
                      <Rocket />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{t('story_step2_title')}</h4>
                    <p className="text-gray-500">{t('story_step2_desc')}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#14532d] border-4 border-white shadow-lg z-10 items-center justify-center text-white text-sm font-bold">2</div>
                <div className="md:w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-black text-[#14532d] mb-8">
              {tCommon('title')}
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
              {tCommon('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#14532d] hover:bg-green-900 text-white font-bold h-16 px-10 rounded-2xl shadow-xl transition-all">
                {tCommon('button_app')}
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-[#14532d] hover:bg-green-50 font-bold h-16 px-10 rounded-2xl transition-all">
                <Link href="/owners">{tCommon('button_owner')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
