import { useState } from "react";
import LogicGates from "./LogicGates";
import Input1 from "./Input1";
import CheckBox from "./CheckBox";
import Input2 from "./Input2";

const Practica4 = () => {
  const [inputValueFather, setInputValueFather] = useState();
  const [checkboxValueFather, setCheckboxValueFather] = useState();
  const [inputRange, setInputRange] = useState(1);
  const [inputRadio, setInputRadio] = useState();
  const [logOne, setLogOne] = useState(0);
  const [logTwo, setLogTwo] = useState(0);

  const sentInputValue = (lc) => {
    setInputValueFather(lc);
  };

  const sentCheckboxValue = (lc) => {
    setCheckboxValueFather(lc);
  };

  const sentRangeValue = (lc) => setInputRange(lc);
  const sentRadioValue = (lc) => setInputRadio(lc);

  const sentValueLogOne = (lc) => setLogOne(lc);
  const sentValueLogTwo = (lc) => setLogTwo(lc);

  return (
    <div>
      <Input1 sentInputValue={sentInputValue} />
      <CheckBox sentCheckBoxValue={sentCheckboxValue} />
      <LogicGates
        inputValue={inputValueFather}
        checkboxValue={checkboxValueFather}
        resultValue={sentValueLogOne}
      />
      <Input2 sentRangeValue={sentRangeValue} sentRadioValue={sentRadioValue} />
      <LogicGates
        valueOne={inputRange}
        value2={inputRadio}
        resultValue={sentValueLogTwo}
      />
      <p>Result 1: {logOne}</p>
      <p>Result 2: {logTwo}</p>
      <LogicGates valueOne={logOne} valueTwo={logTwo} />
    </div>
  );
};

export default Practica4;
