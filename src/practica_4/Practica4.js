// - Crear un state para el valor del `input1` definirle
// un valor inicial random (1 o 0).
// - Permitir que el usuario pueda cambiarle el valor a 
// `input1` definiendo 1 o 0. Si el usuario cargase otra cosa setear el valor 0.


// - Capturar el valor del `checkbox` en un estado de
//  React si el input está seleccionado guardar 1 sino guardar 0.

import { useState } from "react";

let valueInput = Number(Math.floor(Math.random() * 2))

export default function Practica4() {

    const [input, setInputValue] = useState(valueInput)
    const [checkbox, setCheckboxValue] = useState(0)
    const [select, setSelectValue] = useState(null)
    const [resultado, setResultValue] = useState(null)


    const changeValueInput = (event) => {
        const value = event.target.value
        console.log(value);
        value !== '1'
            ? setInputValue(0)
            : setInputValue(1)
        console.log(typeof input);
    }

    const changeCheckboxValue = (event) => {
        const checkbox = event.target.value
        checkbox == 0
            ? setCheckboxValue(1)
            : setCheckboxValue(0)
        console.log(checkbox);

    }

    const changeSelectValue = (event) => {
        const select = event.target.value
        let result = 0;
        console.log(select);
        switch (select) {
            case "OR":
                result = input * checkbox
                setResultValue(result)
                break;
            case "AND":
                result = input + checkbox
                result >= 1
                ? setResultValue(1)
                : setResultValue(0)
                break;
            case "NAND":
                result = input + checkbox
                result == 0
                ? setResultValue(1)
                : setResultValue(0)
                
                break;
            case "NOR":
                result = input * checkbox
                result == 0
                ? setResultValue(1)
                : setResultValue(0)
                break;
            case "XOR":
                result = input + checkbox
                if (input == 0 && checkbox == 0) { result = 0 };
                if (input == 1 && checkbox == 1) { result = 0 };
                setResultValue(result)
                break;
            default:
                //
        }

    }

    return (
        <div className="App">
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" value={input} onChange={changeValueInput} />
            </div>
            <div>
                <label><input type="checkbox" value={checkbox} onChange={changeCheckboxValue} /> Entrada 2</label>
            </div>
            <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate" value={select} onChange={changeSelectValue}>
                    <option value="OR">OR</option>
                    <option value="AND">AND</option>
                    <option value="NAND">NAND</option>
                    <option value="NOR">NOR</option>
                    <option value="XOR">XOR</option>
                </select>

            </div>
            <div><span>Salida: { resultado}</span></div>
        </div>
    );
}