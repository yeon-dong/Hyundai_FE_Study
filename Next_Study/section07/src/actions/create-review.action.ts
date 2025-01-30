"use server";
import { revalidatePath } from "next/cache";

// 파일 따로 해줄때는 상단에 적으면 좋음.

export async function createReviewAction(_: any, formData: FormData) {
  // state 값을 같이 가져오기 때문에 _ any가 필요함
  const bookId = formData.get("bookId")?.toString(); // bookId도 formData로 같이 가져와야함 이제.
  const content = formData.get("content")?.toString(); // 굳이 타입이  FormDataEntryValue 일 필요 없어서 toString을 씀씀
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }), // 이런 객체를 그냥 보내줄 수 없기 때문에 문자열로 직렬화 해줘야 함
      }
    );
    console.log(response.status);

    // 1. 특정 주소의 해당하는 페이지만 재검증
    revalidatePath(`/book/${bookId}`); // Post를 하면서 Next 서버 측에서 새롭게 생성해서 보내주면서 리뷰 재검증 가능

    // // 2. 특정 경로의 모든 동적 페이지를 재검증 , 즉 모든 동적인 페이지들이 다 한번에 재검증 된다는 뜻
    // revalidatePath("/book/[id]", "page");

    // // 3. 특정 레이아웃을 갖는 모든 페이지 재검증 , 특정 레이아웃을 기준으로 전부 재검증
    // revalidatePath("/(with-searchbar)", "layout");

    // // 4. 모든 데이터 재검증
    // revalidatePath("/", "layout");

    // // 5. 태그 기준, 데이터 캐시 재검증
    // revalidatePath(`review-${bookId}`); // 데이터 캐시에 {next: {tags: [`review-${bookId}`]}} 를 이용해서 가능
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
  //console.log(content, author);
}
