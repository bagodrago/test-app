import { About } from "@/components";
import { Hero } from "@/components";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <main className="canvas">
      <Navbar />
      <Hero />
      <About />
      <Hero />
    </main>
  );
}
