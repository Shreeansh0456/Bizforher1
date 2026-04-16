-- ── BizForHer Supabase Schema ────────────────────────────────────────────────
-- Run this in Supabase SQL Editor: https://supabase.com → your project → SQL Editor

-- ── Profiles table ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id             UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email          TEXT NOT NULL,
  full_name      TEXT NOT NULL,
  school_name    TEXT NOT NULL,
  grade          TEXT NOT NULL,
  team_name      TEXT,
  unstop_registered BOOLEAN DEFAULT false,
  course_access  BOOLEAN DEFAULT true,   -- grant on sign-up, revoke if needed
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies: users can only read/update their own profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow insert during sign-up (service role handles this)
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ── Lesson progress table ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id    TEXT NOT NULL,
  lesson_id    TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id, lesson_id)
);

ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own progress" ON public.lesson_progress;
CREATE POLICY "Users can manage own progress"
  ON public.lesson_progress FOR ALL
  USING (auth.uid() = user_id);

-- ── Admin view (optional) ─────────────────────────────────────────────────────
-- This view lets admins see all registrations
CREATE OR REPLACE VIEW public.registrations AS
  SELECT
    p.id,
    p.email,
    p.full_name,
    p.school_name,
    p.grade,
    p.team_name,
    p.unstop_registered,
    p.course_access,
    p.created_at,
    COUNT(lp.id) AS lessons_completed
  FROM public.profiles p
  LEFT JOIN public.lesson_progress lp ON lp.user_id = p.id
  GROUP BY p.id;

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user ON public.lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_course ON public.lesson_progress(course_id);
