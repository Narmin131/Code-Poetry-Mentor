import React from "react";

const SingleCard = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default SingleCard;
