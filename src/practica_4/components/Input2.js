const Input2 = ({ valueInput2 }) => {
  const input2Handler = (event) => {
    valueInput2(event.target.checked ? 1 : 0);
  };
  return (
    <div>
      <input type="checkbox" onChange={input2Handler} />
    </div>
  );
};
export default Input2;
