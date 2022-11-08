import React from 'react'
import "./LogicGates.css";


import { useState } from "react";
import Checkbox from './Checkbox';
import Input1 from './Input1';
import Radio from './Radio';
import Range from './Range';

let valueInput = Number(Math.floor(Math.random() * 2))


const LogicGates = ({ savedEndResult }) => {

    const [resultado, setResultValue] = useState(null)
    const [select, setSelectValue] = useState(null)
    const [resultado2, setResultValue2] = useState(null)
    const [select2, setSelect2Value] = useState(null)

    const [input, setInputValue] = useState(valueInput)
    const [checkbox, setCheckboxValue] = useState(0)
    const [range, setRangeValue] = useState(0);

    const [radio, setRadioValue] = useState(0);

    const [savedValue1, setsavedValue1] = useState("");
    const [savedValue2, setsavedValue2] = useState("");
    const [savedValue3, setsavedValue3] = useState("");

    const saveValue1 = (result) => {
        setsavedValue1(result);
    };

    const saveValue2 = (result) => {
        setsavedValue2(result);
    };

    const saveValue3 = (result) => {
        setsavedValue3(result);
    };


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

    const changeRadioInput = (event) => {
        const radioInput = event.target.value
        radioInput !== '1'
            ? setRadioValue(0)
            : setRadioValue(1)
    }

    const changeRangeInput = (event) => {
        const rangeValue = event.target.value
        rangeValue !== '1'
            ? setRangeValue(0)
            : setRangeValue(1)
    }



    const changeSelectValue = (event) => {
        const select = event.target.value
        let result = 0;
        console.log(select);
        switch (select) {
            case "OR":
                input == "1" || checkbox == 1
                ?
                result = 1
                :
                result = 0
                setResultValue2(result)
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
        savedEndResult(result);

    }

    const changeNewSelectValue = (event) => {
        const select = event.target.value
        let result = 0;
        console.log(select);
        switch (select) {
            case "OR":
                range == 1 || radio == 1
                ?
                result = 1
                :
                result = 0
                setResultValue2(result)
                break;
            case "AND":
                result = range + radio
                result >= 1
                    ? setResultValue2(1)
                    : setResultValue2(0)
                break;
            case "NAND":
                result = range + radio
                result == 0
                    ? setResultValue2(1)
                    : setResultValue2(0)

                break;
            case "NOR":
                result = range * radio
                result == 0
                    ? setResultValue2(1)
                    : setResultValue2(0)
                break;
            case "XOR":
                result = range + radio
                if (range == 0 && radio == 0) { result = 0 };
                if (range == 1 && radio == 1) { result = 0 };
                setResultValue2(result)
                break;
            default:
            //
        }
        savedEndResult(result);

    }


    return (
        <div>
            <div className='block1'>
                <Input1 value={input} onChange={changeValueInput} />
                <Checkbox value={checkbox} onChange={changeCheckboxValue} />
                <div>
                    <label for="selectGate">Compuerta lógica:</label>
                    <select id="selectGate" value={select} onChange={changeSelectValue}>
                        <option value="OR">OR</option>
                        <option value="AND">AND</option>
                        <option value="NAND">NAND</option>
                        <option value="NOR">NOR</option>
                        <option value="XOR">XOR</option>
                    </select>
                    <div><span>Salida: {resultado}</span></div>

                </div>
                <br />

            </div>


            <div className='block2'>
                <Radio addRadio={changeRadioInput} />
                <Range addRange={changeRangeInput} />
                <div>
                    <label for="selectGate2">Compuerta lógica:</label>
                    <select id="selectGate2" value={select2} onChange={changeNewSelectValue}>
                        <option value="OR">OR</option>
                        <option value="AND">AND</option>
                        <option value="NAND">NAND</option>
                        <option value="NOR">NOR</option>
                        <option value="XOR">XOR</option>
                    </select>

                </div>
                <div><span>Salida: {resultado2}</span></div>

            </div>
            <br />


        </div>
    )
}

export default LogicGates