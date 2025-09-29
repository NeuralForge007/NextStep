import React, { useState } from 'react';
import { ArrowLeft, Building, User, Mail, Lock, Phone, MapPin, Calendar, Shield, Upload, Globe, Users, GraduationCap } from 'lucide-react';
import { CollegeAdmin } from '../../App';

interface CollegeAdminRegistrationProps {
  onRegister: (collegeAdmin: CollegeAdmin) => void;
  onLogin: () => void;
  onBack: () => void;
}

const CollegeAdminRegistration: React.FC<CollegeAdminRegistrationProps> = ({ onRegister, onLogin, onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Admin Details
    adminName: '',
    adminEmail: '',
    adminPhone: '',
    adminPosition: '',
    password: '',
    confirmPassword: '',
    
    // College Details
    collegeName: '',
    collegeCode: '',
    collegeType: '',
    establishedYear: '',
    website: '',
    
    // Location
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Academic Info
    accreditation: [] as string[],
    departments: [] as string[],
    totalStudents: '',
    totalFaculty: '',
    
    // Documents
    registrationCertificate: null as File | null,
    accreditationDoc: null as File | null
  });

  const [isLoading, setIsLoading] = useState(false);

  const collegeTypes = [
    'Government University',
    'Private University',
    'Deemed University',
    'State University',
    'Central University',
    'Institute of National Importance',
    'Autonomous College',
    'Government College',
    'Private College'
  ];

  const accreditationOptions = [
    'NAAC A++', 'NAAC A+', 'NAAC A', 'NAAC B++', 'NAAC B+', 'NAAC B',
    'NBA Accredited', 'NIRF Ranked', 'UGC Recognized', 'AICTE Approved',
    'ISO Certified', 'ABET Accredited'
  ];

  const departmentOptions = [
    'Computer Science & Engineering', 'Information Technology', 'Electronics & Communication',
    'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering',
    'Chemical Engineering', 'Aerospace Engineering', 'Biotechnology',
    'Applied Sciences', 'Mathematics', 'Physics', 'Chemistry',
    'Management Studies', 'Business Administration', 'Commerce',
    'Liberal Arts', 'Design', 'Architecture', 'Law'
  ];

  const adminPositions = [
    'Vice Chancellor', 'Registrar', 'Dean', 'Associate Dean', 'Director',
    'Head of Department', 'Dean of Student Affairs', 'Academic Officer',
    'Administrative Officer', 'Placement Officer'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({ ...prev, [fieldName]: file }));
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleArrayToggle = (item: string, fieldName: 'accreditation' | 'departments') => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: prev[fieldName].includes(item)
        ? prev[fieldName].filter(i => i !== item)
        : [...prev[fieldName], item]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      const newCollegeAdmin: CollegeAdmin = {
        id: Date.now().toString(),
        name: formData.adminName,
        email: formData.adminEmail,
        phone: formData.adminPhone,
        position: formData.adminPosition,
        collegeId: formData.collegeCode + Date.now(),
        collegeName: formData.collegeName,
        collegeCode: formData.collegeCode,
        collegeType: formData.collegeType,
        establishedYear: formData.establishedYear,
        location: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        },
        accreditation: formData.accreditation,
        departments: formData.departments,
        totalStudents: parseInt(formData.totalStudents),
        totalFaculty: parseInt(formData.totalFaculty),
        website: formData.website
      };

      onRegister(newCollegeAdmin);
      setIsLoading(false);
    }, 3000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Information</h2>
        <p className="text-gray-600">Your personal details as the college administrator</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline w-4 h-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline w-4 h-4 mr-1" />
            Official Email Address
          </label>
          <input
            type="email"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="admin@college.edu"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              name="adminPhone"
              value={formData.adminPhone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Position/Designation
            </label>
            <select
              name="adminPosition"
              value={formData.adminPosition}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select your position</option>
              {adminPositions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Lock className="inline w-4 h-4 mr-1" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a strong password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Lock className="inline w-4 h-4 mr-1" />
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">College Information</h2>
        <p className="text-gray-600">Basic details about your institution</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="inline w-4 h-4 mr-1" />
            College/University Name
          </label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter full college name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              College Code/ID
            </label>
            <input
              type="text"
              name="collegeCode"
              value={formData.collegeCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., IITD, DTU, etc."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institution Type
            </label>
            <select
              name="collegeType"
              value={formData.collegeType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select institution type</option>
              {collegeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Established Year
            </label>
            <input
              type="number"
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 1961"
              min="1800"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Globe className="inline w-4 h-4 mr-1" />
              Website (Optional)
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://college.edu"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Location Details</h2>
        <p className="text-gray-600">College address and location information</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Complete Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter complete college address"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="City"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="State"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pincode"
              pattern="[0-9]{6}"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Information</h2>
        <p className="text-gray-600">Details about departments, accreditation, and strength</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Shield className="inline w-4 h-4 mr-1" />
            Accreditation & Rankings
          </label>
          <div className="flex flex-wrap gap-2">
            {accreditationOptions.map(acc => (
              <button
                key={acc}
                type="button"
                onClick={() => handleArrayToggle(acc, 'accreditation')}
                className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  formData.accreditation.includes(acc)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {acc}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <GraduationCap className="inline w-4 h-4 mr-1" />
            Departments Available
          </label>
          <div className="flex flex-wrap gap-2">
            {departmentOptions.map(dept => (
              <button
                key={dept}
                type="button"
                onClick={() => handleArrayToggle(dept, 'departments')}
                className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  formData.departments.includes(dept)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-1" />
              Total Students
            </label>
            <input
              type="number"
              name="totalStudents"
              value={formData.totalStudents}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Total student count"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Faculty
            </label>
            <input
              type="number"
              name="totalFaculty"
              value={formData.totalFaculty}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Total faculty count"
              min="1"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Upload className="inline w-4 h-4 mr-1" />
              Registration Certificate (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, 'registrationCertificate')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {formData.registrationCertificate && (
              <p className="text-sm text-blue-600 mt-1">✓ Certificate uploaded</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Upload className="inline w-4 h-4 mr-1" />
              Accreditation Document (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, 'accreditationDoc')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {formData.accreditationDoc && (
              <p className="text-sm text-blue-600 mt-1">✓ Document uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Login
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Register Your Institution</h1>
          <p className="mt-2 text-gray-600">Join NextStep to manage your college's mentorship program</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`w-32 h-1 mx-2 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <div className="flex justify-center space-x-8 text-sm">
            <span className={step === 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Admin Details</span>
            <span className={step === 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}>College Info</span>
            <span className={step === 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Location</span>
            <span className={step === 4 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Academic Info</span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Previous
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!formData.adminName || !formData.adminEmail || !formData.adminPhone || !formData.adminPosition || !formData.password || !formData.confirmPassword)) ||
                    (step === 2 && (!formData.collegeName || !formData.collegeCode || !formData.collegeType || !formData.establishedYear)) ||
                    (step === 3 && (!formData.address || !formData.city || !formData.state || !formData.pincode))
                  }
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading || formData.departments.length === 0}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  {isLoading ? 'Registering Institution...' : 'Register Institution'}
                </button>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={onLogin}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeAdminRegistration;
