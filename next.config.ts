import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: 'export',   // ← 关键：启用静态导出
  distDir: 'out',     // ← 可选：指定输出目录，默认就是 out
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {}, // 添加空的turbopack配置以解决构建错误
};

export default nextConfig;
