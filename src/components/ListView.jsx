import React from "react";
import ShopItem from "./ShopItem";

const ListView = (props) => {
  return (
    <div className="list-view">
      {props.items.map((card, index) => (
        <ShopItem key={index} card={card} />
      ))}
    </div>
  );
};

export default ListView;
