import BlogPost from './components/BlogPost';
import Body from './components/Body'
import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';
import Title from './components/Title'

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};



export default function Practica2() {
    return (
        <div>
            <Page>
                <Main />
                <Header />
            </Page>
        </div>
    );
}