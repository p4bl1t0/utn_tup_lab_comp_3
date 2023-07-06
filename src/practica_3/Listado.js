import React from "react";
import Inputs from "./Inputs";

const Listado = ({ array, deleteElement, editElement }) => {
  return (
    <>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <span>
              {" "}
              {Math.round(item * 100) / 100} es un numero{" "}
              {item % 2 === 0 ? " par " : " impar "}
            </span>
          ) : (
            <Inputs item={item} index={index} editElement={editElement} />
          )}
          <button
            type="button"
            onClick={() => {
              deleteElement(index);
            }}
          >
            {" "}
            Borrar{" "}
          </button>
        </div>
      ))}
    </>
  );
};

export default Listado;
