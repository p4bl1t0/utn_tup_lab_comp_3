const Checkbox = ({ holdCheckboxValue }) => {
    return (
      <div>
        <label htmlFor="checkbox">Entrada 2:</label>
        <input type="checkbox" onChange={holdCheckboxValue} id="checkbox"/>
      </div>
    ); 
  };
  export default Checkbox