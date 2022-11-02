const Delete = ({ array, setArray, index }) => {
  const deleteElementArray = (index) => {
    let auxArray = [...array];
    auxArray.splice(index, 1);
    setArray(auxArray);
  };
  return (
    <button
      onClick={() => {
        deleteElementArray(index);
      }}
    >
      borrar
    </button>
  );
};

export default Delete;
