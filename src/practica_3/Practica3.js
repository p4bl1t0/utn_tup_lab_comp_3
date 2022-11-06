import { useState } from "react";

export default function Practica3() {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  const onInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const onInputValueAddClick = () => {
    setArray(array.concat([inputValue]));
    setInputValue("");
  };

  const onDeleteItemHandler = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input type="text" value={inputValue} onChange={onInputValueChange} />
      <button type="button" onClick={onInputValueAddClick}>
        Agregar
      </button>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <span>
              {item}: {item % 2 === 0 ? "Par" : "Impar"}
            </span>
          ) : (
            <input value={item} />
          )}
          <button
            onClick={() => {
              onDeleteItemHandler(index);
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
}
