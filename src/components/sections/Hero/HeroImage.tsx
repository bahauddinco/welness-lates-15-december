import React from 'react';

const HeroImage = () => {
  return (
    <div className="hidden lg:block">
      <div className="relative">
        <div className="absolute -inset-4 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
          alt="Tanvir Hasan"
          className="relative rounded-2xl object-cover w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroImage;