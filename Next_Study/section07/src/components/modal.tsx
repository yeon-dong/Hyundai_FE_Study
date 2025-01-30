"use client";

import { ReactNode, useEffect, useRef } from "react";
import style from "./modal.module.css";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal(); //마운트 되면 자동으로 보여지게 됨
      dialogRef.current?.scrollTo({
        // 스크롤 위로 이동하도록 함
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()} //esc 눌러도 뒤로가기로 됨
      onClick={(e) => {
        // 모달의 배경(바깥 영역)이 클릭이된거면 -> 뒤로가기
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
