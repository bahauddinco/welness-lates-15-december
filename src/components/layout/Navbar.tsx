import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#ff6b00] transition-colors duration-300 px-3 py-2 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
            
            <button className="px-6 py-2 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#ff6b00]/90 transition-colors duration-300">
              Join Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A0F1C]/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#ff6b00] block px-3 py-2 text-base font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full px-6 py-2 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#ff6b00]/90 transition-colors duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;