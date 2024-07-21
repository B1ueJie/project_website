/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: "/project_website",
  assetPrefix: "/project_website"
};

// module.exports = nextConfig;
export default nextConfig;
