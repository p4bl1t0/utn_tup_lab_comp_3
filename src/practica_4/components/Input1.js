const Input1 = ({ valueInput1 }) => {
  const randomNumber = Math.round(Math.random());
  const input1Handler = (event) => {
    valueInput1(event.target.value == 1 ? 1 : 0);
  };
  return (
    <div>
      <input
        type="number"
        placeholder={randomNumber}
        onChange={input1Handler}
      />
    </div>
  );
};
export default Input1;
