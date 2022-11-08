import Editar from "./Editar"

const Listado = ({arrayLista, borrarItem, editarElemento}) => {

    const borrarOnClick = (index) => {
        borrarItem(index)
    }

    const editarElementoIndex = (index, editValue) => {
        editarElemento(index,editValue )
    }

    return (
        <div>
            {
                arrayLista.map( (item, index) => (
                  !isNaN(Number(item))
                  ? <div key={Math.random()}> 
                        {item %2 === 0 ? "Es par" : "Es impar"} 
                        <button onClick={borrarOnClick.bind(null, index)} type='button'>Borrar</button>
                    </div>
                  : <Editar 
                        key={Math.random()}
                        index= {index} 
                        item= {item} 
                        borrar = {borrarOnClick}
                        edit = {editarElementoIndex}
                    />
                ))
            }
        </div>
    )
}

export default Listado