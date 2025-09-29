import React, { useState } from 'react';
import { Brain, Search, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const AIMatchingDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    careerGoal: '',
    skills: '',
    experience: '',
    location: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mentorMatches = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior ML Engineer at Google",
      company: "Google",
      experience: "8 years",
      rating: 4.9,
      location: "Bangalore, India",
      expertise: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
      achievements: ["GSoC Mentor 2023", "SIH Winner 2019"],
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      matchScore: 95
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
      matchScore: 92
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
      matchScore: 88
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    trackEvent('ai_matching_demo', formData);

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Matching Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Mentor in Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes your goals, skills, and preferences to match you with the most relevant mentors from our verified network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Goals</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Career Goal
                </label>
                <select
                  value={formData.careerGoal}
                  onChange={(e) => handleInputChange('careerGoal', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your career goal</option>
                  <option value="ml-engineer">Machine Learning Engineer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="product-manager">Product Manager</option>
                  <option value="startup-founder">Startup Founder</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Skills
                </label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="e.g., Python, TensorFlow, Machine Learning"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="student">Student</option>
                  <option value="fresher">Fresher (0-1 years)</option>
                  <option value="junior">Junior (1-3 years)</option>
                  <option value="mid">Mid-level (3-5 years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., Bangalore, Mumbai, Remote"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Find My Mentors
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {showResults && (
              <>
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">AI Analysis Complete</h3>
                      <p className="text-sm text-gray-600">Found {mentorMatches.length} perfect matches</p>
                    </div>
                  </div>
                </div>

                {mentorMatches.map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{mentor.name}</h4>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-green-600">
                              {mentor.matchScore}% Match
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="text-sm text-gray-600">{mentor.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-purple-600 font-medium mb-1">{mentor.role}</p>
                        <p className="text-gray-600 mb-3">{mentor.company} • {mentor.experience}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {mentor.location}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {mentor.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.achievements.map((achievement, achIndex) => (
                            <span
                              key={achIndex}
                              className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded flex items-center"
                            >
                              <Calendar className="w-3 h-3 mr-1" />
                              {achievement}
                            </span>
                          ))}
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center">
                          Connect with {mentor.name.split(' ')[0]}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMatchingDemo;