const LogicGates = ({ handleGates }) => {

  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select onChange={handleGates}>
        <option value={"or"} id="optionGate">
          or
        </option>
        <option value={"and"} id="optionGate1">
          and
        </option>
        <option value={"nand"} id="optionGate2">
          nand
        </option>
        <option value={"nor"} id="optionGate3">
          nor
        </option>
        <option value={"xor"} id="optionGate4">
          xor
        </option>
      </select>
    </div>
  );
};
export default LogicGates;
