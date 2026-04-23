'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: "5 เทคนิคการเลือกสนามฟุตบอลหญ้าเทียมให้เหมาะกับทีมของคุณ",
      excerpt: "การเลือกสนามฟุตบอลหญ้าเทียมไม่ใช่เรื่องยาก แต่ต้องคำนึงถึงปัจจัยหลายอย่าง เช่น คุณภาพหญ้า พื้นที่ และความสะดวก...",
      date: "20 เม.ย. 2024",
      author: "Admin SportHub",
      category: "เทคนิคกีฬา"
    },
    {
      title: "แนะนำอุปกรณ์แบดมินตันสำหรับมือใหม่หัดเล่น",
      excerpt: "หากคุณเพิ่งเริ่มหันมาสนใจแบดมินตัน ไม้แบดและรองเท้าคือหัวใจสำคัญที่เราควรเลือกให้ถูกต้อง...",
      date: "18 เม.ย. 2024",
      author: "Pro Player",
      category: "แนะนำอุปกรณ์"
    },
    {
      title: "ทำไมการวอร์มอัพถึงสำคัญก่อนลงสนามจริง?",
      excerpt: "หลายคนอาจละเลยการวอร์มอัพ แต่รู้หรือไม่ว่ามันช่วยลดความเสี่ยงจากการบาดเจ็บได้ถึง 70%...",
      date: "15 เม.ย. 2024",
      author: "Coach K",
      category: "สุขภาพ"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl font-extrabold text-primary mb-6"
             >
               Sport Hub Blog
             </motion.h1>
             <p className="text-xl text-gray-600">
               บทความสาระดีๆ เกี่ยวกับกีฬา สุขภาพ และเทคนิคการเล่นที่คุณไม่ควรพลาด
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all">
                  <div className="aspect-[16/9] bg-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                       {post.category}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                       <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                       <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent group/btn">
                       อ่านเพิ่มเติม <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
