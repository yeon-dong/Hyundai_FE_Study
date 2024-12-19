import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
//import books from "@/mock/books.json"; // @는 src 폴더를 가르키는 거임임
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
// import { revalidatePath } from "next/cache";

// export const getServerSideProps = async () => {
//   // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
//   // console.log() -> 터미널에서 실행 로그를 볼 수 있음. 이 함수는 서버에서 실행되는 함수이기 때문

//   // 아래 코드는 직렬로 불러오기 때문에 병렬로 불러올거임
//   // const allBooks = await fetchBooks();
//   // const recoBooks = await fetchRandomBooks();
//   const [allBooks, recoBooks] = await Promise.all([
//     fetchBooks(),
//     fetchRandomBooks(),
//   ]);

//   return {
//     props: {
//       allBooks,
//       recoBooks,
//     },
//   };
// };

//SSG
export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    //revalidate: 3, //ISR 방식대로 3초마다 재 생성 됨
  };
};

// SSR -> InferGetServerSidePropsType<typeof getServerSideProps>
export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // useEffect 같은 것을 이용하면 서버에서는 실행 안되고, 브라우저에서 실행 되기 때문에 window 같은 것을 쓸 수 있다.
  console.log(allBooks);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}; // 메서드 추가함
