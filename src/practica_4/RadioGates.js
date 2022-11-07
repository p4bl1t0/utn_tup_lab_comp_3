const RadioGates = ({ checkRadio }) => {
  return (
    <>
      <label>Entrada 2:</label>
      <div>
        <label for="Checkradio0">0 </label>
        <label htmlFor="Checkradio0">0 </label>
        <input
          name="Checkradio"
          type="radio"
          id="Checkradio0"
          value={0}
          onChange={checkRadio}
        />
      </div>
      <div>
        <label for="Checkradio1">1 </label>
        <label htmlFor="Checkradio1">1 </label>
        <input
          name="Checkradio"
          type="radio"
          id="Checkradio1"
          value={1}
          onChange={checkRadio}
        />
      </div>
    </>
  );
};
export default RadioGates;
