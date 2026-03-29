
import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const features = [
  {
    title: 'Expert Mentorship',
    description: 'Access to business professionals and educators who provide guidance and support throughout the competition.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5"></circle>
        <path d="M20 21a8 8 0 0 0-16 0"></path>
      </svg>
    ),
  },
  {
    title: 'Business Training',
    description: 'Specialized workshops for semifinalists to learn essential entrepreneurship, marketing, and presentation skills.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: 'Skill Development',
    description: 'Enhance your critical thinking, problem-solving, and teamwork abilities through hands-on business case analysis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: 'Networking',
    description: 'Build valuable connections with fellow participants, mentors, and business leaders across India.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: 'National Recognition',
    description: 'Showcase your talent and business acumen on a national platform, gaining visibility with academic institutions and potential employers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    title: 'Cash Prizes',
    description: 'Win from a total prize pool of ₹25,00,000 to support your education and future endeavors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
        <circle cx="12" cy="8" r="7"></circle>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            What You'll Gain
          </span>
          <AnimatedHeading
            text="Empowering Young Women at Every Step"
            className="heading-lg mb-6"
            tag="h2"
          />
          <p className="text-lg text-gray-600">
            BizForHer provides comprehensive support to help you discover your business potential and develop valuable skills for the future.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title} 
              animation="scale-in" 
              delay={index * 100}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-primary">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Free to participate</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
