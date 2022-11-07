const Range = ({ holdRangeValue }) => {
    return (
      <div>
        <label htmlFor="range">Entrada 1: </label>
        0<input type="range" id="range" min={0} max={1} defaultValue={0} onChange={holdRangeValue} />1 
      </div>
    );
  }; 
  export default Range;