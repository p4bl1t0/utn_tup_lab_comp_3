import { useState, useEffect } from "react";

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
  console.log("Arrayitem: " + newArray);

  const handleOnChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <ul style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        {array &&
          newArray.map((item, i) => {
            return (
              <li style={{ listStyle: "none" }} key={i}>
                <div>
                  {parseInt(item)
                    ? Math.round(item) % 2 === 0
                      ? Math.round(item) + " par"
                      : Math.round(item) + " impar"
                    : item}
                </div>
                <div
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleDelete(i)}
                >
                  Borrar
                </div>
                {!parseInt(item) && (
                  <div
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => handleEdit(i)}
                  >
                    Editar
                  </div>
                )}
              </li>
            );
          })}
      </ul>
      {showModal.show && (
        <form style={{ position: "absolute" }}>
          {" "}
          <label htmlFor="new-value">Ingrese el nuevo valor:</label>
          <input onChange={handleOnChange} name="new-value" type="text" />{" "}
          <button onClick={() => submitEdit(newValue)}>Finalizar cambio</button>
        </form>
      )}
    </div>
  );
};
export default ArrayItem;
