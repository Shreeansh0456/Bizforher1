import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Award } from 'lucide-react';
import { Course, getTotalLessons } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  progress?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, progress = 0 }) => {
  const totalLessons = getTotalLessons(course);

  return (
    <Link
      to={`/learn/${course.id}`}
      className="group block rounded-3xl overflow-hidden hover-lift transition-all duration-300"
      style={{
        background: `linear-gradient(145deg, ${course.color}15, ${course.color}06)`,
        border: `1px solid ${course.color}30`,
      }}
    >
      <div className="p-6">
        {/* Icon + badges */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: `${course.color}20` }}>
            {course.icon}
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${course.color}18`, color: course.color }}>
              {course.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(247,179,188,0.14)', color: '#B87080' }}>
              <Award size={10} /> Certificate
            </span>
          </div>
        </div>

        <h3 className="font-serif text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-blush"
          style={{ color: '#4A3535' }}>
          {course.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: course.color }}>{course.tagline}</p>
        <p className="text-sm font-light leading-relaxed line-clamp-3 mb-5" style={{ color: '#6B5858' }}>
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-xs mb-5" style={{ color: '#8B6B6B' }}>
          <span className="flex items-center gap-1.5">
            <BookOpen size={12} />
            {totalLessons} lessons
          </span>
          <span className="text-xs font-light">{course.level}</span>
        </div>

        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span style={{ color: '#8B6B6B' }}>Progress</span>
              <span className="font-semibold" style={{ color: course.color }}>{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E4D4CE' }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: course.color }} />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${course.color}25` }}>
          <span className="text-sm font-semibold transition-colors duration-300 group-hover:text-blush"
            style={{ color: '#4A3535' }}>
            {progress > 0 ? 'Continue' : 'Start course'}
          </span>
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-1"
            style={{ color: course.color }} />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
