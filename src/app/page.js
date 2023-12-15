import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:mx-8">
      <Navbar />
      <div className="container flex justify-center mx-auto">
        <Image
          src="/images/banner.png"
          alt="Next.js logo"
          width={3200}
          height={200}
        />
      </div>
      <Footer />
    </main>
  )
}
