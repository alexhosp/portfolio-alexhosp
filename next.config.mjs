// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'takpdarjgrwxjlffpfkw.supabase.co',
        pathname: '/storage/v1/object/public/portfolio-media/images/**',
      },
    ],
  },
};

export default nextConfig;
