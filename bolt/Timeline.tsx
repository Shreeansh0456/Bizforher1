import { useEffect, useRef } from 'react';

const milestones = [
  {
    number: 1,
    category: 'Round 1',
    title: 'Preliminary Round',
    desc: 'Submit a 15-slide presentation regarding your analysis and solution to the case provided.',
    date: 'Aug 5 – Aug 15, 2025',
    circleColor: '#F7B3BC',
    circleBg: '#F9DDED',
  },
  {
    number: 2,
    category: 'Results',
    title: 'First Round Results',
    desc: 'Announcement of teams advancing to the semi-finals.',
    date: 'Aug 29, 2025',
    circleColor: '#E4B8BE',
    circleBg: '#F3EDE7',
  },
  {
    number: 3,
    category: 'Workshop',
    title: 'Workshop for Semi-finalists',
    desc: 'Special workshop session for teams advancing to the semi-finals.',
    date: 'Aug 30, 2025',
    circleColor: '#B8C3BD',
    circleBg: '#DDE8E4',
  },
  {
    number: 4,
    category: 'Round 2',
    title: 'Semi-Finals',
    desc: 'Submit a YouTube video explaining your 15-slide presentation for the advanced case.',
    date: 'Aug 30 – Sep 7, 2025',
    circleColor: '#B8C3BD',
    circleBg: '#DDE8E4',
  },
  {
    number: 5,
    category: 'Results',
    title: 'Second Round Results',
    desc: 'Announcement of teams advancing to the finals.',
    date: 'Sep 17, 2025',
    circleColor: '#E4B8BE',
    circleBg: '#F3EDE7',
  },
  {
    number: 6,
    category: 'Round 3',
    title: 'Finals',
    desc: 'Live final presentations via Zoom — deliver your final solution to our expert jury panel.',
    date: 'Sep 18 – Sep 27, 2025',
    circleColor: '#F7B3BC',
    circleBg: '#F9DDED',
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: '#F3EDE7' }}
    >
      <div
        className="orb orb-animated-float w-[500px] h-[300px] top-0 right-0 opacity-60"
        style={{ background: 'radial-gradient(ellipse, #F7B3BC20, transparent 70%)' }}
      />

      <div ref={ref} className="section-reveal max-w-5xl mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#F7B3BC' }}>
            Key Milestones
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-bold leading-tight" style={{ color: '#4A3535' }}>
            Competition{' '}
            <span
              className="italic font-light"
              style={{ color: '#F7B3BC' }}
            >
              Timeline
            </span>
          </h2>
          <p className="text-base font-light mt-5 max-w-lg mx-auto leading-relaxed" style={{ color: '#8B6B6B' }}>
            Your path to success — follow each milestone and prepare for every round.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0"
            style={{
              width: '1px',
              background: 'linear-gradient(to bottom, transparent 0%, #F7B3BC 5%, #F7B3BC 95%, transparent 100%)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="space-y-0">
            {milestones.map(({ number, category, title, desc, date, circleColor, circleBg }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex items-center md:min-h-[140px]">
                  <div
                    className="timeline-circle-pulse hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-sm"
                    style={{ background: circleBg, border: `2px solid ${circleColor}`, color: circleColor, animationDelay: `${i * 0.45}s` }}
                  >
                    <span
                      className="font-serif font-bold text-base leading-none"
                      style={{ color: circleColor }}
                    >
                      {number}
                    </span>
                  </div>

                  <div className={`hidden md:flex w-1/2 items-center ${isLeft ? 'pr-20 justify-end' : 'pl-20 justify-start'}`}>
                    {isLeft ? (
                      <div className="text-right max-w-xs">
                        <p
                          className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
                          style={{ color: circleColor }}
                        >
                          {category}
                        </p>
                        <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: '#4A3535' }}>
                          {title}
                        </h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>
                          {desc}
                        </p>
                      </div>
                    ) : (
                      <span
                        className="inline-block px-5 py-2 rounded-full text-sm font-medium"
                        style={{ background: circleBg, color: '#4A3535' }}
                      >
                        {date}
                      </span>
                    )}
                  </div>

                  <div className={`hidden md:flex w-1/2 items-center ${!isLeft ? 'pl-28 justify-start' : 'pl-20 justify-start'}`}>
                    {!isLeft ? (
                      <div className="max-w-xs">
                        <p
                          className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
                          style={{ color: circleColor }}
                        >
                          {category}
                        </p>
                        <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: '#4A3535' }}>
                          {title}
                        </h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>
                          {desc}
                        </p>
                      </div>
                    ) : (
                      <span
                        className="inline-block px-5 py-2 rounded-full text-sm font-medium"
                        style={{ background: circleBg, color: '#4A3535' }}
                      >
                        {date}
                      </span>
                    )}
                  </div>

                  <div className="md:hidden flex gap-5 py-6 w-full border-b last:border-0" style={{ borderColor: '#F7B3BC30' }}>
                    <div className="flex flex-col items-center gap-0 flex-shrink-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: circleBg, border: `1.5px solid ${circleColor}` }}
                      >
                        <span className="font-serif font-bold text-sm" style={{ color: circleColor }}>{number}</span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 mt-2" style={{ background: `${circleColor}40`, minHeight: '32px' }} />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: circleColor }}>
                        {category}
                      </p>
                      <p className="text-xs font-medium mb-2" style={{ color: '#8B6B6B' }}>{date}</p>
                      <h3 className="font-serif text-xl font-semibold mb-1.5" style={{ color: '#4A3535' }}>{title}</h3>
                      <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
