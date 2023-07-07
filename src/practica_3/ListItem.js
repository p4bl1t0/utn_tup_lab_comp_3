const ListItem = ({ value, index, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete(index);
    };
  
    const handleEdit = () => {
      onEdit(index);
    };
  
    if (typeof Number(value) === 'number' && !isNaN(value)) {
      return (
        <div>
          {Math.round(value) % 2 === 0 ? 'Par' : 'Impar'}
          <button onClick={handleDelete}>Borrar</button>
        </div>
      );
    } else {
      return (
        <div>
          <input type="text" value={value} readOnly />
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Borrar</button>
        </div>
      );
    }
  };
  
  export default ListItem;
  