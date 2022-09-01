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
            <div> es numero par </div>
          )}
          {!isNaN(Number(item)) && Math.round(item) % 2 !== 0 && (
            <div> es numero impar</div>
          )}
          {isNaN(Number(item)) && <input value={item} />}
        </div>
      ))}
    </div>
  );
}

/* 
Crear un `input=text` y un `button`. Agregar un `handler` al `button` que al presionar agregué a un 
`array`  el valor ingresado en el `input`. Si el campo está vacío no se debería agregar al arreglo. 
Tras agregar el valor del campo, el mismo debería limpiarse. El `array` debe manejarse como un `state`.

* Renderizar cada item del array en pantalla. Si el valor ingresado "parsea" cómo númerico mostrar el
 valor e indicar como texto si es "par" o "impar" el valor ingresado (redondearlo en caso de ser flotante).
  Si el valor ingresado es un texto mostrarlo dentro de una caja de texto (`input=text`).
*/
