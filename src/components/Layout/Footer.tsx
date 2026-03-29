
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MessageCircle,
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#1c2939] to-[#17212e] pt-16 text-white relative overflow-hidden dark:from-[#121a26] dark:to-[#0c141e]">
      {/* Wave SVG decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-full z-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-24"
          style={{ transform: 'rotateX(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#faf5ef" 
            className="dark:fill-[#0f1621]"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/uploads/d5b16bef-71d5-41f5-aeb8-f0b2c6e8523d.png"
                alt="BizForHer Logo"
                className="h-16 w-16 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-bold text-white">BizForHer</span>
            </div>
            <p className="text-gray-300 mt-4">
              Empowering women entrepreneurs to transform their ideas into successful businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bizforherc/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                  Mentors & Jury
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#db8a6c] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-[#db8a6c]" />
                <span className="text-gray-300">info@bizforher.in</span>
              </li>
              <li className="flex items-start">
                <MessageCircle size={18} className="mr-2 mt-1 text-[#db8a6c]" />
                <span className="text-gray-300">+91 81089 40071</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and events
            </p>
            <div className="flex items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#17212e] dark:bg-[#0c141e] border-[#2a3a50] focus:border-[#db8a6c] focus:ring-[#db8a6c]"
              />
              <Button className="bg-[#db8a6c] hover:bg-[#c97b5d] whitespace-nowrap text-white dark:text-[#1c2939]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a3a50] py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400">
              © {year} BizForHer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
