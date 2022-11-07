import { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import LogicGates from "./components/LogicGates";
import Range from "./components/Range";
import Radio from "./components/Radio";
import "./Practica4.css";

const Practica4 = () => {
  const randomValue = Math.round(Math.random());
  const [inputValue, setInputValue] = useState(randomValue);
  const [checkboxValue, setCheckboxValue] = useState("");

  const [resultValue1, setResultValue1] = useState("");
  const [resultValue2, setResultValue2] = useState("");
  const [resultValue3, setResultValue3] = useState("");

  const [rangeValue, setRangeValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  return (
    <>
      <section>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Checkbox
          checkboxValue={checkboxValue}
          setCheckboxValue={setCheckboxValue}
        />
        <LogicGates
          input2={inputValue}
          input1={checkboxValue}
          setResult={setResultValue1}
        />

        <div>
          <span> Resultado: {resultValue1} </span>
        </div>
      </section>

      <section>
        <Range rangeValue={rangeValue} setRangeValue={setRangeValue} />
        <Radio radioValue={radioValue} setRadioValue={setRadioValue} />
        <LogicGates
          input2={radioValue}
          input1={rangeValue}
          setResult={setResultValue2}
        />
        <div>
          <span> Resultado: {resultValue2} </span>
        </div>
      </section>

      <section>
        <LogicGates
          input2={resultValue2}
          input1={resultValue1}
          setResult={setResultValue3}
        />
        <div>
          <span> RESULTADO FINAL: {resultValue3} </span>
        </div>
      </section>
    </>
  );
};

export default Practica4;
