
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Link } from 'react-router-dom';

const CompetitionOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            About The Competition
          </span>
          <AnimatedHeading
            text="What is BizForHer?"
            className="heading-lg mb-6"
            tag="h2"
          />
          <p className="text-lg text-gray-600">
            A national-level business case competition empowering high school girls across India
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <AnimatedSection animation="fade-up" className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg">
                BizForHer is a national-level business case competition aimed at empowering high school girls across India, especially those from rural, state, and government schools. The competition is designed to spotlight young women's innovative solutions to real-world business challenges and help them recognize their entrepreneurial potential.
              </p>
              <p className="text-lg">
                Despite the increasing success of women in business, representation from under-resourced communities remains limited. BizForHer seeks to change that narrative by equipping young women with business skills, mentorship, and access to capital—so they can lead with confidence.
              </p>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Who Can Participate?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Girls currently in Grades 9 to 12</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Students from any Indian curriculum: CBSE, ICSE, State Board, IB, IGCSE, etc.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Teams must consist of 2 to 4 members</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>No prior business knowledge or experience required</span>
                </li>
              </ul>
              
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Prizes & Opportunities</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-primary">For EWS Finalists</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">1st</div>
                        <div className="font-medium text-sm">₹3,00,000</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">2nd</div>
                        <div className="font-medium text-sm">₹2,00,000</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">3rd</div>
                        <div className="font-medium text-sm">₹1,00,000</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Plus full Wesleyan College scholarship opportunities and guaranteed internships</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-primary">For Non-EWS Finalists</h4>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• ₹4,00,000 worth of OYI program coupons</li>
                      <li>• FLAME University scholarships (₹25,000 each)</li>
                      <li>• Wesleyan OWS scholarships (₹20,000 each)</li>
                      <li>• Full OYI Business Program scholarships (₹20,000 value)</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-primary">For All Semi-Finalists</h4>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• Wesleyan College acceptance scholarships</li>
                      <li>• Up to 75% OYI program scholarships</li>
                      <li>• TOC Prabhav scholarships (EWS students)</li>
                      <li>• Mentorship from IIM professors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Join BizForHer?</h3>
            <p className="text-center mb-8">
              Women make up less than 15% of entrepreneurs in India, and girls in rural and state schools rarely get business exposure. BizForHer provides a rare, meaningful opportunity to gain practical experience, recognition, and funding that can shape future leadership paths. The competition is not just about winning—it's about helping young women across India discover what they are capable of.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-3">Learn & Grow</h4>
                <p className="text-sm">Develop, present, and defend business ideas with mentorship from real business leaders and teachers.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-3">Build Skills</h4>
                <p className="text-sm">Enhance your public speaking, teamwork, and critical thinking abilities in a supportive environment.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-3">Shape Your Future</h4>
                <p className="text-sm">Add meaningful leadership experience to your academic profile and join a national network of like-minded young women.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CompetitionOverview;
