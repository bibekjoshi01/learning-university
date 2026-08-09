export interface School {
  slug: string;
  index: string;
  icon: string;
  name: string;
  shortName: string;
  purpose: string;
  audience: string;
  opportunities: string;
  philosophy: string;
  roleSlugs: string[];
}

export interface RoleGuidance {
  prerequisites: string[];
  academics: string[];
}

export interface CareerRole {
  slug: string;
  schoolSlug: string;
  name: string;
  summary: string;
  duration: string;
  difficulty: string;
  projectCount: number;
  outcomes: string[];
  courseSlugs: string[];
}

export interface SkillCourse {
  slug: string;
  name: string;
  summary: string;
  duration: string;
  learningOutcomes: string[];
  syllabus: string[];
}
