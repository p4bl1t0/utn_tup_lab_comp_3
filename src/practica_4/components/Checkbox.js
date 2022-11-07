const Checkbox = ({ inputCheckbox, setInputCheckbox }) => {
  const handlerInputCheckbox = (event) => {
    setInputCheckbox(event.target.checked ? 1 : 0);
  };
  return (
    <div className="calc1">
      <label htmlFor="inputCheckbox">Entrada 2:</label>
      <input
        id="inputCheckbox"
        name="inputCheckbox"
        type="checkbox"
        checked={inputCheckbox}
        onChange={handlerInputCheckbox}
      />
      <label> = {inputCheckbox}</label>
    </div>
  );
};

export default Checkbox;
