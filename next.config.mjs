/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          pathname: '/**', // Match all paths
        },
      ],
    }, 
  };
   
  export default nextConfig;
  