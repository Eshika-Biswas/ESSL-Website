# HR Admin Setup Guide - Job Postings Management

This document explains how to set up the database table and create HR Admin login credentials for managing ESSL career job postings.

---

## 1. Database Setup in Supabase

1. Log in to your **[Supabase Dashboard](https://supabase.com/dashboard)**.
2. Select your project.
3. Open the **SQL Editor** from the left navigation menu.
4. Click **New Query**, copy the contents of `supabase/job_postings_schema.sql`, and paste it into the editor.
5. Click **Run** to create the `job_postings` table and enable Row Level Security (RLS) policies.

---

## 2. Environment Variables (.env.local)

Ensure the following environment variables are set in your `.env.local` file (and in your production Vercel project environment settings):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 3. Creating the First HR Admin Account

To create the initial HR admin user account:

1. In the Supabase Dashboard, go to **Authentication** -> **Users**.
2. Click **Add User** -> **Create User**.
3. Enter the HR Admin email address (e.g. `careers@ensure-bd.com` or `hr@ensure-bd.com`) and a secure password.
4. Toggle **Auto-confirm User** to **ON** (so no email confirmation link is required).
5. Click **Create User**.

---

## 4. Accessing the HR Admin Panel

1. Open your browser and navigate to:
   - Local: `http://localhost:3000/admin/careers`
   - Production: `https://your-domain.com/admin/careers`
2. Enter the HR Admin email and password created in Step 3.
3. Once authenticated, you can:
   - **View All Postings**: See active and inactive (hidden) job listings.
   - **Add New Posting**: Create new job openings with title, department, location, type, description, and requirements.
   - **Edit Posting**: Modify any job listing details.
   - **Deactivate Posting**: Hide filled roles from the public `/about/careers` page immediately while preserving the record.
   - **Reactivate Posting**: Reopen previously filled roles with a single click.
   - **Permanently Delete**: Remove outdated records with confirmation protection.
