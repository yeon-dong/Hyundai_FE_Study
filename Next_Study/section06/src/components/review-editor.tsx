import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";

// 2024 10월 이후 수강생은 hidden이 오류가 뜸 그래서 readOnly 추가 하면 됨
export function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
