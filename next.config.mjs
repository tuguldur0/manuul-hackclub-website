/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // English lives at "/" while Mongolian lives at "/mn"
  async redirects() {
    return [{ source: "/en", destination: "/", permanent: true }];
  },
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/en" }] };
  },
};

export default nextConfig;
