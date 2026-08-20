import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages는 정적 파일만 서빙한다. out/ 으로 내보낸다.
  output: "export",

  // 프로젝트 페이지의 서브경로(/website). 커스텀 도메인이면 빈 값이 들어온다.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,

  // 정적 export에는 이미지 최적화 서버가 없다.
  images: { unoptimized: true },
};

export default nextConfig;
