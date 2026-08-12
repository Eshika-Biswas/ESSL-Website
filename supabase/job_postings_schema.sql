-- Create job_postings table
CREATE TABLE IF NOT EXISTS public.job_postings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL,
    employment_type TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Public users can view active job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can view all job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can create job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can update job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated HR admins can delete job postings" ON public.job_postings;

-- 1. Public Read Policy: Allow ANONYMOUS visitors to view ACTIVE job postings only
CREATE POLICY "Public users can view active job postings"
    ON public.job_postings
    FOR SELECT
    TO anon
    USING (is_active = true);

-- 2. Authenticated HR Admin Read Policy: Allow logged in users to view ALL job postings
CREATE POLICY "Authenticated HR admins can view all job postings"
    ON public.job_postings
    FOR SELECT
    TO authenticated
    USING (true);

-- 3. Authenticated HR Admin Insert Policy
CREATE POLICY "Authenticated HR admins can create job postings"
    ON public.job_postings
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- 4. Authenticated HR Admin Update Policy
CREATE POLICY "Authenticated HR admins can update job postings"
    ON public.job_postings
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 5. Authenticated HR Admin Delete Policy
CREATE POLICY "Authenticated HR admins can delete job postings"
    ON public.job_postings
    FOR DELETE
    TO authenticated
    USING (true);
