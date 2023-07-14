import { useState } from "react";
import ArrayItem from "./components/ArrayItem";

export default function Practica3() {


  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [showModal, setShowModal] = useState({ show: false, index: null });

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index) => {
    const tempArray = [...array];
    tempArray.splice(index, 1);
    setArray(tempArray);
  };

  const submitEdit = (newValue) => {
    const tempArray = [...array];
    tempArray.splice(showModal.index, 1, newValue);
    setArray(tempArray);
    setShowModal({ show: false, index: null });
  };

  const handleEdit = (i) => {
    setShowModal({ show: true, index: i });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      const newItem = inputValue;
      setArray([...array, newItem]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <form>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button onClick={handleSubmit}> Agregar</button>
      </form>
        
      <div>
        <ArrayItem
          array={array}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          showModal={showModal}
          submitEdit={submitEdit}
        />
      </div>
    </div>
  );
}