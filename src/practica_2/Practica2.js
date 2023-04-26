import Main from "./components/Main";
import Header from "./components/Header";
import Page from "./components/Page";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
        <Page>
            <Header pageTitle={site.pageTitle}/>
            <Main pageBody={site.pageBody}/>
        </Page>
        
    );
}