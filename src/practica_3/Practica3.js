import {useState} from "react";

import Form from "./components/Form";

const Practica3 = ()=>{
    const [array,setArray] = useState([]);
    const [itemArray,setItemArray] = useState("");
    
    //Función para setaer el valor de 'itemArray'
    const pushContentHandler = (event) =>{
        setItemArray(event.target.value)
    };

    //Función para agregar elemetos al arreglo 
    const dataInputHandler = (event) => {

        event.preventDefault()
        if(itemArray !== ""){
            setArray(array.concat([itemArray])) ;
        }
        setItemArray("");
    };

    //Función para eliminar elemetos al arreglo 
    const deleteElement = (index) =>{
        let copyArray = [...array]
        copyArray.splice(index,1)
        setArray(copyArray)
    }

    //Función para editar elemetos al arreglo 
    const onEditHandler = (index,newValue) => {

        let copyArray = [...array]
        copyArray[index]= newValue
        setArray(copyArray)
        console.log(array)

    }


    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" value={itemArray} onChange={pushContentHandler}></input>
            <button type="submit" onClick={dataInputHandler}>click!</button>
            <Form array={array} deleteElement={deleteElement} onEdit={onEditHandler}/>
        </div>
    );
}

 
export default Practica3;