import Header from "@/components/shared/Header/Header";
import styles from "./page.module.scss";
import HeroSection from "./Home/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
    </main>
  );
}
