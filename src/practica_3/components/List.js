import React from 'react'



const List = ({array,setArray, inputValue,setInputValue, validInput, setValidInput}) => {
    const deleteItem = (e) => {
        const array2=[...array]
        array2.splice(e,1)
        setArray(array2)
      }

      const editItem= (e) =>{

        const array2=[...array]

        if (isNaN(array2[e])) {
            if (validInput) {
                array2[e] = inputValue;
                setArray(array2);
                setInputValue("");
                setValidInput(false);
              } else {
                alert("no value sent");
              }


        }
      }


  return (
    <div>
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
  )
}

export default List