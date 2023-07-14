import { useState, useEffect, useRef } from "react";

function InputTask() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [newInput, setNewInput] = useState("");

  const ref = useRef();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const element = ref.current;
    console.log(element);
  }, [array]);
  const buttonSaveHandler = () => {
    if (+input) {
      setArray([
        ...array,
        {
          input:
            parseFloat(Math.round(input)) % 2 === 0 ? (
              <p>{`${input} is Pair.`}</p>
            ) : (
              <p>{`${input} is Odd.`}</p>
            ),
        },
      ]);
    } else if (input !== "") {
      setArray([...array, { input: input }]);
    } else {
      alert("Plase enter a value");
    }

    setInput("");
  };
  const deleteButtonHandler = (index) => {
    setArray(array.filter((o, i) => index !== i));
    console.log(array);
  };
  const editButtonHandler = (index) => {
    array[index] = newInput;
    setArray(array);
  };
  const inputChangeHandler = (e) => {
    setNewInput(e.target.value);
  };
  console.log(array);
  return (
    <div>
      <div>
        <input type="text" value={input} onChange={inputHandler}></input>
        <button type="button" onClick={buttonSaveHandler}>
          Save Input
        </button>
      </div>
      {array.map((e, index) => (
        <div key={index}>
          <h1 ref={ref}>{e.input}</h1>
          <input type="text" onChange={inputChangeHandler}></input>
          <button type="button" onClick={() => editButtonHandler(index)}>
            EDIT
          </button>
          <button type="button" onClick={() => deleteButtonHandler(index)}>
            Delete input
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputTask;
