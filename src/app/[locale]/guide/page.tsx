'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GuidePage() {
  const guides = [
    {
      q: "วิธีจองสนามผ่านแอป Sport Hub",
      a: "เพียงเลือกประเภทกีฬาที่คุณต้องการ ค้นหาสนามในพื้นที่ เลือกเวลาที่ว่าง และชำระเงินผ่านระบบ QR Code ที่สะดวกและปลอดภัย คุณจะได้รับการยืนยันการจองทันที"
    },
    {
      q: "การชำระเงินรองรับช่องทางใดบ้าง",
      a: "เรารองรับการชำระเงินผ่าน Mobile Banking ทุกธนาคารด้วย QR Code (PromptPay) และบัตรเครดิต/เดบิต"
    },
    {
      q: "หากต้องการยกเลิกการจองต้องทำอย่างไร",
      a: "คุณสามารถยกเลิกการจองผ่านแอปได้ในเมนู 'การจองของฉัน' โดยต้องทำล่วงหน้าอย่างน้อย 24 ชั่วโมงก่อนเวลาเริ่มใช้งาน เพื่อรับเครดิตคืนเข้าสู่กระเป๋าเงินในแอป"
    },
    {
      q: "วิธีใช้เครดิตการจอง",
      a: "เครดิตที่ได้จากการยกเลิกหรือโปรโมชั่น สามารถใช้ชำระเงินแทนเงินสดได้ในขั้นตอนการชำระเงิน"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl font-extrabold text-primary mb-6"
             >
               วิธีใช้งานและคำถามที่พบบ่อย
             </motion.h1>
             <p className="text-xl text-gray-600">
               รวบรวมข้อมูลที่คุณต้องการเพื่อให้การจองสนามเป็นเรื่องง่ายที่สุด
             </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-border shadow-2xl"
          >
            <Accordion className="w-full">
              {guides.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 py-4 last:border-0">
                  <AccordionTrigger className="text-xl font-bold text-left hover:text-primary transition-colors hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600 leading-relaxed pt-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="mt-20 text-center">
             <p className="text-gray-500 mb-6">ยังมีข้อสงสัยอื่นๆ ใช่หรือไม่?</p>
             <button className="text-primary font-bold text-lg hover:underline underline-offset-8">
                ติดต่อฝ่ายสนับสนุนลูกค้า
             </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
