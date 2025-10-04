import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "For Students", href: "#students" },
        { name: "For Alumni", href: "#alumni" },
        { name: "For Colleges", href: "#colleges" },
        { name: "For Recruiters", href: "#recruiters" },
        { name: "Verification", href: "#verification" },
        { name: "Analytics", href: "#analytics" }
      ]
    },
    {
      title: "Features",
      links: [
        { name: "AI Matching", href: "#ai-matching" },
        { name: "Hackathon Hub", href: "#hackathon" },
        { name: "Referral Engine", href: "#referrals" },
        { name: "Blockchain Verification", href: "#blockchain" },
        { name: "Career Tracking", href: "#career" },
        { name: "Video Mentoring", href: "#video" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "FAQ", href: "#faq" },
        { name: "API Documentation", href: "#api" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Security", href: "#security" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "#twitter",
      color: "from-purple-400 to-cyan-400",
      hoverColor: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#linkedin",
      color: "from-violet-400 to-purple-500",
      hoverColor: "hover:text-violet-400"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#github",
      color: "from-fuchsia-400 to-purple-600",
      hoverColor: "hover:text-fuchsia-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#instagram",
      color: "from-pink-400 to-purple-500",
      hoverColor: "hover:text-pink-400"
    }
  ];

  const stats = [
    {
      value: "50K+",
      label: "Active Users",
      color: "from-purple-400 to-cyan-400"
    },
    {
      value: "500+",
      label: "Partner Colleges",
      color: "from-violet-400 to-purple-500"
    },
    {
      value: "10K+",
      label: "Successful Placements",
      color: "from-fuchsia-400 to-purple-600"
    },
    {
      value: "99.8%",
      label: "Uptime",
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 overflow-hidden">
      {/* Dark Neon Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-purple-950/30 to-indigo-950/50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Neon Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/50">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted Worldwide
              </h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
                Join a growing community of students and professionals building meaningful connections
              </p>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden text-center p-8 rounded-2xl bg-gradient-to-br from-black/40 via-purple-950/50 to-indigo-950/40 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10 group"
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Neon glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-purple-200 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-6 py-16 sm:px-8 lg:px-12 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 rounded-xl mr-3 shadow-lg shadow-purple-500/50"></div>
                    NextStep
                  </h3>
                  <p className="text-purple-200 mb-8 max-w-md leading-relaxed">
                    Our platform leverages cutting-edge technology to create meaningful, verified connections that drive career success in the digital age.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center text-purple-200 hover:text-purple-100 transition-colors">
                      <div className="w-10 h-10 bg-black/30 border border-purple-500/20 rounded-xl flex items-center justify-center mr-3">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm">contact@nextstep.edu</span>
                    </div>
                    <div className="flex items-center text-purple-200 hover:text-purple-100 transition-colors">
                      <div className="w-10 h-10 bg-black/30 border border-purple-500/20 rounded-xl flex items-center justify-center mr-3">
                        <Phone className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center text-purple-200 hover:text-purple-100 transition-colors">
                      <div className="w-10 h-10 bg-black/30 border border-purple-500/20 rounded-xl flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-6 relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-purple-200 hover:text-purple-100 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Social Links & Copyright */}
            <div className="border-t border-purple-500/20 pt-12 mt-16">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-8 md:mb-0">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="relative group p-4 rounded-xl bg-black/30 border border-purple-500/20 shadow-lg text-purple-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Neon glow on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>
                      <social.icon className="w-5 h-5 relative z-10" />
                    </motion.a>
                  ))}
                </div>
                
                <div className="text-center md:text-right">
                  <p className="text-purple-300 text-sm mb-3 max-w-md leading-relaxed">
                    Join thousands of students and professionals who are already building their success stories with NextStep.
                  </p>
                  <p className="text-purple-400/70 text-sm flex items-center justify-center md:justify-end">
                    <span>© 2025 NextStep. All rights reserved.</span>
                    <div className="ml-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
