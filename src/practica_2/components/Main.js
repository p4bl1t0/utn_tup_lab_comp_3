import Body from "./Body"
import SendLink from "./link"
const Main = (props) => {
  return (
    <>
        <Body />
    <nav>           
        <ul>
            <li>
                <SendLink  url ="https://www7.cuevana3.ch/2809/cars" name= "Cars"/>
            </li>
            <li>
                <SendLink url ="https://www.cuevanahd.net/pelicula/cars-2-una-nueva-aventura-sobre-ruedas/" name = "Cars2"/>
            </li>
        </ul>
    </nav>
    <p>{props.name}</p>
    </>
  )
}

export default Main