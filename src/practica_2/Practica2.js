import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Page from "./components/Page/Page";



const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    pagePhrase: 'No entiendo mucho lo que estoy haciendo, pero lo intentamos (?.'
};

const links = {
    link1: "https://frro.cvg.utn.edu.ar/",
    link2: "https://www.alumnos.frro.utn.edu.ar/loginAlumno.asp?refrescar"
};

export default function Practica2 () {
    return (
        <div>
            <Page>
                <Header pageTitle = {site.pageTitle}/>
                <Main 
                    pageBody = {site.pageBody}
                    link1 = {links.link1}
                    link2 = {links.link2}
                    pagePhrase = {site.pagePhrase}
                />
            </Page>     
            
        </div>
    );
}