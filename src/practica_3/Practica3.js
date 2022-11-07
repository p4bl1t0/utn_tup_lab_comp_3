/* ### Tarea 1

* Crear un `input=text` y un `button`. Agregar un `handler` al `button` que al presionar agregué a un `array`  el valor ingresado en el `input`. Si el campo está vacío no se debería agregar al arreglo. Tras agregar el valor del campo, el mismo debería limpiarse. El `array` debe manejarse como un `state`.

* Renderizar cada item del array en pantalla. Si el valor ingresado "parsea" cómo númerico mostrar el valor e indicar como texto si es "par" o "impar" el valor ingresado (redondearlo en caso de ser flotante). Si el valor ingresado es un texto mostrarlo dentro de una caja de texto (`input=text`).

* Bonus: Generar cada uno de los render anterior como un componente separado en un archivo separado. */

import { useState } from "react";

export default function Practica3() {
  const [text, setText] = useState("");
  const captureText = (event) => {
    setText(event.target.value);
  };
  const [array, setArray] = useState([]);

  const buttonHandler = () => {
    if (text.length !== 0) {
      setArray([...array, text]);
    }
    setText("");
  };

  const eraseHandler = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  const editHandler = (index) => {
    array[index] = editedInput;
    alert(array[index]);
  };

  const [editedInput, setEditedInput] = useState("");
  const setInput = (event) => {
    setEditedInput(event.target.value);
  };

  return (
    <>
      <h3>Práctica 3</h3>
      <input value={text} type="text" onChange={captureText} />
      <button type="button" onClick={buttonHandler}>
        GUARDAR
      </button>
      <div>
        {array.map((item, index) => (
          <div>
            {!isNaN(Number(item)) ? (
              <span>
                {item} {item % 2 == 0 ? "es PAR" : "es IMPAR"}
                <button
                  type="button"
                  onClick={() => {
                    eraseHandler(index);
                  }}
                >
                  Borrar
                </button>
              </span>
            ) : (
              <div key={index}>
                <input placeholder={item} type="text" onChange={setInput} />
                <button
                  type="button"
                  onClick={() => {
                    editHandler(index);
                  }}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    eraseHandler(index);
                  }}
                >
                  Borrar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <h2>Tamaño del array: {array.length}</h2>
      <h3>
        <span>contenido del array: </span>
        {array.map((item) => (
          <span>{item} </span>
        ))}
      </h3>
    </>
  );
}
