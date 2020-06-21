import React from "react";

const ShopCard = (props) => {
  return (
    <div className="shop-card">
      <div>{props.card.name}</div>
      <div>{props.card.color}</div>
      <img src={props.card.img} alt="" />
      <div className="shop-card-botline">
        <div>${props.card.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
