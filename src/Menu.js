import { useContext } from "react";
import ContextMenu from "./ContextMenu";

export default function Menu() {
  const { path, pathHandler } = useContext(ContextMenu);

  const choosePath = (value) => {
    pathHandler(value);
  };

  return (
    <div>
      <h1>TUP - Laboratorio de computación 3 - Práctica</h1>
      <div>
        <button onClick={choosePath.bind(this, "practica_1")}>
          Practica 1
        </button>
        <button onClick={choosePath.bind(this, "practica_2")}>
          Practica 2
        </button>
        <button onClick={choosePath.bind(this, "practica_3")}>
          Practica 3
        </button>
        <button onClick={choosePath.bind(this, "practica_4")}>
          Practica 4
        </button>
      </div>
    </div>
  );
}
