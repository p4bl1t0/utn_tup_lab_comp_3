import Body from "./components/Body";
import Title from "./components/Title";
import Header from "./components/Header";
import Main from "./components/Main";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.' 
    
};

export default function Practica2 () {
    return (
        <div>
            <Title pageTitle={site.pageTitle} />
            <Body pageBody={site.pageBody} />
            <Header pageTitle={site.pageTitle} />
            <Main pageBody={site.pageBody} links={["https://frro.cvg.utn.edu.ar/mod/forum/discuss.php?d=12348","https://github.com/azulcura/utn_tup_lab_comp_3"]} />
        </div>
    );
}