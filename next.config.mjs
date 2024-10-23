
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com', 
            pathname: '/*/**',
          },
          {
            protocol: 'https',
            hostname: "th.bing.com",
            pathname: '/*/**',
          },
         
        ],
      },
      experimental: {
    serverComponentsExternalPackages: [
      "@kinde-oss/kinde-auth-nextjs"
    ]
  }
     
};

export default nextConfig;
