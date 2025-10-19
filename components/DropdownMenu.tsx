"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";

const DropdownMenu = () => {
  const {menuOpen, setMenuOpen} = useMenu();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -10}}
          transition={{duration: 0.2, ease: "easeOut"}}
          className="dropdown"
        >
          <ul className="dropdown__list">
            <li className="dropdown__item"><Link href="#about" onClick={() => setMenuOpen(false)}>
              About
            </Link></li>
            <li className="dropdown__item"><Link href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link></li>
            <li className="dropdown__item"><Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Me
            </Link></li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DropdownMenu