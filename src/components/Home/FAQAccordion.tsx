
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import AnimatedSection from '@/components/shared/AnimatedSection';

const faqItems = [
  {
    question: "Why will this competition help me?",
    answer: "BizForHer is more than just a competition — it's a launchpad for your future. You'll learn how to think like an entrepreneur, tackle real-world challenges, and present your ideas to experienced professionals. Semi-finalists receive personalized mentorship and training from IIM professors and industry experts. You'll build critical teamwork and communication skills, gain national recognition, and strengthen your academic profile — all valuable for college and scholarship applications."
  },
  {
    question: "What are the specific prizes and scholarships?",
    answer: "BizForHer offers extensive scholarship opportunities! Cash awards totaling ₹4,00,000 (1st - ₹2L, 2nd - ₹1.25L, 3rd - ₹0.75L). Semi-finalists receive Wesleyan College scholarships and up to 75% OYI program scholarships. Finalists gain access to premium mentorship programs, industry connections, and specialized training opportunities. The competition provides significant value through educational partnerships and skill development programs."
  },
  {
    question: "Why is this competition focused on empowering girls?",
    answer: "In India, many girls — particularly from rural and government schools — are not encouraged to explore business or leadership roles. BizForHer addresses this gap by offering them early access to business learning, mentorship, and capital. This isn't just about recognizing potential — it's about reshaping opportunity. We believe that when girls are given the right platform and support, they don't just participate — they lead, innovate, and inspire."
  },
  {
    question: "Do I need to prepare or study for this competition?",
    answer: "No formal preparation is needed. BizForHer is designed to assess your originality, critical thinking, and teamwork — not your textbook knowledge. You'll be guided through each round with clear instructions, and semi-finalists will attend curated virtual workshops led by IIM professors and industry professionals that will equip you with all the skills needed to confidently pitch your solution."
  },
  {
    question: "Will my team receive mentorship or training?",
    answer: "Yes! All semi-finalists will be invited to curated online business workshops led by IIM professors and seasoned industry professionals. These sessions teach you the essentials of entrepreneurship, marketing, finance, and presentation skills — helping you prepare for the finals and beyond. It's an opportunity to learn from real-world leaders while working on your own ideas."
  },
  {
    question: "Is there any cost to participate?",
    answer: "No, there is absolutely no fee to register or participate in any stage of the competition. BizForHer is committed to being accessible to all, regardless of background or resources. All rounds — including training workshops for semi-finalists — are completely free of cost, ensuring that financial barriers do not prevent any girl from participating or succeeding."
  }
];

const FAQAccordion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Questions & Answers
          </span>
          <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about the BizForHer competition
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQAccordion;
