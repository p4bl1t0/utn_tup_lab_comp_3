import { unhover } from "@testing-library/user-event/dist/hover";
import Body from "./Components/Body";
import Main from "./Components/Main";
import Title from "./Components/Title";
import Header from "./Components/Header";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const Links = [
        {
            id: 1,
            url: "https://frro.cvg.utn.edu.ar/"
        },
        {
            id: 2,
            url: "https://github.com/MarceloFracassi/utn_tup_lab_comp_3"
        }
];



export default function Practica2 () {
    return (
        <div>
            <Title pageTitle={site.pageTitle}></Title>
            <Body pageBody={site.pageBody}></Body>
            <Header pageTitle = {site.pageTitle}/>
            <Main pageBody={site.pageBody} url={Links}></Main>
        </div>
    );
}