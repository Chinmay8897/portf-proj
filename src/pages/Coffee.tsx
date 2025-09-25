import React from 'react';
import { Header } from '@/components/Header';
import { BuyMeCoffee } from '@/components/BuyMeCoffee';
import { Footer } from '@/components/Footer';
import { MouseFollower } from '@/components/MouseFollower';

const Coffee = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mouse follower effect */}
      <MouseFollower />
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        <BuyMeCoffee />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Coffee;