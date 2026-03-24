import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qpndeadwpfiaqbqacbla.supabase.co',
      },
    ],
  },
};

export default nextConfig;
