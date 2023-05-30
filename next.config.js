/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
