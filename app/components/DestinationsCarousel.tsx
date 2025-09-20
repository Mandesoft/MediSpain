'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaPlane, FaHotel, FaHeartbeat, FaUtensils, FaSun } from 'react-icons/fa';

type Destination = {
  id: number;
  name: string;
  image: string;
  description: string;
  medicalFacilities: string[];
  highlights: string[];
  bestTimeToVisit: string;
  avgTreatmentSavings: string;
  icon: ReactNode;
};

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Barcelona',
      image: '/images/destinations/barcelona.jpg',
      description: 'A vibrant city known for its stunning architecture, beautiful beaches, and world-class medical facilities.',
      medicalFacilities: ['Quirónsalud Barcelona', 'Hospital Clínic de Barcelona', 'Teknon Medical Center'],
      highlights: ['Sagrada Família', 'Park Güell', 'Gothic Quarter', 'Barceloneta Beach'],
      bestTimeToVisit: 'April-June, September-October',
      avgTreatmentSavings: '40-60%',
      icon: <FaMapMarkerAlt className="text-red-500" />
    },
    {
      id: 2,
      name: 'Madrid',
      image: '/images/destinations/madrid.jpg',
      description: 'Spain\'s capital offers top-tier healthcare combined with rich culture, art, and gastronomy.',
      medicalFacilities: ['Hospital Universitario Quirónsalud Madrid', 'Hospital La Paz', 'Clínica Universidad de Navarra'],
      highlights: ['Prado Museum', 'Royal Palace', 'Retiro Park', 'Santiago Bernabéu Stadium'],
      bestTimeToVisit: 'April-June, September-October',
      avgTreatmentSavings: '35-55%',
      icon: <FaMapMarkerAlt className="text-blue-500" />
    },
    {
      id: 3,
      name: 'Málaga',
      image: '/images/destinations/malaga.jpg',
      description: 'A sunny coastal city with excellent medical facilities and a relaxed Mediterranean lifestyle.',
      medicalFacilities: ['Hospital Vithas Xanit Internacional', 'Hospital Quirónsalud Málaga', 'Hospital Regional Universitario de Málaga'],
      highlights: ['Alcazaba', 'Málaga Cathedral', 'Picasso Museum', 'La Malagueta Beach'],
      bestTimeToVisit: 'April-June, September-October',
      avgTreatmentSavings: '45-65%',
      icon: <FaMapMarkerAlt className="text-yellow-500" />
    },
    {
      id: 4,
      name: 'Águilas (Murcia)',
      image: '/images/destinations/aguilas.jpg',
      description: 'A charming coastal town in the Murcia region, known for its beautiful beaches and high-quality medical tourism services.',
      medicalFacilities: ['Hospital de La Vega Lorenzo Guirao', 'Clínica San Francisco', 'Centro Médico Virgen del Rosario'],
      highlights: ['Playa de la Colonia', 'Castle of San Juan de las Águilas', 'Hornillo Port', 'Calabardina Natural Park'],
      bestTimeToVisit: 'May-June, September-October',
      avgTreatmentSavings: '50-70%',
      icon: <FaMapMarkerAlt className="text-green-500" />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= destinations.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - (isMobile ? 1 : 2) : prevIndex - 1
    );
  };

  const getVisibleDestinations = () => {
    if (isMobile) {
      return [destinations[currentIndex % destinations.length]];
    }
    
    const visible = [];
    for (let i = 0; i < Math.min(2, destinations.length); i++) {
      visible.push(destinations[(currentIndex + i) % destinations.length]);
    }
    return visible;
  };

  const visibleDestinations = getVisibleDestinations();

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Explore Our Top Destinations</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover Spain's premier medical tourism destinations, combining world-class healthcare with unforgettable experiences.
        </p>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all -ml-4"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-700 text-xl" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            {visibleDestinations.map((destination) => (
              <div 
                key={destination.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col h-[600px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover absolute inset-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center bg-blue-600 text-white';
                          fallback.textContent = destination.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="text-gray-500 text-center p-4">
                      <p>Loading {destination.name}...</p>
                      <p className="text-sm">(Image placeholder)</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      {destination.icon}
                      <span className="ml-2">{destination.name}</span>
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
                        <FaHeartbeat className="mr-2 text-red-500" />
                        Top Medical Facilities:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {destination.medicalFacilities.map((facility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 flex items-center">
                          <FaSun className="mr-1 text-yellow-500" />
                          Best Time to Visit:
                        </h4>
                        <p className="text-sm text-gray-600">{destination.bestTimeToVisit}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">
                          Avg. Savings:
                        </h4>
                        <p className="text-sm text-green-600 font-semibold">{destination.avgTreatmentSavings}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-blue-500" />
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {destination.highlights.map((highlight, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <FaMapMarkerAlt className="mr-2" />
                      What to do in {destination.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all -mr-4"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-700 text-xl" />
          </button>
        </div>
        
        {/* Mobile indicators */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex % destinations.length === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to ${destinations[index].name}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
