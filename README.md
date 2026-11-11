# Seoul Crypto Institute — Website

SCI 공식 웹사이트. 한/영 원페이저.

```bash
npm install
npm run dev     # http://localhost:3000 → /ko 로 리다이렉트
npm run build
```

## 구조

```
app/(site)/[locale]/   ko · en 두 로케일. 이 그룹의 루트 레이아웃이 <html lang>을 정한다
app/(root)/            `/` 리다이렉트 스텁. 자기 루트 레이아웃을 따로 가진다
app/robots.ts          /robots.txt, app/sitemap.ts → /sitemap.xml (빌드 시 정적 파일로 생성)
content/ko.ts,en.ts    모든 카피. types.ts의 SiteContent 형태를 공유한다
components/brand/      Symbol(Vector Core), Logo
components/sections/   Hero → Contact 9개 섹션
components/ui/         Section, SectionHeading, Cta, Reveal
public/people/         연구위원 포트레이트 (4:5, grayscale은 CSS에서 적용)
```

카피를 고칠 때는 `content/ko.ts`와 `content/en.ts`를 함께 수정한다. 두 파일은 같은 타입을 만족해야 하므로 한쪽만 필드를 늘리면 타입 에러가 난다.

## 배포

미리보기에서 검토하고, PR로 운영에 내보낸다.

| 단계 | 하는 일 | 주소 | 워크플로 |
| --- | --- | --- | --- |
| 미리보기 | `dev`에 푸시 | https://seoulcryptoinstitute.github.io/website-preview/ko | `preview.yml` |
| 검사 | `dev` → `main` PR | — | `ci.yml` (`lint-and-build`) |
| 운영 | PR 머지 (`main` 푸시) | https://seoulcrypto.institute | `deploy.yml` |

1. 평소 작업은 기본 브랜치인 `dev`에서 한다. `dev`에 푸시하면 미리보기 사이트가 갱신되고, 검토자에게는 이 주소를 공유한다. 다른 브랜치를 올려 보려면 Actions > Deploy preview > Run workflow에서 브랜치를 고른다. 미리보기 주소는 하나뿐이라 마지막 배포가 덮어쓴다.
2. 검토가 끝나면 `dev` → `main` PR을 연다. CI의 `lint-and-build`가 통과해야 머지 버튼이 열린다.
3. PR을 머지하면 `main` 푸시로 운영 배포가 돈다.

`main`은 룰셋으로 보호된다. PR로만 들어갈 수 있고, `lint-and-build` 통과가 필요하며, 머지 방식은 merge commit만 허용한다. squash나 rebase로 머지하면 `dev`의 커밋이 `main`에 다른 커밋으로 다시 만들어져서 다음 PR부터 두 브랜치가 계속 어긋나기 때문이다. 승인(리뷰어) 수는 요구하지 않으므로 혼자서도 CI 통과 후 머지할 수 있다.

미리보기는 별도 저장소 [`website-preview`](https://github.com/SeoulCryptoInstitute/website-preview)의 GitHub Pages다(Pages는 저장소당 사이트가 하나뿐이다). 그 저장소의 `gh-pages` 브랜치에는 빌드 결과만 매번 강제 푸시되므로 직접 고치지 않는다. 푸시에는 그 저장소에만 쓰기 권한이 있는 deploy key를 쓰고, 개인 키는 이 저장소의 `preview` 환경 시크릿 `PREVIEW_DEPLOY_KEY`에 있다.

배포 위치에 따라 달라지는 값은 `lib/site.ts` 한 곳에 모여 있다. 운영 값은 `actions/configure-pages`가 Pages 설정(커스텀 도메인)에서 읽어 넘기고, 미리보기 값은 `preview.yml`에 고정돼 있다.

| 환경변수 | 운영 | 미리보기 |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | (빈 값) | `/website-preview` |
| `NEXT_PUBLIC_SITE_URL` | `https://seoulcrypto.institute` | `https://seoulcryptoinstitute.github.io/website-preview` |

github.io 주소, 즉 미리보기에는 `noindex, nofollow`가 붙는다(`lib/site.ts`의 `IS_TEMPORARY_HOST`). 미리보기가 색인되면 운영 사이트와 중복 콘텐츠가 되기 때문이다. 호스트가 `.github.io`인지로 판단하므로, 미리보기에 도메인을 붙이면 색인이 열린다는 점에 주의한다. 프로젝트 페이지의 `/robots.txt`는 조직 루트에 속해 통제할 수 없어서 메타 태그로만 막을 수 있다.

`/robots.txt`와 `/sitemap.xml`은 `app/robots.ts`, `app/sitemap.ts`가 빌드 시 만든다. 페이지를 새로 만들면 `sitemap.ts`에도 넣는다.

정적 export라 서버가 필요한 기능은 쓸 수 없다 — route handler, middleware, server action, ISR, 그리고 `next/image` 최적화. robots·sitemap 같은 메타데이터 라우트도 `export const dynamic = "force-static"`을 붙여야 빌드된다. `next/image`는 `unoptimized`이고 basePath가 자동으로 붙지 않으므로, `public/` 자산을 가리키는 경로는 `lib/site.ts`의 `asset()`을 거쳐야 한다.

`/` → `/ko`도 `redirects()`가 안 먹으므로 `app/(root)/`가 meta refresh로 처리한다. 크롤러는 meta refresh를 따라가지 않아서, 도메인만 붙여넣어 공유했을 때 카드가 비지 않도록 이 스텁도 OG 태그를 내보낸다. 로케일 라우트와 루트가 각자 `<html>`을 내보내야 하므로 둘을 서로 다른 라우트 그룹에 두고 루트 레이아웃을 하나씩 갖게 했다.

빌드 결과를 로컬에서 그대로 확인하려면:

```bash
npm run build
npx serve out
```

## 브랜드

브랜드 가이드 v.01 기준. 색상 토큰은 `app/globals.css`의 `@theme`에 있다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-navy` | `#0E2593` | Primary — 배경, 워드마크 |
| `--color-blue` | `#326BEE` | Secondary — 강조, CTA |

심볼(The Vector Core)은 브랜드 가이드 PDF의 벡터 좌표를 그대로 옮긴 것이다. 하나의 경로와 그 180° 회전본으로 이루어지며, 좌표를 손대면 가이드와 어긋난다. 워드마크의 `SCI`는 원본 `.ai`를 확보하기 전까지 Archivo로 근사한 것이므로, 원본이 들어오면 아웃라인 SVG로 교체한다.

폰트는 Pretendard(본문·한글)와 Archivo(영문 디스플레이)를 CDN에서 불러온다.
