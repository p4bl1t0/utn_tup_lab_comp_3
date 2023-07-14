import React from "react";

const Checkbox = ({ checkboxHandler }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" onChange={checkboxHandler} />
    </div>
  );
};

export default Checkbox;