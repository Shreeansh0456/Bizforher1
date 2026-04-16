# Supabase Setup Guide

## 1. Create Supabase Project
1. Go to https://supabase.com and sign in
2. Click "New Project", choose a name like `bizforher`
3. Set a strong database password (save it!)
4. Wait ~2 minutes for it to provision

## 2. Get Your API Keys
1. Go to your project → **Settings** → **API**
2. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon / public key** → `VITE_SUPABASE_ANON_KEY`

## 3. Create the .env file
In your project root, create `.env` (copy from `.env.example`):
```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

## 4. Run the Schema
1. Go to your project → **SQL Editor**
2. Paste the contents of `supabase/schema.sql`
3. Click **Run**

## 5. Configure Auth
1. Go to **Authentication** → **Settings**
2. Set **Site URL** to your domain (e.g. `http://localhost:5174` for dev)
3. Enable **Email confirmations** (or disable for faster testing)

## 6. (Optional) Disable email confirmation for testing
Authentication → Settings → uncheck "Enable email confirmations"

## What's set up
- `profiles` table — stores name, school, grade, team, course access flag
- `lesson_progress` table — stores completed lessons per user
- Row Level Security — users can only see their own data
- `registrations` view — admin can see all signups + progress

## Tables overview
| Table | Purpose |
|-------|---------|
| `auth.users` | Supabase managed auth |
| `public.profiles` | User details + course access |
| `public.lesson_progress` | Which lessons each user completed |
| `public.registrations` | Admin view (all users + stats) |
