import React from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/Layout/PageLayout';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ContactInfo from '@/components/Home/ContactInfo';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Contact Us
            </span>
            <AnimatedHeading
              text="Get in Touch with Our Team"
              className="heading-lg mb-6"
              tag="h1"
            />
            <p className="text-lg text-gray-600 mb-6">
              Have questions about the competition? Reach out to us for more information and support.
            </p>
            <div className="flex justify-center">
              <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join WhatsApp Community
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
              <h2 className="text-3xl font-bold mb-6">We'd Love to Hear From You</h2>
              <p className="text-lg mb-6">
                Whether you have questions about eligibility, the competition process, or need assistance with your application, our team is here to help.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="btn-primary">
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <ContactInfo />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
