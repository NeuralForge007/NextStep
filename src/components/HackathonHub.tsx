import React, { useState } from 'react';
import { Trophy, Award, Github, ExternalLink, Filter } from 'lucide-react';

const HackathonHub: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const mentors = [
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      company: "Zomato",
      achievement: "SIH 2023 Winner",
      category: "sih",
      project: "Smart Traffic Management System",
      techStack: ["React", "Node.js", "MongoDB", "IoT"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 45,
      rating: 4.9,
      prizeAmount: "₹1,00,000",
      description: "Built an AI-powered traffic optimization system that reduced congestion by 40% in pilot cities."
    },
    {
      name: "Sneha Patel",
      role: "Open Source Contributor",
      company: "Red Hat",
      achievement: "GSoC 2024 Participant",
      category: "gsoc",
      project: "Kubernetes Dashboard Enhancement",
      techStack: ["Go", "Kubernetes", "React", "TypeScript"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 32,
      rating: 4.8,
      organization: "CNCF",
      description: "Enhanced Kubernetes dashboard with advanced monitoring capabilities, used by 10K+ developers."
    },
    {
      name: "Vikash Kumar",
      role: "Data Scientist",
      company: "Paytm",
      achievement: "SIH 2024 Winner",
      category: "sih",
      project: "Rural Healthcare AI Assistant",
      techStack: ["Python", "TensorFlow", "Flutter", "GCP"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 38,
      rating: 5.0,
      prizeAmount: "₹1,00,000",
      description: "Developed AI-powered diagnostic tool for rural healthcare, deployed in 50+ villages."
    },
    {
      name: "Riya Sharma",
      role: "Frontend Engineer",
      company: "Razorpay",
      achievement: "GSoC 2023 Participant",
      category: "gsoc",
      project: "Apache Superset UI/UX Improvements",
      techStack: ["React", "TypeScript", "Python", "D3.js"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 28,
      rating: 4.7,
      organization: "Apache Foundation",
      description: "Redesigned Superset's dashboard interface, improving user experience for 100K+ analysts."
    },
    {
      name: "Aditya Singh",
      role: "Mobile Developer",
      company: "PhonePe",
      achievement: "SIH 2022 Winner",
      category: "sih",
      project: "Digital Payment Literacy App",
      techStack: ["Flutter", "Firebase", "Node.js", "ML"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 52,
      rating: 4.9,
      prizeAmount: "₹1,00,000",
      description: "Created an app to educate rural users about digital payments, onboarded 500K+ users."
    },
    {
      name: "Nisha Jain",
      role: "ML Engineer",
      company: "Ola",
      achievement: "GSoC 2024 Participant",
      category: "gsoc",
      project: "TensorFlow.js Mobile Optimization",
      techStack: ["JavaScript", "TensorFlow", "WebGL", "React Native"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      mentees: 41,
      rating: 4.8,
      organization: "Google",
      description: "Optimized TensorFlow.js for mobile devices, improving inference speed by 60%."
    }
  ];

  const filteredMentors = activeFilter === 'all' ? mentors : mentors.filter(mentor => mentor.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Achievers', count: mentors.length },
    { id: 'sih', label: 'SIH Winners', count: mentors.filter(m => m.category === 'sih').length },
    { id: 'gsoc', label: 'GSoC Participants', count: mentors.filter(m => m.category === 'gsoc').length }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Hackathon Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from Top Performers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with SIH winners, GSoC participants, and other achievement holders who can guide your journey to success.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center ${
                activeFilter === filter.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-blue-600 font-medium">{mentor.role}</p>
                  <p className="text-gray-500 text-sm">{mentor.company}</p>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                mentor.category === 'sih' 
                  ? 'bg-orange-100 text-orange-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {mentor.category === 'sih' ? (
                  <Trophy className="w-3 h-3 mr-1" />
                ) : (
                  <Github className="w-3 h-3 mr-1" />
                )}
                {mentor.achievement}
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{mentor.project}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {mentor.description}
                </p>
                
                {/* Prize/Organization */}
                <div className="flex items-center justify-between mb-3">
                  {mentor.prizeAmount && (
                    <span className="text-green-600 font-bold text-sm">
                      Prize: {mentor.prizeAmount}
                    </span>
                  )}
                  {mentor.organization && (
                    <span className="text-purple-600 font-medium text-sm">
                      {mentor.organization}
                    </span>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {mentor.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {mentor.mentees} mentees
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  {mentor.rating} rating
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 font-semibold text-sm">
                  Connect
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join the Elite Circle?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Connect with top performers who have proven their skills in prestigious competitions and open source contributions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 font-semibold">
              Find My Mentor
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 font-semibold">
              Browse All Achievers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonHub;