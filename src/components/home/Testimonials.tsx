'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const reviews = [
    { name: t('user1_name'), comment: t('user1_comment'), role: 'Football Player' },
    { name: t('user2_name'), comment: t('user2_comment'), role: 'Badminton Enthusiast' },
    { name: t('user3_name'), comment: t('user3_comment'), role: 'Arena Owner' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            {t('title')}
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border border-gray-100 shadow-lg rounded-[2.5rem] overflow-hidden relative group hover:border-primary/20 transition-all duration-500 bg-white">
                <CardContent className="p-10">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Quote className="h-12 w-12 text-accent/20 absolute top-6 right-6" />
                  </motion.div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative z-10">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
