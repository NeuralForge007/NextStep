import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, BookOpen, Target, Users, Calendar, MessageCircle, TrendingUp, Settings, Bell, Search, Code, Trophy, UserPlus, Lightbulb, MapPin, Star, Heart, Zap, Brain, Shield, Award, Coffee, Briefcase, FileText, ExternalLink, Clock, CheckCircle, Users2, MessageSquare, Hash, Globe, Rocket, PartyPopper, Activity, BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, Cpu, Database, Server, Cloud, Building, Layers, MessageSquareText, X, GraduationCap } from 'lucide-react';
import { Student } from '../../App';


interface StudentDashboardProps {
  user: Student;
  onLogout: () => void;
}


// ✅ Modern Chart Component
const ModernChart: React.FC<{ type: 'line' | 'bar' | 'pie'; data: any; className?: string }> = ({ type, data, className = '' }) => {
  if (type === 'line') {
    return (
      <div className={`relative h-32 ${className}`}>
        <svg viewBox="0 0 300 100" className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,80 Q75,20 150,40 T300,30" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="3"
            className="drop-shadow-sm"
          />
          <path 
            d="M0,80 Q75,20 150,40 T300,30 L300,100 L0,100 Z" 
            fill="url(#areaGradient)"
          />
        </svg>
      </div>
    );
  }
  
  if (type === 'bar') {
    const bars = [65, 80, 45, 90, 75, 60, 85];
    return (
      <div className={`flex items-end justify-between h-32 px-2 ${className}`}>
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-t-sm shadow-lg"
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
          <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8" />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="url(#pieGradient)" 
            strokeWidth="8"
            strokeDasharray={`${data.percentage * 2.51} 251`}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="pieGradient">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
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


// ✅ Modern AI Matching Component
const AIMatchingDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    careerGoal: '',
    skills: '',
    dreamOrganizations: '',
    industryFocus: '',
    communicationStyle: '',
    specificGoals: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const industryOptions = [
    'Technology & Software',
    'Finance & Banking',
    'Healthcare & Life Sciences',
    'Consulting',
    'E-commerce & Retail',
    'Media & Entertainment',
    'Automotive & Manufacturing',
    'Energy & Sustainability',
    'Education & EdTech',
    'Aerospace & Defense'
  ];

  const communicationOptions = [
    'Weekly Video Calls',
    'Bi-weekly Check-ins',
    'Monthly Deep Dives',
    'Async Messaging',
    'Project-based Reviews',
    'On-demand Support'
  ];

  const goalOptions = [
    'Job Interview Preparation',
    'Technical Skill Building',
    'Career Transition Guidance',
    'Leadership Development',
    'Startup & Entrepreneurship',
    'Industry Network Building',
    'Personal Branding',
    'Salary Negotiation'
  ];


  const mentorMatches = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior ML Engineer",
      company: "Google",
      experience: "8 years",
      rating: 4.9,
      location: "Bangalore, India",
      expertise: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
      achievements: ["GSoC Mentor 2023", "SIH Winner 2019"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      matchScore: 95,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "Rahul Agarwal",
      role: "AI Research Scientist",
      company: "Microsoft Research",
      experience: "6 years",
      rating: 4.8,
      location: "Hyderabad, India",
      expertise: ["Computer Vision", "NLP", "PyTorch", "Research"],
      achievements: ["Top 1% Kaggle", "Published 15 papers"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      matchScore: 92,
      gradient: "from-emerald-400 to-green-500"
    },
    {
      name: "Anita Singh",
      role: "Head of Data Science",
      company: "Flipkart",
      experience: "10 years",
      rating: 5.0,
      location: "Bangalore, India",
      expertise: ["Data Science", "Analytics", "Team Leadership", "Strategy"],
      achievements: ["Built ML platform serving 300M+ users"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      matchScore: 88,
      gradient: "from-purple-400 to-pink-500"
    }
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  return (
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">AI Mentor Matching</h2>
        <p className="text-slate-400 text-lg font-light">Discover your perfect mentor using advanced AI</p>
      </div>


      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Career Goal
              </label>
              <input
                type="text"
                value={formData.careerGoal}
                onChange={(e) => handleInputChange('careerGoal', e.target.value)}
                placeholder="e.g., Machine Learning Engineer"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400 backdrop-blur-sm text-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Current Skills & Technologies
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="e.g., Python, TensorFlow, Deep Learning"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400 backdrop-blur-sm text-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Dream Organizations
              </label>
              <input
                type="text"
                value={formData.dreamOrganizations}
                onChange={(e) => handleInputChange('dreamOrganizations', e.target.value)}
                placeholder="e.g., Google, Microsoft, Apple, Tesla"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400 backdrop-blur-sm text-sm"
                required
              />
              <p className="text-xs text-slate-500">Companies you'd love your mentor to work for or have experience with</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                Industry Focus
              </label>
              <select
                value={formData.industryFocus}
                onChange={(e) => handleInputChange('industryFocus', e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white backdrop-blur-sm text-sm"
                required
              >
                <option value="" className="bg-slate-800 text-slate-300">Select your target industry...</option>
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry} className="bg-slate-800 text-white">{industry}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <MessageSquareText className="w-4 h-4 mr-2" />
                Preferred Communication Style
              </label>
              <select
                value={formData.communicationStyle}
                onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white backdrop-blur-sm text-sm"
                required
              >
                <option value="" className="bg-slate-800 text-slate-300">How would you like to connect?</option>
                {communicationOptions.map((style) => (
                  <option key={style} value={style} className="bg-slate-800 text-white">{style}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300 flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Specific Mentorship Goals
              </label>
              <select
                value={formData.specificGoals}
                onChange={(e) => handleInputChange('specificGoals', e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white backdrop-blur-sm text-sm"
                required
              >
                <option value="" className="bg-slate-800 text-slate-300">What do you want to achieve?</option>
                {goalOptions.map((goal) => (
                  <option key={goal} value={goal} className="bg-slate-800 text-white">{goal}</option>
                ))}
              </select>
            </div>
          </div>
          
          <motion.button
            type="submit"
            disabled={isAnalyzing}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Analyzing Your Profile...
              </div>
            ) : (
              <>
                <Brain className="w-5 h-5 inline mr-2" />
                Find My Perfect Mentor
              </>
            )}
          </motion.button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full mb-4 border border-emerald-500/30">
              <CheckCircle className="w-5 h-5 mr-2" />
              3 Perfect Matches Found
            </div>
          </div>
          
          <div className="grid gap-6">
            {mentorMatches.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-600/50"
                    />
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${mentor.gradient} rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg`}>
                      {mentor.matchScore}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium ml-1">{mentor.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-purple-300 font-medium mb-1">{mentor.role}</p>
                    <p className="text-slate-400 mb-3 text-sm">{mentor.company} • {mentor.experience} • {mentor.location}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentor.expertise.slice(0, 4).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-400">
                        <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                        {mentor.achievements[0]}
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 text-sm">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowResults(false)}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
            >
              Try Different Criteria
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFindMentorsModal, setShowFindMentorsModal] = useState(false);
  const [showFindPartnersModal, setShowFindPartnersModal] = useState(false);

  // Find Mentors Form State
  const [mentorForm, setMentorForm] = useState({
    expertise: '',
    hackathon: ''
  });

  // Find Partners Form State
  const [partnerForm, setPartnerForm] = useState({
    domain: '',
    academicYear: ''
  });

  const expertiseOptions = [
    'All Expertise',
    'Web Development',
    'Mobile Development',
    'Machine Learning & AI',
    'Data Science',
    'Blockchain',
    'Cloud Computing',
    'Cybersecurity',
    'Game Development',
    'IoT & Hardware',
    'AR/VR Development'
  ];

  const hackathonOptions = [
    'Any Hackathon',
    'TechFusion 2025',
    'CodeStorm Nationals',
    'InnoHack Summit',
    'DevSprint Championship',
    'HackElite Global',
    'BuildathonX',
    'SmartHack India'
  ];

  const domainOptions = [
    'All Domains',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Mobile App Development',
    'AI/ML Engineering',
    'Data Analytics',
    'UI/UX Design',
    'DevOps',
    'Blockchain Development',
    'Game Development'
  ];

  const academicYearOptions = [
    'Any Year',
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    'Masters',
    'PhD'
  ];

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Find Mentors:', mentorForm);
    // Add your mentor search logic here
    setShowFindMentorsModal(false);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Find Partners:', partnerForm);
    // Add your partner search logic here
    setShowFindPartnersModal(false);
  };


  const stats = [
    { 
      label: 'Network', 
      value: '42', 
      icon: Users, 
      color: 'from-blue-600 to-cyan-500', 
      change: '+12%',
      trend: 'up'
    },
    { 
      label: 'Learning Hours', 
      value: '186', 
      icon: Clock, 
      color: 'from-emerald-600 to-green-500', 
      change: '+8%',
      trend: 'up'
    },
    { 
      label: 'Skill Level', 
      value: '87%', 
      icon: TrendingUp, 
      color: 'from-purple-600 to-pink-500', 
      change: '+15%',
      trend: 'up'
    },
    { 
      label: 'Achievements', 
      value: '12', 
      icon: Award, 
      color: 'from-orange-600 to-red-500', 
      change: '+4',
      trend: 'up'
    }
  ];


  const chartData = [
    { name: 'Skill Growth', percentage: 87, type: 'pie' as const },
    { name: 'Weekly Activity', type: 'line' as const },
    { name: 'Performance', type: 'bar' as const }
  ];


  const recentActivity = [
    { 
      title: 'Completed Advanced React Course', 
      time: '2 hours ago', 
      type: 'achievement', 
      icon: Trophy, 
      color: 'text-emerald-400',
      description: 'Earned certification with 95% score'
    },
    { 
      title: 'Connected with Sarah Chen', 
      time: '5 hours ago', 
      type: 'connection', 
      icon: Users, 
      color: 'text-blue-400',
      description: 'Senior Software Engineer at Meta'
    },
    { 
      title: 'Upcoming: AI/ML Workshop', 
      time: 'Tomorrow 6 PM', 
      type: 'event', 
      icon: Calendar, 
      color: 'text-purple-400',
      description: 'Advanced Machine Learning Techniques'
    },
    { 
      title: 'New Mentorship Request', 
      time: '1 day ago', 
      type: 'message', 
      icon: MessageCircle, 
      color: 'text-cyan-400',
      description: 'From Dr. Amit Kumar, IIT Delhi'
    }
  ];


  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'ai-matching', label: 'AI Mentorship', icon: Brain },
    { id: 'connections', label: 'Network', icon: Users },
    { id: 'hackathons', label: 'Hackathons', icon: Code },
    { id: 'campus-connect', label: 'CampusConnect', icon: Users2 },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];


  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Modern Welcome Section */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">
                    Welcome back, {user.name}
                  </h2>
                  <p className="text-slate-400 text-lg font-light">
                    {user.course} • {user.year} • {user.institution}
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-emerald-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      Online
                    </div>
                    <div className="text-sm text-slate-400">
                      Last active: Just now
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-slate-600/50">
                    <User className="w-12 h-12 text-slate-300" />
                  </div>
                </div>
              </div>
            </div>


            {/* Modern Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
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
                  className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{chart.name}</h3>
                    <div className="p-2 bg-slate-800/50 rounded-lg">
                      {chart.type === 'line' && <LineChart className="w-4 h-4 text-slate-400" />}
                      {chart.type === 'bar' && <BarChart3 className="w-4 h-4 text-slate-400" />}
                      {chart.type === 'pie' && <PieChart className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>
                  <ModernChart type={chart.type} data={chart} />
                </motion.div>
              ))}
            </div>


            {/* Modern Activity Feed */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
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
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/30 transition-colors border border-transparent hover:border-slate-700/50"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white truncate">{item.title}</p>
                        <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{item.time}</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );


      case 'ai-matching':
        return <AIMatchingDemo />;


      case 'connections':
        return (
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-400" />
              Professional Network
            </h3>
            <p className="text-slate-400 mb-6">Connect with alumni, peers, and industry professionals.</p>
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">Network features launching soon</p>
            </div>
          </div>
        );


      case 'hackathons':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-600/90 to-blue-600/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-white">
                <Code className="w-8 h-8 mr-3" />
                Hackathons Hub
              </h3>
              <p className="text-emerald-100 font-light">Collaborate, compete, and create innovative solutions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Find Mentors',
                  description: 'Connect with experienced developers and industry experts for guidance',
                  icon: UserPlus,
                  color: 'from-blue-600 to-cyan-500',
                  onClick: () => setShowFindMentorsModal(true)
                },
                {
                  title: 'Find Partners',
                  description: 'Team up with talented individuals to build amazing projects together',
                  icon: Users,
                  color: 'from-purple-600 to-pink-500',
                  onClick: () => setShowFindPartnersModal(true)
                }
              ].map((item, index) => (
                <div key={index} className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-slate-400 mb-4 font-light">{item.description}</p>
                  <button 
                    onClick={item.onClick}
                    className={`w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium`}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );


      case 'campus-connect':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-3 flex items-center text-white">
                <Users2 className="w-8 h-8 mr-3" />
                CampusConnect
              </h3>
              <p className="text-purple-100 font-light">Connect with your campus community and collaborate on projects.</p>
            </div>
            
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Study Groups', icon: BookOpen, color: 'from-blue-600 to-cyan-500' },
                  { title: 'Project Teams', icon: Code, color: 'from-emerald-600 to-green-500' },
                  { title: 'Discussion Forums', icon: MessageSquare, color: 'from-purple-600 to-pink-500' }
                ].map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-colors bg-slate-800/30">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-400 font-light">Coming soon</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );


      case 'events':
        return (
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-orange-400" />
              Events & Workshops
            </h3>
            <p className="text-slate-400 mb-6 font-light">Discover upcoming events, workshops, and networking opportunities.</p>
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">Event calendar launching soon</p>
            </div>
          </div>
        );


      default:
        return (
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h3>
            <p className="text-slate-400 font-light">This section is currently under development.</p>
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">Coming soon</p>
            </div>
          </div>
        );
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Modern Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/50 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-xl shadow-lg"></div>
              <h1 className="text-xl font-semibold text-white tracking-tight">NextStep</h1>
            </div>


            {/* Modern Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search mentors, events, connections..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-200 text-sm"
                />
              </div>
            </div>


            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full shadow-lg"></span>
                </button>
              </div>


              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-white">{user.name}</span>
              </div>


              {/* Logout */}
              <button
                onClick={onLogout}
                className="text-sm text-slate-400 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800/50 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>


      <div className="flex">
        {/* Modern Sidebar */}
        <nav className="w-64 bg-slate-900/50 backdrop-blur-xl shadow-2xl min-h-screen border-r border-slate-700/50">
          <div className="p-6">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    activeSection === item.id
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-lg'
                      : 'text-slate-400 hover:bg-slate-800/30 hover:text-white'
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
            className="absolute top-16 right-8 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 z-50"
          >
            <div className="p-4 border-b border-slate-700/50">
              <h3 className="font-semibold text-white flex items-center">
                <Bell className="w-5 h-5 mr-2 text-purple-400" />
                Notifications
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {[
                { title: 'New mentor request', subtitle: 'Sarah Chen wants to connect', color: 'bg-blue-500' },
                { title: 'Workshop reminder', subtitle: 'React workshop starts in 1 hour', color: 'bg-emerald-500' }
              ].map((notif, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800/30 transition-colors">
                  <div className={`w-2 h-2 ${notif.color} rounded-full mt-2 shadow-lg`}></div>
                  <div>
                    <p className="text-sm font-medium text-white">{notif.title}</p>
                    <p className="text-xs text-slate-400">{notif.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Find Mentors Modal */}
      <AnimatePresence>
        {showFindMentorsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-slate-700/50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-3">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Find Mentors</h2>
                    <p className="text-slate-400 text-sm">Connect with expert developers</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowFindMentorsModal(false)}
                  className="text-slate-400 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleMentorSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Expertise In
                  </label>
                  <select
                    value={mentorForm.expertise}
                    onChange={(e) => setMentorForm(prev => ({ ...prev, expertise: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white backdrop-blur-sm text-sm"
                    required
                  >
                    <option value="" className="bg-slate-800">Select expertise...</option>
                    {expertiseOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 flex items-center">
                    <Trophy className="w-4 h-4 mr-2" />
                    For Which Hackathon
                  </label>
                  <select
                    value={mentorForm.hackathon}
                    onChange={(e) => setMentorForm(prev => ({ ...prev, hackathon: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white backdrop-blur-sm text-sm"
                    required
                  >
                    <option value="" className="bg-slate-800">Select hackathon...</option>
                    {hackathonOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">{option}</option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
                  >
                    Search Mentors
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setShowFindMentorsModal(false)}
                    className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:border-slate-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Find Partners Modal */}
      <AnimatePresence>
        {showFindPartnersModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-slate-700/50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Find Partners</h2>
                    <p className="text-slate-400 text-sm">Team up for hackathons</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowFindPartnersModal(false)}
                  className="text-slate-400 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 flex items-center">
                    <Layers className="w-4 h-4 mr-2" />
                    Which Domain
                  </label>
                  <select
                    value={partnerForm.domain}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, domain: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white backdrop-blur-sm text-sm"
                    required
                  >
                    <option value="" className="bg-slate-800">Select domain...</option>
                    {domainOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Academic Year
                  </label>
                  <select
                    value={partnerForm.academicYear}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, academicYear: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white backdrop-blur-sm text-sm"
                    required
                  >
                    <option value="" className="bg-slate-800">Select academic year...</option>
                    {academicYearOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">{option}</option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg"
                  >
                    Search Partners
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setShowFindPartnersModal(false)}
                    className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl hover:border-slate-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default StudentDashboard;
