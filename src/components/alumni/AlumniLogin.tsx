import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import { Alumni } from '../../App'; // ✅ Import Alumni interface

interface AlumniLoginProps {
  onLogin: (alumni: Alumni) => void; // ✅ Use Alumni type
  onBackToHome: () => void;
}

const AlumniLogin: React.FC<AlumniLoginProps> = ({ onLogin, onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const mockAlumni: Alumni = { // ✅ Create complete Alumni object
        id: '1',
        name: 'Rajesh Kumar',
        email: email,
        role: 'alumni',
        institution: 'IIT Delhi',
        college: 'IIT Delhi',
        graduationYear: 2018,
        company: 'Google',
        position: 'Senior Software Engineer',
        experience: 5,
        location: 'Bangalore',
        skills: ['Software Development', 'System Design', 'Machine Learning']
      };
      onLogin(mockAlumni);
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const mockAlumni: Alumni = { // ✅ Create complete Alumni object
        id: '2',
        name: 'Priya Sharma',
        email: 'priya.sharma@gmail.com',
        role: 'alumni',
        age: 26,
        college: 'Delhi University',
        institution: 'Delhi University',
        graduationYear: 2020,
        department: 'Electronics and Communication',
        phone: '+91 9876543211',
        city: 'Hyderabad',
        company: 'Microsoft',
        position: 'Product Manager',
        experience: 4,
        location: 'Hyderabad',
        interests: ['Product Management', 'Data Analytics', 'User Experience'],
        skills: ['Product Strategy', 'Data Analysis', 'Leadership']
      };
      onLogin(mockAlumni);
      setIsLoading(false);
    }, 2000);
  };

  const handleRegister = () => {
    console.log('Register clicked - you can implement registration logic here');
    alert('Alumni registration feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* LEFT SIDE - Login Panel (1/4 width) */}
      <div className="w-full lg:w-1/4 flex flex-col justify-center px-6 lg:px-12 bg-black relative">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={onBackToHome}
          className="absolute top-8 left-6 lg:left-12 flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-sm">Back</span>
        </motion.button>

        {/* Login Container */}
        <div className="w-full max-w-xs mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 
              className="text-4xl font-light text-white mb-4" 
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em',
                fontWeight: 300
              }}
            >
              Welcome Back
            </h1>
            <p 
              className="text-gray-400 text-base"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 400
              }}
            >
              Alumni Portal
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Email Field */}
            <div>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                placeholder="Email"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400
                }}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-0 py-4 pr-10 bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                placeholder="Password"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-4 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember & Forgot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-between pt-4"
            >
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-emerald-500 bg-transparent border border-gray-600 rounded focus:ring-emerald-500 focus:ring-1"
                />
                <span 
                  className="ml-3 text-sm text-gray-400"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Remember
                </span>
              </label>
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-white transition-colors"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Forgot?
              </button>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading}
              className="w-full mt-10 py-4 bg-emerald-600 text-white font-medium text-base rounded-lg hover:bg-emerald-700 transition-all duration-200 disabled:opacity-50"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </motion.button>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span 
                  className="px-4 bg-black text-gray-500 text-sm"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  or
                </span>
              </div>
            </motion.div>

            {/* Google Login */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full py-4 bg-transparent border border-gray-700 text-white font-medium text-base rounded-lg hover:border-gray-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500
              }}
            >
              <Chrome className="w-5 h-5 mr-3" />
              Google
            </motion.button>
          </motion.form>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mt-10"
          >
            <p 
              className="text-gray-400 text-sm"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              New alumni?{' '}
              <button
                type="button"
                onClick={handleRegister}
                className="text-emerald-500 hover:text-emerald-400 transition-colors font-medium"
              >
                Register
              </button>
            </p>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - Video Background (3/4 width) */}
      <div className="hidden lg:flex lg:w-3/4 relative overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/car.mp4" type="video/mp4" />
          <source src="./car.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay with Emerald Tint */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-emerald-900/10"></div>

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="text-center">
            {/* NextStep Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-6"
              style={{
                fontFamily: '"Neue Montreal", "Suisse Int\'l", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.05em',
                fontWeight: 200,
                textShadow: '0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              NextStep
            </motion.h1>

            {/* Alumni-specific Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="text-lg md:text-xl lg:text-2xl font-light text-white/60"
              style={{
                fontFamily: '"Neue Montreal", "Suisse Int\'l", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.01em',
                fontWeight: 300,
                textShadow: '0 0 20px rgba(0,0,0,0.6)'
              }}
            >
              Mentor the next generation. Shape the future.
            </motion.p>
          </div>
        </motion.div>

        {/* Emerald-tinted animated elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-emerald-300 rounded-full"
        />
      </div>
    </div>
  );
};

export default AlumniLogin;
