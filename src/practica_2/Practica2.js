
import Main from "./Components/Main";
import Header from "./Components/Header";
import Page from "./Components/Page";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
        <>
        <Page>

            <Header pageTitle={site.pageTitle}/>
            <Main pageBody={site.pageBody} pageTitle={site.pageTitle}/>
        </Page>

        </>
    );
}