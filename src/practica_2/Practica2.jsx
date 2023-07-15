import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2() {
    //utilizamos este componente como app
    return (
        <>
            <Page>
                <Header title={site.pageTitle}/>
                <Main body={site.pageBody} />
            </Page>
        </>
    );
}