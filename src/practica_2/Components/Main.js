//Crear el componente `Main` que importará el componente `Body`
// y recibirá como propiedad `pageBody` y además renderizar una lista de menú (`nav` y `ul`) con enlaces a 2 sitios web externos.

import Body from "./Body";

const Main = ({pageBody, Links}) => {
    return ( 
    <div>
      <Body pageBody = {pageBody}/>
        <nav>
          <ul>
              <link><a href= {Links[1]}></a></link>
              <link><a href= {Links[0]}></a></link>
          </ul>
        </nav>
    </div>


//<li> <a href={Links.map((item) => item.url)}></a></li>
//<li> <a href={Links.map((item) => item.url1)}></a></li>
    )
}


export default Main;