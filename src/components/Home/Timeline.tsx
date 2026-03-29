
import React, { useRef, useEffect, useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

const timelineItems = [
  {
    date: 'August 5 - August 15, 2025',
    title: 'Round 1: Preliminary Round',
    description: 'Submit a 15-slide presentation regarding your analysis and solution to the case provided.',
    details: 'Start: 05 Aug 25, 06:00 PM IST | End: 15 Aug 25, 11:59 PM IST'
  },
  {
    date: 'August 29, 2025',
    title: 'First Round Results',
    description: 'Announcement of teams advancing to the semi-finals.',
    details: '29 Aug 25, 12:00 PM IST'
  },
  {
    date: 'August 30, 2025',
    title: 'Workshop for Semi-finalists',
    description: 'Special workshop session for teams advancing to the semi-finals.',
    details: '30 Aug 25, 12:00 PM IST'
  },
  {
    date: 'August 30 - September 7, 2025',
    title: 'Round 2: Semi-Finals',
    description: 'Submit a link to a YouTube video explaining your 15-slide presentation regarding your analysis and solution to the advanced case provided in this round.',
    details: 'Start: 30 Aug 25, 12:00 AM IST | End: 07 Sep 25, 11:59 PM IST'
  },
  {
    date: 'September 17, 2025',
    title: 'Second Round Results',
    description: 'Announcement of teams advancing to the finals.',
    details: '17 Sep 25, 12:00 PM IST'
  },
  {
    date: 'September 18 - September 27, 2025',
    title: 'Round 3: Finals',
    description: 'Live final & presentations: Zoom meet to deliver the final solution live to our judges.',
    details: 'Start: 18 Sep 25, 12:00 AM IST | End: 27 Sep 25, 11:59 PM IST'
  }
];

const Timeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const { left, width } = scrollContainerRef.current.getBoundingClientRect();
      const middle = left + width / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        
        const { left: itemLeft, width: itemWidth } = item.getBoundingClientRect();
        const itemMiddle = itemLeft + itemWidth / 2;
        const distance = Math.abs(middle - itemMiddle);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveIndex(closestIndex);
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Competition Timeline
          </span>
          <AnimatedHeading
            text="Your Path to Success"
            className="heading-lg mb-6"
            tag="h2"
          />
          <p className="text-lg text-gray-600">
            Follow the key milestones of the BizForHer competition and prepare for each round.
          </p>
        </AnimatedSection>

        <div className="relative mb-8">
          <div 
            className="overflow-x-auto pb-10 scrollbar-hide snap-x" 
            ref={scrollContainerRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 md:space-x-10 min-w-max px-4">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`w-72 md:w-80 flex-shrink-0 snap-center ${
                    index === activeIndex ? 'scale-105' : 'opacity-70 scale-95'
                  } transition-all duration-300`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-all duration-300">
                    <div className="text-primary font-semibold mb-3">{item.date}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div 
                      className={`h-1 w-full mt-4 rounded-full ${
                        index === activeIndex ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white to-transparent"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          {timelineItems.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                const element = itemRefs.current[index];
                if (element && scrollContainerRef.current) {
                  const containerLeft = scrollContainerRef.current.getBoundingClientRect().left;
                  const elementLeft = element.getBoundingClientRect().left;
                  const offset = elementLeft - containerLeft - scrollContainerRef.current.clientWidth / 2 + element.clientWidth / 2;
                  
                  scrollContainerRef.current.scrollBy({
                    left: offset,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to timeline item ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
