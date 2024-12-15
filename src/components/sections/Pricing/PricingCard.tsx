import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false
}) => {
  return (
    <div className={`bg-gray-900/50 rounded-xl p-8 border ${
      isPopular ? 'border-[#ff6b00]' : 'border-gray-700/50'
    }`}>
      {isPopular && (
        <div className="bg-[#ff6b00]/10 text-[#ff6b00] text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 ${
              feature.included ? 'text-[#ff6b00]' : 'text-gray-600'
            }`} />
            <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
        isPopular
          ? 'bg-[#ff6b00] text-white hover:bg-[#ff6b00]/90'
          : 'bg-gray-800 text-white hover:bg-gray-700'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;