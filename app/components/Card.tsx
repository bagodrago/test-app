import React, { ReactNode } from "react";

interface CardParams {
  children: ReactNode;
  className?: string;
}

const Card = ({children, className}: CardParams) => {
  return (
    <figure className={`shadow-lg rounded-xl p-10 min-w-0 ${className ?? ''}`}>
      {children}
    </figure>
  )
}

export default Card