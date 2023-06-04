import React, { useEffect } from "react";


function LogicGates ({ input3 ,input1,input2,input4, select, setResultado, resultado }) {
 

    useEffect(() => {
        
        switch (select)  {
          case "or":
           
            setResultado(input3 || input2 || input1 || input4  ? "true" : "false");
            break;
          case "and":
            setResultado(input1 && input2 && input3 && input4 ? "true" : "false");
            break;
          case "nand":
            setResultado(input1 || input2 || input3 || input4 ? "false" : "true");
            break;
          case "nor":
            setResultado(input1 && input2 && input3 && input4 ? "false" : "true");
            break;
          default:
            setResultado(input1 + input2 + input3 + input4 % 2 === 1  ? "true" : "false");
            
        }
      }, [input1, select,input2, input3,input4, setResultado]);

      return(
        <div><span>Salida: {resultado}</span></div>
      )

      
}

export default LogicGates;