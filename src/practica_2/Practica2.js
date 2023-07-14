import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const site = [{
    pageTitle:  'Unidad 1.2 - Práctica',
    pageBody : 'Implementación de árbol de componentes y propiedades en React.',
    linkFace : 'https://www.facebook.com/',
    linkYoutube : 'https://www.youtube.com/'
}
];

export default function Practica2 () {
    return (
        <div>
            <Page>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody={site.pageBody} pageTitle={site.pageTitle}/>   
            </Page>
            </div>
    );
}