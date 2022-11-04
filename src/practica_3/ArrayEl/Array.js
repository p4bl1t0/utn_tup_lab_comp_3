import EntradaValorEditable from "./EntradaValorEditable";

const Array = ({ array, deleteArrayItem, changeArrayItem }) => {
  const deleteButtonHandler = (index) => {
    deleteArrayItem(index);
  };

  return array.map((item, index) => {
    if (!isNaN(item) && !isNaN(parseFloat(item))) { 
      let evenOdd = Math.round(parseFloat(item)) % 2 === 0 ? "Par" : "Impar";
      return (
        <div key={index}>
          <p>
            {Math.round(item)} ({evenOdd})
          </p>
        </div>
      );
    } else
      return (
        <div key={index}>
          <EntradaValorEditable
            value={item}
            onEdit={(newValue) => {
              changeArrayItem(index, newValue);
            }}
          />
          <button onClick={() => deleteButtonHandler(index)}>Borrar</button>
        </div>
      );
  });
};

export default Array;