const CheckBox = ({ setCheckBoxValue }) => {
  const checkboxHandler = (event) => {
    setCheckBoxValue(event.target.checked ? 1 : 0);
  };

  return (
    <div>
      <input type="checkbox" onChange={checkboxHandler} />
    </div>
  );
};

export default CheckBox;
