import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, Phone, MapPin, Calendar, Building2, GraduationCap, Briefcase, Upload, Globe } from 'lucide-react';
import { Alumni } from '../../App';

interface AlumniRegistrationProps {
  onRegister: (alumni: Alumni) => void;
  onBack: () => void;
}

const AlumniRegistration: React.FC<AlumniRegistrationProps> = ({ onRegister, onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    phone: '',
    city: '',
    college: '',
    graduationYear: '',
    department: '',
    enrollmentNo: '',
    currentCompany: '',
    currentPosition: '',
    experience: '',
    linkedinUrl: '',
    cvFile: null as File | null,
    specializations: [] as string[]
  });

  const [isLoading, setIsLoading] = useState(false);

  const specializationOptions = [
    'Software Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence',
    'Product Management', 'Project Management', 'Digital Marketing', 'Sales & Business Development',
    'Finance & Accounting', 'Human Resources', 'Operations Management', 'Strategy & Consulting',
    'UI/UX Design', 'Graphic Design', 'Content Writing', 'Public Relations',
    'Research & Development', 'Quality Assurance', 'DevOps & Cloud', 'Cybersecurity',
    'Mobile Development', 'Web Development', 'Blockchain', 'Internet of Things',
    'Entrepreneurship', 'Startup Mentoring', 'Career Guidance', 'Interview Preparation'
  ];

  const graduationYears = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 30; year <= currentYear; year++) {
    graduationYears.push(year.toString());
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({ ...prev, cvFile: file }));
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleSpecializationToggle = (specialization: string) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(s => s !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      const newAlumni: Alumni = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age),
        college: formData.college,
        graduationYear: formData.graduationYear,
        department: formData.department,
        phone: formData.phone,
        city: formData.city,
        company: formData.currentCompany,
        position: formData.currentPosition,
        experience: parseInt(formData.experience),
        interests: formData.specializations
      };

      onRegister(newAlumni);
      setIsLoading(false);
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline w-4 h-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline w-4 h-4 mr-1" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your email"
            required
          />
        </div>

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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Create a password"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter your age"
              min="18"
              max="65"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="+91 9876543210"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Current City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your current city"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Background</h2>
        <p className="text-gray-600">Your educational details</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <GraduationCap className="inline w-4 h-4 mr-1" />
            College/University Name
          </label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your college/university name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Graduation Year
          </label>
          <select
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select graduation year</option>
            {graduationYears.reverse().map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department/Stream
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g., Computer Science, Mechanical Engineering"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enrollment/Roll/Registration Number
          </label>
          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your enrollment number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Upload className="inline w-4 h-4 mr-1" />
            Upload CV/Resume (PDF only)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          {formData.cvFile && (
            <p className="text-sm text-emerald-600 mt-2">
              ✓ {formData.cvFile.name} uploaded successfully
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Experience</h2>
        <p className="text-gray-600">Your current work details</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="inline w-4 h-4 mr-1" />
            Current Company/Organization
          </label>
          <input
            type="text"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your current company"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Briefcase className="inline w-4 h-4 mr-1" />
            Current Position/Role
          </label>
          <input
            type="text"
            name="currentPosition"
            value={formData.currentPosition}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your current position"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter years of experience"
            min="0"
            max="50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Globe className="inline w-4 h-4 mr-1" />
            LinkedIn Profile URL (Optional)
          </label>
          <input
            type="url"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Areas of Expertise</h2>
        <p className="text-gray-600">Select areas where you can mentor students</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {specializationOptions.map(specialization => (
          <button
            key={specialization}
            type="button"
            onClick={() => handleSpecializationToggle(specialization)}
            className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              formData.specializations.includes(specialization)
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-300 hover:bg-emerald-50'
            }`}
          >
            {specialization}
          </button>
        ))}
      </div>

      {formData.specializations.length > 0 && (
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h4 className="font-medium text-emerald-800 mb-2">Selected Specializations:</h4>
          <div className="flex flex-wrap gap-2">
            {formData.specializations.map(specialization => (
              <span
                key={specialization}
                className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full"
              >
                {specialization}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-500 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Login
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Join as a Mentor</h1>
          <p className="mt-2 text-gray-600">Share your expertise and guide the next generation</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`w-24 h-1 mx-2 ${
                    step > stepNumber ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-4">
          <div className="flex justify-center space-x-8 text-sm">
            <span className={step === 1 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>Personal</span>
            <span className={step === 2 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>Academic</span>
            <span className={step === 3 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>Professional</span>
            <span className={step === 4 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>Expertise</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow rounded-lg p-6">
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
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Previous
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.age || !formData.phone || !formData.city)) ||
                    (step === 2 && (!formData.college || !formData.graduationYear || !formData.department || !formData.enrollmentNo)) ||
                    (step === 3 && (!formData.currentCompany || !formData.currentPosition || !formData.experience))
                  }
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading || formData.specializations.length === 0}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  {isLoading ? 'Creating Account...' : 'Create Mentor Account'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniRegistration;
