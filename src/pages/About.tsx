import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/Layout/PageLayout';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';

const About = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              About Us
            </span>
            <AnimatedHeading
              text="Empowering Young Women Across India"
              className="heading-lg mb-6"
              tag="h1"
            />
            <p className="text-lg text-gray-600">
              Learn about our mission to transform the business landscape for the next generation of women leaders.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-up">
              <img 
                src="/uploads/36b77388-6198-47f4-931c-ddeba658476b.png" 
                alt="BizForHer participants" 
                className="rounded-xl shadow-lg"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-3xl font-bold mb-6">What is BizForHer?</h2>
              <p className="text-lg mb-4">
                BizForHer is a national-level business case competition aimed at empowering high school girls across India, especially those from rural, state, and government schools.
              </p>
              <p className="text-lg mb-4">
                The competition is designed to spotlight young women's innovative solutions to real-world business challenges and help them recognize their entrepreneurial potential.
              </p>
              <p className="text-lg mb-6">
                Despite the increasing success of women in business, representation from under-resourced communities remains limited. BizForHer seeks to change that narrative by equipping young women with business skills, mentorship, and access to capital—so they can lead with confidence.
              </p>
              
              <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary group">
                  Unstop Page
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </AnimatedSection>
          </div>
          
          <div className="mb-20">
            <AnimatedSection animation="fade-up" delay={100} className="text-center mb-12">
              <h2 className="text-3xl font-bold">Competition Rounds</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-5 text-lg font-bold">1</div>
                  <h3 className="text-xl font-bold mb-3">Round 1: Preliminary Round</h3>
                  <p className="text-gray-600 mb-4">
                    Submit a 15-slide presentation regarding your analysis and solution to the case provided.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Start:</strong> 05 Aug 25, 06:00 PM IST</p>
                    <p><strong>End:</strong> 15 Aug 25, 11:59 PM IST</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale-in" delay={300}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-5 text-lg font-bold">2</div>
                  <h3 className="text-xl font-bold mb-3">Round 2: Semi-Finals</h3>
                  <p className="text-gray-600 mb-4">
                    Submit a Link to a Youtube Video explaining your 15-slide presentation regarding your analysis and solution to the advanced case provided in this round.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Start:</strong> 30 Aug 25, 12:00 AM IST</p>
                    <p><strong>End:</strong> 07 Sep 25, 11:59 PM IST</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale-in" delay={400}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-5 text-lg font-bold">3</div>
                  <h3 className="text-xl font-bold mb-3">Round 3: Finals</h3>
                  <p className="text-gray-600 mb-4">
                    Live Final & Presentations: Zoom meet to deliver the final solution live to our judges
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Start:</strong> 18 Sep 25, 12:00 AM IST</p>
                    <p><strong>End:</strong> 27 Sep 25, 11:59 PM IST</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-8 md:p-10 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Join BizForHer?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-lg">
                    Women make up less than 15% of entrepreneurs in India, and girls in rural and state schools rarely get business case exposure.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-lg">
                    BizForHer provides a rare, meaningful opportunity to analyze real business challenges, develop strategic solutions, and gain recognition that can shape future leadership paths.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-center font-medium">
                The competition is not just about winning—it's about helping young women across India discover their analytical and strategic thinking capabilities through real-world business case studies.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400} className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Team</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <AnimatedSection animation="scale-in" delay={500}>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Co-Founder</h3>
                    <p className="text-lg">Vaagish Agarwal</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-in" delay={600}>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Co-Founder</h3>
                    <p className="text-lg">Shiven Khandelwal</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-in" delay={700}>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Co-Founder</h3>
                    <p className="text-lg">Aryan</p>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection animation="scale-in" delay={800}>
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Strategic and Tech Head</h3>
                    <p className="text-lg">Siddhant Nabera</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-in" delay={900}>
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Business Unit Head</h3>
                    <p className="text-lg">Samiksha Khemka</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-in" delay={1000}>
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">Design Head</h3>
                    <p className="text-lg">Ira Malpani</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400} className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">How Do I Register?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Registration is simple, free, and open to all high school girls in grades 9-12 across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary group" size="lg">
                  Unstop Page
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp Community
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
