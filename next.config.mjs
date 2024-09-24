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
          destination: 'http://chi-notion-blog.vercel.app/:path*'
        },
        {
          source: '/article1',
          destination: 'https://chizhang.love/article-1'
        },
        {
          source: '/_next/static/:path*',
          destination: 'http://chi-notion-blog.vercel.app/_next/static/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
