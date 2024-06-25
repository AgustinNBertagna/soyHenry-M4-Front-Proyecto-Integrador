import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  name,
  description,
  price,
  stock,
}): React.ReactElement => {
  return (
    <aside className="border-2 border-stone-100 p-4">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </aside>
  );
};

export default Card;
