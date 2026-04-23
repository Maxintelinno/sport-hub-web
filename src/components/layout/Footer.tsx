import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                Sport<span className="text-accent">Hub</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Platform จองสนามกีฬาที่ดีที่สุดสำหรับคุณ ค้นหา จอง และจัดการง่ายๆ ในที่เดียว
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/50 hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">X (Twitter)</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">{t('about_us')}</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">{t('about_us')}</Link></li>
              <li><Link href="/owners" className="hover:text-white transition-colors">สำหรับเจ้าของสนาม</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">บทความกีฬา</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">วิธีใช้งาน</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">ข้อมูลเพิ่มเติม</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">คำถามที่พบบ่อย</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">{t('contact')}</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>หมู่บ้าน เพอร์เฟคพาร์ค กรุงเทพกรีทา รามคำแหง 288/71 ซอยร่มเกล้า 24 แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10520</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>090-327-8855</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>support@sporthub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>{t('rights')}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
