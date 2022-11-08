import { useState } from "react";
import TextInput from "./TextInput";

export default function Practica3() {
  const [input, setInput] = useState();
  const [stuffList, setStuffList] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addElement = () => {
    if (input) {
      const newList = [input, ...stuffList];
      setStuffList(newList);
      setInput("");
    }
  };

  const deleteElement = (index) => {
    const newList = [...stuffList];
    newList.splice(index, 1);
    setStuffList(newList);
  };

  const editElement = (index, value) => {
    const newList = [...stuffList];
    newList.splice(index, 1, value);
    setStuffList(newList);
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} value={input} />
      <button onClick={addElement}>Agregar</button>
      <p>Lista de elementos:</p>
      <ul>
        {stuffList.map((element, index) => (
          <li key={Math.random()}>
            {element}:{" "}
            {parseInt(element) ? (
              Math.round(parseInt(element)) % 2 ? (
                "Impar"
              ) : (
                "Par"
              )
            ) : (
              <TextInput
                key={Math.random()}
                element={element}
                index={index}
                borrar={deleteElement}
                editar={editElement}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
