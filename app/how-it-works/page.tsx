import InfoPage from '@/components/InfoPage';

export const metadata = {
  title: 'How It Works — Tabflux',
  description: 'How Tabflux turns a career goal into a structured learning roadmap.',
};

export default function HowItWorksPage() {
  return <InfoPage
    eyebrow="Academy / How it works"
    title={<>One destination.<br/>A clear route there.</>}
    copy="Tabflux organizes learning around the work you want to do, so every course and project has a purpose."
    sections={[
      { title: 'Choose a School and role', copy: 'Start with a field, compare the roles inside it, and select the career outcome that matches your interests and experience.' },
      { title: 'Follow the roadmap', copy: 'Complete Skill Courses in sequence. Each one builds a capability required by your chosen role.' },
      { title: 'Build evidence', copy: 'Apply what you learn through practical projects, document your decisions, and finish with portfolio-ready work.' },
      { title: 'Earn the outcome', copy: 'Complete the required roadmap and reviewed projects to earn a role-focused Tabflux certificate.' },
    ]}
    cta={{ title: 'Start with your field.', copy: 'Compare the three Tabflux Schools and the roles available in each.', href: '/schools', label: 'Explore Schools' }}
  />;
}
