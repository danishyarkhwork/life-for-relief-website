/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Static export to 'out' folder
    trailingSlash: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true, // Required for static export
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
  