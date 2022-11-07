const LogicGates = ({ value1, value2, output, setOutput }) => {
  const selectHandler = (event) => {
    switch (event.target.value) {
      case "OR":
        setOutput(Boolean(value1 || value2).toString());
        break;
      case "AND":
        setOutput(Boolean(value1 && value2).toString());
        break;
      case "NAND":
        setOutput(Boolean(!(value1 && value2)).toString());
        break;
      case "NOR":
        setOutput(Boolean(!(value1 || value2)).toString());
        break;
      case "XOR":
        setOutput(Boolean((value1 && !value2) || (!value1 && value2)).toString());
        break;

      default:
    }
  };
  return (
    <div>
      <select onChange={selectHandler}>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
      <p>Salida: {output}</p>
    </div>
  );
};

export default LogicGates;
