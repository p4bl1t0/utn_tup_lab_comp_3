import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';


const site = {
    pageTitle: 'Unidad 1.2 - Práctica ',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const links = [
    'https://frro.cvg.utn.edu.ar', 
    'https://www.alumnos.frro.utn.edu.ar/loginAlumno.asp?refrescar'
];

export default function Practica2 () {
    return (
        <div>
            <Page>
                <Header title={site.pageTitle}/>
                <Main body={site.pageBody} links={links}/>
            </Page>
        </div>
    );
}