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
        {
          inputValue:
            parseFloat(Math.round(inputValue)) % 2 === 0 ? (
              <p>{`${inputValue} is Pair.`}</p>
            ) : (
              <p>{`${inputValue} is Odd.`}</p>
            ),
        },
      ]);
    } else if (inputValue !== "") {
      setResult([...result, { inputValue: inputValue }]);
    } else {
      alert("Plase enter a value");
    }

    setInput("");
  };
  const deleteButtonHandler = () => {
    setResult(result.splice());
  };
  const editButtonHandler = () => {
    setResult("cambiado");
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
        <button type="button" onClick={deleteButtonHandler}>
          Delete input
        </button>
      </div>
      {result.map((e, i) => (
        <div key={i}>
          <h1>{e.inputValue}</h1>
          <button type="button" onClick={editButtonHandler}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputTask;
