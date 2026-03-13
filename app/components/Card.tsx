import React, { ReactNode } from "react";

interface CardParams {
  children: ReactNode;
  className?: string;
}

const Card = ({children, className}: CardParams) => {
  return (
    <figure className={`shadow-lg rounded-xl min-w-0 hover:shadow-2xl ${className ?? ''}`}>
      {children}
    </figure>
  )
}

export default Card