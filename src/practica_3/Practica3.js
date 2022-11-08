import uuid from 'react-uuid';
import { useState } from "react";
import Input from "./Components/Input";

export default function Practica3() {
  const [input, setInput] = useState();
  
  const [listInputs, setListInputs] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addValue = () => {
    if (input) {
      const ListChanged = [input, ...listInputs];
      setListInputs(ListChanged);
    }
  };

  const editValue = (i, value) => {
    const ListChanged = [...listInputs];
    ListChanged.splice(i, 1, value);
    setListInputs(ListChanged);
  };

  const deleteValue = (i) => {
    const ListChanged = [...listInputs];
    ListChanged.splice(i, 1);
    setListInputs(ListChanged);
  };


  return (
    <div>
      <input onChange={inputHandler} value={input} />
      <button onClick={addValue}>Enviar</button>
      <p>
        { 
        listInputs.map((value, i) => (
        <p key={uuid()}>
            {value + "\t"}  {parseInt(value) ? ( value % 2 ? ( " ===> Impar" ) : (" ===> Par" )
            ) : ( <Input key={uuid()} value={value} index={i} boutonDelete={deleteValue} boutonEdit={editValue}/> )}
        </p> ))
        }
      </p>
    </div>
  );
}