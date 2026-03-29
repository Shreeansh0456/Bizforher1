
import React, { useState, useEffect } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const testimonials = [
  {
    id: 1,
    quote: "BizForHer was the turning point in my entrepreneurial journey. The mentorship and connections I gained helped my sustainable fashion brand secure ₹50L in funding.",
    author: "Priya Sharma",
    role: "Founder, EcoChic Fashion",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    quote: "I went from having just an idea to launching a full-fledged tech startup. The workshops on pitching and business planning were game-changers for me.",
    author: "Aisha Khan",
    role: "CEO, HealthTech Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "The network I built through BizForHer continues to support me years later. My organic food company now exports to three countries thanks to connections made here.",
    author: "Meera Patel",
    role: "Founder, Green Earth Foods",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    quote: "As a woman in fintech, I faced unique challenges. BizForHer provided the platform, mentorship, and confidence I needed to secure my first round of funding.",
    author: "Divya Kapoor",
    role: "Co-founder, PaySmart",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Success Stories
          </span>
          <AnimatedHeading
            text="Hear From Our Community"
            className="heading-lg mb-6"
            tag="h2"
          />
          <p className="text-lg text-gray-600">
            Real stories of transformation and success from women who participated in our program.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
