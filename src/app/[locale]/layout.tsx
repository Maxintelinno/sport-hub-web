import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Inter, Outfit} from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const messages: any = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.Index;

  return {
    metadataBase: new URL('https://sporthub.com'),
    title: {
      default: t.title,
      template: `%s | Royal Sports Hub`
    },
    description: t.description,
    keywords: ["จองสนาม", "สนามกีฬา", "จองสนามฟุตบอล", "แบดมินตัน", "เทนนิส", "จองกีฬาออนไลน์", "Royal Sports Hub"],
    openGraph: {
      type: "website",
      locale: locale === 'th' ? 'th_TH' : locale === 'zh' ? 'zh_CN' : 'en_US',
      url: "https://sporthub.com",
      title: t.title,
      description: t.description,
      siteName: "Royal Sports Hub",
      images: [{ url: "/hero-bg.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/hero-bg.png"],
    },
  };
}

import PageTransition from '@/components/layout/PageTransition';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { Suspense } from 'react';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
