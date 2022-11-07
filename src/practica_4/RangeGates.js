const RangeGates = ({ rangeGate }) => {
  return (
    <div>
      <label for="input3">Entrada 1:</label>
      <label htmlFor="input3">Entrada 1:</label>
      0
      <input
        type="range"
        id="input3"
        min={0}
        max={1}
        defaultValue={0}
        onChange={rangeGate}
      />
      1
    </div>
  );
};
export default RangeGates;
