const Radio = ({handleRadio, radioValue}) => {
  return (
    <div>
    <label htmlFor="input1">Entrada 1:</label>
    <input type="radio" id="radio1" name="radio1" checked={radioValue} value={'radio1'}  onChange={handleRadio} />
  </div>
  )
}
export default Radio