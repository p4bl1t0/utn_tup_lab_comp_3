import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

export default function Practica2 () {

    const site = {
        pageTitle: 'Unidad 1.2 - Práctica',
        pageBody: 'Implementación de árbol de componentes y propiedades en React.'
    };

    const notice = {
        title: 'Argentina campeon del mundo',
        body: 'Le gano a Francia por penales'
    };
    
    const links = {
    
        youTube: <a href="https://www.youtube.com/"> https://www.youtube.com/ </a>,
        twitchTv: <a href="https://www.twitch.tv//"> https://www.twitch.tv/ </a>
    
    };

    return (
        <div>
            <Page>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody = {site.pageBody} {...links}/>
            </Page>
        </div>
    );
}