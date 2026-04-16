import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, GraduationCap, Award } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';
import CourseCard from '@/components/Course/CourseCard';
import { courses } from '@/data/courses';

const mockProgress: Record<string, number> = {
  'bizcase-bootcamp': 35,
};

const Learn: React.FC = () => {
  const featured = courses[0];
  const rest = courses.slice(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 50%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-50"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[300px] h-[300px] bottom-[-40px] left-[-60px] opacity-30"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        <div ref={heroRef} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            BizForHer Academy
          </p>
          <h1 className="font-serif leading-tight mb-4" style={{ color: '#4A3535', fontSize: 'clamp(40px,6vw,80px)' }}>
            Learn the skills to
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> win the case.</span>
          </h1>

          {/* Certificate callout — styled as a headline accent */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full"
            style={{ background: 'linear-gradient(135deg, rgba(247,179,188,0.18), rgba(228,184,190,0.12))', border: '1px solid rgba(247,179,188,0.35)' }}>
            <Award size={15} style={{ color: '#F7B3BC', flexShrink: 0 }} />
            <span className="font-serif italic text-sm md:text-base" style={{ color: '#4A3535' }}>
              Earn a certificate with your name for every course you complete
            </span>
          </div>

          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12" style={{ color: '#6B5858' }}>
            Free courses built specifically for BizForHer participants. Go from zero business knowledge to pitch-ready confidence — at your own pace.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: BookOpen, label: 'Structured curriculum', sub: '6 tracks, 3 modules each' },
              { icon: GraduationCap, label: 'Practice quizzes', sub: 'After every module' },
              { icon: Sparkles, label: 'Real business content', sub: 'Case competition focused' },
              { icon: Award, label: 'Named certificate', sub: 'For every course completed' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#F7B3BC25' }}>
                  <Icon size={18} style={{ color: '#F7B3BC' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#4A3535' }}>{label}</p>
                  <p className="text-xs font-light" style={{ color: '#8B6B6B' }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured course */}
      <section className="relative py-16" style={{ background: '#F3EDE7' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-1" style={{ color: '#7A8F8A' }}>Featured</p>
            <h2 className="font-serif text-3xl font-bold" style={{ color: '#4A3535' }}>Start here</h2>
          </div>

          <Link
            to={`/learn/${featured.id}`}
            className="group block rounded-3xl overflow-hidden hover-lift transition-all duration-300"
            style={{ border: `1px solid ${featured.color}30`, background: `linear-gradient(145deg, ${featured.color}12, ${featured.color}05)` }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 h-44 md:h-auto flex-shrink-0 flex items-center justify-center text-7xl"
                style={{ background: `${featured.color}18` }}>
                {featured.icon}
              </div>
              <div className="p-8 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${featured.color}20`, color: featured.color }}>
                    {featured.category}
                  </span>
                  <span className="text-xs font-light" style={{ color: '#8B6B6B' }}>{featured.level}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-1 transition-colors duration-300 group-hover:text-blush"
                  style={{ color: '#4A3535' }}>
                  {featured.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: featured.color }}>{featured.tagline}</p>
                <p className="font-light leading-relaxed mb-6 max-w-2xl" style={{ color: '#6B5858' }}>
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.units.map((unit) => (
                    <span key={unit.id} className="text-xs px-3 py-1 rounded-full font-light"
                      style={{ background: '#F7B3BC15', border: '1px solid #F7B3BC30', color: '#6B5858' }}>
                      {unit.title.replace(/^Unit \d+ — /, '')}
                    </span>
                  ))}
                </div>

                {mockProgress[featured.id] && (
                  <div className="mb-5 max-w-xs">
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: '#8B6B6B' }}>Your progress</span>
                      <span className="font-bold" style={{ color: featured.color }}>{mockProgress[featured.id]}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E4D4CE' }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${mockProgress[featured.id]}%`, background: featured.color }} />
                    </div>
                  </div>
                )}

                <span className="inline-flex items-center gap-2 rounded-full text-sm font-semibold px-6 py-3 transition-all duration-300 group-hover:scale-105"
                  style={{ background: '#4A3535', color: '#F3EDE7' }}>
                  {mockProgress[featured.id] ? 'Continue course' : 'Start for free'}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All courses grid */}
      {rest.length > 0 && (
        <section className="relative pb-24" style={{ background: '#F3EDE7' }}>
          <div ref={gridRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-1" style={{ color: '#7A8F8A' }}>Library</p>
              <h2 className="font-serif text-3xl font-bold" style={{ color: '#4A3535' }}>All courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={mockProgress[course.id]}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default Learn;
