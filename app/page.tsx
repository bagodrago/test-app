import { About } from "@/app";
import { DropdownMenu } from "@/app";
import { Hero } from "@/app";
import { Navbar } from "@/app";

import { MenuProvider } from "@/app/context/MenuContext";

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
