const LogicInput = ({ saveInput }) => {
  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="number" id="input1" onChange={saveInput} />
    </div>
  );
};

export default LogicInput;
