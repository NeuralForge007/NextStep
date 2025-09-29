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
  const [currentView, setCurrentView] = useState('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setCurrentUser(student);
    setCurrentView('student-dashboard');
  };

  const handleAlumniLogin = (alumni: Alumni) => {
    setCurrentUser(alumni);
    setCurrentView('alumni-dashboard');
  };

  const handleCollegeAdminLogin = (admin: CollegeAdmin) => {
    setCurrentUser(admin);
    setCurrentView('admin-dashboard');
  };

  // Registration success handlers
  const handleStudentRegistrationSuccess = (student: Student) => {
    setCurrentUser(student);
    setCurrentView('student-dashboard');
  };

  const handleAlumniRegistrationSuccess = (alumni: Alumni) => {
    setCurrentUser(alumni);
    setCurrentView('alumni-dashboard');
  };

  const handleCollegeAdminRegistrationSuccess = (admin: CollegeAdmin) => {
    setCurrentUser(admin);
    setCurrentView('admin-dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('home');
  };

  // Switch statement
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
      return currentUser && currentUser.role === 'student' ? (
        <StudentDashboard
          student={currentUser as Student}
          onLogout={handleLogout}
        />
      ) : (
        <div>Loading...</div>
      );

    case 'alumni-dashboard':
      return currentUser && currentUser.role === 'alumni' ? (
        <AlumniDashboard
          alumni={currentUser as Alumni}
          onLogout={handleLogout}
        />
      ) : (
        <div>Loading...</div>
      );

    case 'admin-dashboard':
      return currentUser && currentUser.role === 'admin' ? (
        <CollegeAdminDashboard
          admin={currentUser as CollegeAdmin}
          onLogout={handleLogout}
        />
      ) : (
        <div>Loading...</div>
      );

    default:
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
