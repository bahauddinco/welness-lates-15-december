import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$49',
    period: 'month',
    features: [
      { text: 'Personalized Workout Plan', included: true },
      { text: 'Basic Nutrition Guide', included: true },
      { text: 'Weekly Check-ins', included: true },
      { text: '24/7 Support', included: false },
      { text: 'Video Call Consultations', included: false },
      { text: 'Custom Meal Plans', included: false },
    ]
  },
  {
    title: 'Pro',
    price: '$99',
    period: 'month',
    features: [
      { text: 'Personalized Workout Plan', included: true },
      { text: 'Advanced Nutrition Guide', included: true },
      { text: 'Bi-weekly Check-ins', included: true },
      { text: '24/7 Support', included: true },
      { text: '2 Video Call Consultations', included: true },
      { text: 'Custom Meal Plans', included: false },
    ],
    isPopular: true
  },
  {
    title: 'Elite',
    price: '$199',
    period: 'month',
    features: [
      { text: 'Personalized Workout Plan', included: true },
      { text: 'Premium Nutrition Guide', included: true },
      { text: 'Weekly Check-ins', included: true },
      { text: '24/7 Priority Support', included: true },
      { text: '4 Video Call Consultations', included: true },
      { text: 'Custom Meal Plans', included: true },
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
              <span className="text-[#ff6b00] font-medium">Pricing Plans</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your wellness goals. All plans include access to our mobile app and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;