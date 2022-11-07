const Radio = ({ holdRadioValue }) => {
    return (
      <>
        <label>Entrada 2: </label>
        <div>
          <label htmlFor="radioCheck1">0</label>
          <input type="radio" id="radioCheck0" value={0} onChange={holdRadioValue}/>
        </div>
        <div>
          <label htmlFor="radioCheck1">1</label>
          <input type="radio" id="radioCheck1" value={1} onChange={holdRadioValue}/> 
        </div>
      </> 
    );
  };
  export default Radio;