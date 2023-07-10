import React, { useEffect, useState } from 'react'

const LogicGates = ({SelectValue, valueInput, ischecked}) => {
   
    const [value, setvalue] = useState()
    console.log("select",SelectValue)
    console.log("input",valueInput)
    console.log("check",ischecked)
    useEffect(()=>{
    if(SelectValue === "or"){
        (valueInput  == 1 || ischecked == 1 ? setvalue(1):setvalue(0));
    }else if(SelectValue === "and"){
        (valueInput  == 1 && ischecked == 1 ? setvalue(1):setvalue(0));
    }else if(SelectValue === "nand"){
        (!(valueInput  == 1 && ischecked == 1) ? setvalue(1):setvalue(0));
    }else if(SelectValue=== "nor"){
        (!(valueInput  == 1 || ischecked == 1 )? setvalue(1):setvalue(0));
    }else if(SelectValue === "xor"){
        (valueInput  == 1 ^ ischecked == 1 ? setvalue(1):setvalue(0));
    }
    },[SelectValue])
     
  return (
    <div>
        <span>Salida:{value}</span>
    </div>
    

  )
}

export default LogicGates