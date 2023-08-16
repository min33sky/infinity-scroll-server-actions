/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.punkapi.com'],
  },
};

module.exports = nextConfig;
