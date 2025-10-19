import { About } from "@/components";
import { DropdownMenu } from "@/components";
import { Hero } from "@/components";
import { Navbar } from "@/components";

import { MenuProvider } from "@/context/MenuContext";

export default function Home() {
  return (
    <main className="canvas">
      <MenuProvider>
        <Navbar />
        <DropdownMenu />
      </MenuProvider>
      
      <Hero />
      <About />
      <Hero />
    </main>
  );
}
