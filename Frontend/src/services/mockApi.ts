// src/services/mockApi.ts
import type { StudentProfile, MatchResult, AlumniProfile } from '../types/aiml';

function sleep(ms=500){ return new Promise(r=>setTimeout(r, ms)); }

const sampleAlumni: AlumniProfile[] = [
  {
    id: 'al-1',
    name: 'Dr. Asha Menon',
    title: 'Principal Engineer',
    company: 'TechNova',
    skills: ['Machine Learning','MLOps','Python'],
    experienceYears: 8,
    location: 'Bengaluru',
    verified: true,
    bio: 'Sent from a startup to ML in enterprise.'
  },
  {
    id: 'al-2',
    name: 'Rohit Sharma',
    title: 'Data Scientist',
    company: 'Capitron',
    skills: ['Data Science','Pandas','TensorFlow','NLP'],
    experienceYears: 5,
    location: 'Mumbai',
    verified: true
  },
  {
    id: 'al-3',
    name: 'Priya Kapoor',
    title: 'Engineering Manager',
    company: 'BuildIt',
    skills: ['Product','Leadership','React','Node.js'],
    experienceYears: 10,
    location: 'Chennai',
    verified: false
  }
];

export async function mockGetMentorMatches(profile: StudentProfile, topK=5): Promise<MatchResult[]> {
  await sleep(650);
  // naive matching: count overlapping skills
  const profSkills = (profile.skills || []).map(s=>s.toLowerCase());
  const results = sampleAlumni.map(al => {
    const common = al.skills.filter(s => profSkills.includes(s.toLowerCase()));
    const score = Math.min(1, (common.length / Math.max(1, al.skills.length)) + (Math.min(10, (al.experienceYears||0)) / 100));
    return {
      alumni: al,
      score,
      reason: `Matched on ${common.length} skills: ${common.join(', ') || 'none'}`
    };
  });
  return results.sort((a,b)=>b.score - a.score).slice(0, topK);
}

export async function mockGetAlumniProfile(id: string){
  await sleep(300);
  return sampleAlumni.find(a=>a.id===id) ?? null;
}
