const InputRadio = ({ inputRadio, setInputRadio }) => {
  const inputRadioHandler = (value) => {
    value !== "1" ? setInputRadio(0) : setInputRadio(1);
  };
  return (
    <div>
      <label>Entrada 2:</label>
      <div className="inputRadio">
        <label htmlFor="0">0
        <input
          id="0"
          name="valueBinary"
          type="radio"
          value={0}
          onChange={(event) => inputRadioHandler(event.target.value)}
        /></label>
        <label htmlFor="1">1
        <input
          id="Express"
          name="valueBinary"
          type="radio"
          value={1}
          onChange={(event) => inputRadioHandler(event.target.value)}
        /></label>
      </div>
    </div>
  );
};

export default InputRadio;
