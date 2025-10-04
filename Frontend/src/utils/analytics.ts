// Google Analytics 4 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 measurement ID

// Initialize Google Analytics
export const initGA = () => {
  // Create gtag script
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(gtagScript);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 1,
      ...parameters,
    });
  }
};

// Track user interactions
export const trackUserInteraction = (action: string, element: string, additionalData?: Record<string, any>) => {
  trackEvent('user_interaction', {
    action,
    element,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean, additionalData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    success,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track mentor matching events
export const trackMentorMatching = (matchType: string, success: boolean, additionalData?: Record<string, any>) => {
  trackEvent('mentor_matching', {
    match_type: matchType,
    success,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track verification events
export const trackVerification = (verificationType: string, status: string, additionalData?: Record<string, any>) => {
  trackEvent('verification_process', {
    verification_type: verificationType,
    status,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track referral events
export const trackReferral = (referralStage: string, success: boolean, additionalData?: Record<string, any>) => {
  trackEvent('referral_process', {
    referral_stage: referralStage,
    success,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track dashboard usage
export const trackDashboardUsage = (dashboardType: string, action: string, additionalData?: Record<string, any>) => {
  trackEvent('dashboard_usage', {
    dashboard_type: dashboardType,
    action,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track conversion events
export const trackConversion = (conversionType: string, value?: number, additionalData?: Record<string, any>) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 1,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track feature usage
export const trackFeatureUsage = (featureName: string, action: string, additionalData?: Record<string, any>) => {
  trackEvent('feature_usage', {
    feature_name: featureName,
    action,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Track session duration
export const trackSessionDuration = (startTime: number, endTime: number, additionalData?: Record<string, any>) => {
  const duration = endTime - startTime;
  trackEvent('session_duration', {
    duration_seconds: Math.round(duration / 1000),
    start_time: new Date(startTime).toISOString(),
    end_time: new Date(endTime).toISOString(),
    ...additionalData,
  });
};

// Enhanced tracking for demo interactions
export const trackDemoInteraction = (demoType: string, step: string, additionalData?: Record<string, any>) => {
  trackEvent('demo_interaction', {
    demo_type: demoType,
    step,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};