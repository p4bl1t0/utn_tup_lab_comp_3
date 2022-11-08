import { useState } from "react";
import CheckBox from "./components/CheckBox";
import Input1 from "./components/Input1";
import LogicGates from "./components/LogicGates";

export default function Practica4 () {
    const rand = Math.round(Math.random());
    const [enteredInput, setEnteredInput] = useState(rand);
    const [enteredCheck, setEnteredCheck] = useState(0);
    const [enteredRange, setEnteredRange] = useState(0);
    const [enteredRadio, setEnteredRadio] = useState(0);
    const [resultado1, setResultado1] = useState();
    const [resultado2, setResultado2] = useState();
    const [resultado3, setResultado3] = useState();

    //Agregar dos nuevos inputs en App.js (type `range` y `radio`) para capturar dos entradas más 0 o 1.
    const valueRangeHandler = (e) => {
        let variable = e.target.value
        setEnteredRange(parseInt(variable))  
    }
    const valueRadioHandler = (e) => {
        let variable = e.target.value
        setEnteredRadio(parseInt(variable))  
    }

    return (
        <div>
            <h3>Calculo 1</h3>
            <div>
                <label>Input type range:</label>
                <input 
                    type='range' 
                    id="volume" 
                    name="volume"
                    min="0" 
                    max="1"
                    onChange={valueRangeHandler}
                    value={enteredRange}/>
            </div>
            <div>
                <label>Input type radio:</label>
                <form onChange={valueRadioHandler}>
                    <div>
                        <input type="radio" id="0" name="binario" value="0"/>
                        <label>0</label>
                    </div>
                    <div>
                        <input type="radio" id="1" name="binario" value="1"/>
                        <label>1</label>
                    </div>
                </form>
            </div>
            <div>
                <LogicGates key={0}
                    value1={enteredRange} 
                    value2={enteredRadio}
                    setResultado={setResultado1}/>
                <h3>Calculo 2</h3>
                <Input1 
                    setEnteredInput={setEnteredInput} 
                    enteredInput={enteredInput}/>
                <CheckBox 
                    setEnteredCheck={setEnteredCheck} 
                    enteredCheck={enteredCheck}/>
                <LogicGates key={1}
                    value1={enteredInput} 
                    value2={enteredCheck}
                    setResultado={setResultado2}/>
                <h3>Calculo 3</h3>
                <LogicGates key={2}
                    value1={resultado1}
                    value2={resultado2}
                    setResultado={setResultado3}
                    />
            </div>
            <div>
                <h2>Resultados:</h2>
               <p> Resultado 1: {resultado1}</p> 
               <p> Resultado 2: {resultado2}</p> 
               <p> Resultado final: {resultado3}</p> 
            </div>
        </div>
    );
}