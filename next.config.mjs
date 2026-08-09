/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/roles/ai-agent-engineer', destination: '/roles/ai-integration-engineer', permanent: true },
      { source: '/career-tracks/:slug', destination: '/roles/:slug', permanent: true },
      { source: '/career-tracks', destination: '/schools', permanent: true },
    ];
  },
};

export default nextConfig;
