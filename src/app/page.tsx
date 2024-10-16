import { Main } from "./Main";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main>
        <Main />
        <Analytics />
    </main>
  );
}
