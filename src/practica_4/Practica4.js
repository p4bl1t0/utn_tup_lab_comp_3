import { useRef, useState } from "react";

export default function Practica4 () {
    const input1 = {input1, setInput1} = useState = Math.random(0,1)
    const inputRef = useRef();
    return (
        <div className="App">
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" value={input1}/>
            </div>
            <div>
                <label><input type="checkbox" /> Entrada 2</label>
            </div>
                <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate"></select>
            </div>
            <div><span>Salida: { /* aca iria el resultado*/ }</span></div>
        </div>
    );
}