import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import { Course, Lesson, Unit } from '@/data/courses';

interface LessonSidebarProps {
  course: Course;
  activeLessonId: string;
  completedLessons: Set<string>;
}

const lessonTypeIcon = (type: Lesson['type'], isActive: boolean, isCompleted: boolean) => {
  const color = isCompleted ? '#B8C3BD' : isActive ? '#F7B3BC' : '#B89090';
  if (type === 'quiz') return <HelpCircle size={15} style={{ color }} />;
  return <FileText size={15} style={{ color }} />;
};

interface UnitSectionProps {
  unit: Unit;
  unitIndex: number;
  courseId: string;
  activeLessonId: string;
  completedLessons: Set<string>;
  defaultOpen: boolean;
}

const UnitSection: React.FC<UnitSectionProps> = ({
  unit, unitIndex, courseId, activeLessonId, completedLessons, defaultOpen,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const completedCount = unit.lessons.filter((l) => completedLessons.has(l.id)).length;

  return (
    <div className="last:border-b-0" style={{ borderBottom: '1px solid rgba(247,179,188,0.15)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-blush/5"
      >
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-0.5" style={{ color: '#F7B3BC' }}>
            Module {unitIndex + 1}
          </p>
          <p className="text-sm font-semibold leading-snug" style={{ color: '#4A3535' }}>
            {unit.title.replace(/^Unit \d+ — /, '')}
          </p>
          <p className="text-xs font-light mt-0.5" style={{ color: '#8B6B6B' }}>
            {completedCount}/{unit.lessons.length} complete
          </p>
        </div>
        {isOpen
          ? <ChevronDown size={15} style={{ color: '#B89090', flexShrink: 0 }} />
          : <ChevronRight size={15} style={{ color: '#B89090', flexShrink: 0 }} />
        }
      </button>

      {isOpen && (
        <div className="pb-2">
          {unit.lessons.map((lesson) => {
            const isActive = lesson.id === activeLessonId;
            const isCompleted = completedLessons.has(lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/learn/${courseId}/lessons/${lesson.id}`}
                className="flex items-start gap-3 px-4 py-2.5 mx-2 rounded-xl transition-colors"
                style={{
                  background: isActive ? 'rgba(247,179,188,0.15)' : 'transparent',
                }}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {isCompleted
                    ? <CheckCircle2 size={15} style={{ color: '#B8C3BD' }} />
                    : <Circle size={15} style={{ color: isActive ? '#F7B3BC' : '#E4D4CE' }} />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs leading-snug font-medium" style={{ color: isActive ? '#F7B3BC' : '#6B5858' }}>
                    {lesson.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {lessonTypeIcon(lesson.type, isActive, isCompleted)}
                    <span className="text-[10px] font-light capitalize" style={{ color: '#B89090' }}>
                      {lesson.type} · {lesson.duration}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const LessonSidebar: React.FC<LessonSidebarProps> = ({ course, activeLessonId, completedLessons }) => {
  const totalLessons = course.units.reduce((sum, u) => sum + u.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <aside className="w-72 flex-shrink-0 flex flex-col h-full overflow-y-auto"
      style={{ background: '#FAF5F2', borderRight: '1px solid rgba(247,179,188,0.2)' }}>
      {/* Sticky header */}
      <div className="sticky top-0 z-10" style={{ background: '#FAF5F2', borderBottom: '1px solid rgba(247,179,188,0.2)' }}>
        <Link
          to={`/learn/${course.id}`}
          className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:text-blush"
          style={{ color: '#8B6B6B' }}
        >
          <ArrowLeft size={14} />
          <span>Back to course</span>
        </Link>

        <div className="px-4 pb-4">
          <h2 className="font-serif text-sm font-bold leading-snug mb-3" style={{ color: '#4A3535' }}>
            {course.title}
          </h2>
          <div className="flex justify-between text-xs mb-1.5">
            <span style={{ color: '#8B6B6B' }}>Course progress</span>
            <span className="font-semibold" style={{ color: '#F7B3BC' }}>{progressPct}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E4D4CE' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: 'linear-gradient(to right, #F7B3BC, #E4B8BE)' }} />
          </div>
          <p className="text-[10px] font-light mt-1" style={{ color: '#B89090' }}>
            {completedCount} / {totalLessons} lessons done
          </p>
        </div>
      </div>

      <div className="flex-1">
        {course.units.map((unit, idx) => {
          const hasActive = unit.lessons.some((l) => l.id === activeLessonId);
          return (
            <UnitSection
              key={unit.id}
              unit={unit}
              unitIndex={idx}
              courseId={course.id}
              activeLessonId={activeLessonId}
              completedLessons={completedLessons}
              defaultOpen={hasActive}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default LessonSidebar;
