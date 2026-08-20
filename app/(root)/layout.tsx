/**
 * `/` 전용 루트 레이아웃.
 *
 * 로케일 라우트는 `(site)` 그룹이 자기 루트 레이아웃을 갖는다. 두 그룹이 각자
 * <html>을 내보내야 `/`도 온전한 문서가 되고 `/ko`·`/en`은 각자의 lang을 가진다.
 * 리다이렉트 스텁이라 globals.css(Tailwind 전체)는 불러오지 않는다.
 */
export default function RootRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0E2593",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
