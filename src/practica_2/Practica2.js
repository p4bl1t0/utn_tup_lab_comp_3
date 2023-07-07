
import Body from "./Components/Body";
import Main from "./Components/Main";
import Title from "./Components/Title";
import Header from "./Components/Header";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links:["https://frro.cvg.utn.edu.ar/","https://github.com/MarceloFracassi/utn_tup_lab_comp_3"]
};


export default function Practica2 () {
    return (
        <div>
            <Header pageTitle = {site.pageTitle}/>
            <Main pageBody={site.pageBody} links={site.links}/>
        </div>
    );
}