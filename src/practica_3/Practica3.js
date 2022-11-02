import { useState } from "react";
import InputArray from "./components/InputArray";
import MapArray from "./components/MapArray";

export default function Practica3() {
  const [array, setArray] = useState([]);
  return (
    <div>
      <h2>Practica3</h2>
      <InputArray array={array} setArray={setArray} />
      <MapArray array={array} setArray={setArray} />
    </div>
  );
}
