// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'http://blog.chizhang.love/',
        permanent: true // 使用永久重定向
      }
    ];
  }
};

export default nextConfig;
