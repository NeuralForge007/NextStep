import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Building, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { CollegeAdmin } from '../../App'; // ✅ Import CollegeAdmin interface

interface CollegeAdminLoginProps {
  onLogin: (admin: CollegeAdmin) => void; // ✅ Use CollegeAdmin type
  onBackToHome: () => void;
}

const CollegeAdminLogin: React.FC<CollegeAdminLoginProps> = ({ onLogin, onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const mockCollegeAdmin: CollegeAdmin = { // ✅ Create complete CollegeAdmin object
        id: '1',
        name: 'Dr. Rajesh Sharma',
        email: email,
        role: 'admin',
        institution: 'Indian Institute of Technology Delhi',
        college: 'IIT Delhi',
        collegeName: 'Indian Institute of Technology Delhi',
        collegeCode: 'IITD001',
        collegeType: 'Public Technical University',
        establishedYear: '1961',
        totalStudents: 8500,
        location: {
          city: 'New Delhi',
          state: 'Delhi'
        },
        accreditation: ['NAAC A++', 'NBA Accredited', 'NIRF Ranked'],
        department: 'Computer Science',
        position: 'Head of Department'
      };
      onLogin(mockCollegeAdmin);
      setIsLoading(false);
    }, 1500);
  };

  const handleInstitutionalLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const mockAdmin: CollegeAdmin = { // ✅ Create complete CollegeAdmin object
        id: '2',
        name: 'Prof. Anand Mishra',
        email: 'anand.mishra@iitd.ac.in',
        role: 'admin',
        institution: 'Indian Institute of Technology Delhi',
        college: 'IIT Delhi',
        collegeName: 'Indian Institute of Technology Delhi',
        collegeCode: 'IITD001',
        collegeType: 'Public Technical University',
        establishedYear: '1961',
        totalStudents: 8500,
        location: {
          city: 'New Delhi',
          state: 'Delhi'
        },
        accreditation: ['NAAC A++', 'NBA Accredited', 'NIRF Ranked'],
        department: 'Academic Affairs',
        position: 'Dean of Student Affairs'
      };
      onLogin(mockAdmin);
      setIsLoading(false);
    }, 2000);
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
              Admin Portal
            </h1>
            <p 
              className="text-gray-400 text-base"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 400
              }}
            >
              College Administration
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Official Email"
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
                className="w-full px-0 py-4 pr-10 bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Admin Password"
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
                  className="w-4 h-4 text-orange-500 bg-transparent border border-gray-600 rounded focus:ring-orange-500 focus:ring-1"
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
                Need Help?
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
              className="w-full mt-10 py-4 bg-orange-600 text-white font-medium text-base rounded-lg hover:bg-orange-700 transition-all duration-200 disabled:opacity-50"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500
              }}
            >
              {isLoading ? 'Signing in...' : 'Access Admin Panel'}
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

            {/* Institutional Login */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              onClick={handleInstitutionalLogin}
              disabled={isLoading}
              className="w-full py-4 bg-transparent border border-gray-700 text-white font-medium text-base rounded-lg hover:border-gray-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500
              }}
            >
              <Building className="w-5 h-5 mr-3" />
              Institutional Login
            </motion.button>
          </motion.form>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mt-10"
          >
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-4 h-4 text-orange-500 mr-2" />
              <p 
                className="text-gray-500 text-xs"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Secure Administrative Access
              </p>
            </div>
            <p 
              className="text-gray-600 text-xs"
              style={{ 
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              All activities are monitored and logged for security purposes
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

        {/* Dark Overlay with Orange Tint */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-orange-900/10"></div>

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

            {/* Admin-specific Subtitle */}
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
              Empowering institutions to build tomorrow's leaders
            </motion.p>
          </div>
        </motion.div>

        {/* Orange-tinted animated elements */}
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
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full"
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
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-orange-300 rounded-full"
        />
      </div>
    </div>
  );
};

export default CollegeAdminLogin;
