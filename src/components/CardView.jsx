import React from "react";
import ShopCard from "./ShopCard";

const CardView = (props) => {
  return (
    <div className="card-view">
      {props.cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  );
};

export default CardView;
