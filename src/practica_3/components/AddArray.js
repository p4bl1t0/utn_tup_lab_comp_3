import React from 'react'

const AddArray = ({ array, deleteArrayItem }) => {

    const deleteButtonHandler = (index) => {
        console.log(index)
        deleteArrayItem(index);
    }

    return array.map((item, index) => {
        if (!isNaN(item) && !isNaN(parseFloat(item))) {
            let evenOdd = Math.round(parseFloat(item)) % 2 === 0 ? "Par" : "Impar";
            return (
                <div key={index}>
                    <p>
                        {Math.round(item)} ({evenOdd})
                    </p>
                </div>
            );
        }
        else {
            return (
                <div id={index} key={index}>
                    <input defaultValue={item} key={index}/>
                    <button>Editar</button>
                    <button onClick={() => deleteButtonHandler(index)}>Borrar</button>

                </div>
            );
        }

    });
}

export default AddArray