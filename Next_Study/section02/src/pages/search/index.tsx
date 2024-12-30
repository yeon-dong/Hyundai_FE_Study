import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
// import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
// import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import Head from "next/head";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: { books },
//   };
// };
// export default function Page({
//   books,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {

// 이런식으로 SSG는 안됨
// export const getStaticProps = async (
//     context: GetStaticPropsContext
//   ) => {
//     const q = context.query.q;
//     const books = await fetchBooks(q as string);

//     return {
//       props: { books },
//     };
//   };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const { q } = router.query;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };
  // 빈 div 태그들만 주고 이후에 서버에 요청 하는 방식으로 동작함.
  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입 북스 - 검색결과</title>
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
