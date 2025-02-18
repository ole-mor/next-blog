import {
  Footer,
  Navbar,
  MasonryGallery
} from "./components"

export default function Home() {
  return (
    <div className="relative h-full flex flex-col bg-transparent font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <MasonryGallery />
      <Footer />
    </div>
  );
}
