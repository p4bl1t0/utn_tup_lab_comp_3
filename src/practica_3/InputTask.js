import { useState } from "react";

function InputTask() {
  const [inputValue, setInput] = useState("");
  const [result, setResult] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const buttonSaveHandler = () => {
    if (+inputValue) {
      setResult([
        ...result,
        { inputValue: parseFloat(Math.round(inputValue)) },
      ]);
      {
        inputValue % 2 === 0 ? <p>pair</p> : <p>odd</p>;
      }
    } else if (inputValue !== "") {
      setResult([...result, { inputValue: inputValue }]);
    } else {
      alert("Plase enter a value");
    }

    setInput("");
  };
  console.log(result);
  return (
    <div>
      {" "}
      <div>
        <input type="text" value={inputValue} onChange={inputHandler}></input>
        <button type="button" onClick={buttonSaveHandler}>
          Save Input
        </button>
      </div>
      {result.map((e, i) => (
        <div key={i}>
          <h1>{e.inputValue}</h1>
        </div>
      ))}
    </div>
  );
}

export default InputTask;
