# Seoul Crypto Institute — Website

SCI 공식 웹사이트. 한/영 원페이저.

```bash
npm install
npm run dev     # http://localhost:3000 → /ko 로 리다이렉트
npm run build
```

## 구조

```
app/[locale]/          ko · en 두 로케일. 루트 레이아웃이 여기 있다
content/ko.ts,en.ts    모든 카피. types.ts의 SiteContent 형태를 공유한다
components/brand/      Symbol(Vector Core), Logo
components/sections/   Hero → Contact 9개 섹션
components/ui/         Section, SectionHeading, Cta, Reveal
public/people/         연구위원 포트레이트 (4:5, grayscale은 CSS에서 적용)
```

카피를 고칠 때는 `content/ko.ts`와 `content/en.ts`를 함께 수정한다. 두 파일은 같은 타입을 만족해야 하므로 한쪽만 필드를 늘리면 타입 에러가 난다.

## 배포

`main`에 푸시하면 GitHub Actions가 정적 export를 만들어 GitHub Pages에 올린다(`.github/workflows/deploy.yml`). 평소 작업은 기본 브랜치인 `dev`에서 하고, 배포할 때 `main`으로 머지한다.

배포 위치에 따라 달라지는 값은 `lib/site.ts` 한 곳에 모여 있고, 실제 값은 워크플로에서 `actions/configure-pages`가 주입한다.

| 환경변수 | 프로젝트 페이지 | 커스텀 도메인 |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | `/website` | (빈 값) |
| `NEXT_PUBLIC_SITE_URL` | `https://seoulcryptoinstitute.github.io/website` | `https://seoulcrypto.institute` |

커스텀 도메인을 붙이면 액션이 알아서 빈 basePath를 넘기므로 코드는 손대지 않는다. Settings > Pages에서 도메인만 등록하면 된다.

임시 github.io 주소로 떠 있는 동안에는 `noindex, nofollow`가 붙는다(`lib/site.ts`의 `IS_TEMPORARY_HOST`). 임시 주소가 먼저 색인되면 도메인 전환 후 정리가 번거롭기 때문이다. 호스트가 `.github.io`인지로 판단하므로 apex든 www든 도메인을 등록하는 순간 색인이 열린다. 프로젝트 페이지는 `/robots.txt`가 조직 루트에 속해 통제할 수 없어서 메타 태그로만 막을 수 있다.

정적 export라 서버가 필요한 기능은 쓸 수 없다 — route handler, middleware, server action, ISR, 그리고 `next/image` 최적화. `next/image`는 `unoptimized`이고 basePath가 자동으로 붙지 않으므로, `public/` 자산을 가리키는 경로는 `lib/site.ts`의 `asset()`을 거쳐야 한다. `/` → `/ko` 리다이렉트도 서버가 없어 `next.config.ts`의 `redirects()` 대신 `public/index.html`이 처리한다.

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
