import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="bg-white shadow-lg p-4 text-black rounded-xl">
      {title && <div className="font-semibold text-2xl">{title}</div>}
      {children}
    </div>
  );
};

export default Card;
