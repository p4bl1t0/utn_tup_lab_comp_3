import Main from './components/Main';
import Page from './components/Page';
import Header from './components/Header'

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};
const links = ['https://juaanig.github.io/cotiz.github.io/','https://www.w3schools.com/']


export default function Practica2 () {
    return (
        <div>
            <Page>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody={site.pageBody} links={links} pageTitle={site.pageTitle}/>
            </Page>
        </div>
    );
}