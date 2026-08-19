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
docs/PLAN.md           기획안 · 확정 필요 항목
```

카피를 고칠 때는 `content/ko.ts`와 `content/en.ts`를 함께 수정한다. 두 파일은 같은 타입을 만족해야 하므로 한쪽만 필드를 늘리면 타입 에러가 난다.

## 브랜드

브랜드 가이드 v.01 기준. 색상 토큰은 `app/globals.css`의 `@theme`에 있다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-navy` | `#0E2593` | Primary — 배경, 워드마크 |
| `--color-blue` | `#326BEE` | Secondary — 강조, CTA |

심볼(The Vector Core)은 브랜드 가이드 PDF의 벡터 좌표를 그대로 옮긴 것이다. 하나의 경로와 그 180° 회전본으로 이루어지며, 좌표를 손대면 가이드와 어긋난다. 워드마크의 `SCI`는 원본 `.ai`를 확보하기 전까지 Archivo로 근사한 것이므로, 원본이 들어오면 아웃라인 SVG로 교체한다.

폰트는 Pretendard(본문·한글)와 Archivo(영문 디스플레이)를 CDN에서 불러온다.
