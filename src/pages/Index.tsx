import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { ProjectsNew } from '@/components/ProjectsNew';
import { Contact } from '@/components/Contact';

import { Footer } from '@/components/Footer';
import { MouseFollower } from '@/components/MouseFollower';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mouse follower effect */}
      <MouseFollower />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <ProjectsNew />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
