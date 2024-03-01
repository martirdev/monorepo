/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    BACKEND_API: process.env.BACKEND_API,
  },
};

export default nextConfig;
