'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaCalendarAlt, FaMapMarkerAlt, FaUserMd, FaEuroSign } from 'react-icons/fa';

export default function MedicalNeedsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    language: '',
    treatmentNeeds: '',
    preferredDestination: '',
    preferredDate: '',
    budget: '',
    additionalNotes: ''
  });

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Italy', 'Netherlands',
    'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Switzerland', 'Austria', 'New Zealand',
    'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'South Africa', 'Other'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Arabic', 'Chinese', 'Japanese', 'Korean', 'Other'
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md mb-12">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-green-800">Thank you for your submission!</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>Our medical tourism specialists are reviewing your needs. We'll contact you within 24 hours with a personalized treatment plan including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Recommended treatment options</li>
                <li>Destination suggestions with top medical facilities</li>
                <li>Detailed cost estimates</li>
                <li>Travel and accommodation arrangements</li>
                <li>Estimated treatment and recovery timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
            <FaUserMd className="h-6 w-6 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-white">Tell Us Your Medical Needs</h2>
            <p className="text-blue-100 mt-1">Get a personalized treatment plan with cost estimates and travel arrangements</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Smith"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+34 123 456 789"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country of Origin *</label>
            <div className="relative">
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Preferred Language *</label>
            <div className="relative">
              <select
                id="language"
                name="language"
                required
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select preferred language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="preferredDestination" className="block text-sm font-medium text-gray-700">Preferred Destination</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="preferredDestination"
                name="preferredDestination"
                value={formData.preferredDestination}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Any destination in Spain</option>
                <option value="barcelona">Barcelona</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="murcia">Murcia (Águilas)</option>
                <option value="valencia">Valencia</option>
                <option value="seville">Seville</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Travel Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEuroSign className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select budget range</option>
                <option value="1000-3000">€1,000 - €3,000</option>
                <option value="3000-7000">€3,000 - €7,000</option>
                <option value="7000-15000">€7,000 - €15,000</option>
                <option value="15000-30000">€15,000 - €30,000</option>
                <option value="30000+">€30,000+</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <label htmlFor="treatmentNeeds" className="block text-sm font-medium text-gray-700">
            Describe Your Medical Needs *
            <span className="text-xs text-gray-500 ml-1">(e.g., dental implants, knee replacement, cosmetic surgery)</span>
          </label>
          <textarea
            id="treatmentNeeds"
            name="treatmentNeeds"
            required
            rows={4}
            value={formData.treatmentNeeds}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please describe the treatment you're interested in, any specific requirements, and your medical history if relevant..."
          />
        </div>
        
        <div className="mt-6 space-y-2">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes or Questions
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={3}
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Any special requirements, questions, or additional information you'd like to share..."
          />
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <FaPaperPlane className="-ml-1 mr-2 h-5 w-5" />
                Get My Personalized Treatment Plan
              </>
            )}
          </button>
          <p className="mt-2 text-xs text-gray-500 text-center">
            We'll contact you within 24 hours with a comprehensive treatment plan and quote.
          </p>
        </div>
      </form>
    </div>
  );
}
