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

export default function AdminCareersPage() {
  // Auth state
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [submittingAuth, setSubmittingAuth] = useState(false);

  // Job management state
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  // Form modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form input fields
  const [formTitle, setFormTitle] = useState('');
  const [formDepartment, setFormDepartment] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formEmploymentType, setFormEmploymentType] = useState('Full-Time');
  const [formDescription, setFormDescription] = useState('');
  const [formRequirements, setFormRequirements] = useState('');
  const [formIsActive, setFormIsActive] = useState(true);

  // Confirmation modal for permanent deletion
  const [deleteConfirmJob, setDeleteConfirmJob] = useState<JobPosting | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Check auth session on mount & subscribe to auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch all jobs when authenticated
  const fetchAllJobs = async () => {
    try {
      setLoadingJobs(true);
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching admin job postings:', error);
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
    if (session) {
      fetchAllJobs();
    }
  }, [session]);

  // Handle HR Admin Login
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setSubmittingAuth(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setLoginError(error.message);
      } else {
        showToast('Successfully logged in.');
      }
    } catch (err: any) {
      setLoginError(err.message || 'An error occurred during login.');
    } finally {
      setSubmittingAuth(false);
    }
  };

  // Handle HR Admin Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    showToast('Logged out successfully.');
  };

  // Reset form fields
  const resetForm = () => {
    setEditingJob(null);
    setFormTitle('');
    setFormDepartment('');
    setFormLocation('Dhaka, Bangladesh');
    setFormEmploymentType('Full-Time');
    setFormDescription('');
    setFormRequirements('');
    setFormIsActive(true);
    setFormError(null);
  };

  // Open modal for Creating
  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  // Open modal for Editing
  const openEditModal = (job: JobPosting) => {
    setEditingJob(job);
    setFormTitle(job.title);
    setFormDepartment(job.department);
    setFormLocation(job.location);
    setFormEmploymentType(job.employment_type);
    setFormDescription(job.description);
    setFormRequirements(job.requirements || '');
    setFormIsActive(job.is_active);
    setFormError(null);
    setIsModalOpen(true);
  };

  // Handle Form Submit (Create or Update)
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formTitle.trim() || !formDepartment.trim() || !formLocation.trim() || !formDescription.trim()) {
      setFormError('Please fill in all required fields (Title, Department, Location, Description).');
      return;
    }

    setFormSubmitting(true);

    try {
      if (editingJob) {
        // Update existing job posting
        const { error } = await supabase
          .from('job_postings')
          .update({
            title: formTitle.trim(),
            department: formDepartment.trim(),
            location: formLocation.trim(),
            employment_type: formEmploymentType.trim(),
            description: formDescription.trim(),
            requirements: formRequirements.trim() || null,
            is_active: formIsActive,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingJob.id);

        if (error) {
          setFormError(error.message);
        } else {
          showToast('Job posting updated successfully.');
          setIsModalOpen(false);
          resetForm();
          fetchAllJobs();
        }
      } else {
        // Insert new job posting
        const { error } = await supabase.from('job_postings').insert([
          {
            title: formTitle.trim(),
            department: formDepartment.trim(),
            location: formLocation.trim(),
            employment_type: formEmploymentType.trim(),
            description: formDescription.trim(),
            requirements: formRequirements.trim() || null,
            is_active: formIsActive,
          },
        ]);

        if (error) {
          setFormError(error.message);
        } else {
          showToast('New job posting created successfully.');
          setIsModalOpen(false);
          resetForm();
          fetchAllJobs();
        }
      }
    } catch (err: any) {
      setFormError(err.message || 'An error occurred while saving the job posting.');
    } finally {
      setFormSubmitting(false);
    }
  };

  // Toggle active / inactive status
  const handleToggleActive = async (job: JobPosting) => {
    const newStatus = !job.is_active;
    try {
      const { error } = await supabase
        .from('job_postings')
        .update({
          is_active: newStatus,
          updated_at: new Date().toISOString(),
        })
        .eq('id', job.id);

      if (error) {
        showToast(`Failed to update status: ${error.message}`);
      } else {
        showToast(`Job posting "${job.title}" is now ${newStatus ? 'Active' : 'Inactive'}.`);
        fetchAllJobs();
      }
    } catch (err: any) {
      showToast(`Error: ${err.message}`);
    }
  };

  // Execute Permanent Delete
  const handlePermanentDelete = async () => {
    if (!deleteConfirmJob) return;

    setDeleting(true);
    try {
      const { error } = await supabase
        .from('job_postings')
        .delete()
        .eq('id', deleteConfirmJob.id);

      if (error) {
        showToast(`Failed to delete: ${error.message}`);
      } else {
        showToast(`Permanently deleted "${deleteConfirmJob.title}".`);
        setDeleteConfirmJob(null);
        fetchAllJobs();
      }
    } catch (err: any) {
      showToast(`Error deleting job posting: ${err.message}`);
    } finally {
      setDeleting(false);
    }
  };

  // Filter jobs based on search & status filter
  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterStatus === 'active') return matchesSearch && job.is_active;
    if (filterStatus === 'inactive') return matchesSearch && !job.is_active;
    return matchesSearch;
  });

  // Calculate statistics
  const activeCount = jobs.filter(j => j.is_active).length;
  const inactiveCount = jobs.filter(j => !j.is_active).length;

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

  // ─────────────────────────────────────────────────────────────
  // UNAUTHENTICATED LOGIN SCREEN
  // ─────────────────────────────────────────────────────────────
  if (!session) {
    return (
      <div className="min-h-screen bg-[#0f1420] text-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
        {/* Soft background blue glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,109,174,0.15) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        <div className="relative z-10 w-full max-w-md bg-[#161c2e] border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[rgb(20,109,174)]/10 border border-[rgb(20,109,174)]/30 text-[rgb(20,109,174)] mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-white uppercase font-mono tracking-wider mb-2">
              HR ADMIN PORTAL
            </h1>
            <p className="text-xs text-slate-400">
              Sign in with your HR Supabase credentials to manage career postings.
            </p>
          </div>

          {/* Login Error Banner */}
          {loginError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                HR EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="hr@ensure-bd.com"
                  className="w-full bg-[#0f1420] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#0f1420] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[rgb(20,109,174)] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submittingAuth}
              className="w-full rounded-xl py-3.5 text-xs font-bold font-mono tracking-widest text-white bg-[rgb(20,109,174)] hover:bg-[rgb(18,98,156)] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submittingAuth ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  AUTHENTICATING...
                </>
              ) : (
                'SIGN IN TO ADMIN PANEL'
              )}
            </button>
          </form>

          {/* Footer Back Link */}
          <div className="mt-8 text-center border-t border-slate-800 pt-6">
            <Link
              href="/about/careers"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Public Career Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // AUTHENTICATED HR ADMIN DASHBOARD
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Toast Notification */}
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
              <h1 className="text-base sm:text-lg font-bold uppercase font-mono tracking-wider">
                HR CAREER ADMIN PANEL
              </h1>
              <p className="text-[11px] text-slate-400 font-mono">
                Logged in as: <span className="text-white">{session.user.email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800">
            <Link
              href="/about/careers"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Public Career Page
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">TOTAL POSTINGS</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">{jobs.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">ACTIVE (PUBLIC)</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600 font-mono">{activeCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">INACTIVE (HIDDEN)</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-600 font-mono">{inactiveCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <XCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Action Bar & Controls */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search job title, department, location..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[rgb(20,109,174)]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  filterStatus === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({jobs.length})
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  filterStatus === 'active' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Active ({activeCount})
              </button>
              <button
                onClick={() => setFilterStatus('inactive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  filterStatus === 'inactive' ? 'bg-white text-amber-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Inactive ({inactiveCount})
              </button>
            </div>
          </div>

          {/* Add Job Button */}
          <button
            onClick={openCreateModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-widest text-white bg-[rgb(20,109,174)] font-mono hover:bg-[rgb(18,98,156)] transition-all shadow-md shrink-0"
          >
            <Plus className="w-4 h-4" />
            ADD NEW JOB POSTING
          </button>
        </div>

        {/* Job Postings List */}
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
                ? 'No job postings match your current filter or search query.'
                : 'There are no job postings in the database yet. Click below to add your first job posting.'}
            </p>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white bg-[rgb(20,109,174)] font-mono"
            >
              <Plus className="w-4 h-4" /> Add Posting
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                className={`bg-white rounded-2xl border transition-all duration-300 p-6 shadow-sm ${
                  job.is_active ? 'border-slate-200 hover:border-slate-300' : 'border-slate-200 bg-slate-50/70'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Job Details Left */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{job.title}</h3>

                      {/* Status Badge */}
                      {job.is_active ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Active (Public)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-200 text-slate-700 border border-slate-300">
                          <XCircle className="w-3.5 h-3.5" /> Inactive (Hidden)
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 font-mono">
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <Building2 className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <Briefcase className="w-3.5 h-3.5 text-[rgb(20,109,174)]" />
                        {job.employment_type}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Actions Right */}
                  <div className="flex flex-wrap items-center gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100 shrink-0">
                    {/* Active/Deactivate Switch Toggle */}
                    <button
                      onClick={() => handleToggleActive(job)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold border transition-colors ${
                        job.is_active
                          ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      {job.is_active ? 'Deactivate (Hide)' : 'Reactivate (Show)'}
                    </button>

                    {/* Edit Button */}
                    <button
                      onClick={() => openEditModal(job)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-slate-600" />
                      Edit
                    </button>

                    {/* Permanent Delete Button */}
                    <button
                      onClick={() => setDeleteConfirmJob(job)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold font-mono uppercase text-slate-900">
                {editingJob ? 'EDIT JOB POSTING' : 'CREATE NEW JOB POSTING'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                  JOB TITLE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Cyber Security Engineer"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    DEPARTMENT *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Network & Security"
                    value={formDepartment}
                    onChange={e => setFormDepartment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    LOCATION *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dhaka, Bangladesh"
                    value={formLocation}
                    onChange={e => setFormLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    EMPLOYMENT TYPE *
                  </label>
                  <select
                    value={formEmploymentType}
                    onChange={e => setFormEmploymentType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    PUBLIC VISIBILITY STATUS
                  </label>
                  <label className="flex items-center gap-3 mt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formIsActive}
                      onChange={e => setFormIsActive(e.target.checked)}
                      className="w-4 h-4 rounded text-[rgb(20,109,174)] focus:ring-[rgb(20,109,174)]"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      {formIsActive ? 'Active (Visible on public site)' : 'Inactive (Hidden)'}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                  JOB DESCRIPTION *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide a detailed overview of the role, responsibilities, and team expectations..."
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                  REQUIREMENTS & QUALIFICATIONS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  placeholder="List required experience, technical certifications (e.g. CCNA, CCNP, CISSP), education..."
                  value={formRequirements}
                  onChange={e => setFormRequirements(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[rgb(20,109,174)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-[rgb(20,109,174)] hover:bg-[rgb(18,98,156)] transition-all shadow-md disabled:opacity-50"
                >
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

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Confirm Permanent Deletion
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Are you sure you want to permanently delete the job posting for{' '}
              <strong className="text-slate-900">&quot;{deleteConfirmJob.title}&quot;</strong>?
              <span className="block mt-2 font-mono text-red-600 font-semibold">
                ⚠️ This action cannot be undone.
              </span>
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={deleting}
                onClick={() => setDeleteConfirmJob(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleting}
                onClick={handlePermanentDelete}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md disabled:opacity-50"
              >
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
