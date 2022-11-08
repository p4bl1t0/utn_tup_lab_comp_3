import React from 'react'
import EntradaValorEditable from './EntradaValorEditable'

const Listado = ({ list, onDelete, onEdit }) => {
    
    return (
        <>
        {
            list.map((item, index) => (
                <div key={index}>
                    { !isNaN(Number(item))
                        ? <span>{item}: {(item % 2 === 0 ? "Par" : "Impar")}</span>
                        : <EntradaValorEditable value={item} onEdit={(newValue) => {onEdit(index, newValue)}}/>
                    }
                    <button onClick={onDelete.bind(null, index)}>Borrar</button>
                </div>
            ))
        }
        </>
    )
}

export default Listado