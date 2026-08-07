/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/career-tracks/:slug', destination: '/roles/:slug', permanent: true },
      { source: '/career-tracks', destination: '/schools', permanent: true },
    ];
  },
};

export default nextConfig;
