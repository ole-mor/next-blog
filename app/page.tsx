import {
  Footer,
  Navbar,
  MasonryGallery
} from "./components"
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full flex flex-col bg-transparent font-[family-name:var(--font-geist-sans)]">
{/*   <Image 
      className="-z-10"
      src="/images/heroimg-light.jpg"
      alt="image"
      fill
      ></Image> */}
      <Navbar />
      <MasonryGallery />
      <Footer />
    </div>
  );
}
