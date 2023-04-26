import { useState } from "react";

export default function Practica3 () {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [validInput, setValidInput] = useState(false);
    const pushArray= () =>{
        if (validInput){
            if (inputValue % 1 !== 0) {
                setArray(array.concat(Math.round(inputValue))) ;
                
            }else{
                setArray(array.concat((inputValue))) ;
            }
            setInputValue('');
            setValidInput(false);
        }else{
            console.log("no value sent");
        }
    };

    const handleChange = (e) => {
        const value1= (e.target.value);
        setInputValue(value1);
        setValidInput(value1 !=='');
      };
      

    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={pushArray}>Push array</button>
            <ul>
                {array.map((item, index)=>(
                    <li key={index}>
                        {isNaN(item) ? <input type="text" value={item}/>:
                        item % 2 === 0 ? item+'(even)' : item+'(odd)'}
                        <button>Delete</button>
                    </li>
                ))};
            </ul>
        </div>
    );
}