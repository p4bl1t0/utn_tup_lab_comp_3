const Checkbox = ({ setCheckboxValue }) => {
  const checkboxValueHandler = (e) => { e.target.checked === true ? setCheckboxValue(1) : setCheckboxValue(0) }
  return (
    <div>
      <label>Entrada 2</label>
        <input type="checkbox" onChange={checkboxValueHandler} /> 
    </div>
  );
};

export default Checkbox
