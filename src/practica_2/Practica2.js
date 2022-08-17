import Page from "./components/Page/Page"

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links: ["https://www.youtube.com", "https://twitter.com/home?lang=es"]
};

export default function Practica2 () {
    return (
        <div>
            <Page pageTitle={site.pageTitle} pageBody={site.pageBody} links={site.links}/>
        </div>
    );
}