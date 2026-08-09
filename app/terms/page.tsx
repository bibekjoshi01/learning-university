import InfoPage from '@/components/InfoPage';

export const metadata = {
  title: 'Terms — Tabflux',
  description: 'Basic terms for using the Tabflux website and learning information.',
};

export default function TermsPage() {
  return <InfoPage
    eyebrow="Legal / Terms"
    title={<>Simple terms<br/>for using Tabflux.</>}
    copy="These terms cover use of the public Tabflux website. Last updated August 9, 2026."
    sections={[
      { title: 'Website use', copy: 'You may use this website to learn about Tabflux and its programs. Do not misuse the site, interfere with its operation, or use its content unlawfully.' },
      { title: 'Program information', copy: 'Track names, curricula, durations, projects, and availability may change as programs improve. Enrollment terms will be provided separately when enrollment becomes available.' },
      { title: 'Content and ownership', copy: 'Unless stated otherwise, Tabflux owns the website design, written materials, and program content. Personal, non-commercial viewing is permitted.' },
      { title: 'No guaranteed outcome', copy: 'Tabflux provides education and career preparation, but completion does not guarantee employment, promotion, income, or a particular professional result.' },
      { title: 'Questions', copy: 'If you have questions about these terms or permission to use Tabflux materials, contact the academy before relying on or republishing them.' },
    ]}
    cta={{ title: 'Need clarification?', copy: 'We are happy to explain how these terms apply to the public website.', href: '/contact', label: 'Contact Us' }}
  />;
}
