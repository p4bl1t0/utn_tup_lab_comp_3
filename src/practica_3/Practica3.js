import { useState } from "react";
import ArrayItem from "./Components/ArrayItem";
import '../App.css'
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
    console.log("borrado" + array);
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
      console.log("Array handleSubmit: " + array);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h3 className="title">Práctica 3</h3>
      <form >
        <input className="input" type="text" value={inputValue} onChange={handleOnChange} />
        <button className="button" onClick={handleSubmit}> Submit</button>
      </form>
        
      <div className="container">
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
