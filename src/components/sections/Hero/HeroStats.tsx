import React from 'react';
import { Award, Smile, Clock } from 'lucide-react';

const HeroStats = () => {
  const stats = [
    { icon: Award, label: '10+ Years Experience' },
    { icon: Smile, label: '500+ Success Stories' },
    { icon: Clock, label: 'Flexible Programs' }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 pt-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-800/30 rounded-lg">
          <stat.icon className="w-6 h-6 text-[#ff6b00] mb-2" />
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;