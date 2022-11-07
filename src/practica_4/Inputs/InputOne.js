const InputOne = ({ holdInputValue }) => {
    return (
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={holdInputValue}/>
      </div>
    ); 
  }; 
  export default InputOne;