import React, { ReactNode } from "react";

interface CardParams {
    children: ReactNode;
    className?: string;
}

const Card = ({children, className}: CardParams) => {
  return (
    <figure className={'shadow-lg flex-x m-5 rounded-xl p-10 ' + className || ''}>
        {children}
    </figure>
  )
}

export default Card