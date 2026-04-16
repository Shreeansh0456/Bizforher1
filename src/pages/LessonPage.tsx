import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, CheckCircle2,
  Menu, X, BookOpen, HelpCircle,
} from 'lucide-react';
import { getCourseById, getLessonById, getAllLessonsFlat } from '@/data/courses';
import LessonSidebar from '@/components/Course/LessonSidebar';
import QuizComponent from '@/components/Course/QuizComponent';
import ArticleRenderer from '@/components/Course/ArticleRenderer';

const STORAGE_KEY = (courseId: string) => `bfh_completed_${courseId}`;

const LessonPage: React.FC = () => {
  const { courseId = '', lessonId = '' } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const result = getLessonById(courseId, lessonId);
  const course = getCourseById(courseId);

  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY(courseId));
      return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [lessonId]);

  if (!result || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F3EDE7' }}>
        <div className="text-center">
          <p className="font-serif text-lg font-semibold mb-2" style={{ color: '#4A3535' }}>Lesson not found</p>
          <Link to="/learn" className="text-sm font-medium" style={{ color: '#F7B3BC' }}>
            ← Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const { lesson, unit } = result;
  const allLessons = getAllLessonsFlat(course);
  const currentFlatIdx = allLessons.findIndex((l) => l.lesson.id === lessonId);
  const prevLesson = currentFlatIdx > 0 ? allLessons[currentFlatIdx - 1].lesson : null;
  const nextLesson = currentFlatIdx < allLessons.length - 1 ? allLessons[currentFlatIdx + 1].lesson : null;

  const markComplete = () => {
    const next = new Set(completed);
    next.add(lessonId);
    setCompleted(next);
    try {
      localStorage.setItem(STORAGE_KEY(courseId), JSON.stringify(Array.from(next)));
    } catch {}
  };

  const isCompleted = completed.has(lessonId);
  const typeLabel = lesson.type === 'quiz' ? 'Practice Quiz' : 'Reading';
  const TypeIcon = lesson.type === 'quiz' ? HelpCircle : BookOpen;

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#FAF5F2' }}>
      {/* Top bar */}
      <header className="flex-shrink-0 h-14 flex items-center px-4 gap-3 z-30"
        style={{ background: '#FAF5F2', borderBottom: '1px solid rgba(247,179,188,0.2)' }}>
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="lg:hidden p-1.5 rounded-lg transition-colors hover:bg-blush/10"
        >
          <Menu size={20} style={{ color: '#4A3535' }} />
        </button>

        <Link to="/" className="font-serif text-base font-bold tracking-widest uppercase flex-shrink-0"
          style={{ color: '#4A3535' }}>
          Biz<span style={{ color: '#F7B3BC' }}>For</span>Her
        </Link>

        <div className="h-5 w-px mx-1" style={{ background: 'rgba(247,179,188,0.3)' }} />

        <div className="flex items-center gap-1.5 text-sm overflow-hidden">
          <Link
            to={`/learn/${courseId}`}
            className="transition-colors whitespace-nowrap font-medium hidden sm:block hover:text-blush"
            style={{ color: '#8B6B6B' }}
          >
            {course.title}
          </Link>
          <ChevronRight size={13} style={{ color: '#B89090' }} className="hidden sm:block flex-shrink-0" />
          <span className="truncate" style={{ color: '#6B5858' }}>{lesson.title}</span>
        </div>

        {lesson.type !== 'quiz' && (
          <div className="ml-auto flex-shrink-0">
            {isCompleted ? (
              <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#B8C3BD' }}>
                <CheckCircle2 size={16} />
                <span className="hidden sm:block">Done</span>
              </div>
            ) : (
              <button
                onClick={markComplete}
                className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: '#4A3535', color: '#F3EDE7' }}
              >
                <CheckCircle2 size={13} />
                <span>Mark complete</span>
              </button>
            )}
          </div>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <LessonSidebar course={course} activeLessonId={lessonId} completedLessons={completed} />
        </div>

        {/* Mobile sidebar overlay */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileSidebarOpen(false)} />
            <div className="relative z-50 w-72 h-full overflow-hidden">
              <div className="absolute top-2 right-2 z-10">
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1.5 rounded-lg shadow"
                  style={{ background: '#FAF5F2' }}
                >
                  <X size={18} style={{ color: '#4A3535' }} />
                </button>
              </div>
              <LessonSidebar course={course} activeLessonId={lessonId} completedLessons={completed} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 pb-24">
            {/* Lesson meta */}
            <div className="flex items-center gap-2 mb-2">
              <TypeIcon size={14} style={{ color: '#F7B3BC' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F7B3BC' }}>
                {typeLabel}
              </span>
              <span className="text-xs" style={{ color: '#B89090' }}>·</span>
              <span className="text-xs font-light" style={{ color: '#B89090' }}>{lesson.duration}</span>
              {isCompleted && (
                <>
                  <span className="text-xs" style={{ color: '#B89090' }}>·</span>
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#B8C3BD' }}>
                    <CheckCircle2 size={11} /> Completed
                  </span>
                </>
              )}
            </div>
            <p className="text-xs font-light mb-1" style={{ color: '#8B6B6B' }}>{unit.title}</p>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-snug mb-8" style={{ color: '#4A3535' }}>
              {lesson.title}
            </h1>

            {/* Article */}
            {lesson.content.article && (
              <div className="lesson-article">
                <ArticleRenderer markdown={lesson.content.article} />
              </div>
            )}

            {/* Quiz */}
            {lesson.type === 'quiz' && lesson.content.questions && (
              <div>
                <div className="mb-8 p-4 rounded-2xl" style={{ background: 'rgba(247,179,188,0.12)', border: '1px solid rgba(247,179,188,0.25)' }}>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>
                    Test your understanding of this module. You need 70% or higher to pass. You can retake as many times as needed.
                  </p>
                </div>
                <QuizComponent questions={lesson.content.questions} onComplete={markComplete} />
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8"
              style={{ borderTop: '1px solid rgba(247,179,188,0.2)' }}>
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/learn/${courseId}/lessons/${prevLesson.id}`)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blush/10"
                  style={{ border: '1px solid rgba(247,179,188,0.3)', color: '#6B5858' }}
                >
                  <ChevronLeft size={15} />
                  <span className="hidden sm:block">Previous</span>
                </button>
              ) : <div />}

              {nextLesson ? (
                <button
                  onClick={() => {
                    if (!isCompleted && lesson.type !== 'quiz') markComplete();
                    navigate(`/learn/${courseId}/lessons/${nextLesson.id}`);
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: '#4A3535', color: '#F3EDE7' }}
                >
                  Next lesson
                  <ChevronRight size={15} />
                </button>
              ) : (
                <Link
                  to={`/learn/${courseId}`}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
                >
                  Finish course
                  <CheckCircle2 size={15} />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LessonPage;
