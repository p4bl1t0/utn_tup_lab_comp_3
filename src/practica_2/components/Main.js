import BlogPost from "./BlogPost"
import Body from "./Body"


const links =[{
    nombre: "facebook",
    link: "https://facebook.com"
},
{
    nombre: "instagram",
    link: "https://instagram.com"

}]

const noticias = {
  titulo: "Temor por una grave lesión de Lisandro Martínez",
  cuerpo: "El defensor argentino se lesionó solo en el encuentro entre Manchester y Sevilla y podría tener comprometido el tendón."
};

const Main = ({pageBody}) => {

  return (
    <>  <div style={{fontStyle: 'italic', backgroundColor: 'red', maxWidth: "33.5%"}}> 
        <Body body={pageBody.toUpperCase()}/>
        </div> 
        <BlogPost title={noticias.titulo} body={noticias.cuerpo} />
        <nav>
            <ul>
                {links.map((item) => (<li key={item.nombre} ><a href={item.link} target="_blank" rel="noreferrer">{item.nombre}</a></li>))}                
            </ul>            
        </nav>
        <p>Lionel Messi</p>
    </>
  )
}

export default Main