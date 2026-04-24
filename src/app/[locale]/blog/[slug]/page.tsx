'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Link2 } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BlogDetailPage() {
  const t = useTranslations('Blog');
  const params = useParams();
  const slug = params.slug;

  const posts = [
    t.raw('posts.post1'),
    t.raw('posts.post2'),
    t.raw('posts.post3'),
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-gray-500 hover:text-[#0B3D2E] transition-colors font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </div>
              {t('back_to_blog')}
            </Link>
          </motion.div>

          {/* Post Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block bg-accent text-[#0B3D2E] px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#0B3D2E] leading-tight mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-gray-400 border-y border-gray-100 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#0B3D2E]">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{t('posted_by')}</p>
                    <p className="text-sm text-[#0B3D2E] font-bold">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#0B3D2E]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Date</p>
                    <p className="text-sm text-[#0B3D2E] font-bold">{post.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[16/9] relative rounded-[3rem] overflow-hidden shadow-2xl mb-16"
          >
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-[#0B3D2E] prose-headings:font-black prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600"
              >
                {post.content.split('\n').map((paragraph: string, i: number) => (
                  <p key={i} className="mb-6 text-xl text-gray-600 leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Sidebar / Sharing */}
            <div className="md:w-64 shrink-0">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <h4 className="text-[#0B3D2E] font-black mb-6 flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-accent" />
                    Share this article
                  </h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-[#0B3D2E] transition-colors border-gray-200">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-[#0B3D2E] transition-colors border-gray-200">
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-8 bg-[#0B3D2E] rounded-[2rem] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h4 className="font-black mb-2 text-xl tracking-tight">Need a field?</h4>
                    <p className="text-white/60 text-sm mb-6 font-light">Book your next game with Sport Hub today.</p>
                    <Link 
                      href="/" 
                      className="inline-flex items-center gap-2 bg-accent text-[#0B3D2E] px-6 py-3 rounded-xl font-black text-sm hover:bg-white transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
