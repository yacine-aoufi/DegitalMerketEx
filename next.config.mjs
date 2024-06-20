/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // specify the port if needed, otherwise leave it empty
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'degitalmerketex-production-2851.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
