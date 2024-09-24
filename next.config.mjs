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
          destination: 'http://blog.chizhang.love/:path*'
        },
        {
          source: '/blog',
          destination: 'http://blog.chizhang.love/'
        },
        {
          source: '/_next/static/:path*',
          destination: 'http://blog.chizhang.love/_next/static/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
