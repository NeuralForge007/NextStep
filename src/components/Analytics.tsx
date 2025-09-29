import React from 'react';
import { BarChart, TrendingUp, Users, Target, Award, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  const metrics = [
    {
      title: "Platform Growth",
      value: "300%",
      change: "+45% this month",
      icon: TrendingUp,
      color: "emerald",
      description: "User base expansion"
    },
    {
      title: "Successful Matches",
      value: "2,847",
      change: "+12% this week",
      icon: Users,
      color: "blue",
      description: "Mentor-mentee connections"
    },
    {
      title: "Job Placements",
      value: "1,234",
      change: "+8% this month",
      icon: Target,
      color: "purple",
      description: "Through referrals"
    },
    {
      title: "Verified Profiles",
      value: "5,678",
      change: "+15% this month",
      icon: Award,
      color: "orange",
      description: "Blockchain verified"
    }
  ];

  const engagementData = [
    { month: "Jan", students: 450, alumni: 320, sessions: 890 },
    { month: "Feb", students: 520, alumni: 380, sessions: 1050 },
    { month: "Mar", students: 680, alumni: 450, sessions: 1280 },
    { month: "Apr", students: 750, alumni: 520, sessions: 1450 },
    { month: "May", students: 890, alumni: 620, sessions: 1680 },
    { month: "Jun", students: 1020, alumni: 750, sessions: 1920 }
  ];

  const topUniversities = [
    { name: "IIT Delhi", students: 1200, alumni: 800, placements: 340 },
    { name: "IIT Bombay", students: 1100, alumni: 750, placements: 320 },
    { name: "BITS Pilani", students: 950, alumni: 600, placements: 280 },
    { name: "NIT Trichy", students: 800, alumni: 520, placements: 240 },
    { name: "IIIT Hyderabad", students: 750, alumni: 480, placements: 220 }
  ];

  const industryBreakdown = [
    { industry: "Technology", percentage: 45, count: 2340 },
    { industry: "Finance", percentage: 20, count: 1040 },
    { industry: "Consulting", percentage: 15, count: 780 },
    { industry: "Healthcare", percentage: 10, count: 520 },
    { industry: "Others", percentage: 10, count: 520 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <BarChart className="w-4 h-4 mr-2" />
            Platform Analytics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data-Driven Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics and insights showcasing the impact and growth of our alumni-mentor matching platform.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                  <span className={`text-sm font-medium text-${metric.color}-600 bg-${metric.color}-50 px-2 py-1 rounded-full`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-gray-600 text-sm font-medium mb-1">{metric.title}</div>
                <div className="text-gray-500 text-xs">{metric.description}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Engagement Chart */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" />
              Monthly Engagement Trends
            </h3>
            
            <div className="space-y-4">
              {engagementData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900 w-12">{data.month}</div>
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-2 h-8">
                      <div className="flex-1 bg-gray-100 rounded overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 transition-all duration-1000"
                          style={{ width: `${(data.students / 1200) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-1000 delay-200"
                          style={{ width: `${(data.alumni / 800) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 transition-all duration-1000 delay-400"
                          style={{ width: `${(data.sessions / 2000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                        {data.students}
                      </span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
                        {data.alumni}
                      </span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                        {data.sessions}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Students
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                Alumni
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                Sessions
              </div>
            </div>
          </div>

          {/* Top Universities */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-orange-600" />
              Top Participating Universities
            </h3>
            
            <div className="space-y-4">
              {topUniversities.map((university, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{university.name}</h4>
                    <span className="text-sm text-gray-500">#{index + 1}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-blue-600 font-bold">{university.students}</div>
                      <div className="text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-600 font-bold">{university.alumni}</div>
                      <div className="text-gray-500">Alumni</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-600 font-bold">{university.placements}</div>
                      <div className="text-gray-500">Placements</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Industry Distribution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {industryBreakdown.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeDasharray={`${industry.percentage}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{industry.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">{industry.industry}</h4>
                <p className="text-blue-100 text-sm">{industry.count} professionals</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            Live Statistics
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-green-600">24</div>
              <div className="text-sm text-gray-600">New connections today</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">Active sessions</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Job offers this week</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">98%</div>
              <div className="text-sm text-gray-600">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;