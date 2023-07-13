const LogicRange = ({ saveRange }) => {
    return (
      <div>
        <label htmlFor="input3">Entrada 1:</label>
        0<input type="range" id="input3" min={0} max={1} defaultValue={0} onChange={saveRange} />1
      </div>
    );
  };
  
  export default LogicRange;
  