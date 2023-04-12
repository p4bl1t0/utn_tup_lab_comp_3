import { useState } from "react";

export default function Practica3() {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDeualt()
    if (inputValue) {
      setArray((prevArray) => [...prevArray, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div>
      <h3>Práctica 3</h3>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}> Submit</button>
      </form>
    </div>
  );
}
