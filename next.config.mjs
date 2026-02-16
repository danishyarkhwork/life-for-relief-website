/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "liferelief.ca",
          pathname: "/wp-content/**",
        },
      ],
    },
  }
  
  export default nextConfig
  