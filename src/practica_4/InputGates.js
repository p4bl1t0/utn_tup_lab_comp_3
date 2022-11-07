const InputGates = ({ gateInput }) => {
  return (
    <div>
      <label for="input1">Entrada 1:</label>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="number" id="input1" onChange={gateInput} />
    </div>
  );
};
export default InputGates;
