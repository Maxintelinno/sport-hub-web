'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check if we are on the homepage
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/owners', label: t('owners') },
    { href: '/guide', label: t('guide') },
    { href: '/contact', label: t('contact') },
  ];

  // Dark header pages where text should be white at the top
  const hasDarkHeader = pathname === '/' || pathname === '/about';
  const showScrolledStyle = isScrolled || !hasDarkHeader;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        showScrolledStyle ? 'py-3 bg-white/80 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#14532d] rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-2xl">R</span>
          </div>
          <div className="flex flex-col -gap-1">
            <span className={cn(
              "text-xl font-black leading-none tracking-tight",
              showScrolledStyle ? "text-[#14532d]" : "text-white"
            )}>
              ROYAL
            </span>
            <span className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] leading-none">
              SPORTS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-[#D4AF37]",
                showScrolledStyle ? "text-gray-800" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <div className={showScrolledStyle ? "text-gray-800" : "text-white"}>
              <LanguageSwitcher />
            </div>
            <Button className="bg-[#14532d] hover:bg-green-900 text-white rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105">
              {t('download')}
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <div className={showScrolledStyle ? "text-gray-800" : "text-white"}>
            <LanguageSwitcher />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className={showScrolledStyle ? "text-gray-800" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-white border-l-border pt-16">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-gray-800 hover:text-[#14532d] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="bg-[#14532d] text-white rounded-full mt-4 h-12">
                  {t('download')}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
