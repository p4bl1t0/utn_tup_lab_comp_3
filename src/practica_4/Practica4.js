import { useRef } from "react";
import Input1 from "./components/Input1";


export default function Practica4 () {
    const inputRef = useRef();
    return (
        <div className="App">
<<<<<<< HEAD
            
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" />
            </div>
=======
          <Input1/>
>>>>>>> ebbe27322464d0bb1ff30893a98a5a6b725e02b3
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