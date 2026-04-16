export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz';
  duration: string;
  content: {
    videoUrl?: string;
    article?: string;
    questions?: QuizQuestion[];
  };
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  level: string;
  color: string;
  icon: string;
  units: Unit[];
}

import { track1 } from './tracks/track1';
import { track2 } from './tracks/track2';
import { track3 } from './tracks/track3';
import { track4 } from './tracks/track4';
import { track5 } from './tracks/track5';
import { track6 } from './tracks/track6';

export const courses: Course[] = [track1, track2, track3, track4, track5, track6];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getLessonById(
  courseId: string,
  lessonId: string
): { lesson: Lesson; unit: Unit; course: Course } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  for (const unit of course.units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, unit, course };
  }
  return undefined;
}

export function getAllLessonsFlat(
  course: Course
): Array<{ lesson: Lesson; unit: Unit; unitIndex: number; lessonIndex: number }> {
  return course.units.flatMap((unit, unitIndex) =>
    unit.lessons.map((lesson, lessonIndex) => ({ lesson, unit, unitIndex, lessonIndex }))
  );
}

export function getTotalLessons(course: Course): number {
  return course.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
}
