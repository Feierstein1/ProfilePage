import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
  trailingSlash: true,
};

export default nextConfig;
