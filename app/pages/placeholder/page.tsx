import {
  Footer,
  Navbar,
} from "@/app/components"


export default function Home() {
  return (
    <div className="relative h-full flex flex-col bg-transparent font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      What
      <Footer />
    </div>
  );
}
