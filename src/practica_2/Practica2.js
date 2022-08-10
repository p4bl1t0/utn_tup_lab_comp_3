import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links: ["https://www.youtube.com", "https://twitter.com/home?lang=es"]
};

export default function Practica2 () {
    return (
        <div>
            <Header pageTitle={site.pageTitle}/>
            <Main pageBody={site.pageBody} links={site.links}/>
        </div>
    );
}