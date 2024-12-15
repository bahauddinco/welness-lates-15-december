import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
            {/* Contact Form */}
            <div className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#ff6b00]/90 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ff6b00] mt-1" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:contact@example.com"
                        className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ff6b00] mt-1" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#ff6b00] mt-1" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400">
                        123 Wellness Street
                        <br />
                        Healthy City, HC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
