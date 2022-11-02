const Edit = ({array, setArray, index}) => {
    const editText = (index) =>{
        let auxArray = array.splice(0);
        //auxArray.splice(index, 1, "cambiado");
        auxArray[index]="nuevo valor";
        setArray(auxArray);
    }
  return (
    <button onClick={()=>{editText(index)}}>Editar</button>
  )
}

export default Edit