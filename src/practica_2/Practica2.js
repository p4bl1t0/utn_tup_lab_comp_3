
import Main from "./components/Main";
import Page from "./components/Page";
import Header from "./components/Header"
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};
export default function Practica2 () {
    return (
    <>  
        
    <Page>
        <Header/>
        <Main 
        TextAdd ="Texto Agregado" 
        url ="https://www7.cuevana3.ch/2809/cars" 
        name= "Cars"
        url1 ="https://www.cuevanahd.net/pelicula/cars-2-una-nueva-aventura-sobre-ruedas/"
        name1 = "Cars2"/>
    </Page>
    </>
    );
}

export {site}

