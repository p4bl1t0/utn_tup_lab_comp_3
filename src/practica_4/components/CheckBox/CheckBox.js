import { useState } from "react";

const CheckBox = () => {
    const [ischecked, Setischecked] = useState(false);
   
    const checkBoxValueHandler = (event) =>{
        Setischecked(true);
    }
    const checkBox = (ischecked ? 1:0);
    console.log("Valor seteado del checkbox:", checkBox);

    
  return (
    <div>
        <label><input type="checkbox" checked={ischecked}  onChange={checkBoxValueHandler} /> Entrada 2</label>
        
    </div>
  )
}   

export default CheckBox