import { useEffect, useRef, useState } from "react";

import LogicGates from "./components/LogicGates/LogicGates";
import Inputs from "./components/Inputs/Inputs";

import "./practica4.css"

export default function Practica4() {
    const inputRef = useRef();

    const [input1, setInput1] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [result, setResult] = useState("");

    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [result2, setResult2] = useState("");

    const [finalResult, setFinalResult] = useState("");

    useEffect(() => {
        setInput1(Math.round(Math.random(1)));
    }, []);

    const handleInput2Change = (event) => {
        setInput2(event.target.value);
    };

    const handleInput3Change = (event) => {
        setInput3(event.target.value);
    };

    return (
        <div className="AppPractica4">
            <div className="logicGates">
                <h2>Compuertas logicas (input number & input checkbox)</h2>
                <Inputs
                    input1={input1}
                    setInput1={setInput1}
                    checkboxValue={checkboxValue}
                    setCheckboxValue={setCheckboxValue}
                />
                <LogicGates
                    inputValue={input1}
                    checkboxValue={checkboxValue}
                    result={result}
                    setResult={setResult}
                />
            </div>
            <div className="logicGates">
                <h2>Compuertas logicas (input range & input radio)</h2>
                Entrada 1:
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="1"
                    value={input2}
                    onChange={handleInput2Change}
                />
                <div>
                    Entrada 2:
                    <label>
                        <input
                            type="radio"
                            value="1"
                            checked={input3 === "1"}
                            onChange={handleInput3Change}
                        />
                        1
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="0"
                            checked={input3 === "0"}
                            onChange={handleInput3Change}
                        />
                        0
                    </label>
                </div>
                <LogicGates
                    inputValue={Number(input2)}
                    checkboxValue={Number(input3)}
                    result={result2}
                    setResult={setResult2}
                />
            </div>
            <div className="logicGates">
                <h2>Compuertas logicas para ambos LogicGates:</h2>
                <LogicGates
                    inputValue={result}
                    checkboxValue={result2}
                    result={finalResult}
                    setResult={setFinalResult}
                />
            </div>
        </div>
    );
}

