const InputRange = ({ inputRange, setInputRange }) => {
  const inputRangeHandler = (value) => {
    value !== "1" ? setInputRange(0) : setInputRange(1);
  };
  return (
    <div>
      <label htmlFor="inputRange">Entrada 1:</label>
      <div>
        0
        <input
          id="inputRange"
          name="inputRange"
          type="range"
          min="0"
          max="1"
          step="1"
          value={inputRange}
          onChange={(event) => inputRangeHandler(event.target.value)}
        />
        1
      </div>
    </div>
  );
};

export default InputRange;
