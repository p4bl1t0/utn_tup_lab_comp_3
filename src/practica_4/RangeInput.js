import React from "react";

const RangeInput = ({ input4ValueHandler }) => {
  return (
    <>
      <div className="range">
        <label>0</label>
        <input type="range" min="0" max="1" onChange={input4ValueHandler} />
        <label>1</label>
      </div>
    </>
  );
};

export default RangeInput;
