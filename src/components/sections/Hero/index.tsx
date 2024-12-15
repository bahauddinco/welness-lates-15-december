import React from 'react';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(79, 79, 79, 0.18) 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/50 to-[#0A0F1C]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <HeroContent />
            <HeroImage />
          </div>
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;