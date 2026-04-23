import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import ForOwners from '@/components/home/ForOwners';
import AppPreview from '@/components/home/AppPreview';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ForOwners />
      <AppPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
