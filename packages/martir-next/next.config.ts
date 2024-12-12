import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.SERVER_URL}/:path*`,
      },
    ];
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
