
const Select = ({setSelect}) => {

    const  opciones = [
        { value: "or", text: "OR" },
        { value: "and", text: "AND" },
        { value: "nand", text: "NAND" },
        { value: "nor", text: "NOR" },
        { value: "xor", text: "XOR" }
      ]
    const handleSelectChange = (event) => {
    setSelect(event.target.value);
    }; 
  return (
    <div>
        <label for="seletextctGate">Puerta logica:</label>
        <select onChange={handleSelectChange}>
            {opciones.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                {opcion.text}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Select