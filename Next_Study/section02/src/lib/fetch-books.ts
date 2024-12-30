import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  //let url = `http://localhost:12345/book`;
  let url = `https://onebite-books-server-main-nu-three.vercel.app/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}