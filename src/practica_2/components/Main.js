import Body from "./Body"
/* import SendLink from "./link"   */
const Main = (props) => {
  return (
    <>
        <Body />
    <nav>           
        <ul>
            <li>
            <a href={props.url} target="_blank">{props.name}</a>
                {/* <SendLink  url ="https://www7.cuevana3.ch/2809/cars" name= "Cars" con otro componente/> */}
            </li>
            <li>
            <a href={props.url1} target="_blank">{props.name1}</a>
                {/* <SendLink url ="https://www.cuevanahd.net/pelicula/cars-2-una-nueva-aventura-sobre-ruedas/" name = "Cars2" con otro componente /> */}
            </li>
        </ul>
    </nav>
    <p>{props.TextAdd}</p>
    </>
  )
}

export default Main