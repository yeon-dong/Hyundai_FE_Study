"use server"; // 파일 따로 해줄때는 상단에 적으면 좋음.

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString(); // bookId도 formData로 같이 가져와야함 이제.
  const content = formData.get("content")?.toString(); // 굳이 타입이  FormDataEntryValue 일 필요 없어서 toString을 씀씀
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return;
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
  } catch (err) {
    console.error(err);
    return;
  }
  //console.log(content, author);
}
