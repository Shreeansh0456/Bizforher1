
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8B5CF6_0.5px,transparent_0.5px)] [background-size:15px_15px] opacity-20"></div>
      </div>
      
      <div className="container-custom">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <AnimatedSection animation="fade-up">
                <h2 className="heading-lg mb-6">Ready to Showcase Your Business Skills?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Register now for BizForHer 2025 and join hundreds of high school girls across India competing for recognition, mentorship, and prizes including cash awards up to ₹4,00,000, university scholarships, and program opportunities worth over ₹12,00,000.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary group">
                      Unstop Page
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <Link to="/about">
                    <Button variant="outline" className="btn-outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
              <img 
                src="/uploads/f4480896-8c82-4d74-8723-55454d450e41.png" 
                alt="BizForHer participant with laptop" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12">
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="text-white max-w-md">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm mb-4">
                      How It Works
                    </span>
                    <h3 className="text-2xl font-bold mb-4">Competition Rounds</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <span className="font-bold">1</span>
                        </div>
                        <div>
                          <p className="font-semibold">Preliminary Round</p>
                          <p className="text-sm text-white/80">15-slide presentation of your solution</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <span className="font-bold">2</span>
                        </div>
                        <div>
                          <p className="font-semibold">Semi-Finals</p>
                          <p className="text-sm text-white/80">YouTube video presentation</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <span className="font-bold">3</span>
                        </div>
                        <div>
                          <p className="font-semibold">Finals</p>
                          <p className="text-sm text-white/80">Live pitch to jury panel via Zoom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
