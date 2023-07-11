import {Title} from "./Components/Title";
import {Body} from "./Components/Body";
import { Main } from "./Components/Main";
import { Header } from "./Components/Header";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links: ['https://github.com/juanipagnanini','https://www.linkedin.com/in/juan-ignacio-pagnanini-167663200/']
};

export default function Practica2 () {
    return (
        <div>
            <Title pageTitle={site.pageTitle}/>
            <Body pageBody={site.pageBody}/>
            <Main links={site.links}/>
            <Header />    
        </div>
    );
}