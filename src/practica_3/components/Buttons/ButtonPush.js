import React from "react";

const ButtonPush = ({validInput,setValidInput,inputValue,setInputValue,setArray,array}) => {
    
    
  const pushArray = () => {
    if (validInput) {
      if (!isNaN(inputValue) && inputValue % 1 !== 0) {
        setArray(array.concat(Math.round(inputValue)));
      } else {
        setArray(array.concat(inputValue));
      }
      setInputValue("");
      setValidInput(false);
    } else {
      console.log("no value sent");
    }
  };
  return (
    <>
     <button onClick={pushArray}>Push array</button>
    </>
  );
};

export default ButtonPush;
