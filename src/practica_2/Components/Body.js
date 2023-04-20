//Crear el componente `Body` que reciba como parámetro la propiedad `pageBody` y la renderice dentro de una etiqueta `div`

const Body =  ({pageBody}) => {
    return (
        <div><h1>{pageBody}</h1></div>
    )
}

export default Body;
