'use client';

import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEuroSign, FaCheck, FaExclamationTriangle, FaUserMd } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';

export default function MedicalNeedsForm() {
  // Test Supabase connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('test_connection')
          .select('*')
          .limit(1);
          
        if (error) {
          console.error('Supabase connection test failed:', error.message);
        } else {
          console.log('✅ Supabase connection successful!');
        }
      } catch (error) {
        console.error('Error testing Supabase connection:', error);
      }
    };

    testConnection();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    language: '',
    treatmentNeeds: '',
    preferredDestination: '',
    preferredStartDate: '',
    preferredEndDate: '',
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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);

    try {
      const { data, error } = await supabase
        .from('client_requests')
        .insert([{
          ...formData,
          preferred_start_date: formData.preferredStartDate,
          preferred_end_date: formData.preferredEndDate,
          preferred_destination: formData.preferredDestination,
          treatment_needs: formData.treatmentNeeds,
          additional_notes: formData.additionalNotes,
        }])
        .select();

      if (error) throw error;
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md mb-12">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaCheck className="h-5 w-5 text-green-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Thank you for your inquiry! We've received your information and our team will contact you shortly.
            </p>
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
            <p className="text-sm text-gray-200">We'll never share your personal information with third parties.</p>
            <p className="text-gray-300">Complete this form and we'll prepare a personalized treatment plan for you</p>
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
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
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
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
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
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
              placeholder="+34 123 456 789"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-semibold text-gray-900">Country of Origin *</label>
            <div className="relative">
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 appearance-none bg-white text-gray-900"
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 appearance-none bg-white text-gray-900"
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
            <label htmlFor="preferredDestination" className="block text-sm font-semibold text-gray-900">Preferred Destination</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
              </div>
              <select
                id="preferredDestination"
                name="preferredDestination"
                value={formData.preferredDestination}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 appearance-none bg-white text-gray-900"
              >
                <option value="">Any destination in Spain</option>
                <option value="barcelona">Barcelona</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="murcia">Murcia (Águilas)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Travel Dates *</label>
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-3">
              {/* Start Date */}
              <div className="flex-1 w-full">
                <input
                  type="date"
                  id="preferredStartDate"
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-r-0 border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              {/* Divider */}
              <div className="hidden md:flex items-center justify-center h-10 w-4 text-gray-400">
                <span className="text-sm">-</span>
              </div>
              
              {/* End Date */}
              <div className="flex-1 w-full mt-6 md:mt-0">
                <input
                  type="date"
                  id="preferredEndDate"
                  name="preferredEndDate"
                  value={formData.preferredEndDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-l-0 border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white disabled:bg-gray-50"
                  min={formData.preferredStartDate || new Date().toISOString().split('T')[0]}
                  disabled={!formData.preferredStartDate}
                  required
                />
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Select your desired travel period</p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-900">Estimated Budget</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEuroSign className="h-5 w-5 text-gray-700" />
              </div>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 appearance-none bg-white text-gray-900"
              >
                <option value="" className="text-gray-600">Select budget range</option>
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
          <label htmlFor="treatmentNeeds" className="block text-sm font-semibold text-gray-900">
            Describe Your Medical Needs *
            <span className="block text-xs text-gray-600 mt-1">(e.g., dental implants, knee replacement, cosmetic surgery)</span>
          </label>
          <textarea
            id="treatmentNeeds"
            name="treatmentNeeds"
            rows={4}
            value={formData.treatmentNeeds}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
            placeholder="Please describe the treatment you're interested in, any specific requirements, and your medical history if relevant..."
            required
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-500 text-gray-900 bg-white"
            placeholder="Any special requirements, questions, or additional information you'd like to share..."
          />
        </div>
        
        <div className="mt-8">
          {submitError && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaExclamationTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
              </div>
            </div>
          )}
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
              'Submit Request'
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
