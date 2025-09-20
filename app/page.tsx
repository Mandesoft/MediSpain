'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { FaClinicMedical, FaPlane, FaLanguage, FaStar } from 'react-icons/fa';
import ScrollHeader from './components/ScrollHeader';
import TreatmentsGrid from './components/TreatmentCarousel';
import DestinationsCarousel from './components/DestinationsCarousel';
import MedicalNeedsForm from './components/MedicalNeedsForm';

type Treatment = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  cities: string[];
  image: string;
};

type City = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const cities: City[] = [
    {
      id: 1,
      name: 'Barcelona',
      image: '/barcelona.jpg',
      description: 'World-renowned medical facilities with a Mediterranean lifestyle',
    },
    {
      id: 2,
      name: 'Madrid',
      image: '/madrid.jpg',
      description: 'Leading medical centers in the heart of Spain',
    },
    {
      id: 3,
      name: 'Málaga',
      image: '/malaga.jpg',
      description: 'Quality healthcare with a coastal retreat experience',
    },
  ];

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollHeader />
      
      {/* Header - Transparent on hero, solid on scroll */}
      <header className="fixed w-full z-50 transition-all duration-300" id="main-header">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaClinicMedical className="text-3xl text-white" />
            <h1 className="text-2xl font-bold text-white">MediSpain</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#treatments" onClick={(e) => scrollToSection(e, 'treatments')} className="text-white hover:text-blue-200 font-medium transition-colors">Treatments</a>
            <a href="#destinations" onClick={(e) => scrollToSection(e, 'destinations')} className="text-white hover:text-blue-200 font-medium transition-colors">Destinations</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-blue-200 font-medium transition-colors">About Us</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-blue-200 font-medium transition-colors">Contact</a>
          </nav>
          
          <button className="hidden md:block bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-all font-medium">
            Get a Free Quote
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#treatments" className="text-gray-700 hover:text-blue-600 font-medium" onClick={(e) => {
                scrollToSection(e, 'treatments');
                setIsMenuOpen(false);
              }}>Treatments</a>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 font-medium" onClick={(e) => {
                scrollToSection(e, 'destinations');
                setIsMenuOpen(false);
              }}>Destinations</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={(e) => {
                scrollToSection(e, 'about');
                setIsMenuOpen(false);
              }}>About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={(e) => {
                scrollToSection(e, 'contact');
                setIsMenuOpen(false);
              }}>Contact</a>
              <a href="#get-quote" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors" onClick={(e) => {
                scrollToSection(e, 'get-quote');
                setIsMenuOpen(false);
              }}>
                Get a Quote
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full">
                Get a Free Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Full-Page Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
            alt="Modern hospital in Spain" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a solid color if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjkwMCI+PHJlY3Qgd2lkdGg9IjE0NDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjMDI2OGE3Ii8+PHRleHQgeD0iNzIwIiB5PSI0NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhlYWx0aCAmIEJlYXV0eSBTcGFpbjwvdGV4dD48L3N2Zz4=';
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              World-Class Healthcare in Spain
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Experience Exceptional <span className="text-blue-300">Medical Care</span> in Spain&#39;s Finest Cities
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
              Combine your treatment with recovery in Spain&#39;s most beautiful destinations, from Barcelona&#39;s beaches to Madrid&#39;s cultural attractions. US and UK prices without compromising on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Treatments
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-lg">
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Medical Tourism in Spain?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaStar className="text-yellow-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Facilities</h3>
              <p className="text-gray-600">Spain&#39;s medical facilities are among the best in the world, with JCI-accredited hospitals and internationally trained doctors.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaPlane className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Travel</h3>
              <p className="text-gray-600">All-inclusive packages including flights, accommodation, and transportation.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaLanguage className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-600">Dedicated coordinators who speak your language throughout your medical journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="bg-gray-50">
        <TreatmentsGrid />
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="bg-white py-16">
        <DestinationsCarousel />
      </section>

      {/* CTA Section with Form */}
      <section id="get-quote" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Medical Journey?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and personalized treatment plan.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Medical Needs</h3>
              <p className="text-gray-600">Complete this form and we&#39;ll prepare a personalized treatment plan for you</p>
            </div>
            <MedicalNeedsForm />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Prefer to speak with someone directly?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+34123456789" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +34 123 456 789
              </a>
              <a href="mailto:info@medispain.com" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@medispain.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaClinicMedical className="text-2xl text-blue-500" />
                <span className="text-white font-bold text-xl">MediSpain</span>
              </div>
              <p className="text-sm">Our patients save an average of 60-70% on medical procedures compared to US prices, while enjoying Spain&#39;s world-class healthcare system.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
                <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <address className="not-italic">
                <p className="mb-2">123 Medical Center Dr.</p>
                <p className="mb-2">Barcelona, 08001</p>
                <p className="mb-2">Spain</p>
                <p className="mb-2">+34 123 456 789</p>
                <p>info@medispain.com</p>
              </address>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} MediSpain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
