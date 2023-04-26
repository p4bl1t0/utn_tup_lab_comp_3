
import CheckBox from "./components/CheckBox/CheckBox";
import Input1 from "./components/Input1/Input1";


export default function Practica4 () {
    return (
        <div className="App">
          <Input1/>
         <CheckBox />
                <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate">
                    <option disabled>Elija una opccion</option>
                    <option>or</option>
                    <option>and</option>
                    <option>nand</option>
                    <option>nor</option>
                    <option>xor</option>
                </select>
            </div>
            <div><span>Salida: { /* aca iria el resultado*/ }</span></div>
        </div>
    );
}