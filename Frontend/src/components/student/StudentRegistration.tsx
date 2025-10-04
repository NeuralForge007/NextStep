import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, Phone, MapPin, Calendar, GraduationCap, Building2 } from 'lucide-react';
import { Student } from '../App';

interface StudentRegistrationProps {
  onRegister: (student: Student) => void;
  onBack: () => void;
}

const courses = [
  // Engineering - 4 years
  { name: 'B.Tech Computer Science Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Information Technology', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Electronics and Communication Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Mechanical Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Civil Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Electrical Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Chemical Engineering', duration: 4, category: 'Engineering' },
  { name: 'B.Tech Aerospace Engineering', duration: 4, category: 'Engineering' },

  // Science - 3 years
  { name: 'B.Sc Computer Science', duration: 3, category: 'Science' },
  { name: 'B.Sc Mathematics', duration: 3, category: 'Science' },
  { name: 'B.Sc Physics', duration: 3, category: 'Science' },
  { name: 'B.Sc Chemistry', duration: 3, category: 'Science' },
  { name: 'B.Sc Biology', duration: 3, category: 'Science' },
  { name: 'B.Sc Statistics', duration: 3, category: 'Science' },

  // Commerce - 3 years
  { name: 'B.Com (Honours)', duration: 3, category: 'Commerce' },
  { name: 'B.Com (General)', duration: 3, category: 'Commerce' },
  { name: 'BBA (Bachelor of Business Administration)', duration: 3, category: 'Commerce' },
  { name: 'BCA (Bachelor of Computer Applications)', duration: 3, category: 'Computer Applications' },

  // Arts - 3 years
  { name: 'B.A English', duration: 3, category: 'Arts' },
  { name: 'B.A Psychology', duration: 3, category: 'Arts' },
  { name: 'B.A Economics', duration: 3, category: 'Arts' },
  { name: 'B.A Political Science', duration: 3, category: 'Arts' },
  { name: 'B.A History', duration: 3, category: 'Arts' },

  // Medical - Variable
  { name: 'MBBS', duration: 5, category: 'Medical' },
  { name: 'BDS', duration: 4, category: 'Medical' },
  { name: 'B.Pharma', duration: 4, category: 'Medical' },
  { name: 'BAMS', duration: 5, category: 'Medical' },
  { name: 'BHMS', duration: 5, category: 'Medical' },

  // Law - 3/5 years
  { name: 'LLB (3 Year)', duration: 3, category: 'Law' },
  { name: 'BA LLB (5 Year)', duration: 5, category: 'Law' },
  { name: 'BBA LLB (5 Year)', duration: 5, category: 'Law' },

  // Master's Programs - 2 years
  { name: 'M.Tech Computer Science', duration: 2, category: 'Masters - Engineering' },
  { name: 'M.Tech Information Technology', duration: 2, category: 'Masters - Engineering' },
  { name: 'MBA', duration: 2, category: 'Masters - Management' },
  { name: 'MCA', duration: 2, category: 'Masters - Computer Applications' },
  { name: 'M.Sc Computer Science', duration: 2, category: 'Masters - Science' },
  { name: 'M.Com', duration: 2, category: 'Masters - Commerce' },
  { name: 'M.A Economics', duration: 2, category: 'Masters - Arts' },
  { name: 'M.A English', duration: 2, category: 'Masters - Arts' },
];

const getYearOptions = (duration: number) => {
  const options = ['New Student (About to Start)'];
  for (let i = 1; i <= duration; i++) {
    const suffix = i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th';
    options.push(`${i}${suffix} Year`);
  }
  return options;
};

const StudentRegistration: React.FC<StudentRegistrationProps> = ({ onRegister, onBack }) => {
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
    department: '',
    course: '',
    year: '',
    interests: [] as string[]
  });
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const skillOptions = [
    'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
    'Artificial Intelligence', 'Blockchain', 'Cloud Computing', 'DevOps',
    'UI/UX Design', 'Cybersecurity', 'Internet of Things', 'Robotics',
    'Game Development', 'Digital Marketing', 'Content Writing', 'Photography',
    'Video Editing', 'Graphic Design', 'Public Speaking', 'Leadership'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'course') {
      const course = courses.find(c => c.name === value);
      setSelectedCourse(course);
      setFormData(prev => ({ ...prev, year: '' }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
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
      const newStudent: Student = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age),
        college: formData.college,
        department: formData.department,
        course: formData.course,
        year: formData.year,
        phone: formData.phone,
        city: formData.city,
        interests: formData.interests
      };

      onRegister(newStudent);
      setIsLoading(false);
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
        <p className="text-sm text-gray-600 mt-1">Let's start with your basic details</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <div className="mt-1 relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Create password"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm password"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="number"
                name="age"
                required
                min="16"
                max="35"
                value={formData.age}
                onChange={handleInputChange}
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your age"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="mt-1 relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="+91 9876543210"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <div className="mt-1 relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your city"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Academic Information</h3>
        <p className="text-sm text-gray-600 mt-1">Tell us about your studies</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">College/University Name</label>
          <div className="mt-1 relative">
            <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="college"
              required
              value={formData.college}
              onChange={handleInputChange}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your college/university name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course/Degree</label>
          <div className="mt-1 relative">
            <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleInputChange}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select your course</option>
              {Object.entries(
                courses.reduce((acc, course) => {
                  if (!acc[course.category]) acc[course.category] = [];
                  acc[course.category].push(course);
                  return acc;
                }, {} as Record<string, typeof courses>)
              ).map(([category, coursesInCategory]) => (
                <optgroup key={category} label={category}>
                  {coursesInCategory.map(course => (
                    <option key={course.name} value={course.name}>
                      {course.name} ({course.duration} years)
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        {selectedCourse && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Academic Year</label>
            <select
              name="year"
              required
              value={formData.year}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select your current year</option>
              {getYearOptions(selectedCourse.duration).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Department/Specialization</label>
          <input
            type="text"
            name="department"
            required
            value={formData.department}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Computer Science, Electronics, etc."
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Interests & Skills</h3>
        <p className="text-sm text-gray-600 mt-1">Select your areas of interest (select multiple)</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skillOptions.map(skill => (
          <button
            key={skill}
            type="button"
            onClick={() => handleInterestToggle(skill)}
            className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              formData.interests.includes(skill)
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {formData.interests.length > 0 && (
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-800 mb-2">Selected Interests:</p>
          <div className="flex flex-wrap gap-2">
            {formData.interests.map(interest => (
              <span key={interest} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs">
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl w-full relative">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </button>

          <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join our community of students and mentors
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= stepNumber ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > stepNumber ? 'bg-indigo-600' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Basic Info</span>
            <span>Academic</span>
            <span>Interests</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Previous
                </button>
              )}

              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.age || !formData.phone || !formData.city)) ||
                      (step === 2 && (!formData.college || !formData.course || !formData.year || !formData.department))
                    }
                    className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || formData.interests.length === 0}
                    className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;