import React from 'react'

const LogicGates = ({setResultLogic, input2Value, input1Value}) => {
    const selectLogicHandler = (event) => {

        if (event.target.value === "OR"){
            setResultLogic(input1Value || input2Value)
        } else if(event.target.value === "AND"){
            setResultLogic(input1Value && input2Value)
        } else if(event.target.value === "NAND"){
            setResultLogic(!(input1Value && input2Value))
        }else if (event.target.value === "NOR"){
            setResultLogic(!(input1Value || input2Value))
        } else if(event.target.value === "XOR"){
            setResultLogic(( !input1Value && input2Value )||( input1Value && !input2Value))
        }
    }
  return (
    <>
        <select onChange={selectLogicHandler}>
            <option disabled selected>option</option>
            <option value="OR">OR</option>
            <option value="AND">AND</option>
            <option value="NAND">NAND</option>
            <option value="NOR">NOR</option>
            <option value="XOR">XOR</option>
        </select>
    </>
  )
}

export default LogicGates