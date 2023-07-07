//Crear el componente `Main` que importará el componente `Body`
// y recibirá como propiedad `pageBody` y además renderizar una lista de menú (`nav` y `ul`) con enlaces a 2 sitios web externos.

import Body from "./Body";


const Main = ({pageBody, links}) => {
    return (
      <div>
        <Body pageBody = {pageBody}/>
          <nav>
              <ul>
                  <li>
                    <a href={links[0]}>{links[0]}</a>
                  </li>
                  <li>
                    <a href={links[1]}>{links[1]}</a>
                  </li>
              </ul>
          </nav>
      </div>
  )
  }



export default Main;