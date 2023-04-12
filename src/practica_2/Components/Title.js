//Crear el componente `Title` que reciba como parámetro la propiedad `pageTitle` y la renderice dentro de una etiqueta de encabezado (`h1`).


const Title = ({pageTitle}) => {
    return (
        <h1> {pageTitle}</h1>
    )
}

export default Title;