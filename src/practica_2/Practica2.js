import Title from "./components/Title";
import Body from "./components/Body";
import Header from "./components/Header"
import Main from "./components/Main"
import Page from "./components/Page"

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links : ["https://www.test1.com", "https://www.test2.com"]
};

export default function Practica2 () {

    return (
        <div>
            <Page>
                <Header title={site.pageTitle}></Header>
                <Main body={site.pageBody} links={site.links}></Main>
            </Page>
        </div>
    );
}