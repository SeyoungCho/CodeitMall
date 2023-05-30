import Link from "next/link";
export default function NotFoundPage() {
  return (
    <>
      <h1>404 Not Found</h1>
      <h2>Something went wrong</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </>
  );
}
