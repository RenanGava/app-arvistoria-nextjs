/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['scontent.fguz3-1.fna.fbcdn.net'],
  },
};
module.exports = nextConfig;