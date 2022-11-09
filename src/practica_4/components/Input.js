const Input = ({ inputValue }) => {
  const number = Math.round(Math.random());

  const inputHandler = (event) => {
    inputValue(event.target.value === 1 ? 1 : 0);
  };
  return (
    <div>
      <input type="number" placeholder={number} onChange={inputHandler} />
    </div>
  );
};
export default Input;
