import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../../../hooks/useContactForm';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit
  } = useContactForm();

  if (submitSuccess) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white ${
              errors.firstName ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white ${
              errors.lastName ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent text-white ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#ff6b00]/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={20} />
      </button>
    </form>
  );
};

export default ContactForm;