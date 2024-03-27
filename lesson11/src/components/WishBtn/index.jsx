import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishBtn = ({ product }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleWish = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
    } else {
      addWishlistItem(myProduct);
    }
  };
  return (
    <>
      <button onClick={() => toggleWish(product)}>
        {inWishlist(product.id) ? <i class="fa-solid fa-heart"></i>: <i class="fa-regular fa-heart"></i>}
      </button>
    </>
  );
};

export default WishBtn;
