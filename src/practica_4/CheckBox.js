const CheckBox = ({ sentCheckBoxValue }) => {
  const checkboxHandler = (e) => {
    let aux = e.target.value ? 1 : 0;
    sentCheckBoxValue(aux);
    console.log(aux);
  };

  return (
    <div>
      <input type="checkbox" onChange={checkboxHandler} />
    </div>
  );
};

export default CheckBox;
