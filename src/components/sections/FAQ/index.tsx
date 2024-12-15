import React from 'react';
import { HelpCircle } from 'lucide-react';
import { faqData } from './data';
import FAQItem from './FAQItem';

const FAQ = () => {
  return (
    <section id="faq" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 text-[#ff6b00] mr-2" />
              <span className="text-[#ff6b00] font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our transformation programs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;