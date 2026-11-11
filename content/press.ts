/**
 * 언론보도 데이터 — 국·영문 페이지가 함께 쓴다.
 *
 * 출처: SCI 뉴스 클리핑 (2026. 10. 29. 기준, 23개 매체 30건).
 * - items: 원 기사(article)와 사진 보도(photo). 순서는 클리핑 순서.
 * - reprints: 같은 기사를 다시 실은 곳. 원 기사 아래 "같은 기사"로 붙는다.
 * - 제목은 한국어 원문 그대로 둔다(영문 페이지에서는 'Korean' 표시를 붙인다).
 * - 이데일리 링크의 utm_* 추적값은 지웠다. 클리핑에 http://였던 두 링크는 https로 열려 바꿨다.
 *
 * 이 파일은 node:test가 그대로 읽으므로 런타임 import를 두지 않는다.
 * 새 행사가 생기면 PRESS_EVENTS 맨 앞에 묶음을 하나 더한다.
 */

export type OutletId = string;

export type PressItem = {
  outlet: OutletId;
  title: string;
  url: string;
  /** YYYY-MM-DD */
  date: string;
  kind: "article" | "photo";
  reprints?: { outlet: OutletId; url: string }[];
};

export type PressEvent = {
  id: string;
  /** YYYY-MM-DD */
  date: string;
  title: { ko: string; en: string };
  summary: { ko: string; en: string };
  items: PressItem[];
};

export const OUTLETS: Record<OutletId, { ko: string; en: string }> = {
  joongang: { ko: "중앙일보", en: "JoongAng Ilbo" },
  koreadaily: { ko: "미주중앙일보", en: "The Korea Daily" },
  chosun: { ko: "조선일보", en: "The Chosun Ilbo" },
  chosunbiz: { ko: "조선비즈", en: "Chosun Biz" },
  donga: { ko: "동아일보", en: "The Dong-A Ilbo" },
  bizn: { ko: "비즈N", en: "BizN" },
  kmib: { ko: "국민일보", en: "Kukmin Ilbo" },
  sedaily: { ko: "서울경제", en: "Seoul Economic Daily" },
  edaily: { ko: "이데일리", en: "Edaily" },
  marketin: { ko: "마켓인", en: "Marketin" },
  herald: { ko: "헤럴드경제", en: "Herald Business" },
  ajunews: { ko: "아주경제", en: "Aju Business Daily" },
  news1: { ko: "뉴스1", en: "News1" },
  newsis: { ko: "뉴시스", en: "Newsis" },
  etnews: { ko: "전자신문", en: "Electronic Times" },
  mtn: { ko: "MTN", en: "MTN" },
  newspim: { ko: "뉴스핌", en: "Newspim" },
  dailian: { ko: "데일리안", en: "Dailian" },
  sidae: { ko: "동행미디어 시대", en: "Sidae" },
  wikitree: { ko: "위키트리", en: "Wikitree" },
  tokenpost: { ko: "토큰포스트", en: "TokenPost" },
  peoplewatch: { ko: "피플워치", en: "PeopleWatch" },
  hansbiz: { ko: "한스경제", en: "Hans Economy" },
};

const EDAILY = (id: string) =>
  `https://www.edaily.co.kr/News/Read?newsId=${id}&mediaCodeNo=257`;
const MARKETIN = (id: string) =>
  `https://marketin.edaily.co.kr/News/ReadE?newsId=${id}`;

const D = "2026-10-28";

