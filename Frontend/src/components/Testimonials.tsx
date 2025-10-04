import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Users, Award, TrendingUp, Heart, Sparkles, Zap } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      institution: "Stanford University",
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "NextStep completely transformed my college experience. The AI matching connected me with an amazing mentor who helped me land my dream internship at Google. The platform's hackathon features made it easy to find talented teammates and build incredible projects together.",
      rating: 5,
      category: "student",
      gradient: "from-purple-400 via-fuchsia-400 to-cyan-500"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Alumni Relations Director",
      institution: "MIT",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "As an administrator, I've witnessed firsthand how NextStep bridges the gap between current students and our alumni network. The blockchain verification system ensures authenticity, and our engagement rates have skyrocketed by 300% since implementation.",
      rating: 5,
      category: "admin",
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500"
    },
    {
      name: "James Wilson",
      role: "Senior Software Engineer",
      institution: "Former UC Berkeley Student",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "After graduating, I wanted to give back to my alma mater. NextStep made mentoring incredibly rewarding and efficient. I've successfully guided 15+ students through their career transitions, helping them land positions at top tech companies.",
      rating: 5,
      category: "alumni",
      gradient: "from-fuchsia-400 via-pink-400 to-purple-500"
    },
    {
      name: "Emily Thompson",
      role: "Talent Acquisition Manager",
      institution: "Microsoft",
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "NextStep has revolutionized our talent acquisition strategy. The blockchain verification gives us complete confidence in candidates' credentials, and we've successfully hired 50+ exceptional graduates through the platform's intelligent matching system.",
      rating: 5,
      category: "recruiter",
      gradient: "from-pink-400 via-purple-400 to-violet-500"
    },
    {
      name: "Alex Kumar",
      role: "Startup Founder & Final Year Student",
      institution: "IIT Delhi",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "The hackathon collaboration tools are phenomenal! I found my co-founder through NextStep's AI matching, and we've since launched our EdTech startup. The platform's networking capabilities opened doors I never knew existed in the ecosystem.",
      rating: 5,
      category: "student",
      gradient: "from-purple-400 via-violet-400 to-cyan-500"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Users",
      color: "from-purple-400 via-fuchsia-400 to-cyan-400"
    },
    {
      icon: Award,
      value: "98.5%",
      label: "Satisfaction Rate",
      color: "from-violet-400 via-purple-400 to-fuchsia-400"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Career Growth",
      color: "from-fuchsia-400 via-pink-400 to-purple-400"
    },
    {
      icon: Heart,
      value: "15,000+",
      label: "Success Stories",
      color: "from-pink-400 via-purple-400 to-violet-400"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 overflow-hidden">
      {/* Dark Neon Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-purple-950/40 to-indigo-950/60"></div>
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-fuchsia-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-60 h-60 bg-violet-500/4 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Neon Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 rounded-3xl mb-8 shadow-2xl shadow-purple-500/50">
            <Quote className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Success Stories
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Hear from students, alumni, administrators, and recruiters who have experienced the transformative power of NextStep.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden p-10 md:p-16 rounded-3xl bg-gradient-to-br from-black/50 via-purple-950/60 to-indigo-950/50 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/60 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-fuchsia-500/60 rounded-br-3xl"></div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse delay-500"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-shrink-0 relative">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500/40 shadow-2xl shadow-purple-500/50"
                      />
                      {/* Profile badge */}
                      <div className={`absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center shadow-xl shadow-purple-500/50`}>
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <Zap className="w-3 h-3 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-6 h-6 fill-current text-yellow-400 mr-1" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic font-light">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>
                    
                    <div className="space-y-2">
                      <div className="font-bold text-white text-xl mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-purple-300 text-base font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-purple-400 text-sm">
                        {testimonials[currentIndex].institution}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <motion.button
              onClick={prevTestimonial}
              className="p-4 rounded-2xl bg-gradient-to-br from-black/50 via-purple-950/50 to-indigo-950/50 backdrop-blur-sm border border-purple-500/30 text-purple-300 hover:text-white shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3, rotateY: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 shadow-lg shadow-purple-500/50 scale-125' 
                      : 'bg-purple-800/50 hover:bg-purple-700/70 hover:scale-110'
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.25 : 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-4 rounded-2xl bg-gradient-to-br from-black/50 via-purple-950/50 to-indigo-950/50 backdrop-blur-sm border border-purple-500/30 text-purple-300 hover:text-white shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3, rotateY: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden text-center p-8 rounded-2xl bg-gradient-to-br from-black/50 via-purple-950/40 to-indigo-950/50 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10 group"
              whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-purple-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden text-center p-16 rounded-3xl bg-gradient-to-br from-black/60 via-purple-950/70 to-indigo-950/60 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/8 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-fuchsia-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 rounded-3xl mb-8 shadow-2xl shadow-purple-500/50">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Write Your Success Story?
            </h3>
            
            <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students, alumni, and institutions who are already transforming careers through meaningful connections.
            </p>
            
            <motion.button
              className="px-12 py-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 text-white rounded-xl font-semibold shadow-xl shadow-purple-500/40 hover:shadow-purple-500/70 transition-all duration-300 border border-purple-500/20 text-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Heart className="w-6 h-6 mr-3" />
                Start Your Journey Today
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
