import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, BookOpen, Users, Calendar, MessageCircle, TrendingUp, Settings, Bell, Search, 
  Award, Trophy, Target, Briefcase, MapPin, Mail, Phone, Globe, Star, Heart, 
  Clock, CheckCircle, XCircle, Eye, Send, Filter, MoreHorizontal, Zap, Brain,
  PieChart, LineChart, BarChart3, Activity, ArrowUpRight, ArrowDownRight,
  Presentation, GraduationCap, Building, Handshake, Sparkles, Crown,
  Coffee, Network, Rocket, Shield, Lightbulb, Users2, MessageSquare
} from 'lucide-react';
import { Alumni } from '../../App';

interface AlumniDashboardProps {
  user: Alumni;
  onLogout: () => void;
}

// ✅ Modern Chart Components
const ModernChart: React.FC<{ type: 'line' | 'bar' | 'pie'; data: any; className?: string }> = ({ type, data, className = '' }) => {
  if (type === 'line') {
    return (
      <div className={`relative h-32 ${className}`}>
        <svg viewBox="0 0 300 100" className="w-full h-full">
          <defs>
            <linearGradient id="alumniLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="alumniAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,80 Q75,30 150,45 T300,25" 
            fill="none" 
            stroke="url(#alumniLineGradient)" 
            strokeWidth="3"
          />
          <path 
            d="M0,80 Q75,30 150,45 T300,25 L300,100 L0,100 Z" 
            fill="url(#alumniAreaGradient)"
          />
        </svg>
      </div>
    );
  }
  
  if (type === 'bar') {
    const bars = [75, 90, 65, 85, 95, 70, 80];
    return (
      <div className={`flex items-end justify-between h-32 px-2 ${className}`}>
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-t from-purple-600 via-fuchsia-500 to-cyan-400 rounded-t-sm shadow-lg shadow-lg"
            style={{ height: `${height}%`, width: '12%' }}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          />
        ))}
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
            stroke="url(#alumniPieGradient)" 
            strokeWidth="8"
            strokeDasharray={`${data.percentage * 2.51} 251`}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="alumniPieGradient">
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

