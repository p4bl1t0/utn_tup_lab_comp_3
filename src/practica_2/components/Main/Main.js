import Body from "../Body/Body"
import BlogPost from "../../BlogPost/BlogPost"
import "./Main.css"

const links =[{
  link: "https://www.twitter.com",
  nombre: "Twitter"
},
{
  link: "https://www.instagram.com",
  nombre: "Instagram"
}
]

const post = {
  postTitle: "Mataron a un hombre e hirieron a otro en ataque a balazos durante la madrugada",
  postBody: "El hecho ocurrió este domingo en la zona de Humberto Primo y Felipe Moré. La víctima fatal, de 45 años, iba caminando con individuo que resultó herido. Los atacantes habría circulado en una moto, según las primeras informaciones "
}

const Main = ({pageBody}) => {
  return (
    <div>
        <div className="pageBody">
          <Body body = {pageBody}/>
        </div>
        <BlogPost title={post.postTitle} body={post.postBody}/>
        <nav>
            <ul>
                {links.map((item) => (<li key={item.nombre}><a href={item.link} target="_blank" rel="noreferrer" >{item.nombre}</a></li>))}
            </ul>
        </nav>
        <p>Nunca tendré compasión por los que no supieron morir a tiempo.</p>
    </div>
  )
}

export default Main