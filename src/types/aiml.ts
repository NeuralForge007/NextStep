// src/types/aiml.ts

export interface StudentProfile {
  id?: string;
  name?: string;
  email?: string;
  careerGoal?: string;
  skills?: string[];     // normalized array
  experienceYears?: number;
  location?: string;
  preferences?: Record<string, any>;
}

export interface AlumniProfile {
  id: string;
  name: string;
  title?: string;
  company?: string;
  skills: string[];
  experienceYears?: number;
  location?: string;
  verified?: boolean;
  bio?: string;
  contactHint?: string;
}

export interface MatchResult {
  alumni: AlumniProfile;
  score: number; // 0..1 similarity
  reason?: string; // optional explanation or LLM-generated note
}

export interface ReferralRecord {
  id?: string;
  studentId: string;
  alumniId: string;
  timestamp?: string;
  status?: 'requested' | 'accepted' | 'rejected' | 'completed';
  notes?: string;
}
