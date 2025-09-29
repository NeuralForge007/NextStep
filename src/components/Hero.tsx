import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.preload = 'auto';
      video.playsInline = true;
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
        console.log('✅ Video loaded successfully');
      };
      
      const handleError = (e: any) => {
        setVideoError(true);
        console.error('❌ Video failed to load:', e);
      };

      const handleCanPlay = () => {
        video.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplaythrough', handleCanPlay);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplaythrough', handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* Clean Video Background - No Blur */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/psy.mp4" type="video/mp4" />
        <source src="/car.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Clean Fallback Background - No Blur */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        !videoLoaded || videoError ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/40 via-fuchsia-700/20 to-cyan-700/20"></div>
        
        {/* Clean particles - No blur */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-fuchsia-400/10 animate-float"
              style={{
                width: `${Math.random() * 100 + 30}px`,
                height: `${Math.random() * 100 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Centered Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full text-center">
        
        {/* Main Heading - Centered */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-white leading-none tracking-tight mx-auto"
          style={{
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
            letterSpacing: '-0.02em',
            fontWeight: '300',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)' // Clean shadow for readability
          }}
        >
          Your Next Chapter{' '}
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-extralight">
            Starts Here
          </span>
        </motion.h1>

        {/* Centered Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
          style={{
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
            letterSpacing: '0.005em',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)' // Clean shadow for readability
          }}
        >
          Join <span className="text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text font-medium">50,000+ students and alumni</span> building careers through intelligent mentorship. From classroom to boardroom, NextStep bridges the gap between <span className="text-purple-300">ambition and achievement</span>.
        </motion.p>

        {/* Centered CTA Button - No blur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={scrollToFeatures}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all duration-500 focus:outline-none"
          >
            {/* Clean Button Background - No blur */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 opacity-100 transition-all duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3 px-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

        {/* Centered Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-8 text-sm text-white/80"
          style={{
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>50K+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse delay-1000"></div>
            <span>95% Match Success</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
            <span>500+ Universities</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-xs mb-2 tracking-wider uppercase font-light"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
          Scroll to Explore
        </span>
        <div className="w-0.5 h-8 bg-white/30 rounded-full relative">
          <div className="w-0.5 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
