import React, { useState } from 'react';
import { Shield, CheckCircle, AlertCircle, FileCheck, Clock, Award } from 'lucide-react';

const VerificationSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVerifying, setIsVerifying] = useState(false);

  const verificationSteps = [
    {
      id: 1,
      title: "Document Upload",
      description: "Upload academic transcripts, certificates, and achievements",
      icon: FileCheck,
      status: "completed"
    },
    {
      id: 2,
      title: "Blockchain Recording",
      description: "Create immutable record on secure blockchain network",
      icon: Shield,
      status: "processing"
    },
    {
      id: 3,
      title: "AI Verification",
      description: "Advanced AI algorithms verify document authenticity",
      icon: CheckCircle,
      status: "pending"
    },
    {
      id: 4,
      title: "Profile Activation",
      description: "Verified profile goes live with trust badges",
      icon: Award,
      status: "pending"
    }
  ];

  const beforeAfterComparison = [
    {
      title: "Profile Visibility",
      before: "Limited reach",
      after: "Top search results",
      beforeScore: 30,
      afterScore: 95
    },
    {
      title: "Trust Score",
      before: "Unverified",
      after: "Blockchain verified",
      beforeScore: 20,
      afterScore: 100
    },
    {
      title: "Connection Rate",
      before: "15% response",
      after: "85% response",
      beforeScore: 15,
      afterScore: 85
    },
    {
      title: "Opportunity Access",
      before: "Basic listings",
      after: "Premium opportunities",
      beforeScore: 25,
      afterScore: 90
    }
  ];

  const handleStartVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setActiveStep(2);
    }, 2000);
  };

  return (
    <section id="verification" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Blockchain Verification System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trust Through Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our blockchain-powered verification system ensures every achievement, degree, and certification is authentic and tamper-proof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Verification Process */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Verification Process</h3>
              
              <div className="space-y-6">
                {verificationSteps.map((step) => {
                  const IconComponent = step.icon;
                  const isActive = step.id === activeStep;
                  const isCompleted = step.id < activeStep;
                  const isProcessing = step.id === activeStep && isVerifying;
                  
                  return (
                    <div
                      key={step.id}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-emerald-500 text-white' 
                          : isActive
                            ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-500'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isProcessing ? (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-600"></div>
                        ) : (
                          <IconComponent className="w-6 h-6" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-1 ${
                          isActive ? 'text-emerald-900' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm ${
                          isActive ? 'text-emerald-700' : 'text-gray-600'
                        }`}>
                          {step.description}
                        </p>
                        
                        {isCompleted && (
                          <div className="flex items-center mt-2 text-emerald-600 text-sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Completed
                          </div>
                        )}
                        
                        {isProcessing && (
                          <div className="flex items-center mt-2 text-emerald-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            Processing...
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button
                onClick={handleStartVerification}
                disabled={isVerifying}
                className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? 'Verifying...' : 'Start Verification Process'}
              </button>
            </div>

            {/* Blockchain Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tamper-Proof Records</h4>
                    <p className="text-sm text-gray-600">Immutable verification history</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Verification</h4>
                    <p className="text-sm text-gray-600">Real-time credential checking</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Recognition</h4>
                    <p className="text-sm text-gray-600">Accepted worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before vs After Comparison */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact of Verification</h3>
              
              <div className="space-y-6">
                {beforeAfterComparison.map((metric, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-3">{metric.title}</h4>
                    
                    {/* Before */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Before: {metric.before}</span>
                      <span className="text-sm text-red-600">{metric.beforeScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="bg-red-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metric.beforeScore}%` }}
                      ></div>
                    </div>
                    
                    {/* After */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">After: {metric.after}</span>
                      <span className="text-sm text-emerald-600">{metric.afterScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 delay-500"
                        style={{ width: `${metric.afterScore}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Security Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">256-bit</div>
                  <div className="text-sm text-blue-100">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">ISO</div>
                  <div className="text-sm text-blue-100">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">GDPR</div>
                  <div className="text-sm text-blue-100">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Universities</h4>
              <p className="text-2xl font-bold text-blue-600">500+</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Corporations</h4>
              <p className="text-2xl font-bold text-emerald-600">1000+</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Verified Users</h4>
              <p className="text-2xl font-bold text-purple-600">50K+</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Fraud Prevented</h4>
              <p className="text-2xl font-bold text-orange-600">99.8%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSystem;