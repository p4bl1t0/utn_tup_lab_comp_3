import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Page from "./components/Page/Page";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
        <div> 
            <Page>
                <Header pageTitle = {site.pageTitle}/>
                <Main pageBody = {site.pageBody}/>
            </Page>
        </div>
    );
}