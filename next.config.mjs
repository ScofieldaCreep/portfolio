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
          destination: 'http://chi-notion-blog.vercel.app/_next/static/:path*'
        }
      ],
      afterFiles: [
        {
          source: '/:path((?!$).*)', // 排除根路径
          destination: 'http://chi-notion-blog.vercel.app/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
