import BlogPost from "./BlogPost/BlogPost"
import Body from "./Body"

import './MainBodyStyle.css'

const Main = ({body, links}) => {
  return (
    <>
        <Body body = {body} className='main-body'/>
        <nav>
            <ul>
                { (links || []).map((item, index) => (
                    <li key={index}>
                        <a href={item}>{item}</a>
                    </li>
                )) }
            </ul>
        </nav>
        <BlogPost
            title="Informática y educación: la novedosa propuesta de la UNLP para fortalecer la alfabetización
            "
            body="La Facultad de Informática de la UNLP se encuentra desarrollando juegos educativos digitales para fortalecer diferentes facetas educativas para los más chicos."
        />
        <footer>
            <h2>Programando con React</h2>
        </footer>
    </>
    
  )
}

export default Main