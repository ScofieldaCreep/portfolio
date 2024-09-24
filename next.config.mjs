//  Next.js 项目的配置文件，用于自定义 Next.js 的默认行为
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  }
};

// next.config.js
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/:path*',
          destination: 'https://chi-notion-blog.vercel.app/:path*'
        },
        {
          source: '/blog',
          destination: 'https://chi-notion-blog.vercel.app/blog'
        },
        {
          source: '/_next/static/:path*',
          destination: 'https://chi-notion-blog.vercel.app/_next/static/:path*'
        }
      ]
    };
  }
};

export default nextConfig;
