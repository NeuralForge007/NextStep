import React from 'react';
import { useAuth } from '../context/AuthContext';

export const HomePage = ({ setActivePage, onOpenAuth }) => {
  const { currentUser, quickLogin, demoUsers } = useAuth();

  const handleAction = (pageId) => {
    if (!currentUser) {
      onOpenAuth();
    } else {
      setActivePage(pageId);
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* 🚀 Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-8 sm:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold text-blue-400 mb-4 shadow-inner">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            The Unified University & Alumni Engagement Ecosystem
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Connecting Students, Alumni & Industry <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              With AI-Powered Precision
            </span>
          </h1>
          
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            NEXTSTEP is the verified academic network bridging the gap between student aspirations and industry leadership through deterministic AI mentorship matching, verified recruiter candidate discovery, hackathon teammate matchmaking, and streamlined alumni referrals.
          </p>

          {/* CTA Button Group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAuth}
              className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105 hover:brightness-110 flex items-center gap-2.5"
            >
              <span>Get Started / Sign In Free</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              onClick={() => {
                if (demoUsers && demoUsers.length > 0) {
                  quickLogin(demoUsers[0]);
                  setActivePage('mentor-finder');
                } else {
                  onOpenAuth();
                }
              }}
              className="rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-200 transition-all hover:bg-slate-800 hover:text-white flex items-center gap-2"
            >
              <span>⚡ Try Live Demo (1-Click)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 📊 Live Ecosystem Metrics Ticker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
              🎓
            </div>
            <div>
              <p className="text-2xl font-black text-white">8,500+</p>
              <p className="text-xs text-slate-400 font-medium">Verified Students</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl">
              💼
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-400">1,200+</p>
              <p className="text-xs text-slate-400 font-medium">Alumni in FAANG & Big Tech</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">
              🎯
            </div>
            <div>
              <p className="text-2xl font-black text-purple-400">98.4%</p>
              <p className="text-xs text-slate-400 font-medium">AI Match Compatibility</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
              🏛️
            </div>
            <div>
              <p className="text-2xl font-black text-amber-400">15+</p>
              <p className="text-xs text-slate-400 font-medium">Partner Universities</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 4 Dedicated Stakeholder Pillars */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Built for Every Pillar of Higher Education</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Explore features tailored specifically for students, alumni mentors, recruiters, and college administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: Students */}
          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 border border-blue-500/20">
                  For Students
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accelerate Your Dream Career</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Find compatible alumni mentors using deterministic AI matching, build teams for nationwide hackathons, get referred directly into top tech firms, and manage your GPA and coursework.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Multi-Factor AI Mentor Matcher (Skills 35%, Goal 25%, Domain 15%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Hackathon Arena with Teammate Request Matcher
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Transparent 5-Stage Alumni Referral Pipeline Tracker
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleAction('mentor-finder')}
              className="w-full rounded-xl bg-blue-600/20 border border-blue-500/30 py-2.5 text-xs font-bold text-blue-300 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Explore AI Mentor Matcher</span>
              <span>→</span>
            </button>
          </div>

          {/* Pillar 2: Alumni */}
          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                  💼
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  For Alumni & Mentors
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Empower the Next Generation</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Give back effortlessly by accepting 1-on-1 mentorship requests, conducting mock interviews, hosting webinars, and referring top students directly to your organization.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 1-Click Google Meet Session Generator & Scheduler
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Fast-Track Candidate Referral Submission Tool
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Host Campus Webinars and Technical Masterclasses
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleAction('alumni-dashboard')}
              className="w-full rounded-xl bg-emerald-600/20 border border-emerald-500/30 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Alumni Portal</span>
              <span>→</span>
            </button>
          </div>

          {/* Pillar 3: Recruiters */}
          <div className="rounded-3xl border border-purple-500/20 bg-slate-900/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 border border-purple-500/20">
                  For Recruiters & Talent Teams
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discover Pre-Verified Engineering Talent</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Skip unverified resumes. Source candidates with certified university GPAs, verified alumni endorsements, and validated hackathon performance badges.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Verified Academic Badges (<span className="text-emerald-400">✓ College Verified</span>, <span className="text-purple-400">✓ Alumni Referral</span>)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">✓</span> Deep Skill & Minimum CGPA Filter Matrix
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">✓</span> 1-Click Candidate Shortlisting & Outreach
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleAction('recruiter')}
              className="w-full rounded-xl bg-purple-600/20 border border-purple-500/30 py-2.5 text-xs font-bold text-purple-300 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Recruiter Talent Engine</span>
              <span>→</span>
            </button>
          </div>

          {/* Pillar 4: Colleges */}
          <div className="rounded-3xl border border-amber-500/20 bg-slate-900/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl">
                  🏛️
                </div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-500/20">
                  For Colleges & Universities
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Centralize Alumni & Placement Relations</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Maintain institutional trust with official verification queues for student enrollment and alumni degree claims while broadcasting campus events to your network.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Student Enrollment Verification Approval Queue
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Alumni Degree & Graduation Claim Governance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Placement & Career Event Broadcasting Hub
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleAction('college-admin')}
              className="w-full rounded-xl bg-amber-600/20 border border-amber-500/30 py-2.5 text-xs font-bold text-amber-300 hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Explore College Admin Portal</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </div>

      {/* ⚡ Quick 1-Click Role Exploration Bar */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">⚡ Test Drive Platform Roles with 1-Click</h3>
            <p className="text-xs text-slate-400">Select any pre-configured profile to immediately experience full platform capabilities:</p>
          </div>
          <button
            onClick={onOpenAuth}
            className="text-xs text-blue-400 hover:text-blue-300 font-bold"
          >
            Or Create Custom Account →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {(demoUsers && demoUsers.length > 0 ? demoUsers.slice(0, 5) : []).map((u) => (
            <button
              key={u.id || u.user_id}
              onClick={() => {
                quickLogin(u);
                if (u.role === 'ALUMNI') setActivePage('alumni-dashboard');
                else if (u.role === 'RECRUITER') setActivePage('recruiter');
                else if (u.role === 'COLLEGE_ADMIN') setActivePage('college-admin');
                else if (u.role === 'SUPER_ADMIN') setActivePage('super-admin');
                else setActivePage('dashboard');
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-3 text-left transition-all hover:scale-105 hover:border-blue-500/50 hover:bg-slate-900 flex items-center gap-3"
            >
              <img
                src={u.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo'}
                alt=""
                className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">{u.name}</p>
                <p className="text-[10px] text-blue-400 font-semibold truncate">{u.role}</p>
                <p className="text-[9px] text-slate-500 truncate">{u.company || u.college_name || 'Verified'}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
