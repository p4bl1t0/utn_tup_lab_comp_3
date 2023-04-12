import Title from "./components/Title";
import Body from "./components/Body";
import Main from "./components/Main";
import Header from "./components/Header";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

export default function Practica2 () {
    return (
<div>
    <Title pageTitle={site.pageTitle} />
    <Body pageBody={site.pageBody}/>
    <Header pageTitle={site.pageTitle}/>
    <Main pageBody={site.pageBody}/>
    
    
</div>
    );
}
