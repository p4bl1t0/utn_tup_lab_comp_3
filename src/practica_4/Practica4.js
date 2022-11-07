import { useState } from "react";
import Checkbox from "./Checkbox";
import Input1 from "./Input1";
import LogicGates from "./LogicGates";
import RadioInput from "./RadioInput";
import RangeInput from "./RangeInput";
import './p4.css'

const Practica4 = () => {

    const [input1Value,setInput1Value] = useState(Math.round(Math.random()));
    const [input2Value,setInput2Value] = useState(0);
    const [input3Value,setInput3Value] = useState(0);
    const [input4Value,setInput4Value] = useState(0);
    const [resultLogic1,setResultLogic1] = useState();
    const [resultLogic2,setResultLogic2] = useState();
    const [resultLogic3,setResultLogic3] = useState();

    const input1ValueHandler = (event) => {
        setInput1Value(event.target.value === 1 ? 1 : 0)
    }
    const input2ValueHandler = (event) => {
        setInput2Value( event.target.checked ? 1 : 0 )
    }
    const input3ValueHandler = (event) => {
        setInput3Value(parseInt(event.target.value))
    }
    const input4ValueHandler = (event) => {
        setInput4Value(parseInt(event.target.value))
    }

    const colorHandler = (result) => {
        return Boolean(result).toString() === "true" ? "true" : "false"
    }

    return (
        <div className="items">
            <div className="item">
                <label>Logica 1:</label>
                <br/>
                <Input1 input1Value={input1Value} inputValueHandler={input1ValueHandler}/>
                <Checkbox checkboxHandler={input2ValueHandler}/>
                <LogicGates setResultLogic={setResultLogic1} input1Value={input1Value} input2Value={input2Value}/>
                <br/>
                <label>Resultado logica 1</label>
                <p className={colorHandler(resultLogic1)}>{resultLogic1}</p>
            </div>
            <div className="item">
                <label>Logica 2:</label>
                <br/>
                <RadioInput input3ValueHandler={input3ValueHandler}/>
                <RangeInput input4ValueHandler={input4ValueHandler}/>
                <LogicGates setResultLogic={setResultLogic2} input1Value={input3Value} input2Value={input4Value}/>
                <br/>
                <label>Resultado logica 2</label>
                <p className={colorHandler(resultLogic2)}>{resultLogic2}</p>
            </div>
            <div className="item">
                <label>Logica 3:</label>
                <br/>
                <LogicGates setResultLogic={setResultLogic3} input1Value={resultLogic1} input2Value={resultLogic2}/>
                <br/>
                <label>Resultado logicas 1 y 2</label>
                <p className={colorHandler(resultLogic3)}>{resultLogic3}</p>
            </div>
        </div>
    );

}

export default Practica4;