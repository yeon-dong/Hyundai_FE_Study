"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다</h3>
      <button
        onClick={() => {
          startTransition(() => {
            // 리액트 18버전부터 추가된 콜백함수를 받아서 렌더링 과정을 일괄적으로 해주는 함수
            router.refresh(); //현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴
            reset(); //에러 상태를 초기화 해야 해서 씀, 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
