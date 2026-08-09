import InfoPage from '@/components/InfoPage';

export const metadata = {
  title: 'Privacy — Tabflux',
  description: 'How Tabflux handles information submitted through this website.',
};

export default function PrivacyPage() {
  return <InfoPage
    eyebrow="Legal / Privacy"
    title={<>Your information<br/>deserves care.</>}
    copy="This notice explains the basic information practices for the Tabflux website. Last updated August 9, 2026."
    sections={[
      { title: 'Information you provide', copy: 'When you contact us, we may receive your name, email address, career interests, and the message you submit.' },
      { title: 'How we use it', copy: 'We use submitted information to answer inquiries, provide academy guidance, operate the website, and improve our learning experience.' },
      { title: 'Sharing and retention', copy: 'We do not sell personal information. We may use service providers needed to operate Tabflux and retain information only as reasonably necessary for its purpose.' },
      { title: 'Your choices', copy: 'You may ask us to access, correct, or delete information you submitted, subject to applicable requirements. Contact us through the academy contact page.' },
    ]}
    cta={{ title: 'Have a privacy question?', copy: 'Send us a message and include “Privacy” in your subject or message.', href: '/contact', label: 'Contact Us' }}
  />;
}
