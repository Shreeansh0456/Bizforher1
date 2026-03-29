
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import AnimatedSection from '@/components/shared/AnimatedSection';

const Blog = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Blog & Resources
            </span>
            <AnimatedHeading
              text="Insights for Women Entrepreneurs"
              className="heading-lg mb-6"
              tag="h1"
            />
            <p className="text-lg text-gray-600">
              Discover valuable articles, tips, and resources to help you on your entrepreneurial journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Placeholder content for Blog page */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
