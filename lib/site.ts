const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

export const siteConfig = {
  name: 'Tabflux',
  title: 'Tabflux — Build a career for the AI era',
  description:
    'Career-first learning for the AI era, with structured role roadmaps, practical projects, and skill courses.',
  url: configuredUrl || 'https://tabflux.com',
};
