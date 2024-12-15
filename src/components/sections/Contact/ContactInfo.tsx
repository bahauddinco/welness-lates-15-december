import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-[#ff6b00] mt-1" />
          <div>
            <p className="text-white font-medium">Email</p>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
              contact@example.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-[#ff6b00] mt-1" />
          <div>
            <p className="text-white font-medium">Phone</p>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
              +1 (234) 567-890
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-[#ff6b00] mt-1" />
          <div>
            <p className="text-white font-medium">Address</p>
            <p className="text-gray-400">
              123 Wellness Street<br />
              Healthy City, HC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;