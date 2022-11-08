const Input = ({ inputValue, setInputValue }) => {
  const inputHandler = (e) => {
    e.target.value === "1" ? setInputValue(1) : setInputValue(0);
  }
  return (
    <div>
      <label>Entrada 1:</label>
      <input onChange={inputHandler} value={inputValue} />
    </div>
  );
};

export default Input;
