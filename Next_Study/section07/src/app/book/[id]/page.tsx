import { notFound } from "next/navigation";
import style from "./page.module.css";
//import { createReviewAction } from "@/actions/create-review.action";
import { BookData, ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import { ReviewEditor } from "@/components/review-editor";
import Image from "next/image";
import { Metadata } from "next";

// const mockData = {
//   id: 1,
//   title: "한 입 크기로 잘라 먹는 리액트",
//   subTitle: "자바스크립트 기초부터 애플리케이션 배포까지",
//   description:
//     "자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.",
//   author: "이정환",
//   publisher: "프로그래밍인사이트",
//   coverImgUrl:
//     "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg",
// };

export const dynamicParams = true; // 기본 값이 true
//어떤 파라미터들이 존재하는지 알려주면 된다. 빌드 타임에 렌더링이 된다.
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const books: BookData[] = await response.json();

  return books.map((book) => ({ id: book.id.toString() }));

  // return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <Image
          src={coverImgUrl}
          width={240}
          height={300}
          alt={`도서 ${title}의 표지 이미지`}
        />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`); // error.tsx 파일이 있어서 그냥 에러 메세지만 띄움
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  //현재 페이지 메타 데이터를 동적으로 생성하는 역할을 합니다.
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const book: BookData = await response.json();

  return {
    title: `${book.title} - 한입북스`,
    description: `${book.description} 검색 결과입니다`,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: `${book.description}`,
      images: [book.coverImgUrl],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  // 캐치 올 세그먼트가 아니라서 string array로 안해놓아도 됨
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
      <ReviewList bookId={params.id} />
    </div>
  );
}
