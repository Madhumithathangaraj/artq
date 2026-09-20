import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Artwork } from '../data/artworks';

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireArtwork = (_artwork: Artwork) => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#272320] flex flex-col font-sans selection:bg-[#E2C7A8] selection:text-[#1F1B18]">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero
          onExploreGallery={() => scrollToSection('gallery')}
          onContact={() => scrollToSection('contact')}
        />

        <Gallery
          onInquireArtwork={handleInquireArtwork}
        />

        <About />

        <Contact />
      </main>

      {/* Footer with branding, links, contact */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default Home;
