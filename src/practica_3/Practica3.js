/* Unidad 2.2 - Listas dinámicas y renderizado condicional - Práctica

### Tarea 1

 Crear un `input=text` y un `button`. Agregar un `handler` al `button` que al presionar agregué a un `array`  
 el valor ingresado en el `input`. Si el campo está vacío no se debería agregar al arreglo. 
 Tras agregar el valor del campo, el mismo debería limpiarse. El `array` debe manejarse como un `state`.

* Renderizar cada item del array en pantalla. 
Si el valor ingresado "parsea" cómo númerico mostrar el valor e indicar como texto si es "par" o "impar" el valor ingresado (redondearlo en caso de ser flotante). 
Si el valor ingresado es un texto mostrarlo dentro de una caja de texto (`input=text`).

* Bonus: Generar cada uno de los elementos anteriores como un componente separado en un archivo separado.

### Tarea 2: 

* Para cada uno de los items del `array` anterior renderizar dentro de cada fila del listado renderizar un `button` 
etiquetado como "borrar" de manera que al presionar dicho botón se elimine el elemento del arreglo.

* Agregar un `button` junto al campo de texto que se está renderizando cuando el valor es un texto en el listado y 
etiquetarlo como "editar". Al presionarlo debe cambiar el valor del elemento de esa línea en el `array` 
*/

// Input y obtener este valor
// botón guardar esto en un arreglo

import { useState } from "react";

import Listado from "./Components/Listado";

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onAddButtonClick = () => {
    setArray(array.concat([inputValue]));
    setInputValue("");
  };

  const onDeleteItemHandler = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  const onEditItemHandler = (index, newValue) => {
    let editedArray = array.splice(0);
    editedArray[index] = newValue;
    setArray(editedArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>

      <input value={inputValue} onChange={onInputChange} />

      <button onClick={onAddButtonClick}>Agregar Valor</button>

      <Listado list={array} onDelete={onDeleteItemHandler} onEditList={onEditItemHandler} />
    </div>
  );
}
