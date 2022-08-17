import Main from './components/Main';
import Title from './components/Title';


const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const links = [
    'https://frro.cvg.utn.edu.ar', 
    'https://www.alumnos.frro.utn.edu.ar/loginAlumno.asp?refrescar'
];

export default function Practica2 () {
    return (
        <div>
            <Title title={site.pageTitle}/>
            <Main pageBody={site.pageBody} links={links}/>
        </div>
    );
}