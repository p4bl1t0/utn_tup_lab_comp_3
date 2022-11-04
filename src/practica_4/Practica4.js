import { useState,useRef } from "react";

export default function Practica4 () {

    const [input1,setInput1] = useState('');
    const [checkbox1,setCheckBox1] = useState('');

    const input1Handler = (e) =>{
        parseInt(e.target.value) === 1 ? setInput1(1) : setInput1(0);
    }

    const checkbox1Handler = (e) =>{
        parseInt(e.target.value) === true ? setCheckBox1(1) : setCheckBox1(0);
    }

    //const inputRef = useRef();
    
    return (
        <div className="App">
            <div>
                <label htmlFor="input1">Entrada 1:</label>
                <input type="number" id="input1" value={input1} onChange={input1Handler} />
            </div>

            <div>
                <label>
                    <input type="checkbox" value={checkbox1} onChange={checkbox1Handler} /> Entrada 2:
                </label>
            </div>

            <div>
                <label htmlFor="selectGate">Compuerta lógica:</label>
                <select id="selectGate"> OR </select>
                <select id="selectGate"> AND </select>
                <select id="selectGate"> NAND </select>
                <select id="selectGate"> NOR </select>
                <select id="selectGate"> XOR </select>                
            </div>

            <div>
                <span>Salida: {  }</span>
            </div>
        </div>
    );
}