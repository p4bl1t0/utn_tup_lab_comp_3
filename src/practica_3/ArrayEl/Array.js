import EntradaValorEditable from "./EntradaValorEditable";

const Array = ({ array, changeArray, deleteArray }) => {
  const onDeleteButton = (index) => {
    deleteArray(index);
  };

  return array.map((item, index) => {
    if (!isNaN(parseFloat(item) && !isNaN(item))) {  
      let evenOrOdd = Math.round(parseFloat(item)) % 2 === 0 ? "Par" : "Impar"; 
      return (
        <div key={index}> 
          <p> 
            {Math.round(item)} ({evenOrOdd})
          </p>
        </div>
      );
    } else
      return (
        <div key={index}>
          <EntradaValorEditable value={item} onEdit={(newValue) => {
              changeArray(index, newValue);
            }}/>
          <button onClick={() => onDeleteButton(index)}>Borrar</button>
        </div>
      );
  });
};

export default Array;