import { useState } from "react";
import LogicGates from './LogicGates'


export default function Practica4 () {


        /* redondea y tira un numero random entre 0 1 */
    const [ input1, setInput1 ] = useState (Math.round(Math.random()));

    const [ checkbox1, setCheckbox1 ] = useState(false);


    const onInputChange = (e) => {        
        const value = Number(e.target.value)
        if (value === 0 || value === 1 ) {
            setInput1(value)
        } else {
            setInput1(0)
        }
    }

    const onCheckBox = (e) => {
        const check = (e.target.checked)
        if ( check !== false ) {
            setCheckbox1(1)
        } else {
            setCheckbox1(0)
        }
    }
    console.log(checkbox1);  



    return (
        <div className="App">
            <div>
                <label htmlFor="input1">Entrada 1:</label>
                <input type="number" id="input1" value={input1} onChange={onInputChange} />
            </div>
            <div>
                <label><input type="checkbox" value={checkbox1} onClick={onCheckBox} /> Entrada 2</label>
            </div>  
            <LogicGates input1={input1} checkbox1={checkbox1} />
        </div>
    );
}