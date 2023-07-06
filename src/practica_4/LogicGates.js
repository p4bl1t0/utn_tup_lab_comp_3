import { useState } from "react";

const SelectGate = ({input1,checkbox1 }) => {

    const [ resultado, setResultado ] = useState ('')

    const logica = (e) => {
        setResultado(e.target.value); 
    }

  return (
    <>

      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select onChange={logica} id="selectGate">
        <option disabled>Selecione una opcion</option>
        <option value={input1 || checkbox1}>Or</option>
        <option value={input1 && checkbox1}>And</option>
        <option value={!(input1 && checkbox1)}>Nand</option>
        <option value={!(input1 || checkbox1)}>Nor</option>
        <option value={input1 !== checkbox1}>Xor</option>
      </select>
      <div><span>Salida: { resultado } </span></div>

    </>
  );
}

export default SelectGate