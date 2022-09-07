const LogicRadio = ({ saveRadio }) => {
  return (
    <>
      <label>Entrada 2:</label>
      <div>
        <label for="radioCheck0">0 </label>
        <input
          name="radioCheck"
          type="radio"
          id="radioCheck0"
          value={0}
          onChange={saveRadio}
        />
      </div>
      <div>
        <label for="radioCheck1">1 </label>
        <input
          name="radioCheck"
          type="radio"
          id="radioCheck1"
          value={1}
          onChange={saveRadio}
        />
      </div>
    </>
  );
};

export default LogicRadio;
