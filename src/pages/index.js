import Image from "next/image";
import { Inter } from "next/font/google";
import AppCarousel from "@/components/carousel/AppCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ news }) {
  return (
    <main>
      <AppCarousel news={news} />
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://onside-sport.uz/api/news/");
  const news = await res.json();
  return { props: { news } };
};
