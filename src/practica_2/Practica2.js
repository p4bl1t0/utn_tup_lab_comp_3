import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";


const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const {pageTitle, pageBody} = site;

const links = {
    
    youTube: <a href="https://www.youtube.com/"> https://www.youtube.com/ </a>,
    twitchTv: <a href="https://www.twitch.tv//"> https://www.twitch.tv/ </a>
    
};

export default function Practica2 () {

    return (
        <div>
            <Page>
                <Header title={site.pageTitle}/>
                <Main body = {site.pageBody} {...links}/>
            </Page>
        </div>
    );
}