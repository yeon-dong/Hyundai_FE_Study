import { useRouter } from "next/router";
//optional catch all segment
export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Book{id}</h1>;
}
