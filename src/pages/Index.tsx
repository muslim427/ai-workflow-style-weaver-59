
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WorkflowPreview } from '@/components/WorkflowPreview';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WorkflowPreview />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
