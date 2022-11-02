import { useState } from "react";

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onAddButtonClick = () => {
    if (inputValue !== "") {
      setArray([...array, inputValue]);
      setInputValue("");
    }
  };

  const removItem = (index) => {
    let coppyArray = [...array];
    setArray(array.splice(index, 1));
    setArray(coppyArray);
  };

  /*const onEditItemHandler = (index, newValue) => {
    let coppyArray = [...array];
    coppyArray[index] = newValue;
    setArray(coppyArray);
  };
*/
  return (
    <div>
      <h3>Práctica 3</h3>
      <input type="text" value={inputValue} onChange={onInputChange}></input>
      <button type="button" onClick={onAddButtonClick}>
        Agregar
      </button>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) && Math.round(item) % 2 === 0 && (
            <span> es numero par </span>
          )}

          {!isNaN(Number(item)) && Math.round(item) % 2 !== 0 && (
            <span> {item} es numero impar</span>
          )}
          {isNaN(Number(item)) && <input value={item} />}

          <button onClick={removItem.bind(null, index)}> Borrar </button>
          <button> Editar </button>
        </div>
      ))}
    </div>
  );
}
