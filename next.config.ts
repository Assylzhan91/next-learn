import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
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
