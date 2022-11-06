const Input1 = ({ input1Value, setInput1Value }) => {
  const input1Handler = (value) => {
    value !== "1" ? setInput1Value(0) : setInput1Value(1);
  };
  return (
    <div className="calc1">
      <label htmlFor="input1">Entrada 1:</label>
      <input
        type="number"
        id="input1"
        value={input1Value}
        onChange={(event) => input1Handler(event.target.value)}
      />
    </div>
  );
};

export default Input1;
