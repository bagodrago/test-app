import React, {useEffect, RefObject, useState, useRef} from 'react'

interface GlowParams {
  size?: number;
  color?: string;
  opacity?: number;
  fadeDuration?: number;
  parentRef?: RefObject<HTMLElement|null>;
}

const Glow : React.FC<GlowParams> = ({
  size = 300,
  color = "rgba(0,165,255,1)",
  opacity = 0.3,
  fadeDuration = 200,
  parentRef,
}) => {

  /* Get/Set the states of Glow Position and Visibility */
  const [pos, setPos] = useState({ x:0, y:0 });

  /* Handle mouse events */
  useEffect(() => {
    const parent = parentRef?.current;
    if (!parent) return;

    const moveHandler = (e: MouseEvent) => {
      const box = parent.getBoundingClientRect();
      setPos({x: e.clientX - box.left, y: e.clientY - box.top});
    }

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [parentRef]);

  /* Display glow element */
  return (
    <div 
      className={`
        pointer-events-none 
        absolute 
        inset-0 
        opacity-0
        group-hover:opacity-100
        h-screen
        transition-opacity
        ease-out
      `}
      style={{
        background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color.replace(
          /[\d.]+\)$/,
          `${opacity})`
        )}, transparent 80%)`,
        transitionDuration: `${fadeDuration}ms`,
      }}
    />
  )
}

export default Glow