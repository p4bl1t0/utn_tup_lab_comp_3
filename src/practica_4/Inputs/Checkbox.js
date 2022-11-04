const Checkbox = ({ saveCheckbox, checkboxValue }) => {
    return (
      <div>
        <label htmlFor="Checkbox">Entrada 2:</label>
        <input type="checkbox" onChange={saveCheckbox} value={checkboxValue} id="Checkbox"/>
      </div>
    );
  };
  
  export default Checkbox