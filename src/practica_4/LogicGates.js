import { useState } from "react";


const LogicGates = ({valueOne,valueTwo,resultLg}) => {

    const [output,setOutput] = useState();

    const selectHandler = (e) => {
        let aux = e.target.value; 
        let result;
        switch(aux){
            case "OR": 
                result = Boolean(valueOne || valueTwo).toString()
                break;
            case "AND": 
                result = Boolean(valueOne && valueTwo).toString()
                break;
            case "NAND": 
                result = Boolean(!(valueOne && valueTwo)).toString()
                break;
            case "NOR": 
                result = Boolean(!(valueOne || valueTwo)).toString()
                break;
            case "XOR": 
                result = Boolean(( valueOne && !valueTwo ) || ( !valueOne && valueTwo )).toString()
                break;

            default:  ; 
        }

        setOutput(result)
        resultLg(result === "true"?1:0)

        
    }
    return (
        <div>
            <select onChange={selectHandler} >
                <option disabled selected>select</option>
                <option value="OR">OR</option>
                <option value="AND">AND</option>
                <option value="NAND">NAND</option>
                <option value="NOR">NOR</option>
                <option value="XOR">XOR</option>
            </select>
            <p>{output}</p>
        </div>
    )
}

export default LogicGates;