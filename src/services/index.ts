// src/services/index.ts
import * as aiml from './aimlService';
import * as mock from './mockApi';
import type { StudentProfile } from '../types/aiml';

const USE_MOCK = (import.meta as any).env.VITE_USE_MOCK === 'true';

export async function getMentorMatches(profile: StudentProfile, topK=5){
  if (USE_MOCK) return mock.mockGetMentorMatches(profile, topK);
  return aiml.getMentorMatches(profile, topK);
}

export async function getAlumniProfile(id: string){
  if (USE_MOCK) return mock.mockGetAlumniProfile(id);
  return aiml.getAlumniProfile(id);
}

// expose other wrappers to keep imports consistent
export * from './aimlService';
