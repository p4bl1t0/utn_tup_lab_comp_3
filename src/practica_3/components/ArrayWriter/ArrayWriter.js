import React from "react";

const ArrayWriter = ({ array }) => {
  return React.Children.toArray(array.map((item) => {
    if (!isNaN(item) && !isNaN(parseFloat(item))) {
      let evenOdd = Math.round(parseFloat(item)) % 2 === 0 ? "Par" : "Impar";
      return (
        <div>
          <p>{Math.round(item)} ({evenOdd})</p>
        </div>
      );
    } else
      return (
        <div>
          <input defaultValue={item} />
          <button>Borrar</button>
        </div>
      );
  }));
};

export default ArrayWriter;
