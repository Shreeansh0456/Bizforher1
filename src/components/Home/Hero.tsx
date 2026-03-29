
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf5ef]">
      <ParticlesBackground count={75} />
      
      <div className="container-custom pt-10 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 lg:space-y-8">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-2 bg-[#db8a6c]/10 text-[#db8a6c] rounded-full font-medium mb-2">
                National Business Case Competition for High School Girls
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <AnimatedHeading
                text={["Develop Your Ideas", "Build Your Skills", "Shape Your Future"]}
                className="heading-xl text-gradient"
                tag="h1"
                animationType="typewriter"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-lg md:text-xl text-[#1c2939] max-w-xl">
                Join India's premier business case competition for high school girls. Showcase your innovative solutions to real-world business challenges and win from a prize pool of ₹10,00,000.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#db8a6c] hover:bg-[#c97b5d] text-white group">
                    Unstop Page
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/about">
                  <Button variant="outline" className="border-[#db8a6c] text-[#db8a6c] hover:bg-[#db8a6c]/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                        alt="Participant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#db8a6c] text-white flex items-center justify-center text-xs font-bold">
                    +200
                  </div>
                </div>
                <span className="text-sm text-[#1c2939]">
                  Join 200+ aspiring young leaders
                </span>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="scale-in" delay={500} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#db8a6c]/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#1c2939]/10 rounded-full animate-pulse"></div>
              
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="High school girls working on business case"
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full max-w-lg h-auto"
              />
              
              <div className="absolute top-6 right-0 transform translate-x-1/2 bg-white rounded-lg shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-[#db8a6c] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c2939]">Registration Open</p>
                    <p className="text-sm text-gray-500">Submit by June 21, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 left-0 transform -translate-x-1/4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#1c2939] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <p className="font-semibold text-sm text-[#1c2939]">₹10L Prize Pool</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
