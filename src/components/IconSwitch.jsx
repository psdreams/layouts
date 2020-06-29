import React from "react";

const IconSwitch = (props) => {
  return (
    <div>
      <div className="switch-btn">
        <i className="material-icons" onClick={props.onSwitch}>
          {props.icon}
        </i>
      </div>
    </div>
  );
};

export default IconSwitch;
