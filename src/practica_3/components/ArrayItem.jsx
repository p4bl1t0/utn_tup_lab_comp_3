import { useEffect, useState } from "react";

const ArrayItem = ({
  array,
  handleDelete,
  handleEdit,
  showModal,
  submitEdit,
}) => {
  const [newArray, setNewArray] = useState([]);
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    setNewArray(array);
  }, [array]);

  const handleOnChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <div>
      <ul>
        {array &&
          newArray.map((item, i) => {
            return (
              <li key={i}>
                <div >
                  {parseInt(item)
                    ? Math.round(item) % 2 === 0
                      ? Math.round(item) + " par"
                      : Math.round(item) + " impar"
                    : item}
                </div>
                <button onClick={() => handleDelete(i)}>Borrar</button>
                {!parseInt(item) && (
                  <button onClick={() => handleEdit(i)}>Editar</button>
                )}
              </li>
            );
          })}
      </ul>
      {showModal.show && (
        <form>
          <label htmlFor="new-value">Ingrese el nuevo valor:</label>
          <input onChange={handleOnChange} name="new-value" type="text" />{" "}
          <button onClick={() => submitEdit(newValue)}>Finalizar cambio</button>
        </form>
      )}
    </div>
  );
};
export default ArrayItem;