export const PRESS_EVENTS: PressEvent[] = [
  {
    id: "launch-seminar-2026",
    date: D,
    title: { ko: "SCI 창립 세미나", en: "SCI Launch Seminar" },
    summary: {
      ko: "2026년 10월 28일 서울 종로구 센트로폴리스에서 창립 세미나를 열고 SCI의 비전과 정책 어젠다를 발표했습니다.",
      en: "On October 28, 2026, SCI held its launch seminar at Centropolis in Jongno-gu, Seoul, and presented its vision and policy agenda.",
    },
    items: [
      {
        outlet: "joongang",
        title: "\"블록체인 기반 무역·금융 혁신\" SCI 출범",
        url: "https://www.joongang.co.kr/article/25473793",
        date: "2026-10-29",
        kind: "article",
        reprints: [
          {
            outlet: "koreadaily",
            url: "https://www.koreadaily.com/article/20261028080203846",
          },
        ],
      },
      {
        outlet: "joongang",
        title: "\"제조 강국 넘어 규칙 만드는 나라로\"…서울크립토인스티튜트 출범",
        url: "https://www.joongang.co.kr/article/25473700",
        date: D,
        kind: "article",
        reprints: [
          {
            outlet: "koreadaily",
            url: "https://www.koreadaily.com/article/20261028012659349",
          },
        ],
      },
      {
        outlet: "chosun",
        title:
          "민간 싱크탱크 서울크립토인스티튜트 출범… \"제조 강국 넘어 규칙 만드는 나라로\"",
        url: "https://www.chosun.com/economy/stock-finance/2026/10/28/NWZYT6NGIRA7HAMHF3IM7CD3DQ/",
        date: D,
        kind: "article",
        reprints: [
          {
            outlet: "chosunbiz",
            url: "https://biz.chosun.com/stock/stock_general/2026/10/28/GA4GEODFGQ3TGNJXMFRTQODFGA/",
          },
        ],
      },
      {
        outlet: "donga",
        title: "\"대한민국을 크립토 G3로\"…서울크립토인스티튜트(SCI) 공식 출범",
        url: "https://www.donga.com/news/Economy/article/all/20261028/134926553/1",
        date: D,
        kind: "article",
        reprints: [
          {
            outlet: "bizn",
            url: "https://bizn.donga.com/List/3/all/20261028/134926553/2",
          },
        ],
      },
      {
        outlet: "kmib",
        title: "SCI 출범…\"G3 Korea\" 디지털자산 정책 어젠다 제안",
        url: "https://www.kmib.co.kr/article/20261028501554",
        date: D,
        kind: "article",
      },
      {
        outlet: "sedaily",
        title: "기조연설하는 박종백 서울크립토인스티튜트(SCI) 대표",
        url: "https://www.sedaily.com/article/20107297",
        date: D,
        kind: "photo",
      },
      {
        outlet: "edaily",
        title: "내부규제에만 목맨 韓…\"해외자본 찾아오는 크립토 관할 만들어야\"",
        url: EDAILY("05608806645617512"),
        date: D,
        kind: "article",
        reprints: [{ outlet: "marketin", url: MARKETIN("05608806645617512") }],
      },
      {
        outlet: "edaily",
        title: "디지털자산 싱크탱크 SCI 오늘 출범…\"제도 개선 이끌 것\"",
        url: EDAILY("04326326645617512"),
        date: D,
        kind: "article",
        reprints: [{ outlet: "marketin", url: MARKETIN("04326326645617512") }],
      },
      {
        outlet: "edaily",
        title: "박종백 SCI 대표 \"디지털자산 제도화로 글로벌 표준 주도해야\"",
        url: EDAILY("05002006645617512"),
        date: D,
        kind: "article",
        reprints: [{ outlet: "marketin", url: MARKETIN("05002006645617512") }],
      },
      {
        outlet: "edaily",
        title: "강형구 \"테크노 내셔널리즘 시대, 韓 스테이블코인 필수\"",
        url: EDAILY("05215206645617512"),
        date: D,
        kind: "article",
      },
      {
        outlet: "herald",
        title: "[헤럴드포토] 디지털자산 싱크탱크 SCI 공식 출범",
        url: "https://biz.heraldcorp.com/article/10917842",
        date: D,
        kind: "photo",
      },
      {
        outlet: "ajunews",
        title:
          "디지털자산 제도화 연구 및 정책제안 싱크탱크 \"SCI(서울크립토인스티튜트)\" 공식 출범",
        url: "https://www.ajunews.com/view/20261028153538781",
        date: D,
        kind: "article",
      },
      {
        outlet: "news1",
        title: "서울크립토인스티튜트 창립 세미나",
        url: "https://www.news1.kr/photos/8184293",
        date: D,
        kind: "photo",
      },
      {
        outlet: "newsis",
        title: "기조연설 하는 박종백 SCI 대표",
        url: "https://www.newsis.com/view/NISI20261028_0021508541",
        date: D,
        kind: "photo",
      },
      {
        outlet: "etnews",
        title: "[포토] 서울크립토인스티튜트(SCI) 창립",
        url: "https://www.etnews.com/20261028000396",
        date: D,
        kind: "photo",
      },
      {
        outlet: "mtn",
        title: "디지털자산 싱크탱크 SCI 출범…韓 디지털자산 3대 강국 전략 제시",
        url: "https://v.daum.net/v/20261028173600266?f=o",
        date: D,
        kind: "article",
      },
      {
        outlet: "newspim",
        title: "서울크립토인스티튜트 창립 세미나",
        url: "https://www.newspim.com/news/view/20261028001566",
        date: D,
        kind: "article",
      },
      {
        outlet: "dailian",
        title: "제조 강국 넘어 크립토 강국으로…SCI 출범",
        url: "https://www.dailian.co.kr/news/view/1707459",
        date: D,
        kind: "article",
      },
      {
        outlet: "sidae",
        title: "SCI 창립 세미나…크립토 발판 'G3 Korea' 로드맵 공개",
        url: "https://www.sidae.com/article/2026102815245473597",
        date: D,
        kind: "article",
      },
      {
        outlet: "wikitree",
        title: "AI 에이전트가 경제활동 주도하는 시대, 크립토가 가치 이동 담당한다",
        url: "https://cp.news.search.daum.net/p/183576510",
        date: D,
        kind: "article",
      },
      {
        outlet: "tokenpost",
        title:
          "[현장] \"제조 강국 넘어 금융 규칙 만드는 나라로\"…SCI, 'G3 코리아' 비전 제시",
        url: "https://www.tokenpost.kr/news/insights/428468",
        date: D,
        kind: "article",
      },
      {
        outlet: "peoplewatch",
        title: "서울크립토인스티튜트 28일 창립 세미나..\"크립토 전환으로 G3 도약\"",
        url: "https://www.peoplewatch.co.kr/article/view/ppw202610280014",
        date: D,
        kind: "article",
      },
      {
        outlet: "hansbiz",
        title: "SCI 출범···원화코인·크립토 특구 도입 촉구",
        url: "https://www.hansbiz.co.kr/news/articleView.html?idxno=877260",
        date: D,
        kind: "article",
      },
    ],
  },
];
