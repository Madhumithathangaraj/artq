import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Globe,
  ArrowUp,
  Heart,
  Sparkles,
  Send,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#24201D] text-[#EDE4DA] pt-20 pb-12 border-t border-[#3D3631]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3D3631]">
          
          {/* Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9C4127] text-[#FAF7F2] flex items-center justify-center font-serif text-xl tracking-wider shadow-sm">
                Q
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#FAF7F2] block leading-none">
                  ARTQ
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#D4A373] uppercase font-sans font-medium">
                  Art That Speaks
                </span>
              </div>
            </div>

            <p className="text-sm text-[#BDB2A6] font-light leading-relaxed mb-6">
              A fine art atelier dedicated to emotional portraiture, atmospheric 
              digital works, and original studio masterpieces that become cherished generational heirlooms.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/artq____?stkn=MTdpNW1rbzEzNDVvZQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="ARTQ Instagram @artq____"
                className="w-9 h-9 rounded-full bg-[#332C28] text-[#D8CCC0] hover:text-[#FAF7F2] hover:bg-[#9C4127] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:prathapofficial20@gmail.com"
                aria-label="Email ARTQ"
                className="w-9 h-9 rounded-full bg-[#332C28] text-[#D8CCC0] hover:text-[#FAF7F2] hover:bg-[#9C4127] flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919514119569"
                aria-label="Call ARTQ"
                className="w-9 h-9 rounded-full bg-[#332C28] text-[#D8CCC0] hover:text-[#FAF7F2] hover:bg-[#9C4127] flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919514119569"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp ARTQ"
                className="w-9 h-9 rounded-full bg-[#332C28] text-[#D8CCC0] hover:text-[#FAF7F2] hover:bg-[#25D366] flex items-center justify-center transition-colors font-bold text-xs"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDB2A6]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Home & Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Artwork Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Atelier Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2] mb-4">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#BDB2A6]">
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#9C4127] shrink-0" />
                <a
                  href="https://www.instagram.com/artq____?stkn=MTdpNW1rbzEzNDVvZQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors font-medium text-[#D4A373]"
                >
                  @artq____
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9C4127] shrink-0" />
                <a
                  href="mailto:prathapofficial20@gmail.com"
                  className="hover:text-[#FAF7F2] transition-colors break-all"
                >
                  prathapofficial20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9C4127] shrink-0" />
                <a
                  href="tel:+919514119569"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  +91 95141 19569
                </a>
              </div>
              <p className="text-[11px] text-[#8C8075] pt-2 border-t border-[#3D3631]">
                Available for studio inquiries, artwork viewings, and WhatsApp consultations.
              </p>
            </div>
          </div>

          {/* Studio Dispatch / Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A373]" />
              <span>Studio Dispatch</span>
            </h4>
            <p className="text-xs text-[#BDB2A6] font-light mb-4">
              Receive quiet previews of new original oil studies, digital releases, and studio exhibitions.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-[#332C28] border border-[#483E38] text-xs text-[#D4A373]">
                Thank you. You are enrolled for upcoming exhibition dispatches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#332C28] border border-[#483E38] text-xs text-[#FAF7F2] placeholder-[#807469] focus:outline-hidden focus:ring-1 focus:ring-[#9C4127]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#9C4127] hover:bg-[#83351E] text-[#FAF7F2] text-[11px] font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8075]">
          <p>© {new Date().getFullYear()} ARTQ Studio. All rights reserved. &ldquo;Art That Speaks&rdquo;.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
