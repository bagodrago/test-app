"use client";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";

import { useMenu } from "@/context/MenuContext";

const Navbar = () => {
  const {menuOpen, setMenuOpen} = useMenu();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar__frame">

        <Link 
          href="#top"
        >
          <Image
          src="/logotk.svg"
          alt="David Howe"
          width={130}
          height={80}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center space-x-10">
          <Link href="#about" className="navbar__item">
            About
          </Link>
          
          <Link href="#projects" className="navbar__item">
            Projects
          </Link>
          
          <Link href="#contact" className="navbar__item">
            Contact Me
          </Link>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="navbar__hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar