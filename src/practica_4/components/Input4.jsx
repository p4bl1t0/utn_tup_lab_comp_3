import React from 'react';

const Input4 = ({ input4, setInput4 }) => {
  const radioHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInput4(newValue === 1 ? 1 : 0);
  };

  return (
    <div>
      <label>Entrada 4:</label>
      <input
          type="radio"
          name="input4"
          value={1}
          checked={input4 === 1}
          onChange={radioHandler}
        />
        1
        <input
          type="radio"
          name="input4"
          value={0}
          checked={input4 === 0}
          onChange={radioHandler}
        />
        0
    </div>
  );
};

export default Input4;