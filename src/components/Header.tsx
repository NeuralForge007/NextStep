import React, { useState, useEffect } from 'react';
import { Menu, X, Users, GraduationCap, Building2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onStudentAccess: () => void;
  onAlumniAccess: () => void;
  onCollegeAdminAccess: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  onStudentAccess,
  onAlumniAccess,
  onCollegeAdminAccess,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ REDUCED HEADER THICKNESS - Changed all py-3 to py-2
  const [headerStyle, setHeaderStyle] = useState({
    textColor: 'text-white/90',
    logoColor: 'text-white',
    buttonStyle: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
    backdropFilter: 'backdrop-blur-sm',
    bgColor: 'bg-transparent',
    borderColor: 'border-transparent',
    dropdownBg: 'bg-black/90',
    dropdownBorder: 'border-white/10',
    height: 'py-2', // ✅ REDUCED from py-3 to py-2
    logoSize: 'text-xl', // ✅ REDUCED from text-2xl to text-xl
    buttonPadding: 'px-4 py-2' // ✅ REDUCED from px-5 py-2.5 to px-4 py-2
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      // ✅ CONSISTENT NEON DARK THEME ACROSS ALL SECTIONS
      if (currentScrollY < 100) {
        // ✅ HERO SECTION - ULTRA MINIMAL, GLASS-LIKE
        setHeaderStyle({
          textColor: 'text-white/90 hover:text-white',
          logoColor: 'bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg',
          buttonStyle: isScrolled
            ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 shadow-lg backdrop-blur-md'
            : 'bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white',
          backdropFilter: isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm',
          bgColor: isScrolled ? 'bg-black/30' : 'bg-transparent',
          borderColor: isScrolled ? 'border-white/10' : 'border-transparent',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-white/20',
          height: 'py-2', // ✅ THIN HEADER
          logoSize: 'text-xl', // ✅ SMALLER LOGO
          buttonPadding: 'px-4 py-2' // ✅ SMALLER BUTTON
        });
      } else if (currentScrollY < 800) {
        // ✅ STILL HERO BUT SCROLLED - MORE VISIBLE
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:border-white/40 shadow-lg backdrop-blur-md',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/50',
          borderColor: 'border-white/10',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-white/20',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      } else if (currentScrollY < 1600) {
        // ✅ FEATURES SECTION - KEEP DARK NEON THEME
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 text-white border border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-500/30 hover:via-cyan-500/30 hover:to-pink-500/30 shadow-lg backdrop-blur-md',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/70',
          borderColor: 'border-purple-400/20',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-purple-400/30',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      } else if (currentScrollY < 2400) {
        // ✅ REFERRAL ENGINE SECTION
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-white border border-orange-400/30 hover:from-orange-500/30 hover:to-pink-500/30 shadow-lg',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/70',
          borderColor: 'border-orange-400/20',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-orange-400/30',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      } else if (currentScrollY < 3200) {
        // ✅ TESTIMONIALS SECTION - CONSISTENT DARK THEME
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-400/30 hover:from-emerald-500/30 hover:to-cyan-500/30 shadow-lg',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/70',
          borderColor: 'border-emerald-400/20',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-emerald-400/30',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      } else if (currentScrollY < 4000) {
        // ✅ FAQ SECTION
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-400/30 hover:from-indigo-500/30 hover:to-purple-500/30 shadow-lg',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/70',
          borderColor: 'border-indigo-400/20',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-indigo-400/30',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      } else {
        // ✅ FOOTER SECTION - CONSISTENT DARK THEME
        setHeaderStyle({
          textColor: 'text-white',
          logoColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
          buttonStyle: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30 shadow-lg',
          backdropFilter: 'backdrop-blur-xl',
          bgColor: 'bg-black/70',
          borderColor: 'border-blue-400/20',
          dropdownBg: 'bg-black/95 backdrop-blur-xl',
          dropdownBorder: 'border-blue-400/30',
          height: 'py-2',
          logoSize: 'text-xl',
          buttonPadding: 'px-4 py-2'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // ✅ UPDATED NAVIGATION ITEMS - Changed "Demo" to "Referral Engine"
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Referral Engine', href: '#referral-engine' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
  ];

  const userTypes = [
    {
      name: 'Students',
      description: 'Connect with alumni mentors and accelerate your career',
      icon: GraduationCap,
      onClick: () => {
        console.log('Student clicked');
        onStudentAccess();
        setDropdownOpen(false);
      },
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20',
      borderColor: 'border-blue-500/20 hover:border-blue-500/40'
    },
    {
      name: 'Alumni',
      description: 'Mentor students and share career opportunities',
      icon: Users,
      onClick: () => {
        console.log('Alumni clicked');
        onAlumniAccess();
        setDropdownOpen(false);
      },
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-500/10 to-emerald-600/10 hover:from-emerald-500/20 hover:to-emerald-600/20',
      borderColor: 'border-emerald-500/20 hover:border-emerald-500/40'
    },
    {
      name: 'College Admin',
      description: 'Manage institutional programs and connect stakeholders',
      icon: Building2,
      onClick: () => {
        console.log('College Admin clicked');
        onCollegeAdminAccess();
        setDropdownOpen(false);
      },
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20',
      borderColor: 'border-purple-500/20 hover:border-purple-500/40'
    }
  ];

  const closeDropdown = () => setDropdownOpen(false);

  // ✅ SMOOTH SCROLL FUNCTION
  const scrollToSection = (href: string) => {
    const targetId = href.substring(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* ✅ THINNER HEADER - Reduced overall height */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${headerStyle.height} ${headerStyle.bgColor} ${headerStyle.backdropFilter} border-b ${headerStyle.borderColor} shadow-xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ REDUCED CONTAINER HEIGHT from h-16 to h-12 */}
          <div className="flex items-center justify-between h-12">
            {/* ✅ SMALLER LOGO */}
            <motion.div 
              className="flex items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              {/* ✅ REDUCED LOGO SIZE from w-10 h-10 to w-8 h-8 */}
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl mr-3 shadow-2xl shadow-purple-500/25 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className={`${headerStyle.logoColor} ${headerStyle.logoSize} font-bold tracking-tight`}>
                NextStep
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)} // ✅ FIXED: Use button with onClick instead of anchor
                  className={`${headerStyle.textColor} hover:text-white transition-all duration-300 text-sm font-medium relative group cursor-pointer`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  style={{
                    fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* ✅ SMALLER GET STARTED BUTTON */}
            <motion.button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`hidden md:flex items-center ${headerStyle.buttonPadding} rounded-xl font-medium transition-all duration-500 ${headerStyle.buttonStyle} text-sm relative`}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500
              }}
            >
              Get Started
              <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* ✅ ENHANCED DROPDOWN */}
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`absolute top-full right-0 mt-3 w-80 ${headerStyle.dropdownBg} ${headerStyle.backdropFilter} rounded-2xl border ${headerStyle.dropdownBorder} shadow-2xl overflow-hidden`}
                style={{ zIndex: 1000 }}
              >
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-3">Choose Your Role</h3>
                  {userTypes.map((userType, index) => (
                    <motion.div
                      key={userType.name}
                      onClick={userType.onClick}
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 bg-gradient-to-r ${userType.bgGradient} border ${userType.borderColor} mb-3 last:mb-0 group`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <userType.icon className={`w-8 h-8 ${userType.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-white transition-colors">
                          {userType.name}
                        </div>
                        <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                          {userType.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${headerStyle.textColor} hover:bg-white/5`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${headerStyle.dropdownBg} ${headerStyle.backdropFilter} border-t ${headerStyle.dropdownBorder}`}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)} // ✅ FIXED: Use scrollToSection for mobile too
                  className="block py-2 text-white hover:text-gray-300 transition-colors font-medium w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile User Types */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-semibold mb-4">Get Started</h3>
                {userTypes.map((userType, index) => (
                  <motion.div
                    key={userType.name}
                    onClick={() => {
                      userType.onClick();
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 bg-gradient-to-r ${userType.bgGradient} border ${userType.borderColor} mb-2 last:mb-0`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <userType.icon className={`w-6 h-6 ${userType.color} mr-3`} />
                    <div>
                      <div className="font-medium text-white text-sm">{userType.name}</div>
                      <div className="text-xs text-gray-300">{userType.description.split(' ').slice(0, 4).join(' ')}...</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Click outside to close dropdown */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdown}
        />
      )}
    </>
  );
};

export default Header;
