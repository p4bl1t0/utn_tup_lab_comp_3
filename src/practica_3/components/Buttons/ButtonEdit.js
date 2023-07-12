import React from 'react'

const ButtonEdit = ({array,setArray,inputValue,setInputValue,validInput,setValidInput,index}) => {
    
    const editItem= (e) =>{
        const array2=[...array];

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
    <>
        <button onClick={()=>{editItem(index)}}>Edit</button>
    </>
  )
}

export default ButtonEdit