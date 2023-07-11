import { useRef } from "react";

export const Input1 = ({input1, setInput1}) => {

  const inputRef = useRef();
  const guardarValor = () => {
    const value = inputRef.current.value
    console.log(parseInt(value))
    setInput1(value == true ? 1 : 0 );
}

  return (
    <div> 
      <label for="input1">Entrada 1</label>
      <input ref={inputRef} value={input1} onChange={guardarValor} type="number" id="input1" />
    </div>
  )
}