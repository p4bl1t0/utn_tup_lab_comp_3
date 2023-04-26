import Body from "./body";

const Main = ({pageBody}) =>{
    return <div><Body pageBody={pageBody}></Body>
                <p>Mi primer contacto con React!</p>
                <ul>
                    <li><a href="https://www.youtube.com/">Youtube</a></li>
                    <li><a href="https://www.github.com/">Github</a></li>
                </ul>
            </div>
            
                        
}

export default Main;
