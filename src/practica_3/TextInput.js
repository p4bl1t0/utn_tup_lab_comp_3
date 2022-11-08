import { useState } from "react";

const TextInput = ({ element, index, borrar, editar }) => {
  const [valor, setValor] = useState(element);

  const valorHandler = (event) => {
    setValor(event.target.value);
  };

  return (
    <>
      <input key={index} type="text" value={valor} onChange={valorHandler} />{" "}
      <button onClick={borrar.bind(this, index)}>Borrar</button>
      <button onClick={editar.bind(this, index, valor)}>Editar</button>
    </>
  );
};

export default TextInput;
