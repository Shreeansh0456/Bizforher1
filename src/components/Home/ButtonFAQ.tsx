
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import AnimatedSection from '@/components/shared/AnimatedSection';

const faqData = [
  {
    question: "Who can participate in BizForHer?",
    answer: "BizForHer welcomes high school girls currently in Grades 9-12 from any Indian curriculum (CBSE, ICSE, State Board, IB, IGCSE, etc.). Teams must consist of 2-4 members, and no prior business knowledge or experience is required!"
  },
  {
    question: "How do I register for the competition?",
    answer: "Registration is easy! Simply click on the 'Unstop Page' button on our website and follow the instructions on the Unstop platform. You'll need to create a team of 2-4 members and submit basic details about your team. Registration is completely free!"
  },
  {
    question: "What are the prizes and scholarships available?",
    answer: "BizForHer offers extensive opportunities! For EWS finalists: Cash awards totaling ₹4,00,000 (1st - ₹2L, 2nd - ₹1.25L, 3rd - ₹0.75L) plus Wesleyan College scholarships. For Non-EWS finalists: ₹4,00,000 worth of program coupons, FLAME University scholarships (₹25,000 each), and various other opportunities. All semi-finalists receive Wesleyan College scholarships and up to 75% OYI program scholarships."
  },
  {
    question: "Is prior business experience required?",
    answer: "No prior business experience is needed! BizForHer is designed to be accessible for beginners while still challenging for those with experience. We provide comprehensive support including workshops, webinars, mentorship sessions, and learning resources to help you develop your business skills."
  },
  {
    question: "What kind of support will be provided during the competition?",
    answer: "All semi-finalists receive mentorship and training from IIM professors and industry leaders through curated online workshops. You'll learn entrepreneurship essentials, marketing, finance, and presentation skills. Additionally, participants receive personalized feedback on their business cases from industry experts and successful entrepreneurs."
  },
  {
    question: "What's the difference between EWS and Non-EWS categories?",
    answer: "BizForHer has separate categories for EWS (Economically Weaker Section) and Non-EWS students to ensure fair opportunities."
  }
];

const ButtonFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection animation="fade-up">
      <section className="py-16 md:py-24 bg-[#faf5ef] dark:bg-gray-900" ref={ref}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#db8a6c]/10 text-[#db8a6c] rounded-full font-medium mb-4">
              Get All Your Questions Answered
            </span>
            <h2 className="heading-lg mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Learn more about the BizForHer competition and how it can help your entrepreneurial journey
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700",
                  isInView && "animate-fade-in",
                  openIndex === index ? "shadow-lg" : "hover:shadow-lg"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className={cn(
                    "w-full p-5 text-left flex items-center justify-between transition-colors",
                    openIndex === index 
                      ? "bg-[#db8a6c]/90 text-white" 
                      : "bg-white dark:bg-gray-800 text-foreground hover:bg-gray-50 dark:hover:bg-gray-700"
                  )}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index 
                      ? "grid-rows-[1fr] opacity-100" 
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 text-foreground bg-white dark:bg-gray-800">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ButtonFAQ;
