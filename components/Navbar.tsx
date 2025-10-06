import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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

        <div className="flex flex-row items-center space-x-10">
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
        
      </div>
    </nav>
  )
}

export default Navbar