import Title from "./components/Title";
import Object from "./components/Object";
import SendLink from "./components/link";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
        <div>
            <header><Title /></header>
            <main><Object /></main>
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
export const object1 = site.pageTitle 
export const object2 = site.pageBody