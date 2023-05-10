/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['www.nps.gov'],
    },
};

module.exports = nextConfig;
