/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: "/project_website",
  assetPrefix: "/project_website"
};

// module.exports = nextConfig;
export default nextConfig;
