import Title from "./components/Title";
import SendLink from "./components/link";
import Body from "./components/Body"

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};
export default function Practica2 () {
    return (
        
        <div>
            <header><Title /></header>
            <main><Body /></main>
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
            
        </div>
    );
}

export {site}


