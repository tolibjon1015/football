import AppCarousel from "@/components/carousel/AppCarousel";
import { Fact } from "@/components/fact/Fact";
import TopScorers from "@/components/topScorers/TopScorers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AppCarousel />
      <Fact />
      <TopScorers />
    </main>
  );
}
