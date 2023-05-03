import React from 'react'
import ButtonDelete from './Buttons/ButtonDelete'
import ButtonEdit from './Buttons/ButtonEdit'


const List = ({array,setArray, inputValue,setInputValue, validInput, setValidInput}) => {
    
  return (
    <>
        <ul>
            {array.map((item, index)=>(
                <li key={index}>
                    {isNaN(item) 
                    ? <input type="text" value={item}/> 
                    : item % 2 === 0 
                        ? item+'(even)' 
                        : item+'(odd)'}
                    <ButtonDelete array={array} setArray={setArray} index={index} />
                    <ButtonEdit array={array} setArray={setArray} inputValue={inputValue} setInputValue={setInputValue} validInput={validInput} setValidInput={setValidInput} index={index}/>
                </li>
            ))};
        </ul>
    </>
  )
}

export default List