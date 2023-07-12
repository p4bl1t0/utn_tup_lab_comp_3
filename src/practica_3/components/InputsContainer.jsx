import React from "react";
import Input from "./Input";

const InputsContainer = ({ array, deleteElement, editElement }) => {
  return (
    <>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <span>
              {Math.round(item)} es
              {item % 2 === 0 ? " par " : " impar "}
            </span>
          ) : (
            <Input item={item} index={index} editElement={editElement} />
          )}
          <button
            type="button"
            onClick={() => {
              deleteElement(index);
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </>
  );
};

export default InputsContainer;