import Title from "./components/Title";
import Object from "./components/Object";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
        <div>
            <header><Title /></header>
            <main><Object /></main>
            
            
        </div>
    );
}
export const object1 = site.pageTitle 

export const object2 = site.pageBody