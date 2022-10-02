import Input from "./Input";

const Form = ({ array, deleteElement, onEdit }) => {
  return (
    <>
      <div>
        {array.map((item, index) => (
          <div key={index}>
            {!isNaN(Number(item)) ? (
              <p>{Number(item) % 2 ? "Es impar" : "Es par"}</p>
            ) : (
              <input item={item} index={index} onEdit={onEdit} />
            )}

            <button onClick={() => deleteElement(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
