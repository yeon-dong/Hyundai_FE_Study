import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json"; // @는 src 폴더를 가르키는 거임임
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}; // 메서드 추가함
