import Body from "./Body"

const Main = ({pageBody, links}) => {
  return (
    <div>
        <nav>
            <ul>
                { (links || []).map((item, index) => (
                    <li key={index}>
                        <a href={item}>{item}</a>
                    </li>
                )) }
            </ul>
        </nav>
        <Body body = {pageBody}/>
        <footer>
            <p>Sitio creado para la práctica de Laboratorio de Computación III</p>
        </footer>
    </div>
    
  )
}

export default Main