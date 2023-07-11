import { useRef } from "react";

export const Input2 = ({ setInput2 }) => {
    const inputRef2 = useRef();
    const  guardarValorCheck = () => {
        const valueCheck = inputRef2.current.checked;
        console.log(valueCheck)
        
        setInput2( valueCheck=== true ? 1 : 0 );
    }

  return (
    <div>
        <label>Entrada 2 </label>
        <input ref={inputRef2} onChange={guardarValorCheck} type="checkbox" />
    </div>
  )
}