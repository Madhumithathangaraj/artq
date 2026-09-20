import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Feather, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Masterful Versatility',
      description:
        'Equally fluent in time-honored classical oil & pastel techniques and cutting-edge 300+ DPI digital impasto rendering.',
    },
    {
      icon: HeartHandshake,
      title: 'Artistic Intention',
      description:
        'We never treat artwork as mere decoration. Memories, curated palettes, and emotional resonance shape every brushstroke.',
    },
    {
      icon: ShieldCheck,
      title: 'Archival-Grade Longevity',
      description:
        'Using exclusively 100% cotton rag, hand-stretched Belgian linen, lightfast mineral pigments, and certified museum coatings.',
    },
    {
      icon: Eye,
      title: 'Art That Speaks',
      description:
        'We reject generic mass-produced decor. Every completed canvas tells an unmistakable, deeply felt personal story.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative background flourishes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D3] border border-[#D9C9B8] text-[#7A573F] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-[#9C4127]" />
            <span>The ARTQ Ethos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24201D] tracking-tight mb-6">
            Where Human Emotion Meets the Canvas
          </h2>
          <p className="text-base sm:text-lg text-[#5E544C] leading-relaxed font-light">
            Founded with an uncompromising belief that true art must evoke reverence, 
            memory, and connection, ARTQ represents the nexus between classical studio craft 
            and contemporary vision.
          </p>
        </div>

        {/* Narrative Split: ARTQ Story & Artistic Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Visual Storytelling Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DFD3C3] bg-[#E8DCCF] aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
                alt="Artist in studio mixing natural earthy pigments"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201D1A]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <span className="text-[11px] uppercase tracking-widest text-[#D4A373] font-semibold block mb-1">
                  Atelier & Studio
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  Formulated with earth minerals, burnt umber, and quiet patience.
                </p>
              </div>
            </div>

            {/* Inset Secondary Image Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-56 rounded-2xl overflow-hidden border-4 border-[#FAF7F2] shadow-2xl bg-[#DBCBB9]">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80"
                alt="Paint brushes and artistic color palette"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* The Story */}
            <div className="mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24201D] mb-4">
                The ARTQ Story
              </h3>
              <p className="text-sm sm:text-base text-[#574D44] leading-relaxed font-light mb-4">
                ARTQ began in a sunlit loft filled with turpentine, charcoal dust, and high-resolution 
                display tablets. We questioned why art collecting had fractured into cold mass prints 
                on one side and inaccessible private galleries on the other.
              </p>
              <p className="text-sm sm:text-base text-[#574D44] leading-relaxed font-light">
                We founded ARTQ to restore the sacred presence of authentic artistry. Whether rendering a 
                generational portrait, exploring surreal atmospheric digital landscapes, or creating 
                tactile original oil works, we treat each piece as a timeless heirloom.
              </p>
            </div>

            {/* Artistic Philosophy Quote Card */}
            <div className="p-6 rounded-2xl bg-[#EBE2D4] border-l-4 border-[#9C4127] shadow-xs">
              <span className="text-xs uppercase font-semibold text-[#8C5D38] tracking-widest block mb-2">
                Our Artistic Philosophy
              </span>
              <blockquote className="font-serif text-lg sm:text-xl italic text-[#272320] leading-snug">
                &ldquo;Art is not mere interior decoration; it is a quiet, enduring dialogue between 
                unspoken memory and human emotion. When a piece hangs on your wall, it must speak.&rdquo;
              </blockquote>
            </div>

          </div>
        </div>

        {/* Section 3: Why Choose ARTQ Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-3xl font-bold text-[#24201D]">
              Why Choose ARTQ
            </h3>
            <p className="text-sm text-[#675C53] mt-2">
              Our commitment to craftsmanship, materials, and personal integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  id={`about-pillar-${idx}`}
                  className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3D6C5] shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EFE5D8] text-[#9C4127] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#272320] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534A] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
