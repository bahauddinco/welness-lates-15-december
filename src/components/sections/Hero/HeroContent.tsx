import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="space-y-6">
      <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full">
        <span className="text-[#ff6b00] font-medium">Transform Your Life Today</span>
      </div>
      
      <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        Achieve Your Dream Body <br />
        <span className="text-[#ff6b00]">Without Giving Up Your Lifestyle</span>
      </h1>
      
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        Join 500+ successful professionals who transformed their bodies while maintaining their busy careers. Get personalized coaching that fits your schedule.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
          Start Your Transformation
          <ArrowRight size={20} />
        </button>
        <button className="px-6 py-3 border border-[#ff6b00] text-[#ff6b00] rounded-lg font-semibold hover:bg-[#ff6b00]/10 transition-all duration-300">
          Book Free Consultation
        </button>
      </div>
    </div>
  );
};

export default HeroContent;