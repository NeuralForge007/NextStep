import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, HelpCircle, Users, Shield, Zap, Target, Award, 
  MessageCircle, BookOpen, Briefcase, Star, Search, Filter,
  ChevronDown, CheckCircle, ArrowRight, Sparkles, Globe
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle, color: 'from-purple-500 to-fuchsia-500' },
    { id: 'students', name: 'For Students', icon: BookOpen, color: 'from-fuchsia-500 to-pink-500' },
    { id: 'alumni', name: 'For Alumni', icon: Users, color: 'from-pink-500 to-purple-500' },
    { id: 'colleges', name: 'For Colleges', icon: Shield, color: 'from-purple-500 to-violet-500' },
    { id: 'technical', name: 'Technical', icon: Zap, color: 'from-violet-500 to-indigo-500' }
  ];

  const faqData = {
    general: [
      {
        question: "What is NextStep and how does it work?",
        answer: "NextStep is an AI-powered platform that connects students with alumni mentors, career opportunities, and professional networks. Our advanced matching algorithm analyzes profiles, skills, and career goals to create meaningful connections that accelerate professional growth."
      },
      {
        question: "Is NextStep free to use?",
        answer: "Yes! NextStep offers a comprehensive free tier that includes basic mentorship matching, networking features, and access to career resources. We also offer premium plans with advanced features like priority matching, exclusive events, and personalized career coaching."
      },
      {
        question: "How does the AI matching system work?",
        answer: "Our AI analyzes multiple factors including academic background, career interests, skills, location preferences, and personality traits to match students with the most suitable mentors and opportunities. The system continuously learns and improves its recommendations based on successful connections."
      },
      {
        question: "What makes NextStep different from other networking platforms?",
        answer: "NextStep focuses specifically on student-alumni connections with verified academic credentials, AI-powered matching, blockchain verification of achievements, and real-time collaboration tools designed for educational and professional growth."
      }
    ],
    students: [
      {
        question: "How do I find the right mentor for my career goals?",
        answer: "Complete your detailed profile including career interests, skills, and goals. Our AI will automatically suggest mentors who align with your aspirations. You can also browse mentor profiles, filter by industry/company, and send connection requests directly."
      },
      {
        question: "Can I connect with alumni from other colleges?",
        answer: "Absolutely! NextStep's network spans across 500+ institutions globally. You can connect with alumni from any college, expanding your network beyond your own institution to access diverse perspectives and opportunities."
      },
      {
        question: "How do I prepare for mentorship sessions?",
        answer: "We provide preparation guides, sample questions, and goal-setting templates. Before each session, review your mentor's background, prepare specific questions about their career path, and set clear objectives for what you want to achieve."
      },
      {
        question: "Are there any placement guarantees?",
        answer: "While we can't guarantee placements, our platform has a 87% success rate for students who actively engage with mentors and follow through on recommendations. We provide comprehensive support including resume reviews, interview prep, and direct referrals."
      }
    ],
    alumni: [
      {
        question: "How much time commitment is required for mentoring?",
        answer: "You have complete flexibility! Many mentors start with 30-60 minutes per month per mentee. You can adjust your availability, set boundaries, and choose how many students you'd like to mentor based on your schedule."
      },
      {
        question: "What support do you provide to mentors?",
        answer: "We offer mentor training resources, best practice guides, structured conversation frameworks, and ongoing support. You'll also join our exclusive alumni mentor community for networking and knowledge sharing."
      },
      {
        question: "Can I post job opportunities from my company?",
        answer: "Yes! Alumni can post internships, full-time positions, and referral opportunities. Our smart matching system will automatically notify relevant students, and you can manage applications through our integrated dashboard."
      },
      {
        question: "How do you verify alumni credentials?",
        answer: "We use blockchain technology and institutional partnerships to verify academic credentials, employment history, and professional achievements. This ensures students connect with legitimate, qualified mentors."
      }
    ],
    colleges: [
      {
        question: "How can our institution join NextStep?",
        answer: "Contact our institutional partnerships team to set up your college's presence on NextStep. We'll help you onboard alumni, current students, and administrative staff with customized branding and integration options."
      },
      {
        question: "What analytics and insights do you provide?",
        answer: "Our admin dashboard provides comprehensive analytics including alumni engagement rates, student placement statistics, popular career paths, mentorship success metrics, and ROI tracking for your career services programs."
      },
      {
        question: "Can we integrate NextStep with existing systems?",
        answer: "Yes! We offer API integrations with popular student information systems, career services platforms, and alumni management software. Our technical team will work with you to ensure seamless integration."
      },
      {
        question: "How do you ensure data privacy and security?",
        answer: "We comply with FERPA, GDPR, and other privacy regulations. All data is encrypted, access is role-based, and we provide detailed privacy controls for institutions to manage their community's information."
      }
    ],
    technical: [
      {
        question: "What devices and browsers are supported?",
        answer: "NextStep works on all modern browsers (Chrome, Firefox, Safari, Edge) and mobile devices. We offer native iOS and Android apps for the best mobile experience, with offline capabilities for key features."
      },
      {
        question: "How does blockchain verification work?",
        answer: "Academic credentials and achievements are recorded on a permissioned blockchain network, creating tamper-proof digital certificates. Students and alumni can share verified credentials instantly while maintaining complete privacy control."
      },
      {
        question: "Is my personal data secure?",
        answer: "Yes! We use enterprise-grade security including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with international privacy standards. You control what information is visible to others."
      },
      {
        question: "Do you offer API access for developers?",
        answer: "We provide RESTful APIs for institutional partners and approved third-party integrations. Our developer documentation includes authentication guides, endpoint references, and webhook capabilities for real-time data synchronization."
      }
    ]
  };

  const stats = [
    { label: "Questions Resolved", value: "10K+", icon: CheckCircle },
    { label: "Response Time", value: "<2hrs", icon: MessageCircle },
    { label: "Satisfaction Rate", value: "98%", icon: Star },
    { label: "Help Articles", value: "250+", icon: BookOpen }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Dark Neon Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-indigo-950/40 to-purple-950/60"></div>
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-indigo-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/4 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Neon Question Mark Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-4xl text-indigo-500">?</div>
          <div className="absolute top-40 right-32 text-2xl text-purple-500">?</div>
          <div className="absolute bottom-40 left-40 text-3xl text-violet-500">?</div>
          <div className="absolute bottom-20 right-20 text-2xl text-indigo-500">?</div>
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 rounded-3xl mb-8 shadow-2xl shadow-indigo-500/50">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Get instant answers to common questions about NextStep's features, functionality, and how to maximize your experience on our platform.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-black/50 via-indigo-950/40 to-purple-950/50 backdrop-blur-xl border border-indigo-500/30 shadow-xl shadow-indigo-500/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4 shadow-lg">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-purple-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-indigo-500/30 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300/60 backdrop-blur-sm transition-all duration-200 text-lg"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenFAQ(null);
              }}
              className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-indigo-500/30`
                  : 'bg-black/30 text-indigo-200 hover:bg-black/50 border border-indigo-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-black/40 via-indigo-950/30 to-purple-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-xl shadow-indigo-500/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}>
                        {openFAQ === index ? (
                          <Minus className="w-6 h-6 text-indigo-400" />
                        ) : (
                          <Plus className="w-6 h-6 text-indigo-400" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6 pt-2 border-t border-indigo-500/20">
                            <p className="text-purple-200 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-16 h-16 text-indigo-400 mx-auto mb-4 opacity-50" />
                  <p className="text-lg text-purple-200">No FAQs found matching your search.</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-16 rounded-3xl bg-gradient-to-br from-black/50 via-indigo-950/60 to-purple-950/50 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 rounded-2xl mb-8 shadow-2xl shadow-indigo-500/50">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h3>
          
          <p className="text-lg text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our support team is here to help you 24/7 with any questions or technical issues.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </span>
            </motion.button>
            
            <motion.button
              className="px-10 py-4 bg-transparent border-2 border-indigo-400 text-indigo-400 rounded-xl font-semibold hover:bg-indigo-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Help Center
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
