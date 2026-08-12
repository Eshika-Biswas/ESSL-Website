export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements?: string | null;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}
