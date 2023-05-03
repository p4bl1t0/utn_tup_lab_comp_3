import React, { useState } from "react";
export default function Practica3() {
  //definir un array como state
  const [Array, setArray] = useState([]);
  //Agregar input
  const [inputValue, setInputValue] = useState("");
  //editar
  const [validInput, setValidInput] = useState(false);

  const InputChangeHandler = (e) => {
    const value1 = (e.target.value1);
    setInputValue(e.target.value1);
    setValidInput(value1 !=='');
  };
  const ButtonClickHandler = () => {
    if (inputValue !== " ") {
      const _arr = [...Array];
      _arr.push(inputValue);
      setArray(_arr);
      setInputValue(" "); //Limpia input
    } else {
      alert("Debe rellenar el casillero");
    }
  };
  const ButtonClickHandler1 = (index) => {
    const deleteArr = [...Array];
    deleteArr.splice(index, 1);
    setArray(deleteArr);
  };

const editItem= (index) =>{
    const array2=[...Array];

    if (isNaN(array2[index])) {
        if (validInput) {
            array2[index] = inputValue;
            setArray(array2);
            setInputValue("");
            setValidInput(false);
          } else {
            alert("No hay valor editado");
          }
  }
}

  return (
    <div>
      <h3>Práctica 3</h3>
      <input value={inputValue} onChange={InputChangeHandler} type="text" />
      <button onClick={ButtonClickHandler}>Agregar</button>

      {Array.map((value, index) => {  //Mapeo del arreglo
        return (
          <div key={index}>
            {typeof Number(value) === "number" && !isNaN(value) ? (
              <div>{Math.round(value) % 2 === 0 ? "Par" : "Impar"}</div> //el math round redondea el flotante.
            ) : (
              <input type="text" value={value} readOnly />
            )}
            <button onClick={ButtonClickHandler1.bind(null, index)}>
              Borrar
            </button>
            <button onClick={()=>{editItem(index)}}>Editar</button>

          </div>
        );
      })}
    </div>
  );
}

/*

### Tarea 2: 

* Para cada uno de los items del `array` anterior renderizar dentro de cada fila del listado renderizar un `button` 
etiquetado como "borrar" de manera que al presionar dicho botón se elimine el elemento del arreglo.

* Agregar un `button` junto al campo de texto que se está renderizando cuando el valor es un texto en el listado y etiquetarlo como "editar". 
Al presionarlo debe cambiar el valor del elemento de esa línea en el `array` 
*/