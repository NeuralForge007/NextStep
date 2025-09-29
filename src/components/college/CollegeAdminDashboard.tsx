import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, GraduationCap, TrendingUp, Award, BarChart3, Settings, Bell, Search, 
  Plus, Filter, Download, Eye, Edit, Trash2, Building, MapPin, Calendar,
  Briefcase, Target, Shield, CheckCircle, XCircle, Clock, Star, Heart,
  PieChart, LineChart, Activity, ArrowUpRight, ArrowDownRight, Sparkles,
  Crown, Network, Rocket, Lightbulb, Coffee, MessageSquare, Globe,
  Brain, Zap, Trophy, Presentation, Code, Users2, BookOpen, FileText,
  Cpu, Database, Server, Cloud, Monitor, Wifi, Lock, Mail
} from 'lucide-react';
import { CollegeAdmin } from '../../App';

// ✅ FIXED: Changed 'admin' to 'user' to match App.tsx
interface CollegeAdminDashboardProps {
  user: CollegeAdmin;  // ✅ Changed from 'admin' to 'user'
  onLogout: () => void;
}

// ✅ Modern Chart Components
const ModernChart: React.FC<{ type: 'line' | 'bar' | 'pie' | 'donut'; data: any; className?: string }> = ({ type, data, className = '' }) => {
  if (type === 'line') {
    return (
      <div className={`relative h-32 ${className}`}>
        <svg viewBox="0 0 300 100" className="w-full h-full">
          <defs>
            <linearGradient id="adminLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="adminAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,70 Q75,25 150,40 T300,20" 
            fill="none" 
            stroke="url(#adminLineGradient)" 
            strokeWidth="3"
          />
          <path 
            d="M0,70 Q75,25 150,40 T300,20 L300,100 L0,100 Z" 
            fill="url(#adminAreaGradient)"
          />
        </svg>
      </div>
    );
  }
  
  if (type === 'bar') {
    const bars = [85, 95, 75, 90, 80, 70, 95];
    return (
      <div className={`flex items-end justify-between h-32 px-2 ${className}`}>
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-t from-purple-600 via-fuchsia-500 to-cyan-400 rounded-t-sm shadow-lg shadow-purple-500/30"
            style={{ height: `${height}%`, width: '12%' }}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          />
        ))}
      </div>
    );
  }

  if (type === 'donut') {
    const segments = [
      { value: 45, color: '#a855f7', label: 'CSE' },
      { value: 25, color: '#d946ef', label: 'ECE' },
      { value: 20, color: '#06b6d4', label: 'ME' },
      { value: 10, color: '#10b981', label: 'Others' }
    ];
    
    return (
      <div className={`relative h-32 flex items-center justify-center ${className}`}>
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#1e1b4b" strokeWidth="12" />
            {segments.map((segment, index) => {
              const offset = segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
              const circumference = 2 * Math.PI * 30;
              const strokeDasharray = `${(segment.value / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((offset / 100) * circumference);
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="12"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-white">Dept.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-32 flex items-center justify-center ${className}`}>
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1e1b4b" strokeWidth="8" />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="url(#adminPieGradient)" 
            strokeWidth="8"
            strokeDasharray={`${data.percentage * 2.51} 251`}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="adminPieGradient">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{data.percentage}%</span>
        </div>
      </div>
    </div>
  );
};

// ✅ Mentor Approval Card
const MentorApprovalCard: React.FC<{ mentor: any; onApprove: () => void; onReject: () => void }> = ({ mentor, onApprove, onReject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-xl shadow-purple-500/10 group"
    >
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/40 rounded-tr-2xl"></div>
      
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
          />
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${mentor.verified ? 'bg-emerald-500' : 'bg-yellow-500'} rounded-full flex items-center justify-center`}>
            <Shield className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-white truncate">{mentor.name}</h4>
            <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
              {mentor.timeAgo}
            </span>
          </div>
          
          <div className="space-y-1 mb-3">
            <p className="text-sm text-purple-200">{mentor.position} at {mentor.company}</p>
            <p className="text-xs text-purple-300">{mentor.experience} years • {mentor.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {mentor.skills?.slice(0, 3).map((skill: string, index: number) => (
                <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4 p-3 bg-black/20 rounded-lg border border-purple-500/20">
            <p className="text-sm text-purple-100">
              <strong className="text-purple-300">Bio:</strong> {mentor.bio}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <motion.button
              onClick={onApprove}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Approve
            </motion.button>
            <motion.button
              onClick={onReject}
              className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <XCircle className="w-4 h-4 inline mr-2" />
              Reject
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ✅ Event Creation Modal
const EventCreationModal: React.FC<{ isOpen: boolean; onClose: () => void; onSubmit: (event: any) => void }> = ({ isOpen, onClose, onSubmit }) => {
  const [eventData, setEventData] = useState({
    title: '',
    type: 'talk',
    date: '',
    time: '',
    location: '',
    description: '',
    speaker: '',
    capacity: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(eventData);
    onClose();
    setEventData({
      title: '',
      type: 'talk',
      date: '',
      time: '',
      location: '',
      description: '',
      speaker: '',
      capacity: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-black/80 via-purple-950/90 to-indigo-950/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl max-w-md w-full mx-4"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Create New Event</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Event Title</label>
            <input
              type="text"
              value={eventData.title}
              onChange={(e) => setEventData({...eventData, title: e.target.value})}
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/60"
              placeholder="Enter event title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Event Type</label>
            <select
              value={eventData.type}
              onChange={(e) => setEventData({...eventData, type: e.target.value})}
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            >
              <option value="talk" className="bg-gray-900">Alumni Talk</option>
              <option value="workshop" className="bg-gray-900">Workshop</option>
              <option value="hackathon" className="bg-gray-900">Hackathon</option>
              <option value="networking" className="bg-gray-900">Networking</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">Date</label>
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => setEventData({...eventData, date: e.target.value})}
                className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">Time</label>
              <input
                type="time"
                value={eventData.time}
                onChange={(e) => setEventData({...eventData, time: e.target.value})}
                className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Description</label>
            <textarea
              value={eventData.description}
              onChange={(e) => setEventData({...eventData, description: e.target.value})}
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/60 resize-none"
              rows={3}
              placeholder="Event description"
              required
            />
          </div>
          
          <div className="flex space-x-4 pt-4">
            <motion.button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Event
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// ✅ FIXED: Changed 'admin' to 'user' throughout the component
const CollegeAdminDashboard: React.FC<CollegeAdminDashboardProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  // Mock data for pending mentor approvals
  const pendingMentors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      position: "Senior Data Scientist",
      company: "Google",
      experience: "8",
      location: "San Francisco, USA",
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      skills: ["Machine Learning", "Python", "AI Strategy"],
      bio: "PhD in Computer Science with expertise in ML/AI. Looking to mentor students in data science and AI careers.",
      verified: true,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Software Architect",
      company: "Microsoft",
      experience: "12",
      location: "Seattle, USA",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      skills: ["System Design", "Cloud", "Leadership"],
      bio: "Experienced software architect passionate about guiding students in building scalable systems.",
      verified: false,
      timeAgo: "1 day ago"
    }
  ];

  // Mock data for college events
  const collegeEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium 2025",
      type: "conference",
      date: "2025-01-15",
      time: "9:00 AM",
      location: "Main Auditorium",
      attendees: 450,
      status: "upcoming",
      icon: Presentation,
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      id: 2,
      title: "Alumni Networking Night",
      type: "networking",
      date: "2025-01-20",
      time: "6:00 PM",
      location: "Campus Lawn",
      attendees: 120,
      status: "upcoming",
      icon: Users2,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Coding Hackathon",
      type: "hackathon",
      date: "2025-01-25",
      time: "10:00 AM",
      location: "Computer Lab",
      attendees: 85,
      status: "registering",
      icon: Code,
      color: "from-blue-500 to-purple-500"
    }
  ];

  // Enhanced stats for college admin
  const stats = [
    { 
      label: 'Total Students', 
      value: user.totalStudents?.toLocaleString() || '3,456',  // ✅ Changed from admin.totalStudents to user.totalStudents
      icon: Users, 
      color: 'from-purple-600 via-fuchsia-500 to-cyan-500', 
      change: '+12% this semester',
      trend: 'up'
    },
    { 
      label: 'Active Alumni', 
      value: '2,847', 
      icon: GraduationCap, 
      color: 'from-emerald-600 via-green-500 to-cyan-500', 
      change: '+8% this quarter',
      trend: 'up'
    },
    { 
      label: 'Placement Rate', 
      value: '94%', 
      icon: TrendingUp, 
      color: 'from-violet-600 via-purple-500 to-fuchsia-500', 
      change: '+6% this year',
      trend: 'up'
    },
    { 
      label: 'Active Mentorships', 
      value: '1,234', 
      icon: Award, 
      color: 'from-orange-600 via-red-500 to-pink-500', 
      change: '+23% this month',
      trend: 'up'
    }
  ];

  const chartData = [
    { name: 'Placement Trends', percentage: 94, type: 'pie' as const },
    { name: 'Monthly Activity', type: 'line' as const },
    { name: 'Department Wise', type: 'donut' as const },
    { name: 'Performance Metrics', type: 'bar' as const }
  ];

  const recentActivity = [
    { 
      title: 'New student registered', 
      time: '5 minutes ago', 
      type: 'registration', 
      icon: Users, 
      color: 'text-emerald-400',
      description: 'Rahul Kumar (CS 2nd Year) joined platform'
    },
    { 
      title: 'Mentor approved', 
      time: '15 minutes ago', 
      type: 'approval', 
      icon: Shield, 
      color: 'text-cyan-400',
      description: 'Dr. Sarah Wilson approved as mentor'
    },
    { 
      title: 'Placement confirmed', 
      time: '1 hour ago', 
      type: 'placement', 
      icon: Trophy, 
      color: 'text-purple-400',
      description: 'Amit Singh placed at Microsoft'
    },
    { 
      title: 'Event created', 
      time: '2 hours ago', 
      type: 'event', 
      icon: Calendar, 
      color: 'text-fuchsia-400',
      description: 'Tech Symposium 2025 scheduled'
    }
  ];

  // Mock placement data
  const placementData = {
    totalPlacements: 1567,
    currentYear: 456,
    averagePackage: '₹12.5 LPA',
    highestPackage: '₹45 LPA',
    companies: 85,
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta'],
    departmentWise: [
      { dept: 'CSE', placed: 145, total: 160, percentage: 91 },
      { dept: 'ECE', placed: 89, total: 95, percentage: 94 },
      { dept: 'ME', placed: 78, total: 85, percentage: 92 },
      { dept: 'EE', placed: 65, total: 70, percentage: 93 }
    ]
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'placement-analytics', label: 'Placement Analytics', icon: TrendingUp },
    { id: 'mentor-approvals', label: 'Mentor Approvals', icon: Shield },
    { id: 'event-management', label: 'Event Management', icon: Calendar },
    { id: 'student-analytics', label: 'Student Analytics', icon: Users },
    { id: 'alumni-network', label: 'Alumni Network', icon: GraduationCap },
    { id: 'performance-reports', label: 'Performance Reports', icon: FileText },
    { id: 'mentorship-data', label: 'Mentorship Data', icon: Network },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleApproveMentor = (mentorId: number) => {
    console.log('Approving mentor:', mentorId);
  };

  const handleRejectMentor = (mentorId: number) => {
    console.log('Rejecting mentor:', mentorId);
  };

  const handleCreateEvent = (eventData: any) => {
    console.log('Creating event:', eventData);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Enhanced Welcome Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/90 via-purple-950/95 to-fuchsia-950/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight flex items-center">
                      Welcome back, {user.name}  {/* ✅ Changed from admin.name to user.name */}
                      <Crown className="w-8 h-8 ml-3 text-yellow-400" />
                    </h2>
                    <p className="text-purple-200 text-lg font-light">
                      {user.position} • {user.collegeName || user.institution}  {/* ✅ Changed from admin.position to user.position */}
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-emerald-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                        Administrative Control
                      </div>
                      <div className="text-sm text-purple-300">
                        Managing {stats[0].value} students
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600/30 via-fuchsia-600/20 to-cyan-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-500/30 shadow-lg">
                      <Building className="w-12 h-12 text-purple-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg shadow-purple-500/30`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-sm text-purple-200 font-medium">{stat.label}</p>
                      <p className="text-xs text-purple-300 mt-1">{stat.change}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graphical Panels */}
            <div className="grid md:grid-cols-4 gap-6">
              {chartData.map((chart, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative overflow-hidden bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{chart.name}</h3>
                      <div className="p-2 bg-black/30 rounded-lg border border-purple-500/20">
                        {chart.type === 'line' && <LineChart className="w-4 h-4 text-purple-300" />}
                        {chart.type === 'bar' && <BarChart3 className="w-4 h-4 text-purple-300" />}
                        {chart.type === 'pie' && <PieChart className="w-4 h-4 text-purple-300" />}
                        {chart.type === 'donut' && <PieChart className="w-4 h-4 text-purple-300" />}
                      </div>
                    </div>
                    <ModernChart type={chart.type} data={chart} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity Feed */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-purple-400" />
                    Recent Activity
                  </h3>
                  <button className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-black/20 transition-colors border border-transparent hover:border-purple-500/20"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-black/30 border border-purple-500/20 flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white truncate">{item.title}</p>
                          <span className="text-xs text-purple-300 whitespace-nowrap ml-4">{item.time}</span>
                        </div>
                        <p className="text-sm text-purple-200/70 mt-1">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'placement-analytics':
        return (
          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/90 via-purple-950/95 to-fuchsia-950/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-emerald-400" />
                  Placement Analytics
                </h2>
                <p className="text-purple-200 text-lg">
                  Comprehensive placement statistics and insights
                </p>
              </div>
            </div>

            {/* Placement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Placements', value: placementData.totalPlacements.toLocaleString(), icon: Trophy, color: 'from-emerald-500 to-cyan-500' },
                { label: 'This Year', value: placementData.currentYear.toString(), icon: Calendar, color: 'from-purple-500 to-fuchsia-500' },
                { label: 'Average Package', value: placementData.averagePackage, icon: Briefcase, color: 'from-blue-500 to-purple-500' },
                { label: 'Highest Package', value: placementData.highestPackage, icon: Star, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg mb-4 inline-block`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-purple-200">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Department-wise Placement */}
            <div className="bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">Department-wise Placement</h3>
              <div className="space-y-4">
                {placementData.departmentWise.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-purple-500/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{dept.dept}</p>
                        <p className="text-sm text-purple-200">{dept.placed}/{dept.total} students</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-400">{dept.percentage}%</p>
                      <p className="text-xs text-purple-300">placement rate</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'mentor-approvals':
        return (
          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/90 via-purple-950/95 to-fuchsia-950/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-cyan-400" />
                  Mentor Approvals
                </h2>
                <p className="text-purple-200 text-lg">
                  {pendingMentors.length} mentors pending approval
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {pendingMentors.length > 0 ? (
                pendingMentors.map((mentor) => (
                  <MentorApprovalCard
                    key={mentor.id}
                    mentor={mentor}
                    onApprove={() => handleApproveMentor(mentor.id)}
                    onReject={() => handleRejectMentor(mentor.id)}
                  />
                ))
              ) : (
                <div className="text-center py-16 bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl border border-purple-500/20">
                  <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-300 font-medium">No pending mentor approvals</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'event-management':
        return (
          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/90 via-purple-950/95 to-fuchsia-950/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                      <Calendar className="w-8 h-8 mr-3 text-emerald-400" />
                      Event Management
                    </h2>
                    <p className="text-purple-200 text-lg">
                      Create and manage college events
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setShowEventModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-200 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Event
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {collegeEvents.map((event) => (
                <div key={event.id} className="bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                        <div className="space-y-1 text-sm text-purple-200">
                          <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{event.date} • {event.time}</p>
                          <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{event.location}</p>
                          <p className="flex items-center"><Users className="w-4 h-4 mr-2" />{event.attendees} attendees</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'upcoming' ? 'bg-emerald-500/20 text-emerald-300' :
                        event.status === 'registering' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/70 via-purple-950/80 to-fuchsia-950/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace('-', ' ')}</h3>
              <p className="text-purple-200 font-light">This section is currently under development.</p>
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-black/30 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-300" />
                </div>
                <p className="text-purple-300 font-medium">Coming soon</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950">
      {/* Modern Header */}
      <header className="bg-black/40 backdrop-blur-xl shadow-2xl border-b border-purple-500/20 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-500 rounded-xl shadow-lg shadow-purple-500/50"></div>
              <h1 className="text-xl font-bold text-white tracking-tight">NextStep Admin</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students, alumni, events..."
                  className="w-full pl-10 pr-4 py-2 bg-black/40 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/60 backdrop-blur-sm transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-500/50"></span>
                </button>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-white">{user.name}</span>  {/* ✅ Changed from admin.name to user.name */}
              </div>

              {/* Logout */}
              <button
                onClick={onLogout}
                className="text-sm text-purple-300 hover:text-white px-3 py-2 rounded-xl hover:bg-purple-500/20 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Modern Sidebar */}
        <nav className="w-64 bg-black/30 backdrop-blur-xl shadow-2xl min-h-screen border-r border-purple-500/20">
          <div className="p-6">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-cyan-600/30 text-white border border-purple-500/40 shadow-lg shadow-purple-500/20'
                      : 'text-purple-300 hover:bg-purple-500/20 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Event Creation Modal */}
      <EventCreationModal
        isOpen={showEventModal}
        onClose={() => setShowEventModal(false)}
        onSubmit={handleCreateEvent}
      />

      {/* Modern Notifications Dropdown */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-16 right-8 w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 z-50 shadow-purple-500/20"
          >
            <div className="p-4 border-b border-purple-500/20">
              <h3 className="font-semibold text-white flex items-center">
                <Bell className="w-5 h-5 mr-2 text-purple-400" />
                Admin Notifications
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {[
                { title: 'New mentor application', subtitle: 'Dr. Sarah Wilson pending approval', color: 'bg-cyan-500' },
                { title: 'Placement update', subtitle: '15 students placed this week', color: 'bg-emerald-500' },
                { title: 'Event reminder', subtitle: 'Tech Symposium in 3 days', color: 'bg-purple-500' }
              ].map((notif, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-purple-500/10 transition-colors">
                  <div className={`w-2 h-2 ${notif.color} rounded-full mt-2 shadow-lg`}></div>
                  <div>
                    <p className="text-sm font-medium text-white">{notif.title}</p>
                    <p className="text-xs text-purple-200">{notif.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollegeAdminDashboard;
