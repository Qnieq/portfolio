import { Main } from "./Main";
import { Analytics } from "@vercel/analytics/react"

export default function Page() {
  return (
    <main>
      <Main />
      <Analytics />
    </main>
  );
}
