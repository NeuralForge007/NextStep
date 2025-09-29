import React, { useState } from 'react';
import { Users, BookOpen, TrendingUp, Calendar, MessageCircle, Target, Bell, Settings } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('student');

  const dashboards = {
    student: {
      title: "Student Dashboard",
      color: "blue",
      stats: [
        { label: "Active Mentorships", value: "3", icon: Users },
        { label: "Skills Learned", value: "12", icon: BookOpen },
        { label: "Goals Achieved", value: "8", icon: Target },
        { label: "Network Connections", value: "45", icon: TrendingUp }
      ],
      features: [
        { title: "Find Mentors", description: "Browse and connect with verified alumni mentors", icon: Users },
        { title: "Track Progress", description: "Monitor your learning goals and achievements", icon: Target },
        { title: "Schedule Sessions", description: "Book one-on-one mentoring sessions", icon: Calendar },
        { title: "Join Communities", description: "Participate in alumni networks and groups", icon: MessageCircle }
      ],
      recentActivity: [
        { action: "Connected with Dr. Priya Sharma", time: "2 hours ago", type: "connection" },
        { action: "Completed Machine Learning milestone", time: "1 day ago", type: "achievement" },
        { action: "Attended webinar on Career Growth", time: "3 days ago", type: "event" },
        { action: "Updated profile with new skills", time: "1 week ago", type: "profile" }
      ]
    },
    alumni: {
      title: "Alumni Dashboard",
      color: "emerald",
      stats: [
        { label: "Active Mentees", value: "8", icon: Users },
        { label: "Sessions Completed", value: "45", icon: Calendar },
        { label: "Impact Score", value: "95", icon: TrendingUp },
        { label: "Referrals Made", value: "12", icon: Target }
      ],
      features: [
        { title: "Manage Mentees", description: "Track and guide your mentee's progress", icon: Users },
        { title: "Share Opportunities", description: "Post job openings and internships", icon: BookOpen },
        { title: "Host Events", description: "Organize webinars and networking sessions", icon: Calendar },
        { title: "Earn Recognition", description: "Build your mentoring reputation", icon: Target }
      ],
      recentActivity: [
        { action: "Mentored Raj Kumar on career transition", time: "1 hour ago", type: "mentoring" },
        { action: "Posted Software Engineer opening at Google", time: "4 hours ago", type: "opportunity" },
        { action: "Received 5-star rating from mentee", time: "2 days ago", type: "feedback" },
        { action: "Completed mentoring milestone", time: "1 week ago", type: "achievement" }
      ]
    },
    admin: {
      title: "College Admin Panel",
      color: "purple",
      stats: [
        { label: "Registered Students", value: "2,450", icon: Users },
        { label: "Alumni Network", value: "8,900", icon: TrendingUp },
        { label: "Active Mentorships", value: "156", icon: BookOpen },
        { label: "Placement Rate", value: "94%", icon: Target }
      ],
      features: [
        { title: "Student Analytics", description: "Track student engagement and progress", icon: TrendingUp },
        { title: "Alumni Management", description: "Manage alumni database and outreach", icon: Users },
        { title: "Event Coordination", description: "Organize college-wide mentoring events", icon: Calendar },
        { title: "Performance Reports", description: "Generate detailed performance insights", icon: BookOpen }
      ],
      recentActivity: [
        { action: "Generated monthly placement report", time: "30 minutes ago", type: "report" },
        { action: "Approved 15 new alumni profiles", time: "2 hours ago", type: "approval" },
        { action: "Scheduled campus recruitment drive", time: "1 day ago", type: "event" },
        { action: "Updated college partnership agreements", time: "3 days ago", type: "admin" }
      ]
    }
  };

  const currentDashboard = dashboards[activeTab as keyof typeof dashboards];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Dashboards for Every User
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience personalized interfaces designed for students, alumni, and administrators with role-specific features and insights.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {Object.entries(dashboards).map(([key, dashboard]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? `bg-${dashboard.color}-600 text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {dashboard.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r from-${currentDashboard.color}-600 to-${currentDashboard.color}-700 px-8 py-6 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">{currentDashboard.title}</h3>
                <p className="text-blue-100 mt-1">Welcome back! Here's your overview</p>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="w-6 h-6 text-blue-100 hover:text-white cursor-pointer" />
                <Settings className="w-6 h-6 text-blue-100 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="p-8 border-b border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentDashboard.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-${currentDashboard.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className={`w-8 h-8 text-${currentDashboard.color}-600`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Quick Actions */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h4>
              <div className="space-y-4">
                {currentDashboard.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
                    >
                      <div className={`w-12 h-12 bg-${currentDashboard.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${currentDashboard.color}-200 transition-colors`}>
                        <IconComponent className={`w-6 h-6 text-${currentDashboard.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h4>
              <div className="space-y-4">
                {currentDashboard.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className={`w-3 h-3 bg-${currentDashboard.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium bg-${currentDashboard.color}-100 text-${currentDashboard.color}-800 rounded-full`}>
                      {activity.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className={`bg-gradient-to-r from-${currentDashboard.color}-600 to-${currentDashboard.color}-700 text-white px-8 py-4 rounded-xl hover:from-${currentDashboard.color}-700 hover:to-${currentDashboard.color}-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl`}>
            Explore {currentDashboard.title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;