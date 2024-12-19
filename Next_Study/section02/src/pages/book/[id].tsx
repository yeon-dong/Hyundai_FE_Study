import { useRouter } from "next/router";
import style from "./[id].module.css";
import {
  //GetServerSidePropsContext,
  GetStaticPropsContext,
  //InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchOneBooks from "@/lib/fetch-one-books";
import { notFound } from "next/navigation";

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

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const id = context.params!.id; // !로 params가 있을 것이다라고 단언해주면 됨
//   const book = await fetchOneBooks(Number(id)); // 그냥 id는 String 타입으로 가져오기 때문에 변환 필요

//   return {
//     props: {
//       book,
//     },
//   };
// };
//export default function Page({
//   book,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true, // 대비책으로 false 면 위에 있는 id 아니면 not found를 반환
    //"blocking"은 생성해두지 않은 것도 실시간 사전 렌더링 해서 다시 전달해주는 옵션
    // true 는 props가 없는 페이지를 일단 전달해 주고 props를 나중에 줌
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id; // !로 params가 있을 것이다라고 단언해주면 됨
  const book = await fetchOneBooks(Number(id)); // 그냥 id는 String 타입으로 가져오기 때문에 변환 필요

  if (!book) {
    return {
      notFound: true,
    };
  } // 404 페이지로 가게 하는 옵션

  return {
    props: {
      book,
    },
  };
};

//optional catch all segment
export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 동적으로 여러 개의 페이지를 렌더링-> getStaticPaths 함수로 어떤 id가 올 수 있는지 알려줘야함
  const router = useRouter();

  if (router.isFallback) return "로딩 중입니다."; // 이런식으로 로딩일 때를 확인 가능능
  if (!book) return "문제가 발생했습니다. 다시 시도하세요.";

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;
  return (
    <div>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
