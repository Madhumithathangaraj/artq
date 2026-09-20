import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Palette } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="artq-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs border-b border-[#E7DDD0]'
          : 'bg-[#FAF7F2]/75 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleItemClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-[#3D4A3E] text-[#FAF7F2] flex items-center justify-center font-serif text-xl tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-xs">
              Q
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-widest text-[#24201D] block leading-none">
                ARTQ
              </span>
              <span className="text-[11px] tracking-[0.25em] text-[#8C6D58] uppercase font-sans font-medium">
                Art That Speaks
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#24201D] font-semibold'
                      : 'text-[#6C635B] hover:text-[#24201D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#9C4127] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-contact-cta"
              onClick={() => handleItemClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#272320] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D4A3E] transition-colors duration-300 shadow-xs cursor-pointer group"
            >
              <span>Contact Artist</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#272320] hover:bg-[#EFE8DE] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F2] border-b border-[#E7DDD0] px-6 pt-3 pb-6 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F2ECE1] text-[#9C4127] font-semibold'
                        : 'text-[#5A524A] hover:bg-[#F5EFEB] text-[#24201D]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#E7DDD0]">
                <button
                  id="mobile-nav-contact-cta"
                  onClick={() => handleItemClick('contact')}
                  className="w-full py-3 px-4 rounded-xl bg-[#9C4127] text-[#FAF7F2] text-sm font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Palette className="w-4 h-4" />
                  <span>Contact Artist</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
