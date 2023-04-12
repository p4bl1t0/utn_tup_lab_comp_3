//Crear el componente `Main` que importará el componente `Body`
// y recibirá como propiedad `pageBody` y además renderizar una lista de menú (`nav` y `ul`) con enlaces a 2 sitios web externos.

import Body from "./Body";

const Main = ({pageBody, url}) => {
    return ( 
    <div>
        <nav>
          <ul>
          </ul>
        </nav>
        <Body pageBody = {pageBody}>
        </Body>
    </div>


    )
}


export default Main;