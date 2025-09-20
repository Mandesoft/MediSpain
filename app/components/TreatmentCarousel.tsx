'use client';

import React, { JSX } from 'react';
import { FaTooth, FaProcedures, FaEye, FaBaby, FaSpa, FaUserMd } from 'react-icons/fa';

type Treatment = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  priceRange: string;
  recoveryTime: string;
  popular: boolean;
};

export default function TreatmentsGrid() {
  const treatments: Treatment[] = [
    {
      id: 1,
      title: 'Dental Care',
      description: 'Comprehensive dental services including implants, whitening, and general dentistry for a perfect smile.',
      icon: <FaTooth className="text-4xl text-blue-600" />,
      priceRange: '€500 - €5,000',
      recoveryTime: '1-7 days',
      popular: true
    },
    {
      id: 2,
      title: 'Cosmetic Surgery',
      description: 'Enhance your appearance with our expert cosmetic procedures, including facelifts and body contouring.',
      icon: <FaProcedures className="text-4xl text-pink-500" />,
      priceRange: '€3,500 - €15,000',
      recoveryTime: '2-4 weeks',
      popular: true
    },
    {
      id: 3,
      title: 'Hair Rehabilitation',
      description: 'Advanced hair restoration techniques for natural-looking, permanent results.',
      icon: <FaUserMd className="text-4xl text-amber-500" />,
      priceRange: '€2,500 - €10,000',
      recoveryTime: '3-7 days',
      popular: true
    },
    {
      id: 4,
      title: 'Vision Correction',
      description: 'LASIK and other vision correction procedures for crystal-clear eyesight without glasses.',
      icon: <FaEye className="text-4xl text-indigo-500" />,
      priceRange: '€1,500 - €3,000',
      recoveryTime: '1-3 days',
      popular: true
    },
    {
      id: 5,
      title: 'Fertility',
      description: 'Comprehensive fertility treatments and reproductive health services.',
      icon: <FaBaby className="text-4xl text-green-500" />,
      priceRange: '€3,000 - €20,000',
      recoveryTime: 'Varies',
      popular: true
    },
    {
      id: 6,
      title: 'Health & Wellbeing',
      description: 'Holistic health programs and wellness retreats for complete rejuvenation.',
      icon: <FaSpa className="text-4xl text-teal-500" />,
      priceRange: '€1,000 - €10,000',
      recoveryTime: 'Varies',
      popular: true
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Specialized Treatments</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          World-class medical procedures performed by top specialists in Spain at a fraction of the cost.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {treatment.icon}
                  </div>
                  {treatment.popular && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Price: {treatment.priceRange}</span>
                  <span>Recovery: {treatment.recoveryTime}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            View All Treatments
          </button>
        </div>
      </div>
    </div>
  );
}
