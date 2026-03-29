import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, FileText, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/Layout/PageLayout';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';


const Apply = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Apply Now
            </span>
            <AnimatedHeading
              text="Begin Your BizForHer Journey"
              className="heading-lg mb-6"
              tag="h1"
            />
            <p className="text-lg text-gray-600 mb-6">
              Register your team for the BizForHer competition and take the first step toward showcasing your business acumen.
            </p>
            
            {/* Semi-Finalists Link */}
            <div className="flex justify-center mb-8">
              <Link to="/#semi-finalists">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto font-semibold">
                  🎉 View Semi-Finalists List
                </Button>
              </Link>
            </div>
            
            {/* Register Button */}
            <div className="flex justify-center">
              <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary group" size="lg">
                  Unstop Page
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">How to Register</h2>
                <p className="text-lg">
                  Registration for BizForHer 2025 is completely free and open to all high school girls in grades 9-12 across India.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Form a Team</h3>
                      <p className="text-gray-600">Gather 2-4 team members from grades 9-12</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Check Deadlines</h3>
                      <p className="text-gray-600">Follow the competition timeline for important dates</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Prepare Information</h3>
                      <p className="text-gray-600">Team member details and school information</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Submit Application</h3>
                      <p className="text-gray-600">Complete the registration form on Unstop</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6">
                  <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary group" size="lg">
                      Unstop Page
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-primary text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">Registration Details</h3>
                  <p>Everything you need to know before applying</p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Eligibility</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Girls in grades 9-12</li>
                        <li>Any Indian curriculum (CBSE, ICSE, State Board, etc.)</li>
                        <li>Teams of 2-4 members</li>
                        <li>No prior business knowledge required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Important Dates</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Registration deadline: August 5, 2025, 12:00 PM IST</li>
                        <li>Round 1 begins: August 5, 2025, 06:00 PM IST</li>
                        <li>Round 1 submission deadline: August 15, 2025, 11:59 PM IST</li>
                        <li>First round results: August 29, 2025, 12:00 PM IST</li>
                        <li>Workshop for semi-finalists: August 30, 2025, 12:00 PM IST</li>
                        <li>Round 2 begins: August 30, 2025, 12:00 AM IST</li>
                        <li>Round 2 ends: September 7, 2025, 11:59 PM IST</li>
                        <li>Second round results: September 17, 2025, 12:00 PM IST</li>
                        <li>Round 3 finals: September 18-27, 2025</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">What You'll Need</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Team name</li>
                        <li>School name and address</li>
                        <li>Each team member's contact information</li>
                        <li>Teacher or advisor reference (optional)</li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-bold text-lg mb-2">Questions?</h4>
                      <p className="text-gray-600 mb-4">
                        Contact our team for assistance with your application:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 mr-2 text-primary" />
                          <span>support@bizforher.in</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 mr-2 text-primary" />
                          <span>+91 81089 40071</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-8 text-center">Complete Prize & Scholarship Structure</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-primary">EWS Finalists (Top 5)</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">1st</div>
                        <div className="font-medium text-sm">₹2,00,000</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">2nd</div>
                        <div className="font-medium text-sm">₹1,25,000</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">3rd</div>
                        <div className="font-medium text-sm">₹75,000</div>
                      </div>
                    </div>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• Scholarships worth ₹50,00,000 at Wesleyan College per student (upon admission)</li>
                      <li>• Full Scholarship to OYI Entrepreneurs in Action Business Program (₹20,000 value)</li>
                      <li>• Guaranteed internship opportunities</li>
                      <li>• Continued mentorship support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-primary">Non-EWS Finalists (Top 5)</h3>
                  <ul className="text-sm space-y-3 text-gray-600">
                    <li>• <strong>₹4,00,000</strong> worth of OYI program coupons</li>
                    <li>• <strong>FLAME University</strong> Summer Symposium Scholarships (₹25,000 per student)</li>
                    <li>• <strong>Wesleyan College</strong> Scholarship ($60,000 USD per student)</li>
                    <li>• <strong>Full Scholarship</strong> to OYI Entrepreneurs in Action Business Program (₹20,000 value)</li>
                    <li>• Internship opportunities with leading organizations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Semi-Finalist Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Wesleyan College Scholarships:</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• All students: $5,000 grant upon acceptance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Opportunities:</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Up to 75% scholarship for OYI programs</li>
                      <li>• TOC Prabhav 5 Scholarships (EWS students)</li>
                      <li>• Workshop access with IIM professors and industry leaders</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-primary">Additional Benefits for All Participants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li>• National-level recognition</li>
                    <li>• Certificates for all competition rounds</li>
                    <li>• Significant value-addition to college applications</li>
                  </ul>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li>• Leadership skill development</li>
                    <li>• Research and analytical skill enhancement</li>
                    <li>• Access to mentorship networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Community Section - Moved to Bottom */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our WhatsApp community to get real-time updates, connect with fellow participants, and get your questions answered instantly.
            </p>
            <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Community
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Apply;
