-- =========================================================================
-- Supabase SQL Migration: Create job_postings Table with Expanded Schema
-- Run this script in the Supabase Dashboard -> SQL Editor
-- =========================================================================

-- 1. Create the job_postings table if it does not exist
CREATE TABLE IF NOT EXISTS public.job_postings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL,
    employment_type TEXT NOT NULL,
    job_summary TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- New fields added in August 2026 vacancy template expansion
    unit TEXT,
    job_responsibilities TEXT,
    skills TEXT,
    educational_requirements TEXT,
    experience_requirements TEXT,
    additional_requirements TEXT,
    salary_type TEXT DEFAULT 'Negotiable',
    salary_min NUMERIC,
    salary_max NUMERIC,
    benefits TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies if any
DROP POLICY IF EXISTS "Public users can view active job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can view all job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can create job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can update job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can delete job postings" ON public.job_postings;

-- 4. Create public policy: Allow anonymous visitors to view active postings
CREATE POLICY "Public users can view active job postings"
    ON public.job_postings
    FOR SELECT
    TO anon
    USING (is_active = true);

-- 5. Create admin policies: Allow authenticated users (HR admins) full access
CREATE POLICY "Authenticated HR admins can view all job postings"
    ON public.job_postings
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated HR admins can create job postings"
    ON public.job_postings
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated HR admins can update job postings"
    ON public.job_postings
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated HR admins can delete job postings"
    ON public.job_postings
    FOR DELETE
    TO authenticated
    USING (true);
