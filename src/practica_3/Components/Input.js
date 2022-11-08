import { useState } from "react";

const Input = ({ element, index, boutonDelete, boutonEdit }) => {
  const [valor, setValor] = useState(element);

  const valorHandler = (event) => {
    setValor(event.target.value);
  };

  return (
    <>

      <input key={index} type="text" value={valor} onChange={valorHandler} />{" "}
      
      <button onClick={boutonDelete.bind(this, index)}>Borrar</button>

      <button onClick={boutonEdit.bind(this, index, valor)}>Editar</button>
    </>
  );
};

export default Input;