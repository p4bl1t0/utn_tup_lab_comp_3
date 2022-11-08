import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import LogicGates from "./components/LogicGates";

export default function Practica4() {
  return (
    <div className="App">
      <div>
        <Input />
        <Checkbox />
        <LogicGates />
        <span>Salida: {}</span>
      </div>
    </div>
  );
}
