import { useEffect, useState } from "react";
import ValorEditable from "./ValorEditable";

const Listado = ({ list, onDelete, onEditList }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <span>
              {item} : {item % 2 === 0 ? "par" : "Impar"}
            </span>
          ) : (
            <ValorEditable
              value={item}
              onEdit={(newValue) => {
                onEditList(index, newValue);
              }}
            />
          )}
          <button onClick={onDelete.bind(null, index)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};

export default Listado;
