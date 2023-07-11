import { useRef } from "react";


const Input3 = ({setInput3, input3}) => {
    const inputRef3 = useRef();

    const  guardarValorRange = () => {
        const valueRange = inputRef3.current.value;
        setInput3( valueRange == true ? 1 : 0 );
        
    }
    
  return (
    <div>   
        <label>Entrada 3 </label>
        <input ref={inputRef3} value={input3} onChange={guardarValorRange} type='select'></input>
    </div>
  )
}

export default Input3