import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["tr", "en"],  // Türkçe ve İngilizce destekle
    defaultLocale: "tr",    // Ana dil Türkçe olsun
    localeDetection: false

  },
};

export default nextConfig;
