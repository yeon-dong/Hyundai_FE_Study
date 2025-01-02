
import { ReactNode } from "react";
import Searchbar from "../components/searchbar";

//children으로 구조 분해 할당으로 받아 와서 page를 어디에 렌더링 할지 정해야함
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
