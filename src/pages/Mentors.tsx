import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Mentors = () => {
  const mentors = [
    {
      name: "Swagat Yadav",
      title: "Founder of Learnacy School and One Young India",
      description: "Swagat Yadav is the Founder of Learnacy School and One Young India, initiatives dedicated to empowering youth through interdisciplinary and experiential education. He holds a degree in Electrical Engineering from Pune University and has collaborated with institutions like Mayo College and UPES.",
      image: "/uploads/6cd302a3-9440-4dfb-a02e-1b391b5f9ee6.png"
    },
    {
      name: "Bhakti Shah",
      title: "Higher Education & Social Impact Leader",
      description: "Bhakti Shah is a seasoned professional with over 17 years of experience in higher education and social impact initiatives. She earned her degree from the University of Westminster and has held leadership roles at organizations like Jewelers League.",
      image: "/uploads/e28f9fd3-f2e0-4f17-a0d7-7caa0d618a54.png"
    },
    {
      name: "Anjali Anand Seth",
      title: "Associate Vice President for International Admissions, Wesleyan College, USA",
      description: "Anjali Anand Seth is the Associate Vice President for International Admissions at Wesleyan College, USA, and a leading advocate for global education and women's empowerment. With over two decades of experience, she has worked extensively across India and the United States.",
      image: "/uploads/70a2e89e-a3dd-45aa-b3da-63a719850e45.png"
    },
    {
      name: "Mahesh Rao",
      title: "MBA, Global Business Leader & Educator",
      description: "MBA from XIM Bhubaneswar with 20 years of global experience across 45+ countries, including 12 years in CXO/CEO roles in FMCG, durables, and advertising. Since 2015, he has taught Marketing & Strategy at leading B-schools (IIMs, XIMB, SPJIMR), and has been a TEDx speaker, IIMCAP panelist, and start-up mentor.",
      image: "/uploads/a5750ce6-9d66-4696-a1a9-64df1872204e.png"
    },
    {
      name: "Yashraj Erande",
      title: "Managing Director & Partner, Boston Consulting Group",
      description: "Yashraj Erande is a Managing Director and Partner based in Mumbai at Boston Consulting Group, serving as the India Leader for the Financial Institutions practice and Global Leader for Fintech, with prior experience founding a credit fintech platform, and recognized in ET's 2018 '40 Under 40' list.",
      image: "/uploads/340c01eb-922e-4d79-8e29-b79dcdda6f0d.png"
    },
    {
      name: "Jaslene Bawa",
      title: "Assistant Professor of Finance, FLAME University",
      description: "Professor Jaslene Bawa is an Assistant Professor of Finance at FLAME University and is the first FPM graduate in Finance and Accounting from IIM Raipur. Her research focuses on Indian equity markets, banking, and valuation, with publications in leading journals such as Finance Research Letters and Applied Economics Letters.",
      image: "/uploads/5154d824-e344-4e4e-ad4d-c84112df72e1.png"
    }
  ];

  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Mentors & Jury
            </span>
            <AnimatedHeading
              text="Meet the Experts Guiding Your Success"
              className="heading-lg mb-6"
              tag="h1"
            />
            <p className="text-lg text-gray-600">
              Learn from industry leaders and successful entrepreneurs who will mentor and judge your business ideas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
            {mentors.map((mentor, index) => (
              <AnimatedSection key={mentor.name} animation="fade-up" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  {/* Round Image */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#db8a6c]/20">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#1c2939] mb-2">{mentor.name}</h3>
                    <p className="text-[#db8a6c] font-semibold mb-4">{mentor.title}</p>
                    <p className="text-gray-600 leading-relaxed text-left">{mentor.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Section */}
          <AnimatedSection animation="fade-up" className="mb-16">
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

          {/* Call to Action */}
          <AnimatedSection animation="fade-up" className="text-center">
            <div className="bg-gradient-to-r from-[#db8a6c] to-[#c97b5d] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Learn from the Best?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join BizForHer 2025 and get mentored by industry experts who will guide you to success.
              </p>
              <a href="https://unstop.com/o/8xMeJ7y?lb=gFScrIk8" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#db8a6c] hover:bg-gray-100 group">
                  Unstop Page
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Mentors;
