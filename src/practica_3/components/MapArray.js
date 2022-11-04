import Delete from "./Delete";
import Edit from "./Edit";

const MapArray = ({ array, setArray }) => {
  return (
    <>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <>
              {item} - {item % 2 === 0 ? "par" : "impar"}
            </>
          ) : (
            <Edit item={item} index={index} array={array} setArray={setArray} />
          )}
          <Delete array={array} setArray={setArray} index={index} />
        </div>
      ))}
      <p>Array control: {array.toString()}</p>
    </>
  );
};

export default MapArray;
