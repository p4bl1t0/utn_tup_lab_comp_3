import Delete from "./Delete";
import Edit from "./Edit";

const MapArray = ({ array, setArray }) => {
  const handler = (event) =>{
    console.log(event.target.value)
  }
  return (
    <>
      {array.map((item, index) => (
        <div key={index}>
          {!isNaN(Number(item)) ? (
            <>
              {item} - {item % 2 === 0 ? "par" : "impar"}
            </>
          ) : (
            <>
              <input value={item} onChange={(event)=>{handler(event)}}/>
              <Edit index={index} array={array} setArray={setArray}/>
            </>
          )}
          <Delete array={array} setArray={setArray} index={index} />
        </div>
      ))}
    </>
  );
};

export default MapArray;
