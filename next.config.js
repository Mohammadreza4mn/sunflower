/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taskapi.hiweb.ir",
      },
    ],
  },
};

module.exports = nextConfig;
