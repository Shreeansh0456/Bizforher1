import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import CountdownTimer from '@/components/shared/CountdownTimer';


const InteractiveHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      if (position > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Handle parallax and fade effects based on scroll
  useEffect(() => {
    if (titleRef.current && heroRef.current) {
      const opacity = Math.max(0, 1 - scrollPosition / 900);
      const scale = Math.max(0.5, 1 - scrollPosition / 1500);
      const translateY = scrollPosition * 0.2;
      
      titleRef.current.style.opacity = opacity.toString();
      titleRef.current.style.transform = `translateY(-${translateY}px) scale(${scale})`;
    }
  }, [scrollPosition]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#faf5ef] transition-colors duration-700"
      style={{ 
        backgroundColor: scrollPosition > 200 
          ? 'rgba(219, 138, 108, 0.05)' 
          : 'rgba(250, 245, 239, 1)' 
      }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      {/* Particles overlay */}
      <ParticlesBackground 
        count={80}
        colorPrimary="#db8a6c" 
        colorSecondary="#1c2939" 
        minSize={2}
        maxSize={5}
        speed={0.2}
      />

      {/* Main content */}
      <div className="container-custom relative z-10 pt-20 md:pt-0 flex flex-col items-center justify-center text-center">
        {/* Logo - Made larger and more prominent */}
        <div className="mb-8">
          <img 
            src="/uploads/d5b16bef-71d5-41f5-aeb8-f0b2c6e8523d.png"
            alt="BizForHer Logo"
            className="h-40 w-40 md:h-48 md:w-48 object-contain mx-auto drop-shadow-lg"
          />
        </div>

        {/* Main headline - single line */}
        <h1 
          ref={titleRef}
          className="heading-xl text-center transition-all duration-700 mb-8 mx-auto"
          style={{ textShadow: '0 4px 12px rgba(219, 138, 108, 0.2)' }}
        >
          <span className="text-[#1c2939]">BIZ </span>
          <span className="text-[#db8a6c]">FOR </span>
          <span className="text-[#1c2939]">HER</span>
        </h1>

        {/* Subtitle - fades in as user scrolls */}
        <div 
          className={cn(
            "transition-all duration-700 max-w-2xl text-center px-4",
            scrollPosition > 50 ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-xl md:text-2xl font-medium text-[#1c2939] mb-6">
            India's premier business case competition for high school girls. Analyze real-world challenges and showcase strategic solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={cn(
          "absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500",
          scrollPosition > 100 ? "opacity-0" : "opacity-100"
        )}
      >
        <span className="text-sm text-[#1c2939]/70 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-[#1c2939]/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#db8a6c] rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Second content section - revealed on scroll */}
      <div 
        ref={ref}
        className={cn(
          "absolute top-full left-0 right-0 min-h-screen w-full bg-gradient-to-b from-[#faf5ef] to-[#faf5ef] pt-8 pb-24 transition-transform duration-1000",
          isInView ? "translate-y-0" : "translate-y-20"
        )}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Empowering Young Women at Every Step</h2>
            <p className="text-xl max-w-3xl mx-auto text-[#1c2939]/80">
              A platform built for HER success in the business world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Lightbulb className="w-12 h-12 text-[#db8a6c]" />,
                title: "Ideas Incubation",
                description: "Transform your innovative ideas into viable business opportunities with expert guidance"
              },
              {
                icon: <BookOpen className="w-12 h-12 text-[#db8a6c]" />,
                title: "Educational Resources",
                description: "Access exclusive learning materials and masterclasses designed for women entrepreneurs"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-[#db8a6c]" />,
                title: "Growth Acceleration",
                description: "Scale your business with strategic mentorship and access to funding opportunities"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl p-8 shadow-lg transition-all duration-500 scroll-reveal relative",
                  isInView && "active"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Much darker overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
                
                {/* Content with strong contrast */}
                <div className="relative z-10">
                  <div className="mb-4 bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{item.title}</h3>
                  <p className="text-white font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
