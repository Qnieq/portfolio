import Header from "@/components/shared/Header/Header";
import styles from "./page.module.scss";
import HeroSection from "../components/pages/Home/HeroSection/HeroSection";
import Work from "@/components/pages/Home/Work/Work";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <Work />
    </main>
  );
}
