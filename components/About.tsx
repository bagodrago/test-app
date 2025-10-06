"use client";
import React, { useRef } from "react"
import Glow from "@/components/Glow";

const About = () => {
  const sectionRef = useRef<HTMLElement|null>(null);

  return (
    <section 
      ref={sectionRef}
      className='about group' 
      id='about'
    >
      <Glow 
        color="rgba(0,165,255,255)" 
        opacity={0.1} 
        size={500}
        fadeDuration={2}
        parentRef={sectionRef}
      />
      
      <article className="relative z-10 flex flex-col items-center h-full text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          sagittis leo. Nulla facilisi.
        </p>
      </article>
    </section>
  )
}

export default About