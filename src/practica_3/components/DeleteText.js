import Edit from "./Edit";

const DeleteText = ({ array, deleteArrayItem, changeArrayItem }) => {
  const deleteButtonHandler = (index) => {
    deleteArrayItem(index);
  };

  return array.map((item, index) => {
    if (!isNaN(item) && !isNaN(parseFloat(item))) {
      let evenOdd =
        Math.round(parseFloat(item)) % 2 === 0
          ? "El numero redondeado es Par"
          : "El numero redondeado es Impar";
      return (
        <div key={index}>
          <p>
            {Math.round(item)} {evenOdd}
          </p>
        </div>
      );
    } else
      return (
        <div key={index}>
          <Edit
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

export default DeleteText;
