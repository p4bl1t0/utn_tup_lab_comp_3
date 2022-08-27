const ArrayWriter = ({ array }) => {
  return array.map((item) => {
    if (typeof item == "number") {
      let evenOdd = parseInt(item) % 0 ? "par" : "impar";
      return (
        <div>
          <p>{item}</p>
          <p>{evenOdd}</p>
        </div>
      );
    } else
      return (
        <div>
          <input defaultValue={item} />
          <button>Borrar</button>
        </div>
      );
  });
};

export default ArrayWriter;
