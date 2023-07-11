const Range = ({handleRange, rangeValue}) => {
  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input type="range" id="range" min={0} max={1} value={rangeValue} onChange={handleRange} />
    </div>
  )
}
export default Range