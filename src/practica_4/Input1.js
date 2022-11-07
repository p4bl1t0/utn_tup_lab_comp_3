const Input1 = ({ sentInputValue }) => {
  const inputValueHandler = (e) => {
    let aux = Number(e.target.value) === 1 ? 1 : 0;
    sentInputValue(aux);
  };

  return (
    <div>
      <input
        placeholder={Math.round(Math.random())}
        onChange={inputValueHandler}
      />
    </div>
  );
};

export default Input1;
