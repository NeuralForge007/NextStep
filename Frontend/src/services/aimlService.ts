// src/services/aimlService.ts
import { request } from '../utils/apiClient';
import type { StudentProfile, MatchResult, AlumniProfile, ReferralRecord } from '../types/aiml';

const API_PREFIX = '/api/aiml'; // backend should mount AIML endpoints under this path (ask Cursor AI to confirm/adjust)

/**
 * Get top mentor matches for a student profile.
 * Backend responsibilities:
 *  - run embedding search (Pinecone)
 *  - apply TensorFlow ranking model
 *  - optionally call OpenAI for explanation / personalized text
 */
export async function getMentorMatches(profile: StudentProfile, topK = 5): Promise<MatchResult[]> {
  return request<MatchResult[]>(`${API_PREFIX}/match-student`, {
    method: 'POST',
    body: { profile, topK }
  });
}

/** Get a single alumni profile by ID */
export async function getAlumniProfile(alumniId: string): Promise<AlumniProfile> {
  return request<AlumniProfile>(`${API_PREFIX}/alumni/${encodeURIComponent(alumniId)}`, { method: 'GET' });
}

/** Verify an alumni (trigger backend verification action) */
export async function verifyAlumni(alumniId: string): Promise<{ success: boolean; message?: string }> {
  return request(`${API_PREFIX}/verify-alumni`, {
    method: 'POST',
    body: { alumniId }
  });
}

/** Track a referral between a student and an alumni */
export async function trackReferral(record: ReferralRecord): Promise<ReferralRecord> {
  return request<ReferralRecord>(`${API_PREFIX}/track-referral`, {
    method: 'POST',
    body: record
  });
}

/** Send feedback about a match (used for improving ranking) */
export async function sendMatchFeedback(matchId: string, feedback: { rating: number; comment?: string }) {
  return request(`${API_PREFIX}/match-feedback`, {
    method: 'POST',
    body: { matchId, feedback }
  });
}
// src/services/aimlService.ts
import { request } from '../utils/apiClient';
import type { StudentProfile, MatchResult, AlumniProfile, ReferralRecord } from '../types/aiml';

const API_PREFIX = '/api/aiml'; // backend should mount AIML endpoints under this path (ask Cursor AI to confirm/adjust)

/**
 * Get top mentor matches for a student profile.
 * Backend responsibilities:
 *  - run embedding search (Pinecone)
 *  - apply TensorFlow ranking model
 *  - optionally call OpenAI for explanation / personalized text
 */
export async function getMentorMatches(profile: StudentProfile, topK = 5): Promise<MatchResult[]> {
  return request<MatchResult[]>(`${API_PREFIX}/match-student`, {
    method: 'POST',
    body: { profile, topK }
  });
}

/** Get a single alumni profile by ID */
export async function getAlumniProfile(alumniId: string): Promise<AlumniProfile> {
  return request<AlumniProfile>(`${API_PREFIX}/alumni/${encodeURIComponent(alumniId)}`, { method: 'GET' });
}

/** Verify an alumni (trigger backend verification action) */
export async function verifyAlumni(alumniId: string): Promise<{ success: boolean; message?: string }> {
  return request(`${API_PREFIX}/verify-alumni`, {
    method: 'POST',
    body: { alumniId }
  });
}

/** Track a referral between a student and an alumni */
export async function trackReferral(record: ReferralRecord): Promise<ReferralRecord> {
  return request<ReferralRecord>(`${API_PREFIX}/track-referral`, {
    method: 'POST',
    body: record
  });
}

/** Send feedback about a match (used for improving ranking) */
export async function sendMatchFeedback(matchId: string, feedback: { rating: number; comment?: string }) {
  return request(`${API_PREFIX}/match-feedback`, {
    method: 'POST',
    body: { matchId, feedback }
  });
}
