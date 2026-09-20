import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreGallery: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGallery, onContact }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2]"
    >
      {/* Subtle organic ambient blur accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#EADCC9]/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-[#E3D4C4]/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Editorial Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E6D8] border border-[#DFCFC0] text-[#78543E] text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#9C4127]" />
              <span>Fine Art & Contemporary Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#221D1A] leading-[1.08] mb-6">
              Art That <span className="italic font-normal text-[#9C4127]">Speaks</span> To The Human Soul.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5C534B] leading-relaxed max-w-2xl mb-8 font-light">
              Welcome to <strong className="font-semibold text-[#272320]">ARTQ</strong>. We craft transcendent 
              Portrait Art, Digital masterworks, and authentic Original Works tailored to capture your memories, 
              identity, and emotional essence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-explore-gallery-cta"
                onClick={onExploreGallery}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#272320] hover:bg-[#3D4A3E] text-[#FAF7F2] font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <Compass className="w-4 h-4 text-[#D4A373] transition-transform duration-300 group-hover:rotate-45" />
                <span>Explore Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-contact-cta"
                onClick={onContact}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#272320] border border-[#D5C7B8] font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-xs cursor-pointer hover:border-[#9C4127]"
              >
                <span>Contact Studio</span>
                <span className="w-2 h-2 rounded-full bg-[#9C4127]" />
              </button>
            </div>

            {/* Trust Markers / Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5DACD] w-full max-w-xl">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#272320]">3 Distinct</p>
                <p className="text-xs text-[#73685E] uppercase tracking-wider font-medium mt-1">
                  Art Mediums
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#9C4127]">100%</p>
                <p className="text-xs text-[#73685E] uppercase tracking-wider font-medium mt-1">
                  Archival Quality
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#3D4A3E]">Bespoke</p>
                <p className="text-xs text-[#73685E] uppercase tracking-wider font-medium mt-1">
                  Personal Story
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Art Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Framed Artwork Display */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Mat Frame */}
              <div className="relative p-4 sm:p-5 rounded-3xl bg-[#FAF7F2] shadow-2xl border border-[#DFD3C3] ring-1 ring-[#FAF7F2]/80">
                <div className="relative overflow-hidden rounded-2xl aspect-4/5 bg-[#E8DDD0]">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                    alt="Featured Portrait Artwork - ARTQ Studio"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Artwork Overlay Badge */}
                  <div className="absolute bottom-5 left-5 right-5 text-[#FAF7F2]">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2]/20 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                      <span>Featured Masterpiece</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold leading-snug">
                      The Solitary Contemplation
                    </h3>
                    <p className="text-xs text-[#E5DACD] font-light mt-0.5">
                      Portrait Art • Oil Glazes on Belgian Linen
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Curator Pill */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FAF7F2] border border-[#DFD3C3] px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-full bg-[#9C4127] text-[#FAF7F2] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#272320]">
                    Authentic Creation
                  </p>
                  <p className="text-[11px] text-[#766A60] leading-tight">
                    Every brushstroke guided by deliberate intent
                  </p>
                </div>
              </motion.div>

              {/* Small decorative stamp on top-right */}
              <div className="absolute -top-4 -right-4 bg-[#3D4A3E] text-[#FAF7F2] w-14 h-14 rounded-full flex flex-col items-center justify-center text-center shadow-lg border-2 border-[#FAF7F2] rotate-12">
                <span className="text-[9px] uppercase tracking-widest font-mono">ARTQ</span>
                <span className="text-[8px] opacity-80">EST 2024</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
