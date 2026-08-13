'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import {
  Lock,
  Mail,
  Key,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Building2,
  MapPin,
  Briefcase,
  Search,
  ArrowLeft,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { JobPosting } from '@/types/job';

const BENEFIT_OPTIONS = [
  'Mobile Bill',
  'Conveyance Bill',
  'Lunch Bill',
  'Snacks',
  'Tour Facility',
  'Training Facility',
];

const inputClass =
  'w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors';
const textareaClass =
  'w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors resize-y';
const labelClass = 'block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5 tracking-wider';
const sectionHeadClass =
  'text-[10px] font-mono font-bold uppercase tracking-widest text-[rgb(20,109,174)] border-b border-[rgb(20,109,174)]/20 pb-1.5 mb-4 mt-2';

export default function AdminCareersPage() {
  // ── Auth state ──────────────────────────────────────────────────────────
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [submittingAuth, setSubmittingAuth] = useState(false);

  // ── Job management state ────────────────────────────────────────────────
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  // ── Form modal state ────────────────────────────────────────────────────
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // ── Section 1: Basics ───────────────────────────────────────────────────
  const [formTitle, setFormTitle] = useState('');
  const [formDepartment, setFormDepartment] = useState('');
  const [formUnit, setFormUnit] = useState('');
  const [formLocation, setFormLocation] = useState('Dhaka, Bangladesh');
  const [formEmploymentType, setFormEmploymentType] = useState('Full-Time');
  const [formIsActive, setFormIsActive] = useState(true);

  // ── Section 2: Role Details ─────────────────────────────────────────────
  const [formDescription, setFormDescription] = useState('');        // Job Summary
  const [formResponsibilities, setFormResponsibilities] = useState('');
  const [formSkills, setFormSkills] = useState('');

  // ── Section 3: Requirements ─────────────────────────────────────────────
  const [formEducation, setFormEducation] = useState('');
  const [formExperience, setFormExperience] = useState('');
  const [formAdditional, setFormAdditional] = useState('');

  // ── Section 4: Compensation ─────────────────────────────────────────────
  const [formSalaryType, setFormSalaryType] = useState<'Negotiable' | 'Range'>('Negotiable');
  const [formSalaryMin, setFormSalaryMin] = useState('');
  const [formSalaryMax, setFormSalaryMax] = useState('');

  // ── Section 5: Benefits ─────────────────────────────────────────────────
  const [formCheckedBenefits, setFormCheckedBenefits] = useState<string[]>([]);
  const [formBenefitsOther, setFormBenefitsOther] = useState('');

  // ── Delete confirmation ─────────────────────────────────────────────────
  const [deleteConfirmJob, setDeleteConfirmJob] = useState<JobPosting | null>(null);
  const [deleting, setDeleting] = useState(false);

  // ── Toast ───────────────────────────────────────────────────────────────
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // ── Auth lifecycle ──────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const fetchAllJobs = async () => {
    try {
      setLoadingJobs(true);
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        showToast('Error loading job postings.');
      } else if (data) {
        setJobs(data as JobPosting[]);
      }
    } catch (err) {
      console.error('Unexpected error fetching jobs:', err);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    if (session) fetchAllJobs();
  }, [session]);

  // ── Login / Logout ──────────────────────────────────────────────────────
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setSubmittingAuth(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setLoginError(error.message);
      else showToast('Successfully logged in.');
    } catch (err: any) {
      setLoginError(err.message || 'An error occurred during login.');
    } finally {
      setSubmittingAuth(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    showToast('Logged out successfully.');
  };

  // ── Helpers: benefits serialisation ────────────────────────────────────
  const serializeBenefits = (): string | null => {
    const parts = [...formCheckedBenefits];
    if (formBenefitsOther.trim()) parts.push(`Other: ${formBenefitsOther.trim()}`);
    return parts.length > 0 ? parts.join(',') : null;
  };

  const deserializeBenefits = (raw: string | null | undefined) => {
    if (!raw) return { checked: [], other: '' };
    const items = raw.split(',').map(s => s.trim());
    const checked: string[] = [];
    let other = '';
    for (const item of items) {
      if (item.startsWith('Other: ')) {
        other = item.replace('Other: ', '');
      } else if (BENEFIT_OPTIONS.includes(item)) {
        checked.push(item);
      }
    }
    return { checked, other };
  };

  // ── Reset form ──────────────────────────────────────────────────────────
  const resetForm = () => {
    setEditingJob(null);
    setFormTitle('');
    setFormDepartment('');
    setFormUnit('');
    setFormLocation('Dhaka, Bangladesh');
    setFormEmploymentType('Full-Time');
    setFormIsActive(true);
    setFormDescription('');
    setFormResponsibilities('');
    setFormSkills('');
    setFormEducation('');
    setFormExperience('');
    setFormAdditional('');
    setFormSalaryType('Negotiable');
    setFormSalaryMin('');
    setFormSalaryMax('');
    setFormCheckedBenefits([]);
    setFormBenefitsOther('');
    setFormError(null);
  };

  const openCreateModal = () => { resetForm(); setIsModalOpen(true); };

  const openEditModal = (job: JobPosting) => {
    setEditingJob(job);
    setFormTitle(job.title);
    setFormDepartment(job.department);
    setFormUnit(job.unit || '');
    setFormLocation(job.location);
    setFormEmploymentType(job.employment_type);
    setFormIsActive(job.is_active);
    setFormDescription(job.description);
    setFormResponsibilities(job.job_responsibilities || '');
    setFormSkills(job.skills || '');
    setFormEducation(job.educational_requirements || '');
    setFormExperience(job.experience_requirements || '');
    setFormAdditional(job.additional_requirements || '');
    setFormSalaryType((job.salary_type as 'Negotiable' | 'Range') || 'Negotiable');
    setFormSalaryMin(job.salary_min != null ? String(job.salary_min) : '');
    setFormSalaryMax(job.salary_max != null ? String(job.salary_max) : '');
    const { checked, other } = deserializeBenefits(job.benefits);
    setFormCheckedBenefits(checked);
    setFormBenefitsOther(other);
    setFormError(null);
    setIsModalOpen(true);
  };

  // ── Submit (Create or Update) ───────────────────────────────────────────
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formTitle.trim() || !formDepartment.trim() || !formLocation.trim() || !formDescription.trim()) {
      setFormError('Please fill in all required fields: Title, Department, Location, Job Summary.');
      return;
    }

    const payload = {
      title: formTitle.trim(),
      department: formDepartment.trim(),
      unit: formUnit.trim() || null,
      location: formLocation.trim(),
      employment_type: formEmploymentType.trim(),
      is_active: formIsActive,
      description: formDescription.trim(),
      job_responsibilities: formResponsibilities.trim() || null,
      skills: formSkills.trim() || null,
      educational_requirements: formEducation.trim() || null,
      experience_requirements: formExperience.trim() || null,
      additional_requirements: formAdditional.trim() || null,
      salary_type: formSalaryType,
      salary_min: formSalaryType === 'Range' && formSalaryMin ? Number(formSalaryMin) : null,
      salary_max: formSalaryType === 'Range' && formSalaryMax ? Number(formSalaryMax) : null,
      benefits: serializeBenefits(),
      updated_at: new Date().toISOString(),
    };

    setFormSubmitting(true);
    try {
      if (editingJob) {
        const { error } = await supabase
          .from('job_postings')
          .update(payload)
          .eq('id', editingJob.id);
        if (error) { setFormError(error.message); return; }
        showToast('Job posting updated successfully.');
      } else {
        const { error } = await supabase.from('job_postings').insert([payload]);
        if (error) { setFormError(error.message); return; }
        showToast('New job posting created successfully.');
      }
      setIsModalOpen(false);
      resetForm();
      fetchAllJobs();
    } catch (err: any) {
      setFormError(err.message || 'An error occurred while saving.');
    } finally {
      setFormSubmitting(false);
    }
  };

  // ── Toggle active ───────────────────────────────────────────────────────
  const handleToggleActive = async (job: JobPosting) => {
    const newStatus = !job.is_active;
    const { error } = await supabase
      .from('job_postings')
      .update({ is_active: newStatus, updated_at: new Date().toISOString() })
      .eq('id', job.id);
    if (error) showToast(`Failed to update status: ${error.message}`);
    else { showToast(`"${job.title}" is now ${newStatus ? 'Active' : 'Inactive'}.`); fetchAllJobs(); }
  };

  // ── Permanent delete ────────────────────────────────────────────────────
  const handlePermanentDelete = async () => {
    if (!deleteConfirmJob) return;
    setDeleting(true);
    const { error } = await supabase.from('job_postings').delete().eq('id', deleteConfirmJob.id);
    if (error) showToast(`Failed to delete: ${error.message}`);
    else { showToast(`Permanently deleted "${deleteConfirmJob.title}".`); setDeleteConfirmJob(null); fetchAllJobs(); }
    setDeleting(false);
  };

  // ── Benefit checkbox toggle ─────────────────────────────────────────────
  const toggleBenefit = (b: string) =>
    setFormCheckedBenefits(prev =>
      prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
    );

  // ── Filtered jobs ───────────────────────────────────────────────────────
  const filteredJobs = jobs.filter(job => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q);
    if (filterStatus === 'active') return matchesSearch && job.is_active;
    if (filterStatus === 'inactive') return matchesSearch && !job.is_active;
    return matchesSearch;
  });

  const activeCount = jobs.filter(j => j.is_active).length;
  const inactiveCount = jobs.filter(j => !j.is_active).length;

  // ── Auth loading ────────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0f1420] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[rgb(20,109,174)]" />
          <p className="text-xs font-mono tracking-widest text-slate-400">VERIFYING AUTHENTICATION...</p>
        </div>
      </div>
    );
  }

  // ── Login screen ────────────────────────────────────────────────────────
  if (!session) {
    return (
      <div className="min-h-screen bg-[#0f1420] text-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,109,174,0.15) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div className="relative z-10 w-full max-w-md bg-[#161c2e] border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[rgb(20,109,174)]/10 border border-[rgb(20,109,174)]/30 text-[rgb(20,109,174)] mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-white uppercase font-mono tracking-wider mb-2">HR ADMIN PORTAL</h1>
            <p className="text-xs text-slate-400">Sign in with your HR Supabase credentials to manage career postings.</p>
          </div>
          {loginError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" /><span>{loginError}</span>
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">HR EMAIL ADDRESS</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="hr@ensure-bd.com"
                  className="w-full bg-[#0f1420] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">PASSWORD</label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••••••"
                  className="w-full bg-[#0f1420] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors" />
              </div>
            </div>
            <button type="submit" disabled={submittingAuth}
              className="w-full rounded-xl py-3.5 text-xs font-bold font-mono tracking-widest text-white bg-[rgb(20,109,174)] hover:bg-[rgb(18,98,156)] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50">
              {submittingAuth ? <><Loader2 className="w-4 h-4 animate-spin" />AUTHENTICATING...</> : 'SIGN IN TO ADMIN PANEL'}
            </button>
          </form>
          <div className="mt-8 text-center border-t border-slate-800 pt-6">
            <Link href="/about/careers" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />Back to Public Career Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-mono flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[rgb(20,109,174)] flex items-center justify-center text-white shadow-md">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold uppercase font-mono tracking-wider">HR CAREER ADMIN PANEL</h1>
              <p className="text-[11px] text-slate-400 font-mono">Logged in as: <span className="text-white">{session.user.email}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800">
            <Link href="/about/careers" target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />Public Career Page
            </Link>
            <button onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors">
              <LogOut className="w-3.5 h-3.5" />Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {[
            { label: 'TOTAL POSTINGS', value: jobs.length, icon: Briefcase, color: 'slate' },
            { label: 'ACTIVE (PUBLIC)', value: activeCount, icon: CheckCircle2, color: 'emerald' },
            { label: 'INACTIVE (HIDDEN)', value: inactiveCount, icon: XCircle, color: 'amber' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">{label}</p>
                <h3 className={`text-2xl sm:text-3xl font-bold font-mono ${color === 'emerald' ? 'text-emerald-600' : color === 'amber' ? 'text-amber-600' : 'text-slate-900'}`}>{value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-700'}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input type="text" placeholder="Search job title, department, location..."
                value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[rgb(20,109,174)]" />
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {(['all', 'active', 'inactive'] as const).map(s => (
                <button key={s} onClick={() => setFilterStatus(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors capitalize ${filterStatus === s ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>
                  {s === 'all' ? `All (${jobs.length})` : s === 'active' ? `Active (${activeCount})` : `Inactive (${inactiveCount})`}
                </button>
              ))}
            </div>
          </div>
          <button onClick={openCreateModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-widest text-white bg-[rgb(20,109,174)] font-mono hover:bg-[rgb(18,98,156)] transition-all shadow-md shrink-0">
            <Plus className="w-4 h-4" />ADD NEW JOB POSTING
          </button>
        </div>

        {/* Job List */}
        {loadingJobs ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[rgb(20,109,174)] mx-auto mb-3" />
            <p className="text-sm font-mono text-slate-500">Loading job postings...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">No Job Postings Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
              {searchQuery || filterStatus !== 'all'
                ? 'No postings match your current filter or search query.'
                : 'There are no job postings yet. Click below to add your first.'}
            </p>
            <button onClick={openCreateModal}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white bg-[rgb(20,109,174)] font-mono">
              <Plus className="w-4 h-4" />Add Posting
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div key={job.id} className={`bg-white rounded-2xl border transition-all duration-300 p-6 shadow-sm ${job.is_active ? 'border-slate-200 hover:border-slate-300' : 'border-slate-200 bg-slate-50/70'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{job.title}</h3>
                      {job.is_active ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />Active (Public)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-200 text-slate-700 border border-slate-300">
                          <XCircle className="w-3.5 h-3.5" />Inactive (Hidden)
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 font-mono">
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <Building2 className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                        {job.department}{job.unit ? ` · ${job.unit}` : ''}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />{job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <Briefcase className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />{job.employment_type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100 shrink-0">
                    <button onClick={() => handleToggleActive(job)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold border transition-colors ${job.is_active ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'}`}>
                      {job.is_active ? 'Deactivate (Hide)' : 'Reactivate (Show)'}
                    </button>
                    <button onClick={() => openEditModal(job)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors">
                      <Edit2 className="w-3.5 h-3.5 text-slate-600" />Edit
                    </button>
                    <button onClick={() => setDeleteConfirmJob(job)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          CREATE / EDIT JOB MODAL
         ───────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold font-mono uppercase text-slate-900">
                {editingJob ? 'EDIT JOB POSTING' : 'CREATE NEW JOB POSTING'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1">✕</button>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /><span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">

              {/* ── SECTION 1: BASICS ─────────────────────────────── */}
              <p className={sectionHeadClass}>① POSITION & BASICS</p>

              <div>
                <label className={labelClass}>JOB TITLE / POSITION *</label>
                <input type="text" required placeholder="e.g. Senior Network Engineer"
                  value={formTitle} onChange={e => setFormTitle(e.target.value)} className={inputClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>DEPARTMENT *</label>
                  <input type="text" required placeholder="e.g. Network & Security"
                    value={formDepartment} onChange={e => setFormDepartment(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>UNIT</label>
                  <input type="text" placeholder="e.g. Pre-Sales"
                    value={formUnit} onChange={e => setFormUnit(e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>LOCATION *</label>
                  <input type="text" required placeholder="e.g. Dhaka, Bangladesh"
                    value={formLocation} onChange={e => setFormLocation(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>EMPLOYMENT TYPE *</label>
                  <select value={formEmploymentType} onChange={e => setFormEmploymentType(e.target.value)} className={inputClass}>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>PUBLIC VISIBILITY</label>
                <label className="flex items-center gap-3 mt-1 cursor-pointer">
                  <input type="checkbox" checked={formIsActive} onChange={e => setFormIsActive(e.target.checked)}
                    className="w-4 h-4 rounded text-[rgb(20,109,174)] focus:ring-[rgb(20,109,174)]" />
                  <span className="text-xs font-semibold text-slate-700">
                    {formIsActive ? 'Active (Visible on public site)' : 'Inactive (Hidden from public site)'}
                  </span>
                </label>
              </div>

              {/* ── SECTION 2: ROLE DETAILS ────────────────────────── */}
              <p className={sectionHeadClass}>② ROLE DETAILS</p>

              <div>
                <label className={labelClass}>JOB SUMMARY *</label>
                <textarea required rows={3}
                  placeholder="Brief overview of the role, its purpose, and how it fits within the team..."
                  value={formDescription} onChange={e => setFormDescription(e.target.value)} className={textareaClass} />
              </div>

              <div>
                <label className={labelClass}>JOB RESPONSIBILITIES</label>
                <p className="text-[10px] text-slate-400 mb-1.5 font-mono">One responsibility per line. Each line will be shown as a bullet point.</p>
                <textarea rows={5}
                  placeholder={"Manage and configure enterprise network infrastructure\nConduct security assessments and penetration testing\nCoordinate with vendors for solution deployment"}
                  value={formResponsibilities} onChange={e => setFormResponsibilities(e.target.value)} className={textareaClass} />
              </div>

              <div>
                <label className={labelClass}>REQUIRED SKILLS</label>
                <p className="text-[10px] text-slate-400 mb-1.5 font-mono">One skill per line.</p>
                <textarea rows={4}
                  placeholder={"Proficiency in Cisco IOS/NX-OS\nHands-on experience with Fortinet FortiGate\nStrong knowledge of TCP/IP, BGP, OSPF"}
                  value={formSkills} onChange={e => setFormSkills(e.target.value)} className={textareaClass} />
              </div>

              {/* ── SECTION 3: REQUIREMENTS ───────────────────────── */}
              <p className={sectionHeadClass}>③ REQUIREMENTS</p>

              <div>
                <label className={labelClass}>EDUCATIONAL REQUIREMENTS</label>
                <textarea rows={2}
                  placeholder="e.g. B.Sc. in Computer Science, Electrical Engineering, or a related field from a reputable institution."
                  value={formEducation} onChange={e => setFormEducation(e.target.value)} className={textareaClass} />
              </div>

              <div>
                <label className={labelClass}>EXPERIENCE REQUIREMENTS</label>
                <textarea rows={2}
                  placeholder="e.g. Minimum 3–5 years of experience in enterprise networking and security."
                  value={formExperience} onChange={e => setFormExperience(e.target.value)} className={textareaClass} />
              </div>

              <div>
                <label className={labelClass}>ADDITIONAL REQUIREMENTS <span className="text-slate-400 font-normal normal-case">(optional)</span></label>
                <textarea rows={2}
                  placeholder="e.g. Vendor certifications (CCNP, NSE4+) preferred. Must be willing to travel."
                  value={formAdditional} onChange={e => setFormAdditional(e.target.value)} className={textareaClass} />
              </div>

              {/* ── SECTION 4: COMPENSATION ───────────────────────── */}
              <p className={sectionHeadClass}>④ COMPENSATION</p>

              <div>
                <label className={labelClass}>SALARY</label>
                <div className="flex items-center gap-4 mb-3">
                  {(['Negotiable', 'Range'] as const).map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700">
                      <input type="radio" name="salaryType" value={opt} checked={formSalaryType === opt}
                        onChange={() => setFormSalaryType(opt)}
                        className="text-[rgb(20,109,174)] focus:ring-[rgb(20,109,174)]" />
                      {opt}
                    </label>
                  ))}
                </div>
                {formSalaryType === 'Range' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 block">MIN (BDT / month)</label>
                      <input type="number" min="0" placeholder="e.g. 50000"
                        value={formSalaryMin} onChange={e => setFormSalaryMin(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 block">MAX (BDT / month)</label>
                      <input type="number" min="0" placeholder="e.g. 80000"
                        value={formSalaryMax} onChange={e => setFormSalaryMax(e.target.value)} className={inputClass} />
                    </div>
                  </div>
                )}
              </div>

              {/* ── SECTION 5: BENEFITS ───────────────────────────── */}
              <p className={sectionHeadClass}>⑤ BENEFITS</p>

              <div>
                <label className={labelClass}>SELECT APPLICABLE BENEFITS</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                  {BENEFIT_OPTIONS.map(b => (
                    <label key={b} className="flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 transition-colors">
                      <input type="checkbox" checked={formCheckedBenefits.includes(b)} onChange={() => toggleBenefit(b)}
                        className="w-3.5 h-3.5 rounded text-[rgb(20,109,174)] focus:ring-[rgb(20,109,174)]" />
                      <span className="text-xs font-medium text-slate-700">{b}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 block">OTHER BENEFITS (free text)</label>
                  <input type="text" placeholder="e.g. Health Insurance, Performance Bonus"
                    value={formBenefitsOther} onChange={e => setFormBenefitsOther(e.target.value)} className={inputClass} />
                </div>
              </div>

              {/* ── SUBMIT ───────────────────────────────────────── */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={formSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-[rgb(20,109,174)] hover:bg-[rgb(18,98,156)] transition-all shadow-md disabled:opacity-50">
                  {formSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {editingJob ? 'SAVE CHANGES' : 'CREATE POSTING'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          PERMANENT DELETE CONFIRMATION MODAL
         ───────────────────────────────────────────────────────────── */}
      {deleteConfirmJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Confirm Permanent Deletion</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Are you sure you want to permanently delete the job posting for{' '}
              <strong className="text-slate-900">&quot;{deleteConfirmJob.title}&quot;</strong>?
              <span className="block mt-2 font-mono text-red-600 font-semibold">⚠️ This action cannot be undone.</span>
            </p>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button type="button" disabled={deleting} onClick={() => setDeleteConfirmJob(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                Cancel
              </button>
              <button type="button" disabled={deleting} onClick={handlePermanentDelete}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md disabled:opacity-50">
                {deleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                PERMANENTLY DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
