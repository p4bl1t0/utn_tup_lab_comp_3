import Main from "./Components/Main";
import Header from "./Components/Header";
import Page from "./Components/Page";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica'.toUpperCase(),
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'.toUpperCase(),
    link0: "https://www.opensourceagenda.com/projects/shader-park-core",
    link1: "https://iquilezles.org/articles/raytracing/"

};



function Practica2 () {

    return (
        <>
        <Page>
            <Header propHeader={site.pageTitle}/>
            <Main propMain={site.pageBody} linkP5JS={site.link0} linkQuilez={site.link1}/>
        </Page>
        </>
    );
}

export default Practica2;