// ✅ Mentorship Request Card
const MentorshipRequestCard: React.FC<{ request: any; onAccept: () => void; onDecline: () => void }> = ({ request, onAccept, onDecline }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-xl shadow-purple-500/10 group"
    >
      {/* Neon corner accents */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/40 rounded-tr-2xl"></div>
      
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={request.student.image}
            alt={request.student.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-white truncate">{request.student.name}</h4>
            <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
              {request.timeAgo}
            </span>
          </div>
          
          <div className="space-y-1 mb-3">
            <p className="text-sm text-slate-300">{request.student.course} • {request.student.year}</p>
            <p className="text-xs text-purple-300">{request.student.college} • {request.student.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {request.student.skills?.slice(0, 3).map((skill: string, index: number) => (
                <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4 p-3 bg-black/20 rounded-lg border border-purple-500/20">
            <p className="text-sm text-purple-100 italic">"{request.message}"</p>
          </div>
          
          <div className="flex space-x-3">
            <motion.button
              onClick={onAccept}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Accept
            </motion.button>
            <motion.button
              onClick={onDecline}
              className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <XCircle className="w-4 h-4 inline mr-2" />
              Decline
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ✅ College Event Invitation Card
const CollegeEventCard: React.FC<{ event: any; onRespond: (response: string) => void }> = ({ event, onRespond }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-xl shadow-purple-500/10 group"
    >
      {/* Event type badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
        event.type === 'talk' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
        event.type === 'workshop' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
        'bg-purple-500/20 text-purple-300 border border-purple-500/30'
      }`}>
        {event.type}
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${event.colorGradient} flex items-center justify-center shadow-lg`}>
            <event.icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-semibold text-white leading-tight">{event.title}</h4>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-slate-300">
              <Building className="w-4 h-4 mr-2 text-purple-400" />
              {event.college}
            </div>
            <div className="flex items-center text-sm text-slate-300">
              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
              {event.date} • {event.time}
            </div>
            <div className="flex items-center text-sm text-slate-300">
              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
              {event.location}
            </div>
          </div>
          
          <p className="text-sm text-purple-100 mb-4 leading-relaxed">{event.description}</p>
          
          <div className="flex space-x-2">
            <motion.button
              onClick={() => onRespond('accept')}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Accept
            </motion.button>
            <motion.button
              onClick={() => onRespond('maybe')}
              className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-medium hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Maybe
            </motion.button>
            <motion.button
              onClick={() => onRespond('decline')}
              className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Decline
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AlumniDashboard: React.FC<AlumniDashboardProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data for mentorship requests
  const pendingRequests = [
    {
      id: 1,
      student: {
        name: "Priya Sharma",
        course: "Computer Science",
        year: "Final Year",
        college: "IIT Delhi",
        location: "New Delhi",
        image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        skills: ["React", "Node.js", "Python", "Machine Learning"]
      },
      message: "Hi! I'm really interested in transitioning into full-stack development at a product company. Your journey from college to Google is inspiring, and I'd love to learn from your experience.",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      student: {
        name: "Arjun Patel",
        course: "Information Technology",
        year: "3rd Year",
        college: "NIT Surat",
        location: "Gujarat",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        skills: ["Java", "Spring Boot", "AWS", "Microservices"]
      },
      message: "I'm planning to apply for internships at tech companies. Could you guide me on what skills I should focus on and how to prepare for technical interviews?",
      timeAgo: "1 day ago"
    },
    {
      id: 3,
      student: {
        name: "Sneha Reddy",
        course: "Electronics & Communication",
        year: "Final Year",
        college: "IIIT Hyderabad",
        location: "Hyderabad",
        image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        skills: ["Embedded Systems", "IoT", "C++", "Python"]
      },
      message: "I'm interested in transitioning from hardware to software development. Your background in both domains would be invaluable for my career decision.",
      timeAgo: "3 days ago"
    }
  ];

  // Mock data for college events
  const collegeEvents = [
    {
      id: 1,
      title: "Alumni Tech Talk: Future of AI",
      college: "IIT Delhi",
      date: "Dec 15, 2025",
      time: "6:00 PM IST",
      location: "Main Auditorium",
      type: "talk",
      description: "Share your insights on AI/ML trends and career opportunities in the tech industry.",
      icon: Brain,
      colorGradient: "from-purple-500 to-fuchsia-500"
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      college: "NIT Surat",
      date: "Dec 20, 2025",
      time: "2:00 PM IST",
      location: "Conference Hall A",
      type: "workshop",
      description: "Guide final year students on interview preparation, resume building, and industry expectations.",
      icon: Presentation,
      colorGradient: "from-emerald-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Alumni Networking Event",
      college: "IIIT Hyderabad",
      date: "Jan 5, 2026",
      time: "7:00 PM IST",
      location: "Campus Lawn",
      type: "networking",
      description: "Connect with fellow alumni and current students in an informal networking session.",
      icon: Users2,
      colorGradient: "from-blue-500 to-purple-500"
    }
  ];

  // Enhanced stats for alumni
  const stats = [
    { 
      label: 'Mentees Guided', 
      value: '28', 
      icon: Users, 
      color: 'from-purple-600 via-fuchsia-500 to-cyan-500', 
      change: '+6 this month',
      trend: 'up'
    },
    { 
      label: 'Success Stories', 
      value: '15', 
      icon: Trophy, 
      color: 'from-emerald-600 via-green-500 to-cyan-500', 
      change: '+3 placements',
      trend: 'up'
    },
    { 
      label: 'Impact Score', 
      value: '94%', 
      icon: TrendingUp, 
      color: 'from-violet-600 via-purple-500 to-fuchsia-500', 
      change: '+8% this quarter',
      trend: 'up'
    },
    { 
      label: 'Events Attended', 
      value: '8', 
      icon: Calendar, 
      color: 'from-orange-600 via-red-500 to-pink-500', 
      change: '+2 this month',
      trend: 'up'
    }
  ];

  const chartData = [
    { name: 'Mentoring Impact', percentage: 94, type: 'pie' as const },
    { name: 'Monthly Activity', type: 'line' as const },
    { name: 'Success Metrics', type: 'bar' as const }
  ];

  const recentActivity = [
    { 
      title: 'Priya got placed at Microsoft', 
      time: '2 hours ago', 
      type: 'success', 
      icon: Trophy, 
      color: 'text-emerald-400',
      description: 'Your mentee secured a SDE-2 position'
    },
    { 
      title: 'New mentorship request', 
      time: '5 hours ago', 
      type: 'request', 
      icon: Users, 
      color: 'text-cyan-400',
      description: 'From Arjun Patel, NIT Surat'
    },
    { 
      title: 'Tech Talk at IIT Delhi', 
      time: 'Tomorrow 6 PM', 
      type: 'event', 
      icon: Presentation, 
      color: 'text-purple-400',
      description: 'Future of AI in Industry'
    },
    { 
      title: 'Mentoring session completed', 
      time: '1 day ago', 
      type: 'session', 
      icon: Coffee, 
      color: 'text-cyan-400',
      description: 'Career guidance for Sneha Reddy'
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'mentorship-requests', label: 'Mentorship Requests', icon: Users },
    { id: 'college-invitations', label: 'College Events', icon: Calendar },
    { id: 'my-mentees', label: 'My Mentees', icon: GraduationCap },
    { id: 'impact-analytics', label: 'Impact Analytics', icon: TrendingUp },
    { id: 'professional-network', label: 'Professional Network', icon: Network },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleAcceptRequest = (requestId: number) => {
    console.log('Accepting request:', requestId);
  };

  const handleDeclineRequest = (requestId: number) => {
    console.log('Declining request:', requestId);
  };

  const handleEventResponse = (eventId: number, response: string) => {
    console.log('Event response:', eventId, response);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Enhanced Welcome Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight flex items-center">
                      Welcome back, {user.name}
                      <Crown className="w-8 h-8 ml-3 text-yellow-400" />
                    </h2>
                    <p className="text-slate-300 text-lg font-light">
                      {user.position} at {user.company} • {user.experience} years experience
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-emerald-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                        Industry Leader
                      </div>
                      <div className="text-sm text-purple-300">
                        Making an impact • {stats.value} mentees guided
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-500/30 shadow-lg">
                      <User className="w-12 h-12 text-slate-300" />
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
                  className="relative overflow-hidden bg-gradient-to-br from-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg shadow-lg`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        <span className="ml-1 text-xs">{stat.change}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graphical Panels */}
            <div className="grid md:grid-cols-3 gap-6">
              {chartData.map((chart, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative overflow-hidden bg-gradient-to-br from-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{chart.name}</h3>
                      <div className="p-2 bg-black/30 rounded-lg border border-purple-500/20">
                        {chart.type === 'line' && <LineChart className="w-4 h-4 text-purple-300" />}
                        {chart.type === 'bar' && <BarChart3 className="w-4 h-4 text-purple-300" />}
                        {chart.type === 'pie' && <PieChart className="w-4 h-4 text-purple-300" />}
                      </div>
                    </div>
                    <ModernChart type={chart.type} data={chart} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity Feed */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-purple-400" />
                    Recent Impact
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
                        <p className="text-sm text-slate-300/70 mt-1">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'mentorship-requests':
        return (
          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-cyan-400" />
                  Mentorship Requests
                </h2>
                <p className="text-slate-300 text-lg">
                  {pendingRequests.length} students are waiting for your response
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {pendingRequests.length > 0 ? (
                pendingRequests.map((request) => (
                  <MentorshipRequestCard
                    key={request.id}
                    request={request}
                    onAccept={() => handleAcceptRequest(request.id)}
                    onDecline={() => handleDeclineRequest(request.id)}
                  />
                ))
              ) : (
                <div className="text-center py-16 bg-gradient-to-br from-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-500/20">
                  <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-300 font-medium">No pending mentorship requests</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'college-invitations':
        return (
          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="w-8 h-8 mr-3 text-emerald-400" />
                  College Events & Invitations
                </h2>
                <p className="text-slate-300 text-lg">
                  Share your expertise and inspire the next generation
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {collegeEvents.map((event) => (
                <CollegeEventCard
                  key={event.id}
                  event={event}
                  onRespond={(response) => handleEventResponse(event.id, response)}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace('-', ' ')}</h3>
              <p className="text-slate-300 font-light">This section is currently under development.</p>
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
              <h1 className="text-xl font-bold text-white tracking-tight">NextStep Alumni</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mentees, events, opportunities..."
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
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-white">{user.name}</span>
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
                      ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-white border border-purple-500/40 shadow-lg shadow-purple-500/20'
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
                Recent Updates
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {[
                { title: 'New mentorship request', subtitle: 'From Priya Sharma, IIT Delhi', color: 'bg-cyan-500' },
                { title: 'Event invitation', subtitle: 'Tech Talk at NIT Surat tomorrow', color: 'bg-emerald-500' },
                { title: 'Mentee achievement', subtitle: 'Arjun got placed at Microsoft!', color: 'bg-purple-500' }
              ].map((notif, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-purple-500/10 transition-colors">
                  <div className={`w-2 h-2 ${notif.color} rounded-full mt-2 shadow-lg`}></div>
                  <div>
                    <p className="text-sm font-medium text-white">{notif.title}</p>
                    <p className="text-xs text-slate-300">{notif.subtitle}</p>
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

export default AlumniDashboard;
