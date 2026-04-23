'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-extrabold text-primary mb-8">
                ติดต่อเรา
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                มีข้อสงสัยหรือต้องการความช่วยเหลือ? ทีมงานของเราพร้อมดูแลคุณเสมอ กรุณากรอกข้อมูลในแบบฟอร์ม หรือติดต่อผ่านช่องทางอื่นๆ ของเรา
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">เบอร์โทรศัพท์</h4>
                    <p className="text-gray-600">090-327-8855 (เวลา 09:00 - 18:00 น.)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">อีเมล</h4>
                    <p className="text-gray-600">support@sporthub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">ที่ตั้งสำนักงาน</h4>
                    <p className="text-gray-600">หมู่บ้าน เพอร์เฟคพาร์ค กรุงเทพกรีทา รามคำแหง 288/71 ซอยร่มเกล้า 24 แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10520</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-10 md:p-14 rounded-[3rem] border-border shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">ชื่อ-นามสกุล</label>
                    <Input placeholder="กรอกชื่อของคุณ" className="h-14 rounded-2xl border-gray-200 focus:border-primary focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">อีเมล</label>
                    <Input type="email" placeholder="example@email.com" className="h-14 rounded-2xl border-gray-200 focus:border-primary focus:ring-primary/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">หัวข้อติดต่อ</label>
                  <Input placeholder="แจ้งเรื่องที่คุณต้องการติดต่อ" className="h-14 rounded-2xl border-gray-200 focus:border-primary focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ข้อความ</label>
                  <Textarea placeholder="พิมพ์ข้อความของคุณที่นี่..." className="min-h-[150px] rounded-2xl border-gray-200 focus:border-primary focus:ring-primary/20 p-4" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 rounded-2xl text-lg flex items-center gap-2 group transition-all">
                  ส่งข้อความ
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
