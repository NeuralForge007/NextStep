import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Brain, Rocket, Users, Target, Zap, Database, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced neural networks analyze skills, interests, and career goals to create perfect mentor-student connections with 95% accuracy.',
      image: '/1.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Personalized career trajectories with AI-driven insights, skill gap analysis, and direct industry connections for exponential growth.',
      image: '/2.jpg',
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with 500+ universities, 50,000+ professionals, and industry leaders across 150 countries in real-time.',
      image: '/3.jpg',
      color: 'from-cyan-500 to-green-500'
    },
    {
      icon: Target,
      title: 'Smart Referrals',
      description: 'Intelligent referral system that matches your profile with relevant opportunities, increasing job placement rates by 300%.',
      image: '/4.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Seamless project collaboration tools with integrated communication, file sharing, and progress tracking for team success.',
      image: '/5.jpg',
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: Database,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard providing actionable insights into networking effectiveness and career progression metrics.',
      image: '/6.jpg',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const newIndex = Math.min(Math.floor(progress * features.length), features.length - 1);
      setActiveIndex(newIndex);
    });
    return unsubscribe;
  }, [scrollYProgress, features.length]);

  const CurrentIcon = features[activeIndex].icon;

  return (
    <>
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Revolutionary Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-6"
          >
            Power Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Story
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Discover the cutting-edge technology that makes NextStep the ultimate platform.
          </motion.p>
        </div>
      </section>

      {/* Split-Screen Features with Full-Screen Photos */}
      <div 
        ref={containerRef}
        className="relative bg-black"
        style={{ height: `${features.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex">
          
          {/* Left Side - Full-Screen Photos */}
          <div className="w-1/2 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1] // Custom bezier for smooth transition
                }}
                className="absolute inset-0"
              >
                <img
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Professional Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${features[activeIndex].color} opacity-15`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
                
                {/* Professional Photo Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-black/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${features[activeIndex].color} shadow-lg`}>
                        <CurrentIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-white/60 text-sm font-medium block">
                          Feature {activeIndex + 1} of {features.length}
                        </span>
                        <h4 className="text-white font-bold text-xl">
                          {features[activeIndex].title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Feature Content */}
          <div className="w-1/2 flex items-center justify-center p-12 bg-black">
            <div className="max-w-lg w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1] // Same smooth bezier curve
                  }}
                  className="text-white"
                >
                  {/* Feature Number Badge */}
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-center gap-4 mb-8"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${features[activeIndex].color} flex items-center justify-center font-bold text-xl shadow-xl`}>
                      {String(activeIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
                  </motion.div>
                  
                  {/* Large Icon */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${features[activeIndex].color} mb-8 shadow-2xl`}
                  >
                    <CurrentIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`text-5xl font-black mb-6 bg-gradient-to-r ${features[activeIndex].color} bg-clip-text text-transparent leading-tight`}
                  >
                    {features[activeIndex].title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-white/80 leading-relaxed mb-10"
                  >
                    {features[activeIndex].description}
                  </motion.p>
                  
                  {/* Progress Indicators */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    {features.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                          index === activeIndex 
                            ? `bg-gradient-to-r ${features[activeIndex].color} w-12 shadow-lg` 
                            : 'bg-white/20 w-3 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-lg text-white/80">
              Join thousands transforming their careers through 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium"> meaningful connections</span>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
