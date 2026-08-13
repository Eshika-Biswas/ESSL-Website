export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  job_summary: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;

  // ── New fields added in August 2026 vacancy template expansion ──
  unit?: string | null;
  job_responsibilities?: string | null;
  skills?: string | null;
  educational_requirements?: string | null;
  experience_requirements?: string | null;
  additional_requirements?: string | null;
  salary_type?: string | null;   // 'Negotiable' | 'Range'
  salary_min?: number | null;
  salary_max?: number | null;
  benefits?: string | null;      // comma-separated list, e.g. "Mobile Bill,Lunch Bill,Other: ..."
}
