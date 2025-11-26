/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.thesimpsonsapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
