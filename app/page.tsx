import { About } from "@/app/components";
import { DropdownMenu } from "@/app/components";
import { Hero } from "@/app/components";
import { Navbar } from "@/app/components";

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
