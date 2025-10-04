import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ReferralEngine from './components/ReferralEngine';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StudentLogin from './components/student/StudentLogin';
import AlumniLogin from './components/alumni/AlumniLogin';
import CollegeAdminLogin from './components/college/CollegeAdminLogin';
import StudentRegistration from './components/student/StudentRegistration';
import AlumniRegistration from './components/alumni/AlumniRegistration';
import CollegeAdminRegistration from './components/college/CollegeAdminRegistration';
import StudentDashboard from './components/student/StudentDashboard';
import AlumniDashboard from './components/alumni/AlumniDashboard';
import CollegeAdminDashboard from './components/college/CollegeAdminDashboard';

// ✅ COMPLETE INTERFACES FOR EACH ROLE

export interface Student {
  id: string;
  name: string;
  email: string;
  role: 'student';
  profileImage?: string;
  institution?: string;
  college?: string;
  course?: string;
  year?: string;
  branch?: string;
  skills?: string[];
  age?: number;
  department?: string;
  phone?: string;
  city?: string;
  interests?: string[];
}

export interface Alumni {
  id: string;
  name: string;
  email: string;
  role: 'alumni';
  profileImage?: string;
  institution?: string;
  college?: string;
  graduationYear?: number;
  company?: string;
  position?: string;
  experience?: number;
  skills?: string[];
  industry?: string;
  location?: string;
  achievements?: string[];
  age?: number;
  department?: string;
  phone?: string;
  city?: string;
  interests?: string[];
}

export interface CollegeAdmin {
  id: string;
  name: string;
  email: string;
  role: 'admin';
  profileImage?: string;
  institution?: string;
  college?: string;
  collegeName?: string;
  collegeCode?: string;
  collegeType?: string;
  establishedYear?: string;
  location?: {
    city: string;
    state: string;
  };
  accreditation?: string[];
  totalStudents?: number;
  department?: string;
  position?: string;
  permissions?: string[];
  managedPrograms?: string[];
}

export type User = Student | Alumni | CollegeAdmin;

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Navigation handlers
  const handleStudentAccess = () => {
    setCurrentView('student-login');
  };

  const handleAlumniAccess = () => {
    setCurrentView('alumni-login');
  };

  const handleCollegeAdminAccess = () => {
    setCurrentView('admin-login');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentUser(null);
  };

  // Registration handlers
  const handleStudentRegister = () => {
    setCurrentView('student-registration');
  };

  const handleAlumniRegister = () => {
    setCurrentView('alumni-registration');
  };

  const handleCollegeAdminRegister = () => {
    setCurrentView('admin-registration');
  };

  // Login handlers
  const handleStudentLogin = (student: Student) => {
    console.log('✅ Student login successful:', student);
    setCurrentUser(student);
    setCurrentView('student-dashboard');
  };

  const handleAlumniLogin = (alumni: Alumni) => {
    console.log('✅ Alumni login successful:', alumni);
    setCurrentUser(alumni);
    setCurrentView('alumni-dashboard');
  };

  const handleCollegeAdminLogin = (admin: CollegeAdmin) => {
    console.log('✅ College Admin login successful:', admin);
    setCurrentUser(admin);
    setCurrentView('admin-dashboard');
  };

  // Registration success handlers
  const handleStudentRegistrationSuccess = (student: Student) => {
    console.log('✅ Student registration successful:', student);
    setCurrentUser(student);
    setCurrentView('student-dashboard');
  };

  const handleAlumniRegistrationSuccess = (alumni: Alumni) => {
    console.log('✅ Alumni registration successful:', alumni);
    setCurrentUser(alumni);
    setCurrentView('alumni-dashboard');
  };

  const handleCollegeAdminRegistrationSuccess = (admin: CollegeAdmin) => {
    console.log('✅ College Admin registration successful:', admin);
    setCurrentUser(admin);
    setCurrentView('admin-dashboard');
  };

  const handleLogout = () => {
    console.log('🔐 User logged out');
    setCurrentUser(null);
    setCurrentView('home');
  };

  // Debug logging
  console.log('🔍 Current view:', currentView);
  console.log('👤 Current user:', currentUser?.name || 'None');

  // Render based on current view
  switch (currentView) {
    case 'student-login':
      return (
        <StudentLogin 
          onLogin={handleStudentLogin}
          onBackToHome={handleBackToHome}
          onRegister={handleStudentRegister}
        />
      );

    case 'alumni-login':
      return (
        <AlumniLogin 
          onLogin={handleAlumniLogin}
          onBackToHome={handleBackToHome}
          onRegister={handleAlumniRegister}
        />
      );

    case 'admin-login':
      return (
        <CollegeAdminLogin 
          onLogin={handleCollegeAdminLogin}
          onBackToHome={handleBackToHome}
          onRegister={handleCollegeAdminRegister}
        />
      );

    case 'student-registration':
      return (
        <StudentRegistration 
          onRegistrationSuccess={handleStudentRegistrationSuccess}
          onBackToLogin={() => setCurrentView('student-login')}
          onBackToHome={handleBackToHome}
        />
      );

    case 'alumni-registration':
      return (
        <AlumniRegistration 
          onRegistrationSuccess={handleAlumniRegistrationSuccess}
          onBackToLogin={() => setCurrentView('alumni-login')}
          onBackToHome={handleBackToHome}
        />
      );

    case 'admin-registration':
      return (
        <CollegeAdminRegistration 
          onRegistrationSuccess={handleCollegeAdminRegistrationSuccess}
          onBackToLogin={() => setCurrentView('admin-login')}
          onBackToHome={handleBackToHome}
        />
      );

    case 'student-dashboard':
      if (!currentUser || currentUser.role !== 'student') {
        console.log('⚠️ Invalid student user, redirecting to login');
        setTimeout(() => {
          setCurrentView('student-login');
          setCurrentUser(null);
        }, 2000);
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-white text-lg">Redirecting to login...</p>
            </div>
          </div>
        );
      }
      return (
        <StudentDashboard 
          user={currentUser as Student}
          onLogout={handleLogout}
        />
      );

    case 'alumni-dashboard':
      if (!currentUser || currentUser.role !== 'alumni') {
        console.log('⚠️ Invalid alumni user, redirecting to login');
        setTimeout(() => {
          setCurrentView('alumni-login');
          setCurrentUser(null);
        }, 2000);
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-white text-lg">Redirecting to login...</p>
            </div>
          </div>
        );
      }
      return (
        <AlumniDashboard 
          user={currentUser as Alumni}
          onLogout={handleLogout}
        />
      );

    case 'admin-dashboard':
      if (!currentUser || currentUser.role !== 'admin') {
        console.log('⚠️ Invalid admin user, redirecting to login');
        setTimeout(() => {
          setCurrentView('admin-login');
          setCurrentUser(null);
        }, 2000);
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-white text-lg">Redirecting to login...</p>
            </div>
          </div>
        );
      }
      return (
        <CollegeAdminDashboard 
          user={currentUser as CollegeAdmin}
          onLogout={handleLogout}
        />
      );

    default:
      // Home page
      return (
        <>
          <Header 
            onStudentAccess={handleStudentAccess}
            onAlumniAccess={handleAlumniAccess}
            onCollegeAdminAccess={handleCollegeAdminAccess}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Hero />
          <Features />
          <ReferralEngine />
          <Testimonials />
          <FAQ />
          <Footer />
        </>
      );
  }
}

export default App;
