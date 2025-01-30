import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Metadata } from "next";

async function SearchResult({ q }: { q: string }) {
  await delay(1500); // 일부러 지연 시키려고 만든 비동기 함수
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  ); // 한 번 검색이 된 것은 캐시 유지하는 방식
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  //현재 페이지 메타 데이터를 동적으로 생성하는 역할을 합니다.
  const { q } = await searchParams;
  return {
    title: `${q} : 한입북스 검색`,
    description: `${q} 검색 결과입니다`,
    openGraph: {
      title: `${q} : 한입북스 검색`,
      description: `${q} 검색 결과입니다`,
      images: ["/thumbnail.png"],
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense key={q || ""} fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={q || ""} />
    </Suspense>
  );
}
