import {
  Footer,
  Navbar,
} from "../../components"
import Content from "./Content"

export default function Home() {
  return (
    <div className="relative h-full h-min-[100vh] flex flex-col bg-transparent font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div></div>
      <Content />
      <Footer />
    </div>
  );
}
