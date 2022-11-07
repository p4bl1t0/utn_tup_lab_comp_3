const Input1 = ({ InputValue, InputValueHandler }) => {
  const newInputHandler = (event) => {
    InputValueHandler(event.target.value === "1" ? 1 : 0);
  };

  return (
    <div>
      <input type={"number"} value={InputValue} onChange={newInputHandler} />
    </div>
  );
};

export default Input1;
