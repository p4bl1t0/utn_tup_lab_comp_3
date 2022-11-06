import { useState } from "react";

const Practica4 = () => {

    const [input1Value,setInput1Value] = useState(Math.round(Math.random()));
    const [input2Value,setInput2Value] = useState();
    const [resultLogic,setResultLogic] = useState();

    const inputValueHandler = (event) => {
        setInput1Value(event.target.value === 1 ? 1 : 0)
    }
    const checkboxHandler = (event) => {
        setInput2Value( event.target.checked ? 1 : 0 )
    }

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
        <div>
            <input value={input1Value} onChange={inputValueHandler}/>
            <input type="checkbox" onChange={checkboxHandler}/>
            <select onChange={selectLogicHandler}>
                <option disabled selected>option</option>
                <option value="OR">OR</option>
                <option value="AND">AND</option>
                <option value="NAND">NAND</option>
                <option value="NOR">NOR</option>
                <option value="XOR">XOR</option>
            </select>
            <p>{Boolean(resultLogic).toString()}</p>
        </div>
    );

}

export default Practica4;