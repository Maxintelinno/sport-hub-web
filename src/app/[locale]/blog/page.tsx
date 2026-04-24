'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function BlogPage() {
  const t = useTranslations('Blog');

  const posts = [
    {
      ...t.raw('posts.post1'),
    },
    {
      ...t.raw('posts.post2'),
    },
    {
      ...t.raw('posts.post3'),
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-6xl font-black text-[#0B3D2E] mb-6 tracking-tight"
             >
               {t('title')}
             </motion.h1>
             <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
               {t('subtitle')}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full border-none shadow-xl rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-6 left-6 bg-accent text-[#0B3D2E] px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
                         {post.category}
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-5 font-medium">
                         <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent" /> {post.date}</span>
                         <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-accent" /> {post.author}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#0B3D2E] group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                      <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed font-light">{post.excerpt}</p>
                      <div className="flex items-center text-[#0B3D2E] font-black group/btn text-sm">
                         {t('read_more')} 
                         <div className="ml-2 w-8 h-8 rounded-full bg-[#0B3D2E]/5 flex items-center justify-center group-hover/btn:bg-accent transition-colors">
                           <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                         </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
