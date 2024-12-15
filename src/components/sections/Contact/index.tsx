import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
              <span className="text-[#ff6b00] font-medium">Get in Touch</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? We're here to help you on your wellness journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;