import withLinaria from 'next-with-linaria';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['page.ts', 'page.tsx'],
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    cleanupIds: false
                  }
                }
              }
            ]
          }
        }
      }
    });

    return config;
  }
};

export default withLinaria(nextConfig);
