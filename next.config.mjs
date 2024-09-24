// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/:path*',
          destination: 'http://website2.com/blog/:path*'
        },
        {
          source: '/blog',
          destination: 'http://website2.com/blog'
        },
        {
          source: '/_next/static/:path*',
          destination: 'http://website2.com/_next/static/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
