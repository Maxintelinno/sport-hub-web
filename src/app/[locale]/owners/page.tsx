'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, LayoutDashboard, Zap, BarChart, Headset } from 'lucide-react';

export default function OwnersPage() {
  const benefits = [
    {
      title: 'เพิ่มรายได้',
      desc: 'เข้าถึงกลุ่มลูกค้าใหม่ๆ และเพิ่มอัตราการจองสนามในช่วงเวลาที่ยังว่าง',
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    {
      title: 'ลดงาน Manual',
      desc: 'ลดความยุ่งยากในการรับสายและบันทึกการจองด้วยระบบอัตโนมัติ 24 ชม.',
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />
    },
    {
      title: 'รายงานแม่นยำ',
      desc: 'ดูสถิติรายได้และแนวโน้มการจองเพื่อวางแผนการตลาดได้อย่างตรงจุด',
      icon: <BarChart className="h-8 w-8 text-primary" />
    },
    {
      title: 'ซัพพอร์ต 24/7',
      desc: 'ทีมงานมืออาชีพพร้อมดูแลคุณและลูกค้าของคุณตลอดเวลา',
      icon: <Headset className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-primary mb-6"
            >
              เพิ่มศักยภาพให้สนามของคุณ
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ร่วมเป็นพาร์ทเนอร์กับ Sport Hub และเปลี่ยนการจัดการสนามให้เป็นเรื่องง่ายและทำกำไรได้มากขึ้น
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl rounded-[2rem] p-4 bg-gray-50/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
          >
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8">พร้อมเติบโตไปกับเราแล้วหรือยัง?</h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                  กรอกข้อมูลเบื้องต้นเพื่อให้เจ้าหน้าที่ติดต่อกลับและแนะนำขั้นตอนการเข้าร่วม
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                   <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold h-16 px-12 rounded-2xl text-xl">
                      สมัครสมาชิกตอนนี้
                   </Button>
                   <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-16 px-12 rounded-2xl text-xl backdrop-blur-md">
                      พูดคุยกับเจ้าหน้าที่
                   </Button>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
