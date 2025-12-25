import type { NextConfig } from 'next';

const nextConfig: NextConfig & {
  eslint?: {
    dirs?: string[];
  };
} = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.ts',
      },
    },
  },
};

export default nextConfig;
