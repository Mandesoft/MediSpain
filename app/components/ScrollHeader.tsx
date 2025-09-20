'use client';

import { useEffect } from 'react';

export default function ScrollHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      const isScrolled = window.scrollY > 50;
      
      if (isScrolled) {
        header?.classList.add('bg-white', 'shadow-md', 'py-2');
        header?.classList.remove('bg-transparent');
        header?.querySelector('h1')?.classList.add('text-gray-800');
        header?.querySelector('h1')?.classList.remove('text-white');
        header?.querySelector('svg')?.classList.add('text-gray-800');
        header?.querySelector('svg')?.classList.remove('text-white');
        
        // Update navigation links
        const navLinks = header?.querySelectorAll('nav a');
        navLinks?.forEach(link => {
          link.classList.add('text-gray-700', 'hover:text-blue-600');
          link.classList.remove('text-white', 'hover:text-blue-200');
        });
        
        // Update CTA button
        const ctaButton = header?.querySelector('button.bg-white');
        ctaButton?.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
        ctaButton?.classList.remove('bg-white', 'text-blue-600', 'hover:bg-blue-50');
      } else {
        header?.classList.remove('bg-white', 'shadow-md', 'py-2');
        header?.classList.add('bg-transparent');
        header?.querySelector('h1')?.classList.remove('text-gray-800');
        header?.querySelector('h1')?.classList.add('text-white');
        header?.querySelector('svg')?.classList.remove('text-gray-800');
        header?.querySelector('svg')?.classList.add('text-white');
        
        // Update navigation links
        const navLinks = header?.querySelectorAll('nav a');
        navLinks?.forEach(link => {
          link.classList.remove('text-gray-700', 'hover:text-blue-600');
          link.classList.add('text-white', 'hover:text-blue-200');
        });
        
        // Update CTA button
        const ctaButton = header?.querySelector('button.bg-blue-600');
        ctaButton?.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
        ctaButton?.classList.add('bg-white', 'text-blue-600', 'hover:bg-blue-50');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
