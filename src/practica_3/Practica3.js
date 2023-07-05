import { useState } from "react";
import Input from "./components/Inputs/Input";
import ButtonPush from "./components/Buttons/ButtonPush";
import List from "./components/List";

export default function Practica3() {
  const [inputValue, setInputValue] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [array, setArray] = useState([]);

  return (
    <>
      <h3>Práctica 3</h3>
      <Input
        setInputValue={setInputValue}
        inputValue={inputValue}
        setValidInput={setValidInput}
      />
      <ButtonPush
        validInput={validInput}
        setValidInput={setValidInput}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setArray={setArray}
        array={array}
      />
      <List
        array={array}
        setArray={setArray}
        setInputValue={setInputValue}
        inputValue={inputValue}
        validInput={validInput}
        setValidInput={setValidInput}
      />
    </>
  );
}
