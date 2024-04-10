import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    BACKEND_API: process.env.BACKEND_API,
    AVATAR_URL: process.env.AVATAR_URL
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.(".svg"));
    config.module.rules.push(
      {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/]
        },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default million.next(nextConfig);
