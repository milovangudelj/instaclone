/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["scontent.cdninstagram.com", "instagram.fmxp5-1.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
