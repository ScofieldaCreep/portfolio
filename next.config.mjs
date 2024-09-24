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
          destination: 'http://chi-notion-blog.vercel.app/blog/:path*'
        },
        {
          source: '/blog',
          destination: 'http://chi-notion-blog.vercel.app/blog'
        },
        {
          source: '/_next/static/:path*',
          destination: 'http://chi-notion-blog.vercel.app/blog/_next/static/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
