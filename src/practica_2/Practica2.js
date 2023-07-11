import Header from "./components/Header";
import Main from "./components/Main";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links:["https://www.youtube.com/","https://twitter.com/"]

};

export default function Practica2 () {
    return (
        <div>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody={site.pageBody} links={site.links}/>
        </div>
    );
}
