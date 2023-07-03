import { Inter } from "next/font/google";
import AppCarousel from "@/components/carousel/AppCarousel";
import Discus from "@/components/discus/Discus";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ news }) {
  return (
    <main>
      <AppCarousel />
      <Discus />
    </main>
  );
}
