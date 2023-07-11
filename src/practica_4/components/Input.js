const Input = ({ handleInput, value }) => {
  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input value={value} type="number" id="input1" onChange={handleInput} />
    </div>
  );
};
export default Input;
