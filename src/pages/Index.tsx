
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import StudyModes from '@/components/StudyModes';
import Features from '@/components/Features';
import FlashcardDemo from '@/components/FlashcardDemo';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickActions />
        <StudyModes />
        <Features />
        <CallToAction />
        <FlashcardDemo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
