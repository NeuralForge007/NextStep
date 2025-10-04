import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Share2, Target, TrendingUp, Award, Clock, CheckCircle, ArrowRight, 
  Zap, Network, Briefcase, Star, Building, MapPin, Calendar, User, 
  Sparkles, Crown, Trophy, Gift, DollarSign, UserPlus, MessageCircle
} from 'lucide-react';

const ReferralEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState(0);

  const referralStats = [
    {
      icon: Users,
      title: "Active Referrers",
      value: "2,847",
      change: "+23%",
      color: "from-purple-500 to-fuchsia-500",
      description: "Alumni actively referring opportunities"
    },
    {
      icon: Target,
      title: "Success Rate",
      value: "87%",
      change: "+12%",
      color: "from-fuchsia-500 to-pink-500",
      description: "Referrals leading to placements"
    },
    {
      icon: TrendingUp,
      title: "Avg. Package",
      value: "₹18.5L",
      change: "+15%",
      color: "from-pink-500 to-purple-500",
      description: "Through referred positions"
    },
    {
      icon: Award,
      title: "Companies",
      value: "450+",
      change: "+8%",
      color: "from-purple-500 to-violet-500",
      description: "Partner companies accepting referrals"
    }
  ];

  const referralProcess = [
    {
      step: "01",
      title: "Alumni Post Opportunities",
      description: "Alumni share job openings and internship positions from their companies with detailed requirements and benefits.",
      icon: Briefcase,
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      step: "02", 
      title: "Smart Matching",
      description: "AI analyzes student profiles, skills, and preferences to match them with relevant opportunities automatically.",
      icon: Zap,
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      step: "03",
      title: "Direct Connect",
      description: "Students connect directly with alumni referrers for guidance, interview prep, and application submission.",
      icon: MessageCircle,
      color: "from-pink-500 to-purple-500"
    },
    {
      step: "04",
      title: "Track Success",
      description: "Monitor application progress, interview schedules, and successful placements through our comprehensive dashboard.",
      icon: Trophy,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const topReferrers = [
    {
      name: "Priya Sharma",
      company: "Google",
      position: "Senior SWE",
      referrals: 23,
      success: "91%",
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      badge: "Top Referrer"
    },
    {
      name: "Rajesh Kumar",
      company: "Microsoft",
      position: "Product Manager",
      referrals: 18,
      success: "85%",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      badge: "Rising Star"
    },
    {
      name: "Anita Singh",
      company: "Amazon",
      position: "Data Scientist",
      referrals: 15,
      success: "93%",
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      badge: "Excellence"
    }
  ];

  const recentOpportunities = [
    {
      title: "Software Engineer Intern",
      company: "Meta",
      location: "Menlo Park, CA",
      package: "₹25L+ CTC",
      referrer: "Amit Patel",
      type: "Internship",
      deadline: "2 days left",
      applicants: 47
    },
    {
      title: "Product Manager",
      company: "Netflix",
      location: "Los Gatos, CA", 
      package: "₹35L+ CTC",
      referrer: "Sarah Chen",
      type: "Full-time",
      deadline: "5 days left",
      applicants: 23
    },
    {
      title: "Data Analyst",
      company: "Spotify",
      location: "Stockholm, Sweden",
      package: "₹22L+ CTC", 
      referrer: "Michael Brown",
      type: "Full-time",
      deadline: "1 week left",
      applicants: 31
    }
  ];

  return (
    <section id="referral-engine" className="relative py-24 bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 overflow-hidden">
      {/* Dark Neon Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-purple-950/40 to-indigo-950/60"></div>
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Neon Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rotate-45"></div>
          <div className="absolute top-40 right-32 w-32 h-0.5 bg-gradient-to-l from-pink-500 to-transparent -rotate-12"></div>
          <div className="absolute bottom-40 left-40 w-48 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-3xl mb-8 shadow-2xl shadow-orange-500/50">
            <Network className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Smart Referral Engine
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Leverage the power of alumni networks with our intelligent referral system that connects talent with opportunity through trusted relationships.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {referralStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-black/50 via-purple-950/40 to-indigo-950/50 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedMetric(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg shadow-purple-500/50`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200 font-medium mb-2">{stat.title}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-300">{stat.description}</span>
                  <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {referralProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-bold text-purple-500/30">{process.step}</span>
                    <div className={`p-3 bg-gradient-to-br ${process.color} rounded-xl shadow-lg`}>
                      <process.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                  <p className="text-purple-200 text-sm leading-relaxed">{process.description}</p>
                </div>
                
                {index < referralProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Referrers & Recent Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Top Referrers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Crown className="w-6 h-6 mr-3 text-yellow-400" />
                Top Referrers
              </h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
            </div>
            
            <div className="space-y-4">
              {topReferrers.map((referrer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-black/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={referrer.image}
                      alt={referrer.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-black"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">{referrer.name}</h4>
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
                        {referrer.badge}
                      </span>
                    </div>
                    <p className="text-sm text-purple-200">{referrer.position} at {referrer.company}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-purple-300">{referrer.referrals} referrals</span>
                      <span className="text-xs text-emerald-400">{referrer.success} success</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-black/40 via-purple-950/30 to-indigo-950/40 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-orange-400" />
                Live Opportunities
              </h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">See More</button>
            </div>
            
            <div className="space-y-4">
              {recentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-black/20 border border-purple-500/20 hover:border-orange-400/40 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                        {opportunity.title}
                      </h4>
                      <p className="text-sm text-purple-200">{opportunity.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      opportunity.type === 'Internship' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {opportunity.type}
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-xs text-purple-300">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {opportunity.package}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-purple-500/20">
                    <span className="text-xs text-purple-400">
                      Referred by {opportunity.referrer}
                    </span>
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="text-orange-400">{opportunity.deadline}</span>
                      <span className="text-purple-300">{opportunity.applicants} applied</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-16 rounded-3xl bg-gradient-to-br from-black/50 via-purple-950/60 to-indigo-950/50 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl mb-8 shadow-2xl shadow-orange-500/50">
            <UserPlus className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Hidden Opportunities?
          </h3>
          
          <p className="text-lg text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our referral network and get access to exclusive job opportunities through trusted alumni connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Network className="w-5 h-5 mr-2" />
                Join Referral Network
              </span>
            </motion.button>
            
            <motion.button
              className="px-10 py-4 bg-transparent border-2 border-orange-400 text-orange-400 rounded-xl font-semibold hover:bg-orange-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralEngine;
