import React, { useEffect, useState } from 'react'
// Refactorizar la selección y el cálculo de la compuerta lógica 
//como un componente llamado `LogicGates`

// Cambiar lo necesario en `LogicGates` para que al calcularse un nuevo valor de compuerta pueda ser usado por un componente que lo esté invocando.

const LogicGates = ({ value1, value2, setResultado }) => {
  const [selectValue, setSelectValue] = useState();
  const [response, setResponse] = useState();
  
  const selectValueHandler = (e) => {
    setSelectValue(e.target.value)}

  useEffect(() => {
    const result = () => {
    let resultado;

      switch (selectValue) {
          case "AND":
            resultado = value1 && value2 ? 1 : 0 ;
              setResponse(resultado);
              break;
          case "OR":
            resultado = value1 || value2 ? 1 : 0 ;
              setResponse(resultado);
              break;
          case "NAND":
            resultado =  !(value1 && value2) ? 1 : 0 ;
            setResponse(resultado);
            break;
          case "NOR":
            resultado =  !(value1 || value2) ? 1 : 0 ;
            setResponse(resultado);
            break;
          case "XOR":
            resultado =  (value1 || !value2) || (!value1 || value2) ? 1 : 0;
            setResponse(resultado);
            break;
          default:
              return " ";
      }
    }
    result();
  },[value1, value2, selectValue]);

    setResultado(response);
    
    
  return (
    <div>
       <select onChange={selectValueHandler}>
            <option value="default">Elija un operador lógico</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="NAND">NAND</option>
            <option value="NOR">NOR</option>
            <option value="XOR">XOR</option>
        </select>
        {/* <div> 
          <p> Respuesta: {response}</p>
        </div>  */}
    </div>
  )
}

export default LogicGates