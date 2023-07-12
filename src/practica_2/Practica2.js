import Page from "./components/Page";
import Main from "./components/Main"
import Header from "./components/Header"
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links:["https://github.com/josedaniele/utn_tup_lab_comp_3","https://www.instagram.com/"]
};

export default function Practica2 () {
    return (
        <div>
           <Page>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody={site.pageBody} links={site.links}/>
           </Page>
        </div>
    );
}