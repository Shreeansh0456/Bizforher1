import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase env vars missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

// ── Types ────────────────────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  school_name: string;
  grade: string;
  team_name?: string;
  unstop_registered: boolean;
  course_access: boolean;
  created_at: string;
}

// ── Auth helpers ─────────────────────────────────────────────────────────────

export const signUp = async (
  email: string,
  password: string,
  meta: { full_name: string; school_name: string; grade: string; team_name?: string }
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: meta },
  });
  if (error) throw error;

  // Insert profile row
  if (data.user) {
    await supabase.from('profiles').insert({
      id: data.user.id,
      email,
      full_name: meta.full_name,
      school_name: meta.school_name,
      grade: meta.grade,
      team_name: meta.team_name ?? null,
      unstop_registered: false,
      course_access: true, // grant on sign-up
    });
  }
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getProfile = async (userId: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) return null;
  return data as UserProfile;
};
