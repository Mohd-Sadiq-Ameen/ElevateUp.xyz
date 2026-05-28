'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeTraining from '@/components/FreeTraining';
import Faqs from '@/components/Faqs';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FreeTraining />
      <Testimonials />
      <Faqs />
      <Footer />
    </main>
  );
}