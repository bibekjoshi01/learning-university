import InfoPage from '@/components/InfoPage';

export const metadata = {
  title: 'Student Stories — Tabflux',
  description: 'The kinds of learning journeys and outcomes Tabflux is designed to support.',
};

export default function StudentStoriesPage() {
  return <InfoPage
    eyebrow="Academy / Student stories"
    title={<>Progress worth<br/>talking about.</>}
    copy="Every learner starts somewhere different. Tabflux helps turn that starting point into a focused body of work."
    sections={[
      { title: 'From browsing to building', copy: 'Learners replace disconnected tutorials with a weekly roadmap tied to one clear role and a practical project sequence.' },
      { title: 'From existing skills to AI-enabled work', copy: 'Working professionals learn where AI fits their current field, then build workflows and evidence relevant to their day-to-day work.' },
      { title: 'From study to a credible portfolio', copy: 'Students connect academic foundations with realistic projects they can explain, demonstrate, and continue improving.' },
    ]}
    cta={{ title: 'Build your own story.', copy: 'Choose a role and see the complete learning path.', href: '/schools', label: 'Explore Career Tracks' }}
  />;
}
