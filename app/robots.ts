import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * /robots.txt — 빌드 시 정적 파일로 나온다.
 *
 * 미리보기(github.io)에서도 Disallow를 걸지 않는다. 그쪽 색인 차단은 페이지의
 * robots 메타 태그(IS_TEMPORARY_HOST)가 맡는데, Disallow로 크롤링을 막으면
 * 크롤러가 그 noindex를 읽지 못한다. 게다가 프로젝트 페이지의 robots.txt는
 * 호스트 루트가 아니라서 크롤러가 애초에 읽지 않는다.
 */

// output: "export"에서는 메타데이터 라우트도 정적임을 명시해야 빌드된다.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
