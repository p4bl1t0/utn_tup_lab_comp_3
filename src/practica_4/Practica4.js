import { useRef } from "react";
import Input1 from "./components/Input1";

export default function Practica4 () {
    const inputRef = useRef();
    return (
        <div className="App">
          <Input1/>
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