import InputValue from "./InputValue";

export default function Listado({ list, onDelete, onEdit }) {
  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <div>
              {" "}
              {item}: {item % 2 === 0 ? "Par" : "Impar"}
            </div>
          ) : (
            <InputValue
              value={item}
              onEdit={(editValue) => {
                onEdit(index, editValue);
              }}
            />
          )}
          <button
            onClick={() => {
              onDelete(index);
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </>
  );
}
