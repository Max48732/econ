import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Убедитесь, что нет конфликтов
  images: {
    unoptimized: true,
  },
};

export default nextConfig;