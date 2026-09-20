import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Artwork, ARTWORKS, CATEGORIES } from '../data/artworks';
import { Eye, ArrowUpRight, X, Sparkles, SlidersHorizontal, Tag, Palette } from 'lucide-react';

interface GalleryProps {
  onInquireArtwork?: (artwork: Artwork) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onInquireArtwork }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = selectedCategory === 'all'
    ? ARTWORKS
    : ARTWORKS.filter(art => art.categoryKey === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2] border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE5D8] border border-[#DFCFC0] text-[#7E5E48] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#9C4127]" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24201D] tracking-tight">
              Selected Works & Mediums
            </h2>
            <p className="text-base text-[#6E645B] mt-2 max-w-xl font-light">
              Explore our triad of artistic expression: poignant fine art portraits, 
              atmospheric digital visions, and tactile original works.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#EFE7DC] border border-[#DFCFC0]">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}-btn`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#272320] text-[#FAF7F2] shadow-xs'
                      : 'text-[#5E554C] hover:text-[#272320] hover:bg-[#E7DDD0]'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid / Masonry Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map((art) => (
              <motion.div
                key={art.id}
                id={`artwork-card-${art.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-[#F4EDE2] border border-[#E2D6C6] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
                onClick={() => setActiveArtwork(art)}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-4/5 overflow-hidden bg-[#E2D5C4]">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Category Pill on Card */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[11px] font-semibold text-[#272320] uppercase tracking-wider shadow-xs border border-[#E5DACD]">
                      {art.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/85 via-[#1F1B18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FAF7F2]">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs text-[#E8DCCF] font-light tracking-wide mb-1">
                        {art.medium}
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">
                        {art.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-[#FAF7F2]/80 pt-2 border-t border-white/20">
                        <span>{art.dimensions}</span>
                        <span className="inline-flex items-center gap-1 font-medium text-[#D4A373]">
                          <span>View Detail</span>
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta (Visible when not hovering) */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-xl font-bold text-[#272320] group-hover:text-[#9C4127] transition-colors">
                        {art.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#3D4A3E]">
                        {art.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B6158] line-clamp-1 font-light">
                      {art.medium}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8DDD0] flex items-center justify-between text-xs">
                    <span className="text-[#87786B] font-medium">{art.dimensions}</span>
                    <span className="text-[#9C4127] font-semibold text-[11px] uppercase tracking-wider">Original Art</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Action Prompt */}
        <div className="mt-16 text-center bg-[#F4EDE2] border border-[#E3D7C8] rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-xs">
          <Palette className="w-8 h-8 text-[#9C4127] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#272320] mb-2">
            Interested in Acquiring an Original?
          </h3>
          <p className="text-sm text-[#675D54] max-w-md mx-auto mb-6">
            Connect directly with the artist for private studio viewings, provenance inquiries, 
            and artwork details.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#272320] hover:bg-[#3D4A3E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <span>Inquire with Artist</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Artwork Details Modal */}
      <AnimatePresence>
        {activeArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArtwork(null)}
              className="fixed inset-0 bg-[#1A1816]/75 backdrop-blur-xs"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#DFD3C3] overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setActiveArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#272320] shadow-md border border-[#E3D6C7] transition-transform hover:scale-105 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-12 flex-grow">
                {/* Modal Visual Left */}
                <div className="md:col-span-6 bg-[#201D1A] flex items-center justify-center p-6 sm:p-8">
                  <div className="relative max-h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2]/10">
                    <img
                      src={activeArtwork.image}
                      alt={activeArtwork.title}
                      className="w-full h-full object-contain max-h-[460px] mx-auto"
                    />
                  </div>
                </div>

                {/* Modal Information Right */}
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#EFE4D6] text-[#7F5F49] text-[11px] font-semibold uppercase tracking-wider border border-[#DECFC0]">
                        {activeArtwork.category}
                      </span>
                      <span className="text-xs text-[#87786B]">
                        Completed in {activeArtwork.year}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl font-bold text-[#272320] mb-3 leading-snug">
                      {activeArtwork.title}
                    </h2>

                    <p className="text-sm text-[#5D544C] leading-relaxed mb-6 font-light">
                      {activeArtwork.description}
                    </p>

                    {/* Artwork Specifications Table */}
                    <div className="space-y-2.5 p-4 rounded-2xl bg-[#F2EAE0] border border-[#E2D5C5] mb-6">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#7A6D61] font-medium">Medium</span>
                        <span className="text-[#272320] font-semibold text-right max-w-[200px]">
                          {activeArtwork.medium}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs border-t border-[#DECFC0] pt-2">
                        <span className="text-[#7A6D61] font-medium">Dimensions</span>
                        <span className="text-[#272320] font-semibold">{activeArtwork.dimensions}</span>
                      </div>
                      <div className="flex justify-between text-xs border-t border-[#DECFC0] pt-2">
                        <span className="text-[#7A6D61] font-medium">Authenticity</span>
                        <span className="text-[#3D4A3E] font-semibold">Original ARTQ Studio Piece</span>
                      </div>
                    </div>

                    {/* Artist Curator Note */}
                    <div className="border-l-2 border-[#9C4127] pl-3 py-1 mb-6">
                      <p className="text-xs italic text-[#6B5E53] leading-relaxed">
                        &ldquo;{activeArtwork.artistNote}&rdquo;
                      </p>
                      <span className="text-[11px] font-medium text-[#272320] block mt-1 uppercase tracking-wider">
                        — ARTQ Lead Studio Master
                      </span>
                    </div>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="pt-4 border-t border-[#E8DDD0] flex flex-col sm:flex-row gap-3">
                    <a
                      id="modal-inquire-artwork-btn"
                      href="#contact"
                      onClick={() => {
                        if (onInquireArtwork) {
                          onInquireArtwork(activeArtwork);
                        }
                        setActiveArtwork(null);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#9C4127] hover:bg-[#7D341F] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>Inquire About This Artwork</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      id="modal-close-secondary-btn"
                      onClick={() => setActiveArtwork(null)}
                      className="py-3 px-5 rounded-xl bg-[#EBE2D5] hover:bg-[#E2D6C6] text-[#272320] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
