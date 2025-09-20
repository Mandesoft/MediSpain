'use client';

import { useEffect } from 'react';

export default function ScrollHeader() {
  useEffect(() => {
    // Function to set header styles
    const setHeaderStyles = () => {
      const header = document.getElementById('main-header');
      if (header) {
        // Always show solid white header
        header.classList.add('bg-white', 'shadow-md', 'py-2');
        header.classList.remove('bg-transparent');
        
        // Update text colors for light background
        const title = header.querySelector('h1');
        const icon = header.querySelector('svg');
        const navLinks = header.querySelectorAll('nav a');
        const ctaButton = header.querySelector('button.bg-white, button.bg-blue-600');
        
        if (title) {
          title.classList.add('text-gray-800');
          title.classList.remove('text-white');
        }
        
        if (icon) {
          icon.classList.add('text-gray-800');
          icon.classList.remove('text-white');
        }
        
        navLinks.forEach(link => {
          link.classList.add('text-gray-700', 'hover:text-blue-600');
          link.classList.remove('text-white', 'hover:text-blue-200');
        });
        
        if (ctaButton) {
          ctaButton.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
          ctaButton.classList.remove('bg-white', 'text-blue-600', 'hover:bg-blue-50');
        }
      }
    };

    // Set initial styles
    setHeaderStyles();
    
    // Also update on scroll (in case any other code modifies the header)
    const handleScroll = () => setHeaderStyles();
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
