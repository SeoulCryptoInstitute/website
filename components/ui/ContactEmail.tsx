import { CONTACT_EMAIL } from "@/lib/site";

/**
 * 큰 글씨로 보여 주는 문의 이메일. 좁은 화면에서는 @ 바로 뒤에서 줄이 바뀐다.
 * 링크에는 break-all 대신 [overflow-wrap:anywhere]를 함께 준다(도메인만으로도 넘칠 때만 더 끊는다).
 */
export function ContactEmail() {
  const [local, domain] = CONTACT_EMAIL.split("@");
  return (
    <>
      {`${local}@`}
      <wbr />
      {domain}
    </>
  );
}
