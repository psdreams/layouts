import React from "react";

import ListView from "./ListView";
import CardView from "./CardView";

const Store = (props) => {
  return (
    <div>
      {props.icon === "view_module" ? (
        <div>
          <div className="switch-btn">
            <i className="material-icons" onClick={props.onSwitch}>
              view_module
            </i>
          </div>
          <CardView cards={props.products} />
        </div>
      ) : (
        <div>
          <div className="switch-btn">
            <i className="material-icons" onClick={props.onSwitch}>
              view_list
            </i>
          </div>
          <ListView items={props.products} />
        </div>
      )}
    </div>
  );
};

export default Store;
