import { useState } from "react";

export default function Practica3() {
  const [inputValue, setInput] = useState("");
  const [result, setResult] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const buttonSaveHandler = () => {
    // if (inputValue !== "") {
    //   setResult([...result, { inputValue: inputValue }]);
    // }
    if (!isNaN(inputValue)) {
      setResult([...result, parseInt({ inputValue: inputValue })]);
    } else {
      alert("asd");
    }

    // eslint-disable-next-line no-lone-blocks
    // {
    //   inputValue !== ""
    //     ? setResult([...result, { inputValue: inputValue }])
    //     : alert("Please add ");
    // }

    setInput("");
  };
  console.log(result);

  return (
    <div>
      <h3>Práctica 3</h3>
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
/*
### Tarea 1

* Crear un `input=text` y un `button`. Agregar un `handler` al `button` que al presionar agregué a un `array`  el valor ingresado en el `input`. Si el campo está vacío no se debería agregar al arreglo. Tras agregar el valor del campo, el mismo debería limpiarse. El `array` debe manejarse como un `state`.

* Renderizar cada item del array en pantalla. Si el valor ingresado "parsea" cómo númerico mostrar el valor e indicar como texto si es "par" o "impar" el valor ingresado (redondearlo en caso de ser flotante). Si el valor ingresado es un texto mostrarlo dentro de una caja de texto (`input=text`).

* Bonus: Generar cada uno de los elementos anteriores como un componente separado en un archivo separado.
*/
