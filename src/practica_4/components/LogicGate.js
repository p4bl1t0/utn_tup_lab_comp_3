import { useEffect, useState } from "react";

const LogicGate = ({ resultinput1, resultinput2, takeResultHandler }) => {
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState(0);

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };

  useEffect(()=>{
    const calculate = () => {
      let input;
      switch (selected) {
        case 0:
          input = resultinput1 || resultinput2;
          setResult(input)
          break;
        case 1:
          input = resultinput1 && resultinput2;
          setResult(input)
          break;
        case 2:
          input = !(resultinput1 && resultinput2) ? 1 : 0;
          setResult(input)
          break;
        case 3:
          input = !(resultinput1 || resultinput2) ? 1 : 0;
          setResult(input)
          break;
        case 4:
          input = (resultinput1 && !resultinput2) || (!resultinput1 && resultinput2) ? 1 : 0;
          setResult(input)
          break;
        default:
          break;
      }
    };
    calculate();
  },[resultinput1, resultinput2, selected])
 
  takeResultHandler(result)
  
  return (
    <>
    <div>
      <label>Compuerta lógica:</label>
      <select onChange={selectHandler}>
        <option value={0}>OR</option>
        <option value={1}>AND</option>
        <option value={2}>NAND</option>
        <option value={3}>NOR</option>
        <option value={4}>XOR</option>
      </select>
    </div>
    <h3>Resultado: {result}</h3>
    </>
  );
};

export default LogicGate;
