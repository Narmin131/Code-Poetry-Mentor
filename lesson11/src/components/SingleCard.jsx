import React from "react";
import { NavLink } from "react-router-dom";
import WishBtn from "./WishBtn";

const SingleCard = ({ product }) => {
  return (
    <>
      <div className="col-lg-3 p-3">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={product.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}$</p>
            <NavLink className="btn btn-primary" to={`/product/${product.id}`}>
              More info
            </NavLink>
            <WishBtn product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
