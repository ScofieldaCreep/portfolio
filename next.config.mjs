// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return {
      beforeFiles: [
        {
          source: '/blog',
          destination: 'http://blog.chizhang.love/'
        }
      ]
    };
  }
};

export default nextConfig;
