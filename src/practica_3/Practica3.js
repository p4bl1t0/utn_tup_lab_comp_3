import { useState } from "react";

export default function Practica3 () {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [validInput, setValidInput] = useState(false);
    const pushArray= () =>{
        if (validInput){
            if (!isNaN(inputValue) && inputValue % 1 !== 0) {
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
    
      const deleteItem = (e) => {
        const array2=[...array]
        array2.splice(e,1)
        setArray(array2)
      }

      const editItem= (e) =>{
        const array2=[...array]
        
        console.log(array2[e])
        if (isNaN(array2[e])) {
            array2[e] = ""
            setArray(array2)
            console.log(array2)
        }
      }

    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={pushArray}>Push array</button>
            <ul>
                {array.map((item, index)=>(
                    <li key={index}>
                        {isNaN(item) 
                        ? <input type="text" value={item}/> 
                        : item % 2 === 0 
                            ? item+'(even)' 
                            : item+'(odd)'}
                        <button onClick={()=>{deleteItem(index)}}>Delete</button>
                        <button onClick={()=>{editItem(index)}}>Edit</button>
                    </li>
                ))};
            </ul>
        </div>
    );
}