const Checkbox = ({ checkboxValue }) => {
  const checkboxHandler = (event) => {
    checkboxValue(event.target.checked ? 1 : 0);
  };
  return (
    <div>
      <input type="checkbox" onChange={checkboxHandler} />
    </div>
  );
};
export default Checkbox;
