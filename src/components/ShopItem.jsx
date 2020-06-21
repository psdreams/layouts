import React from "react";

const ShopItem = (props) => {
  return (
    <div className="shop-card">
      <img src={props.card.img} alt="" />
      <div>{props.card.name}</div>
      <div>{props.card.color}</div>
      <div>${props.card.price}</div>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopItem;
