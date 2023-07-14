import "../ListMapped/ListMapped.css";

const ListMapped = ({ arrayForList, setNewArray, editButtonHandler }) => {
  const deleteHandler = (item) => {
    const arrayDeleted = arrayForList.filter((element) => element !== item);

    setNewArray(arrayDeleted);
  };
  const editHanlder= (index, newText)=>{
    editButtonHandler(index, newText)
  }
  return (
    <div>
      <ul className="ul-classes">
        {arrayForList.map((item, index) =>
          !isNaN(Number(item)) ? (
            <li key={index} className="li-classes">
              {Math.round(item * 100) / 100} es un numero{" "}
              {item % 2 === 0 ? "Par" : "impar"}
              <button onClick={() => deleteHandler(item)}>Borrar</button>
              <button onClick={()=>editHanlder(index, "Editado")}>Editar</button>
            </li>
          ) : (
            <li key={index} className="li-classes">
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ListMapped;
