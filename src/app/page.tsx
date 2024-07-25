import Header from "@/components/shared/Header/Header";
import styles from "./page.module.scss";
import HeroSection from "../components/pages/Home/HeroSection/HeroSection";
import Work from "@/components/pages/Home/Work/Work";
import BgEffect from "@/components/ui/bg-effect/BgEffect";

export default function Home() {
  

  return (
    <main className={styles.main}>
      <BgEffect />
      <Header />
      <HeroSection />
      <Work />
    </main>
  );
}
