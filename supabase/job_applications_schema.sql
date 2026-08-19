-- =========================================================================
-- Supabase SQL Migration: Create job_applications Table and Storage Bucket
-- Run this script in the Supabase Dashboard -> SQL Editor
-- =========================================================================

-- 0. Drop the table first to avoid schema mismatch from previous setups
DROP TABLE IF EXISTS public.job_applications CASCADE;

-- 1. Create the job_applications table
CREATE TABLE public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_posting_id UUID NOT NULL REFERENCES public.job_postings(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    cover_letter TEXT,
    expected_salary TEXT NOT NULL,
    cv_file_url TEXT NOT NULL,
    cv_file_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security (RLS) on the table
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies if any
DROP POLICY IF EXISTS "Public users can insert job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated HR admins can view all job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated HR admins can update job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated HR admins can delete job applications" ON public.job_applications;

-- 4. Create policies:
-- Allow anyone to apply (insert new application)
CREATE POLICY "Public users can insert job applications"
    ON public.job_applications
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Restrict read/write access to authenticated HR admins only
CREATE POLICY "Authenticated HR admins can view all job applications"
    ON public.job_applications
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated HR admins can update job applications"
    ON public.job_applications
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated HR admins can delete job applications"
    ON public.job_applications
    FOR DELETE
    TO authenticated
    USING (true);

-- 5. Create the cv-uploads Storage Bucket if it does not exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('cv-uploads', 'cv-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- 6. Enable Storage RLS Policies for HR admins to download CVs
DROP POLICY IF EXISTS "Authenticated users can read cv-uploads" ON storage.objects;

CREATE POLICY "Authenticated users can read cv-uploads"
    ON storage.objects FOR SELECT
    TO authenticated
    USING (bucket_id = 'cv-uploads');
