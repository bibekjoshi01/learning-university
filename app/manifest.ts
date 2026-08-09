import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tabflux Academy',
    short_name: 'Tabflux',
    description: 'A modern career university for the age of AI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F7F4',
    theme_color: '#315BEA',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
