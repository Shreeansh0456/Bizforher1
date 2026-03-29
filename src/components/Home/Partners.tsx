
import React, { useState, useEffect } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const Partners = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Listen for theme changes
    const handleThemeChange = (event: CustomEvent) => {
      setTheme(event.detail.theme);
    };

    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  // Partner organizations backing BizForHer
  const partners = [
    { 
      name: 'Wesleyan', 
      logo: '/uploads/d130dc3a-62ef-401a-ba7c-368d70718905.png',
      url: 'https://www.wesleyancollege.edu/'
    },
    { 
      name: 'FLAME University', 
      logo: '/uploads/8fd76eb3-991e-47c9-b2ea-51e5c9b9337c.png',
      url: 'https://application.flame.edu.in/application'
    },
    { 
      name: 'The Outreach Collective', 
      logo: '/uploads/343f3bc5-dfb9-4d58-9f98-744abc75ffd2.png',
      url: 'https://www.theoutreachcollective.in/'
    },
    { 
      name: 'BCG', 
      logo: '/uploads/f86a15f3-4ebc-47c5-b74f-1f26da14cbf9.png',
      url: 'https://www.bcg.com/'
    },
    { 
      name: 'IIMU', 
      logo: '/uploads/56322aa7-2384-44c4-985f-46e22b7126c4.png',
      url: 'https://www.iimu.ac.in/'
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Backed By
          </span>
          <AnimatedHeading
            text="Supported By Leading Organizations"
            className="heading-lg mb-6 dark:text-white"
            tag="h2"
            animationType="typewriter"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are proud to be backed by organizations committed to empowering young women in business and entrepreneurship.
          </p>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-12">
          {/* First row with three logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 lg:gap-32">
            {partners.slice(0, 3).map((partner, index) => (
              <AnimatedSection 
                key={partner.name} 
                animation="scale-in" 
                delay={index * 200} 
                className="flex justify-center items-center"
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-72 w-80 flex items-center justify-center transition-transform hover:scale-105"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className={`max-h-full max-w-full object-contain ${
                      partner.name === 'Wesleyan' ? 'scale-90' : ''
                    }`}
                  />
                </a>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Second row with remaining logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 lg:gap-32">
            {partners.slice(3).map((partner, index) => (
              <AnimatedSection 
                key={partner.name} 
                animation="scale-in" 
                delay={(index + 3) * 200} 
                className="flex justify-center items-center"
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-72 w-80 flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
