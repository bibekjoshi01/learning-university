import InfoPage from '@/components/InfoPage';

export const metadata = {
  title: 'FAQs — Tabflux',
  description: 'Common questions about Tabflux Schools, Career Tracks, courses, and certificates.',
};

export default function FaqPage() {
  return <InfoPage
    eyebrow="Academy / FAQs"
    title={<>Questions,<br/>answered clearly.</>}
    copy="The essentials to know before choosing a Tabflux learning path."
    sections={[
      { title: 'Do I need technical experience?', copy: 'Not for every track. Each role page states its level and prerequisites. Beginner-friendly paths include the necessary foundations.' },
      { title: 'What is a Career Track?', copy: 'A Career Track is a role-based roadmap containing sequenced Skill Courses, practical projects, and a defined career outcome.' },
      { title: 'Can I take one Skill Course?', copy: 'Yes. Individual courses can develop a specific capability, though following a complete Track gives the clearest progression.' },
      { title: 'Are courses self-paced?', copy: 'Study expectations vary by Track. The duration and recommended weekly commitment are shown before enrollment.' },
      { title: 'What certificate do I receive?', copy: 'Learners who complete the required courses and reviewed projects earn a certificate tied to their Career Track.' },
      { title: 'How do I choose the right path?', copy: 'Compare Schools and role requirements first. If you are unsure, contact the academy and describe the work you want to do.' },
    ]}
    cta={{ title: 'Still deciding?', copy: 'Tell us your interests and current experience, and we will help you identify a suitable path.', href: '/contact', label: 'Contact Tabflux' }}
  />;
}
