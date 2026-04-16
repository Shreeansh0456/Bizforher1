import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronDown, ChevronRight, CheckCircle2, Circle,
  FileText, HelpCircle, BookOpen, ArrowLeft, Lock, Award, ArrowRight,
} from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';
import { getCourseById, getTotalLessons, Lesson } from '@/data/courses';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '@/components/Auth/AuthModal';

const lessonIcon = (type: Lesson['type']) => {
  if (type === 'quiz') return <HelpCircle size={14} style={{ color: '#F7B3BC' }} />;
  return <FileText size={14} style={{ color: '#F7B3BC' }} />;
};

const CourseOverview: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = getCourseById(courseId ?? '');
  const { user } = useAuth();

  const [openUnits, setOpenUnits] = useState<Set<string>>(
    new Set(course ? [course.units[0].id] : [])
  );
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  if (!course) {
    return (
      <PageLayout>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#4A3535' }}>Course not found</h2>
          <Link to="/learn" className="text-sm font-medium" style={{ color: '#F7B3BC' }}>
            ← Back to courses
          </Link>
        </div>
      </PageLayout>
    );
  }

  const totalLessons = getTotalLessons(course);
  const firstLesson = course.units[0]?.lessons[0];

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) next.delete(unitId);
      else next.add(unitId);
      return next;
    });
  };

  const handleStartCourse = () => {
    if (!user) {
      setAuthMode('register');
      setShowAuth(true);
      return;
    }
    if (firstLesson) navigate(`/learn/${course.id}/lessons/${firstLesson.id}`);
  };

  const handleLessonClick = (lessonId: string) => {
    if (!user) {
      setAuthMode('register');
      setShowAuth(true);
      return;
    }
    navigate(`/learn/${course.id}/lessons/${lessonId}`);
  };

  return (
    <PageLayout>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          defaultMode={authMode}
        />
      )}

      {/* Course header */}
      <section
        className="relative overflow-hidden pt-28 pb-20"
        style={{ background: `linear-gradient(160deg, ${course.color}18 0%, #F3EDE7 60%)` }}
      >
        <div className="orb w-[400px] h-[400px] top-0 right-[-100px] opacity-40"
          style={{ background: `radial-gradient(circle, ${course.color}55, transparent 70%)` }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          <Link to="/learn"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors hover:text-blush"
            style={{ color: '#8B6B6B' }}>
            <ArrowLeft size={14} />
            All courses
          </Link>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${course.color}20`, color: course.color }}>
                  {course.category}
                </span>
                <span className="text-xs font-light" style={{ color: '#8B6B6B' }}>{course.level}</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(247,179,188,0.14)', color: '#B87080' }}>
                  <Award size={10} /> Certificate included
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${course.color}20` }}>
                  {course.icon}
                </div>
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-1" style={{ color: '#4A3535' }}>
                    {course.title}
                  </h1>
                  <p className="text-base font-semibold" style={{ color: course.color }}>{course.tagline}</p>
                </div>
              </div>

              <p className="text-base font-light leading-relaxed max-w-2xl mb-6" style={{ color: '#6B5858' }}>
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm" style={{ color: '#8B6B6B' }}>
                  <BookOpen size={14} />
                  <span>{totalLessons} lessons across {course.units.length} modules</span>
                </div>
              </div>

              {/* Certificate callout */}
              <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(247,179,188,0.15), rgba(228,184,190,0.1))', border: '1px solid rgba(247,179,188,0.3)' }}>
                <Award size={14} style={{ color: '#F7B3BC', flexShrink: 0 }} />
                <span className="font-serif italic text-sm" style={{ color: '#4A3535' }}>
                  Complete this course — earn a certificate with your name on it
                </span>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="rounded-3xl p-6 hover-lift"
                style={{
                  background: `linear-gradient(145deg, ${course.color}15, ${course.color}06)`,
                  border: `1px solid ${course.color}30`,
                }}>
                <div className="w-full h-28 rounded-2xl flex items-center justify-center text-5xl mb-5"
                  style={{ background: `${course.color}15` }}>
                  {course.icon}
                </div>

                {user ? (
                  <>
                    <h3 className="font-serif font-bold mb-1" style={{ color: '#4A3535' }}>Ready to start?</h3>
                    <p className="text-sm font-light mb-5" style={{ color: '#8B6B6B' }}>
                      Free access to all {totalLessons} lessons.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-serif font-bold mb-1" style={{ color: '#4A3535' }}>Sign in to unlock</h3>
                    <p className="text-sm font-light mb-5" style={{ color: '#8B6B6B' }}>
                      Free for all BizForHer participants. Create an account to access all {totalLessons} lessons.
                    </p>
                  </>
                )}

                <button
                  onClick={handleStartCourse}
                  className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: '#4A3535', color: '#F3EDE7' }}
                >
                  {user ? 'Start course' : 'Register free to start'}
                </button>

                {!user && (
                  <button
                    onClick={() => { setAuthMode('login'); setShowAuth(true); }}
                    className="w-full mt-2 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blush/10"
                    style={{ border: '1px solid rgba(74,53,53,0.15)', color: '#6B5858' }}
                  >
                    Already have an account? Sign in
                  </button>
                )}

                <div className="mt-5 pt-4 space-y-2" style={{ borderTop: `1px solid ${course.color}25` }}>
                  {[
                    `${course.units.length} modules`,
                    `${totalLessons} lessons`,
                    'Practice quizzes included',
                    'Self-paced',
                    'Certificate upon completion',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-light" style={{ color: '#6B5858' }}>
                      <CheckCircle2 size={12} style={{ color: course.color }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth prompt banner — shown only to unauthenticated users */}
      {!user && (
        <div className="py-4 px-6 md:px-16" style={{ background: 'linear-gradient(135deg, rgba(247,179,188,0.15), rgba(228,184,190,0.1))', borderBottom: '1px solid rgba(247,179,188,0.2)' }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Lock size={15} style={{ color: '#F7B3BC', flexShrink: 0 }} />
              <p className="text-sm font-light" style={{ color: '#5C4A4A' }}>
                <span className="font-semibold">Lessons are locked.</span> Create a free account to access all course content and earn your certificate.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => { setAuthMode('login'); setShowAuth(true); }}
                className="text-sm font-medium transition-colors hover:text-rose-dark"
                style={{ color: '#6B5858' }}
              >
                Sign in
              </button>
              <button
                onClick={() => { setAuthMode('register'); setShowAuth(true); }}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: '#4A3535', color: '#F3EDE7' }}
              >
                Register free <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course content accordion */}
      <section className="py-14" style={{ background: '#F3EDE7' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="font-serif text-xl font-bold mb-6" style={{ color: '#4A3535' }}>Course content</h2>

          <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(247,179,188,0.25)' }}>
            {course.units.map((unit, idx) => {
              const isOpen = openUnits.has(unit.id);
              const quizCount = unit.lessons.filter((l) => l.type === 'quiz').length;
              const articleCount = unit.lessons.filter((l) => l.type === 'article').length;

              return (
                <div key={unit.id} style={{ borderBottom: '1px solid rgba(247,179,188,0.2)' }}
                  className="last:border-b-0">
                  <button
                    onClick={() => toggleUnit(unit.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-blush/5"
                    style={{ background: '#FAF5F2' }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-cream"
                          style={{ background: course.color }}>
                          {idx + 1}
                        </span>
                        <h3 className="font-serif text-base font-semibold" style={{ color: '#4A3535' }}>
                          {unit.title}
                        </h3>
                      </div>
                      <p className="text-sm font-light ml-10" style={{ color: '#6B5858' }}>{unit.description}</p>
                      <p className="text-xs font-light ml-10 mt-0.5" style={{ color: '#B89090' }}>
                        {articleCount > 0 && `${articleCount} article${articleCount > 1 ? 's' : ''}`}
                        {articleCount > 0 && quizCount > 0 && ' · '}
                        {quizCount > 0 && `${quizCount} quiz`}
                      </p>
                    </div>
                    {isOpen
                      ? <ChevronDown size={17} style={{ color: '#B89090', flexShrink: 0, marginLeft: '16px' }} />
                      : <ChevronRight size={17} style={{ color: '#B89090', flexShrink: 0, marginLeft: '16px' }} />
                    }
                  </button>

                  {isOpen && (
                    <div className="pb-3 px-4" style={{ background: 'rgba(247,179,188,0.04)' }}>
                      {unit.lessons.map((lesson) => {
                        if (user) {
                          // Authenticated: clickable lesson rows
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonClick(lesson.id)}
                              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group hover:bg-blush/8 text-left"
                            >
                              <Circle size={14} style={{ color: '#E4D4CE', flexShrink: 0 }} />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium transition-colors group-hover:text-blush"
                                  style={{ color: '#6B5858' }}>
                                  {lesson.title}
                                </p>
                              </div>
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                {lessonIcon(lesson.type)}
                                <span className="text-xs font-light capitalize" style={{ color: '#B89090' }}>
                                  {lesson.type} · {lesson.duration}
                                </span>
                              </div>
                            </button>
                          );
                        }

                        // Unauthenticated: lesson visible but locked
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => { setAuthMode('register'); setShowAuth(true); }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group hover:bg-blush/5 text-left"
                          >
                            <Lock size={13} style={{ color: '#E4D4CE', flexShrink: 0 }} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-light" style={{ color: '#B89090' }}>
                                {lesson.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <span className="text-xs font-light capitalize" style={{ color: '#D4C0C0' }}>
                                {lesson.type} · {lesson.duration}
                              </span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                style={{ background: 'rgba(247,179,188,0.12)', color: '#F7B3BC' }}>
                                Sign in
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom auth nudge for unauthenticated users */}
          {!user && (
            <div className="mt-8 rounded-3xl p-8 text-center"
              style={{ background: 'linear-gradient(145deg, rgba(247,179,188,0.12), rgba(228,184,190,0.06))', border: '1px solid rgba(247,179,188,0.25)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(247,179,188,0.2)' }}>
                <Award size={20} style={{ color: '#F7B3BC' }} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2" style={{ color: '#4A3535' }}>
                Ready to unlock all {totalLessons} lessons?
              </h3>
              <p className="text-sm font-light leading-relaxed mb-6 max-w-sm mx-auto" style={{ color: '#6B5858' }}>
                Create a free BizForHer account to access every lesson, track your progress, and earn a
                <span className="font-semibold" style={{ color: '#4A3535' }}> named certificate</span> when you finish.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => { setAuthMode('register'); setShowAuth(true); }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 24px rgba(74,53,53,0.18)' }}
                >
                  Register free <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => { setAuthMode('login'); setShowAuth(true); }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all"
                  style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default CourseOverview;
