import { Inter } from "next/font/google";
import AppCarousel from "@/components/carousel/AppCarousel";
import Discus from "@/components/discus/Discus";
import TopScorers from "@/components/topScorers/TopScorers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AppCarousel />
      <Discus />
      <TopScorers />
    </main>
  );
}
