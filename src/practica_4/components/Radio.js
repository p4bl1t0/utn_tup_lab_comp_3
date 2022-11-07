import React from "react";

const Radio = ({ radioValue, setRadioValue }) => {

  const radioHandler = (value) => {
    value !== '1' ? setRadioValue(0) : setRadioValue(1);
  };

  return (
    <>
        <div>
            <label htmlFor="input">Entrada 1:</label>
            0<input type="radio"
            name="radioInput"
            value='0'
            onChange={(event) => radioHandler(event.target.value)}
            />
            1<input type="radio"
            name="radioInput"
            value='1'
            onChange={(event) => radioHandler(event.target.value)}
            />
        </div>
    </>
  );
};

export default Radio;