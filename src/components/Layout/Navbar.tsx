
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Listen for theme changes
    const handleThemeChange = (event: CustomEvent) => {
      setTheme(event.detail.theme);
    };

    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/apply', label: 'Apply' },
    { to: '/mentors', label: 'Mentors & Jury' },
    { to: '/contact', label: 'Contact' },
  ];

  // Define background based on scroll and theme
  const getNavbarBackground = () => {
    if (isScrolled) {
      return 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40';
    }
    return theme === 'dark' 
      ? 'bg-[#1c2939]/80 backdrop-blur-md border-b border-[#1c2939]/20' 
      : 'bg-[#faf5ef]/10 backdrop-blur-sm';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo, Navigation, and Action Button */}
          <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-1">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
              <img 
                src="/uploads/d5b16bef-71d5-41f5-aeb8-f0b2c6e8523d.png"
                alt="BizForHer Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl lg:text-2xl font-heading font-bold transition-colors">
                <span className={`group-hover:opacity-80 ${theme === 'dark' ? 'text-[#faf5ef]' : 'text-[#1c2939]'}`}>BIZ</span>
                <span className="text-[#db8a6c] group-hover:text-[#c97b5d]">FOR</span>
                <span className={`group-hover:opacity-80 ${theme === 'dark' ? 'text-[#faf5ef]' : 'text-[#1c2939]'}`}>HER</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium text-sm xl:text-base transition-colors hover:text-primary whitespace-nowrap ${
                    location.pathname === link.to
                      ? 'text-primary'
                      : theme === 'dark' ? 'text-[#faf5ef]/80' : 'text-[#1c2939]/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <a 
                  href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs xl:text-sm px-3 xl:px-4 py-2 whitespace-nowrap">
                    Unstop Page
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Organization logos and theme toggle */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <div className="flex flex-col items-center space-y-1">
              <span className={`text-xs font-bold whitespace-nowrap ${theme === 'dark' ? 'text-[#faf5ef]/80' : 'text-[#1c2939]/80'}`}>Supported by</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.wesleyancollege.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img 
                    src="/uploads/d130dc3a-62ef-401a-ba7c-368d70718905.png"
                    alt="Wesleyan"
                    className="h-6 xl:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="https://application.flame.edu.in/application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img 
                    src="/uploads/8fd76eb3-991e-47c9-b2ea-51e5c9b9337c.png"
                    alt="FLAME University"
                    className="h-8 xl:h-9 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
            <div className={`h-6 w-px mx-2 ${theme === 'dark' ? 'bg-[#faf5ef]/40' : 'bg-[#1c2939]/40'}`}></div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md hover:bg-accent transition-colors flex-shrink-0 ${theme === 'dark' ? 'text-[#faf5ef]' : 'text-[#1c2939]'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors hover:text-primary py-2 ${
                      location.pathname === link.to
                        ? 'text-primary'
                        : 'text-foreground/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-2">
                  <a 
                    href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                      Unstop Page
                    </Button>
                  </a>
                </div>
                
                {/* Mobile organization logos */}
                <div className="pt-4 border-t border-border/40">
                  <span className="text-sm font-bold text-foreground/80 mb-3 block">Supported by</span>
                  <div className="flex items-center justify-center space-x-6">
                    <a
                      href="https://www.wesleyancollege.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <img 
                        src="/uploads/d130dc3a-62ef-401a-ba7c-368d70718905.png"
                        alt="Wesleyan"
                        className="h-7 object-contain opacity-80"
                      />
                    </a>
                    <a
                      href="https://application.flame.edu.in/application"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <img 
                        src="/uploads/8fd76eb3-991e-47c9-b2ea-51e5c9b9337c.png"
                        alt="FLAME University"
                        className="h-10 object-contain opacity-80"
                      />
                    </a>
                  </div>
                </div>
                
                <div className="pt-2 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
